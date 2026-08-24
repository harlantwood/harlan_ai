/*
 * graph-scenes.js — three luminous graph/particle scenes for the Harlan T Wood header.
 *
 * Inspired by Harlan's work: trust graphs, semantic graphs, "node sculptures created by AI",
 * and mycelial networks. Warm palette (gold / teal / rose / cream) on a deep warm ground —
 * deliberately NOT the cold blue particle-web cliché.
 *
 * Depends on a global THREE (vendored three.min.js). Exposes window.GraphScenes with three
 * builders: mycelium(canvas, opts), sculpture(canvas, opts), flowfield(canvas, opts).
 * Each returns a controller: { dispose(), setPaused(bool), scene: <name> }.
 *
 * Every scene:
 *  - renders with a transparent background (the page supplies the deep ground via CSS),
 *  - caps devicePixelRatio at 2 and thins its geometry on small screens,
 *  - pauses when the tab is hidden or the canvas scrolls out of view,
 *  - honours prefers-reduced-motion by rendering a single still frame and stopping.
 */
(function () {
  "use strict";

  var PALETTE = {
    gold: 0xe9b14e,
    teal: 0x63cabf,
    rose: 0xe79aa0,
    cream: 0xf6ecd8,
  };

  // A soft round sprite so each point reads as emitted light, not a hard dot.
  var _sprite = null;
  function sprite() {
    if (_sprite) return _sprite;
    var s = 64;
    var c = document.createElement("canvas");
    c.width = c.height = s;
    var ctx = c.getContext("2d");
    var g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.25, "rgba(255,255,255,0.85)");
    g.addColorStop(0.55, "rgba(255,255,255,0.25)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    _sprite = new THREE.CanvasTexture(c);
    _sprite.colorSpace = THREE.SRGBColorSpace;
    return _sprite;
  }

  function prefersReducedMotion() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
      return false;
    }
  }

  function pickColor(t) {
    // Weighted toward gold, with teal, cream, and an occasional rose.
    if (t < 0.5) return PALETTE.gold;
    if (t < 0.78) return PALETTE.teal;
    if (t < 0.94) return PALETTE.cream;
    return PALETTE.rose;
  }

  // Shared renderer/camera/loop scaffolding. `render(t)` is called each frame.
  function core(canvas, buildFn) {
    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      return null; // No WebGL — caller keeps the static CSS fallback.
    }
    renderer.setClearColor(0x000000, 0);
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
    camera.position.set(0, 0, 15);

    var api = { renderer: renderer, scene: scene, camera: camera };
    var built = buildFn(api);

    function size() {
      var w = canvas.clientWidth || canvas.parentElement.clientWidth || 800;
      var h = canvas.clientHeight || canvas.parentElement.clientHeight || 500;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    size();

    var reduced = prefersReducedMotion();
    var paused = false;
    var visible = true;
    var running = false;
    var start = null;
    var raf = 0;

    function frame(now) {
      if (start === null) start = now;
      var t = (now - start) / 1000;
      built.update(t);
      renderer.render(scene, camera);
      if (!paused && visible && !reduced) raf = requestAnimationFrame(frame);
      else running = false;
    }
    function play() {
      if (running || paused || !visible || reduced) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }

    // First paint (also the final still frame under reduced motion).
    built.update(0);
    renderer.render(scene, camera);
    if (!reduced) play();

    var onResize = function () {
      size();
      if (reduced) {
        built.update(0);
        renderer.render(scene, camera);
      }
    };
    window.addEventListener("resize", onResize);

    var onVis = function () {
      visible = !document.hidden;
      if (visible) play();
    };
    document.addEventListener("visibilitychange", onVis);

    var io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        function (entries) {
          visible = entries[0].isIntersecting && !document.hidden;
          if (visible) play();
        },
        { threshold: 0.01 }
      );
      io.observe(canvas);
    }

    return {
      setPaused: function (p) {
        paused = p;
        if (!p) play();
      },
      dispose: function () {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVis);
        if (io) io.disconnect();
        if (built.dispose) built.dispose();
        renderer.dispose();
      },
    };
  }

  function isSmall() {
    return (window.innerWidth || 1024) < 720;
  }

  // ---- Scene 1: mycelium — a living force-graph that breathes and drifts. -------------
  function mycelium(canvas) {
    var N = isSmall() ? 70 : 120;
    var base = [];
    for (var i = 0; i < N; i++) {
      // A wide, shallow ellipsoid so it reads as a horizontal field.
      var u = Math.random() * Math.PI * 2;
      var v = Math.acos(2 * Math.random() - 1);
      var r = Math.pow(Math.random(), 0.7);
      base.push(
        new THREE.Vector3(
          Math.sin(v) * Math.cos(u) * r * 11,
          Math.sin(v) * Math.sin(u) * r * 5.2,
          Math.cos(v) * r * 7
        )
      );
    }

    // Connect each node to its 2 nearest neighbours → organic filaments.
    var edges = [];
    for (var a = 0; a < N; a++) {
      var d = [];
      for (var b = 0; b < N; b++) if (b !== a) d.push([base[a].distanceTo(base[b]), b]);
      d.sort(function (m, n) { return m[0] - n[0]; });
      for (var k = 0; k < 2; k++) {
        var j = d[k][1];
        if (a < j) edges.push([a, j]);
      }
    }

    var ctrl = core(canvas, function (api) {
      var group = new THREE.Group();
      api.scene.add(group);

      var pPos = new Float32Array(N * 3);
      var pCol = new Float32Array(N * 3);
      var col = new THREE.Color();
      for (var i = 0; i < N; i++) {
        col.setHex(pickColor(Math.random()));
        pCol[i * 3] = col.r; pCol[i * 3 + 1] = col.g; pCol[i * 3 + 2] = col.b;
      }
      var pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      pGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
      var pMat = new THREE.PointsMaterial({
        size: isSmall() ? 0.5 : 0.62,
        map: sprite(),
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      var points = new THREE.Points(pGeo, pMat);
      group.add(points);

      var ePos = new Float32Array(edges.length * 2 * 3);
      var eCol = new Float32Array(edges.length * 2 * 3);
      for (var e = 0; e < edges.length; e++) {
        col.setHex(0xe9b14e);
        for (var s = 0; s < 2; s++) {
          eCol[(e * 2 + s) * 3] = col.r;
          eCol[(e * 2 + s) * 3 + 1] = col.g * 0.95;
          eCol[(e * 2 + s) * 3 + 2] = col.b * 0.8;
        }
      }
      var eGeo = new THREE.BufferGeometry();
      eGeo.setAttribute("position", new THREE.BufferAttribute(ePos, 3));
      eGeo.setAttribute("color", new THREE.BufferAttribute(eCol, 3));
      var eMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      var lines = new THREE.LineSegments(eGeo, eMat);
      group.add(lines);

      var cur = base.map(function (v) { return v.clone(); });

      return {
        update: function (t) {
          for (var i = 0; i < N; i++) {
            var ph = i * 1.7;
            cur[i].x = base[i].x + Math.sin(t * 0.35 + ph) * 0.55;
            cur[i].y = base[i].y + Math.cos(t * 0.3 + ph * 1.3) * 0.5;
            cur[i].z = base[i].z + Math.sin(t * 0.4 + ph * 0.7) * 0.55;
            pPos[i * 3] = cur[i].x; pPos[i * 3 + 1] = cur[i].y; pPos[i * 3 + 2] = cur[i].z;
          }
          pGeo.attributes.position.needsUpdate = true;
          for (var e = 0; e < edges.length; e++) {
            var A = cur[edges[e][0]], B = cur[edges[e][1]];
            var o = e * 6;
            ePos[o] = A.x; ePos[o + 1] = A.y; ePos[o + 2] = A.z;
            ePos[o + 3] = B.x; ePos[o + 4] = B.y; ePos[o + 5] = B.z;
          }
          eGeo.attributes.position.needsUpdate = true;
          group.rotation.y = Math.sin(t * 0.06) * 0.35 + t * 0.02;
          group.rotation.x = Math.sin(t * 0.05) * 0.08;
          var s = 1 + Math.sin(t * 0.25) * 0.02;
          group.scale.setScalar(s);
        },
        dispose: function () {
          pGeo.dispose(); pMat.dispose(); eGeo.dispose(); eMat.dispose();
        },
      };
    });
    if (ctrl) ctrl.scene = "mycelium";
    return ctrl;
  }

  // ---- Scene 2: sculpture — a slowly rotating luminous node-sphere. -------------------
  function sculpture(canvas) {
    var M = isSmall() ? 900 : 2200;
    var pos = new Float32Array(M * 3);
    var colr = new Float32Array(M * 3);
    var pts = [];
    var col = new THREE.Color();
    var gold = 1.6180339887;
    for (var i = 0; i < M; i++) {
      // Fibonacci sphere, then displaced by layered sines → an organic "sculpture".
      var y = 1 - (i / (M - 1)) * 2;
      var rad = Math.sqrt(1 - y * y);
      var th = (2 * Math.PI * i) / gold;
      var x = Math.cos(th) * rad;
      var z = Math.sin(th) * rad;
      var disp =
        1 +
        0.22 * Math.sin(x * 3.1 + y * 2.3) +
        0.16 * Math.sin(z * 4.0 - y * 1.7) +
        0.1 * Math.sin(x * 6.0 + z * 5.0);
      var R = 6.6 * disp;
      var vx = x * R * 1.35, vy = y * R * 0.92, vz = z * R;
      pos[i * 3] = vx; pos[i * 3 + 1] = vy; pos[i * 3 + 2] = vz;
      pts.push(new THREE.Vector3(vx, vy, vz));
      col.setHex(pickColor(Math.random()));
      colr[i * 3] = col.r; colr[i * 3 + 1] = col.g; colr[i * 3 + 2] = col.b;
    }

    // Sparse near-neighbour links across a subset (keeps the "graph" reading).
    var LINK = isSmall() ? 220 : 560;
    var seg = [];
    for (var l = 0; l < LINK; l++) {
      var s0 = (Math.random() * M) | 0;
      var best = -1, bd = 1e9;
      for (var c = 0; c < 22; c++) {
        var cand = (Math.random() * M) | 0;
        if (cand === s0) continue;
        var dd = pts[s0].distanceToSquared(pts[cand]);
        if (dd < bd) { bd = dd; best = cand; }
      }
      if (best >= 0) seg.push(s0, best);
    }

    var ctrl = core(canvas, function (api) {
      api.camera.position.set(0, 0, 20);
      var group = new THREE.Group();
      api.scene.add(group);

      var geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colr, 3));
      var mat = new THREE.PointsMaterial({
        size: isSmall() ? 0.28 : 0.32,
        map: sprite(),
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      group.add(new THREE.Points(geo, mat));

      var lpos = new Float32Array(seg.length * 3);
      var lcol = new Float32Array(seg.length * 3);
      for (var s = 0; s < seg.length; s++) {
        var p = pts[seg[s]];
        lpos[s * 3] = p.x; lpos[s * 3 + 1] = p.y; lpos[s * 3 + 2] = p.z;
        lcol[s * 3] = 0.92; lcol[s * 3 + 1] = 0.72; lcol[s * 3 + 2] = 0.36;
      }
      var lgeo = new THREE.BufferGeometry();
      lgeo.setAttribute("position", new THREE.BufferAttribute(lpos, 3));
      lgeo.setAttribute("color", new THREE.BufferAttribute(lcol, 3));
      var lmat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      group.add(new THREE.LineSegments(lgeo, lmat));

      return {
        update: function (t) {
          group.rotation.y = t * 0.08;
          group.rotation.x = Math.sin(t * 0.18) * 0.12;
          group.scale.setScalar(1 + Math.sin(t * 0.3) * 0.015);
        },
        dispose: function () { geo.dispose(); mat.dispose(); lgeo.dispose(); lmat.dispose(); },
      };
    });
    if (ctrl) ctrl.scene = "sculpture";
    return ctrl;
  }

  // ---- Scene 3: flowfield — points streaming along a slow curl of light. --------------
  function flowfield(canvas) {
    var P = isSmall() ? 900 : 1900;
    var BOUND = new THREE.Vector3(15, 8, 9);

    var ctrl = core(canvas, function (api) {
      var pos = new Float32Array(P * 3);
      var col = new Float32Array(P * 3);
      var vel = new Float32Array(P * 3);
      var c = new THREE.Color();
      for (var i = 0; i < P; i++) {
        pos[i * 3] = (Math.random() * 2 - 1) * BOUND.x;
        pos[i * 3 + 1] = (Math.random() * 2 - 1) * BOUND.y;
        pos[i * 3 + 2] = (Math.random() * 2 - 1) * BOUND.z;
        c.setHex(pickColor(Math.random()));
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      var geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      var mat = new THREE.PointsMaterial({
        size: isSmall() ? 0.42 : 0.5,
        map: sprite(),
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      api.scene.add(new THREE.Points(geo, mat));
      api.camera.position.set(0, 0, 17);

      // Cheap pseudo-curl: layered sinusoids give a smooth, divergence-light flow.
      function flow(x, y, z, t, out) {
        out.x = Math.sin(y * 0.35 + t * 0.25) + Math.cos(z * 0.3 - t * 0.2);
        out.y = Math.sin(z * 0.32 + t * 0.22) + Math.cos(x * 0.28 + t * 0.18);
        out.z = Math.sin(x * 0.3 - t * 0.2) + Math.cos(y * 0.34 + t * 0.24);
      }
      var v = new THREE.Vector3();
      var last = 0;

      return {
        update: function (t) {
          var dt = Math.min(t - last, 0.05); last = t;
          for (var i = 0; i < P; i++) {
            var o = i * 3;
            flow(pos[o], pos[o + 1], pos[o + 2], t, v);
            vel[o] += (v.x - vel[o]) * 0.05;
            vel[o + 1] += (v.y - vel[o + 1]) * 0.05;
            vel[o + 2] += (v.z - vel[o + 2]) * 0.05;
            pos[o] += vel[o] * dt * 2.2;
            pos[o + 1] += vel[o + 1] * dt * 2.2;
            pos[o + 2] += vel[o + 2] * dt * 2.2;
            if (pos[o] > BOUND.x) pos[o] = -BOUND.x; else if (pos[o] < -BOUND.x) pos[o] = BOUND.x;
            if (pos[o + 1] > BOUND.y) pos[o + 1] = -BOUND.y; else if (pos[o + 1] < -BOUND.y) pos[o + 1] = BOUND.y;
            if (pos[o + 2] > BOUND.z) pos[o + 2] = -BOUND.z; else if (pos[o + 2] < -BOUND.z) pos[o + 2] = BOUND.z;
          }
          geo.attributes.position.needsUpdate = true;
          api.scene.rotation.y = Math.sin(t * 0.05) * 0.2;
        },
        dispose: function () { geo.dispose(); mat.dispose(); },
      };
    });
    if (ctrl) ctrl.scene = "flowfield";
    return ctrl;
  }

  window.GraphScenes = { mycelium: mycelium, sculpture: sculpture, flowfield: flowfield };
})();
