"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Full-screen plane with custom shader material
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uResolution: { value: new THREE.Vector2(canvas.offsetWidth, canvas.offsetHeight) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uScroll;
        uniform vec2 uResolution;
        varying vec2 vUv;

        // Simple noise
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }

        void main() {
          vec2 uv = vUv;

          // Distort UVs with animated noise
          float n1 = noise(uv * 2.5 + vec2(uTime * 0.12, uTime * 0.08));
          float n2 = noise(uv * 1.8 - vec2(uTime * 0.07, uTime * 0.15));
          float n = n1 * 0.6 + n2 * 0.4;

          // Scroll distortion
          uv.y += uScroll * 0.15;

          // Rose accent color: #E11D48 = vec3(0.882, 0.114, 0.282)
          // Dark bg: #0a0a0a = vec3(0.039, 0.039, 0.039)
          vec3 colorA = vec3(0.882, 0.114, 0.282); // rose accent
          vec3 colorB = vec3(0.039, 0.039, 0.039); // near black
          vec3 colorC = vec3(0.58, 0.07, 0.18);    // dark rose

          // Radial gradient from top-center
          float dist = length(uv - vec2(0.5, 0.0));
          float radial = smoothstep(0.0, 1.0, 1.0 - dist);

          vec3 color = mix(colorB, colorC, n * radial);
          color = mix(color, colorA, n * radial * 0.4);

          // Vignette
          float vignette = smoothstep(0.0, 0.5, radial);

          gl_FragColor = vec4(color, vignette * 0.35 * (1.0 - uScroll * 0.5));
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animId: number;
    const startTime = performance.now();

    // Listen to scroll for uScroll uniform
    let scrollProgress = 0;
    const onScroll = () => {
      // Use first viewport height as the hero scroll range
      scrollProgress = Math.min(window.scrollY / window.innerHeight, 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!canvas) return;
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      material.uniforms.uResolution.value.set(canvas.offsetWidth, canvas.offsetHeight);
    };
    window.addEventListener("resize", onResize, { passive: true });

    function animate() {
      animId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) / 1000;
      material.uniforms.uTime.value = elapsed;
      material.uniforms.uScroll.value = scrollProgress;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
