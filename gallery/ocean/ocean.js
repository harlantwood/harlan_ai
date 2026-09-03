/*
 * Shared slow-ocean-sunrise scene. One full-screen fragment shader paints an
 * infinite sea under a rayed sunrise; every mood in this gallery is the same
 * shader driven by a different config (palette + ray softness + ripple calm).
 *
 *   Ocean.init(canvas, {
 *     zenith, midSky, horizon, sunWarm, sunCore, waterDeep, waterWarm,  // [r,g,b]
 *     rayCount, raySharp, rayIntensity,   // rays: fewer + softer + dimmer = subtler
 *     waveDetail, waveHeight,             // ripples: lower detail = calmer water
 *     speed,                              // default 0.0002 (slow)
 *   })
 */
(function () {
  function v3(a) {
    return new THREE.Vector3(a[0], a[1], a[2]);
  }

  window.Ocean = {
    init: function (canvas, cfg) {
      if (!window.THREE) return;
      cfg = cfg || {};
      var renderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false });
      } catch (e) {
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

      var scene = new THREE.Scene();
      var cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      var u = {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(1, 1) },
        uZenith: { value: v3(cfg.zenith || [0.42, 0.45, 0.64]) },
        uMidSky: { value: v3(cfg.midSky || [0.89, 0.58, 0.5]) },
        uHorizon: { value: v3(cfg.horizon || [1.05, 0.82, 0.55]) },
        uSunWarm: { value: v3(cfg.sunWarm || [1.15, 0.78, 0.45]) },
        uSunCore: { value: v3(cfg.sunCore || [1.35, 1.18, 0.95]) },
        uWaterDeep: { value: v3(cfg.waterDeep || [0.16, 0.19, 0.26]) },
        uWaterWarm: { value: v3(cfg.waterWarm || [0.55, 0.42, 0.35]) },
        uRayCount: { value: cfg.rayCount != null ? cfg.rayCount : 36.0 },
        uRaySharp: { value: cfg.raySharp != null ? cfg.raySharp : 14.0 },
        uRayIntensity: { value: cfg.rayIntensity != null ? cfg.rayIntensity : 0.85 },
        uWaveDetail: { value: cfg.waveDetail != null ? cfg.waveDetail : 1.0 },
        uWaveHeight: { value: cfg.waveHeight != null ? cfg.waveHeight : 1.0 },
      };

      var material = new THREE.RawShaderMaterial({
        uniforms: u,
        vertexShader: [
          "precision highp float;",
          "attribute vec3 position;",
          "void main() { gl_Position = vec4( position, 1.0 ); }",
        ].join("\n"),
        fragmentShader: [
          "precision highp float;",
          "uniform float time;",
          "uniform vec2 resolution;",
          "uniform vec3 uZenith, uMidSky, uHorizon, uSunWarm, uSunCore, uWaterDeep, uWaterWarm;",
          "uniform float uRayCount, uRaySharp, uRayIntensity, uWaveDetail, uWaveHeight;",
          "const vec3 SUN_DIR = vec3( 0.0, 0.10, -0.99 );",
          "float wave( vec2 p, vec2 d, float freq, float speed, float t ) {",
          "  return sin( dot( p, d ) * freq + t * speed );",
          "}",
          "float height( vec2 p, float t ) {",
          "  float h = 0.0;",
          "  h += 0.50 * wave( p, vec2( 0.00,  1.00 ), 0.16, 1.00, t );",
          "  h += 0.28 * wave( p, vec2( 0.60,  0.80 ), 0.33, 1.30, t );",
          "  h += 0.16 * uWaveDetail * wave( p, vec2(-0.72,  0.70 ), 0.62, 1.70, t );",
          "  h += 0.09 * uWaveDetail * wave( p, vec2( 0.94,  0.34 ), 1.10, 2.10, t );",
          "  h += 0.05 * uWaveDetail * wave( p, vec2(-0.30,  0.95 ), 2.30, 2.60, t );",
          "  h += 0.015 * uWaveDetail * wave( p, vec2( 0.80, -0.60 ), 3.30, 3.10, t );",
          "  return h * uWaveHeight;",
          "}",
          "vec3 waterNormal( vec2 p, float t, float dist ) {",
          "  float e = 0.35;",
          "  float atten = 1.0 / ( 1.0 + dist * 0.02 );",
          "  float hC = height( p, t );",
          "  float hX = height( p + vec2( e, 0.0 ), t );",
          "  float hZ = height( p + vec2( 0.0, e ), t );",
          "  vec3 n = vec3( ( hC - hX ) * atten, e * 1.6, ( hC - hZ ) * atten );",
          "  return normalize( n );",
          "}",
          "vec3 skyBase( vec3 dir ) {",
          "  float y = clamp( dir.y, 0.0, 1.0 );",
          "  vec3 c = mix( uHorizon, uMidSky, smoothstep( 0.0, 0.22, y ) );",
          "  c = mix( c, uZenith, smoothstep( 0.22, 0.75, y ) );",
          "  float s = clamp( dot( dir, normalize( SUN_DIR ) ), 0.0, 1.0 );",
          "  c += uSunWarm * 0.55 * pow( s, 6.0 );",
          "  c += uSunWarm * 0.85 * pow( s, 32.0 );",
          "  c += uSunCore * smoothstep( 0.9993, 0.99985, s );",
          "  return c;",
          "}",
          "vec3 sky( vec3 dir ) {",
          "  vec3 c = skyBase( dir );",
          "  float s = clamp( dot( dir, normalize( SUN_DIR ) ), 0.0, 1.0 );",
          "  vec3 sunN = normalize( SUN_DIR );",
          "  vec3 o1 = normalize( cross( sunN, vec3( 0.0, 1.0, 0.0 ) ) );",
          "  vec3 o2 = cross( sunN, o1 );",
          "  float ang = atan( dot( dir, o2 ), dot( dir, o1 ) );",
          "  float spikes = pow( 0.5 + 0.5 * sin( ang * uRayCount ), uRaySharp )",
          "    + pow( 0.5 + 0.5 * sin( ang * uRayCount * 0.6 + 0.9 ), uRaySharp * 0.7 ) * 0.6;",
          "  float horizonFade = smoothstep( 0.0, 0.05, dir.y );",
          "  c += uSunCore * spikes * pow( s, 90.0 ) * uRayIntensity * horizonFade;",
          "  c += uSunWarm * spikes * pow( s, 24.0 ) * ( uRayIntensity * 0.26 ) * horizonFade;",
          "  return c;",
          "}",
          "void main() {",
          "  vec2 uv = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution.y;",
          "  vec3 org = vec3( 0.0, 4.2, 0.0 );",
          "  vec3 dir = normalize( vec3( uv.x, uv.y * 0.85 - 0.06, -1.35 ) );",
          "  vec3 color;",
          "  if ( dir.y >= -0.001 ) {",
          "    color = sky( dir );",
          "  } else {",
          "    float dist = -org.y / dir.y;",
          "    vec2 p = org.xz + dir.xz * dist;",
          "    vec3 n = waterNormal( p, time, dist );",
          "    vec3 refl = reflect( dir, n );",
          "    refl.y = abs( refl.y );",
          "    float fresnel = 0.35 + 0.65 * pow( 1.0 - max( dot( -dir, n ), 0.0 ), 3.0 );",
          "    vec3 base = mix( uWaterDeep, uWaterWarm, pow( clamp( dot( normalize( SUN_DIR ), -dir ), 0.0, 1.0 ), 3.0 ) * 0.8 );",
          "    color = mix( base, skyBase( refl ) * 0.92, fresnel );",
          "    float spec = pow( max( dot( refl, normalize( SUN_DIR ) ), 0.0 ), 260.0 );",
          "    color += uSunCore * spec * 1.6;",
          "    float haze = smoothstep( 60.0, 320.0, dist );",
          "    color = mix( color, skyBase( vec3( dir.x, 0.001, dir.z ) ), haze * 0.85 );",
          "  }",
          "  color = color / ( 1.0 + color * 0.45 );",
          "  color = pow( color, vec3( 0.92 ) );",
          "  gl_FragColor = vec4( color, 1.0 );",
          "}",
        ].join("\n"),
        depthTest: false,
        depthWrite: false,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

      function resize() {
        var w = canvas.clientWidth || window.innerWidth;
        var h = canvas.clientHeight || window.innerHeight;
        renderer.setSize(w, h, false);
        u.resolution.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
      }
      window.addEventListener("resize", resize);
      resize();

      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      var speed = cfg.speed != null ? cfg.speed : 0.0002;
      function tick() {
        requestAnimationFrame(tick);
        if (!reduce.matches) u.time.value = performance.now() * speed;
        renderer.render(scene, cam);
      }
      tick();
    },
  };
})();
