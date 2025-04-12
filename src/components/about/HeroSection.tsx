
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
    
    // Add subtle star background
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.6
    });
    
    const starsVertices = [];
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 20;
      starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    // Create a sphere geometry for the globe - positioned lower to be half-visible
    const sphereGeometry = new THREE.SphereGeometry(3, 64, 64);
    
    // Create a material with white glow effect
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3
    });
    
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // Position globe lower to be half-cut
    globe.position.y = -3;
    scene.add(globe);
    
    // Create dots for the globe surface
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // White dots
      size: 0.04,
      transparent: true,
      opacity: 0.8
    });
    
    // Generate random points on the sphere surface
    const positions = [];
    const radius = 3.01; // Slightly larger than the globe
    
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
    dots.position.y = -3; // Match globe position
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
      3 * Math.sin(Math.PI * 0.3) * Math.cos(Math.PI * 0.3),
      3 * Math.sin(Math.PI * 0.3) * Math.sin(Math.PI * 0.3),
      3 * Math.cos(Math.PI * 0.3),
      
      // Europe highlight
      3 * Math.sin(Math.PI * 0.4) * Math.cos(Math.PI * 0.7),
      3 * Math.sin(Math.PI * 0.4) * Math.sin(Math.PI * 0.7),
      3 * Math.cos(Math.PI * 0.4),
      
      // Americas highlight
      3 * Math.sin(Math.PI * 0.5) * Math.cos(Math.PI * 1.5),
      3 * Math.sin(Math.PI * 0.5) * Math.sin(Math.PI * 1.5),
      3 * Math.cos(Math.PI * 0.5)
    ];
    
    highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute(highlightPositions, 3));
    
    const highlights = new THREE.Points(highlightGeometry, highlightMaterial);
    highlights.position.y = -3; // Match globe position
    scene.add(highlights);
    
    // Create a light glow effect
    const glowGeometry = new THREE.SphereGeometry(3.2, 32, 32);
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
    glowMesh.position.y = -3; // Match globe position
    scene.add(glowMesh);
    
    camera.position.z = 5;
    
    // Make it interactive with mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Rotate the globe based on mouse position
      globe.rotation.x = y * 0.2;
      globe.rotation.z = x * 0.2;
      dots.rotation.x = y * 0.2;
      dots.rotation.z = x * 0.2;
      highlights.rotation.x = y * 0.2;
      highlights.rotation.z = x * 0.2;
      glowMesh.rotation.x = y * 0.2;
      glowMesh.rotation.z = x * 0.2;
      
      // Add a slight lift effect when hovering bottom half
      if (y < 0) {
        const lift = Math.abs(y) * 0.5;
        globe.position.y = -3 + lift;
        dots.position.y = -3 + lift;
        highlights.position.y = -3 + lift;
        glowMesh.position.y = -3 + lift;
      } else {
        globe.position.y = -3;
        dots.position.y = -3;
        highlights.position.y = -3;
        glowMesh.position.y = -3;
      }
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
      
      // Animate stars with subtle twinkling effect
      stars.rotation.y += 0.0001;
      stars.rotation.z += 0.0001;
      
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
      {/* Top spacing */}
      <div className="flex-grow" />
      
      {/* Middle content with heading - positioned lower */}
      <div className="container mx-auto px-4 z-10 text-center pb-24 md:pb-36">
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
          >
            Revolutionizing Healthcare with AI
          </motion.span>
        </motion.h2>
        
        {/* Add gradient fade effect at bottom of text */}
        <div className="w-full h-12 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 z-0"></div>
      </div>
      
      {/* Bottom content with globe */}
      <div className="flex-grow-0 relative h-[400px] md:h-[500px] flex items-end justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      </div>
    </div>
  );
};

export default HeroSection;
