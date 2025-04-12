
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Basic Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create a sphere geometry for the globe
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Create a material with white glow effect
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3
    });
    
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(globe);
    
    // Create dots for the globe surface
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // White dots
      size: 0.03,
      transparent: true,
      opacity: 0.8
    });
    
    // Generate random points on the sphere surface
    const positions = [];
    const radius = 2.01; // Slightly larger than the globe
    
    for (let i = 0; i < 5000; i++) {
      // Create evenly distributed points on a sphere
      const phi = Math.acos(-1 + (2 * i) / 5000);
      const theta = Math.sqrt(5000 * Math.PI) * phi;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions.push(x, y, z);
    }
    
    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(dots);
    
    // Add highlights - teal dots for the theme
    const highlightGeometry = new THREE.BufferGeometry();
    const highlightMaterial = new THREE.PointsMaterial({
      color: 0x1EAEDB, // Teal highlights
      size: 0.08,
      transparent: true,
      opacity: 0.9
    });
    
    // Set a few fixed highlight positions
    const highlightPositions = [
      // Asia highlights
      2 * Math.sin(Math.PI * 0.3) * Math.cos(Math.PI * 0.3),
      2 * Math.sin(Math.PI * 0.3) * Math.sin(Math.PI * 0.3),
      2 * Math.cos(Math.PI * 0.3),
      
      // Europe highlight
      2 * Math.sin(Math.PI * 0.4) * Math.cos(Math.PI * 0.7),
      2 * Math.sin(Math.PI * 0.4) * Math.sin(Math.PI * 0.7),
      2 * Math.cos(Math.PI * 0.4),
      
      // Americas highlight
      2 * Math.sin(Math.PI * 0.5) * Math.cos(Math.PI * 1.5),
      2 * Math.sin(Math.PI * 0.5) * Math.sin(Math.PI * 1.5),
      2 * Math.cos(Math.PI * 0.5)
    ];
    
    highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute(highlightPositions, 3));
    
    const highlights = new THREE.Points(highlightGeometry, highlightMaterial);
    scene.add(highlights);
    
    // Create a light glow effect
    const glowGeometry = new THREE.SphereGeometry(2.1, 32, 32);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        viewVector: { value: new THREE.Vector3(0, 0, 1) }
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(0.7 - dot(vNormal, vNormel), 1.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float intensity;
        void main() {
          vec3 glow = vec3(1.0, 1.0, 1.0) * intensity;
          gl_FragColor = vec4(glow, 1.0);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);
    
    camera.position.z = 5;
    
    // Make it interactive with mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      globe.rotation.x = y * 0.1;
      globe.rotation.z = x * 0.1;
      glowMesh.rotation.x = y * 0.1;
      glowMesh.rotation.z = x * 0.1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the globe slowly
      globe.rotation.y += 0.001;
      dots.rotation.y += 0.001;
      highlights.rotation.y += 0.001;
      glowMesh.rotation.y += 0.001;
      
      // Update glow effect
      glowMaterial.uniforms.viewVector.value = new THREE.Vector3(
        camera.position.x - globe.position.x,
        camera.position.y - globe.position.y,
        camera.position.z - globe.position.z
      ).normalize();
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-black overflow-hidden">
      {/* Top content with heading */}
      <div className="container mx-auto px-4 z-10 text-center pt-24 md:pt-36 pb-12">
        <motion.h2
          className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#c0c0c0] via-[#d8d8d8] to-[#9F9EA1] text-4xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
            letterSpacing: "0.5px"
          }}
        >
          Revolutionizing Healthcare with AI
        </motion.h2>
      </div>
      
      {/* Bottom content with globe */}
      <div className="flex-grow relative flex items-end justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      </div>
    </div>
  );
};

export default HeroSection;
