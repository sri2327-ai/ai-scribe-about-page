
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const GlobeVisualization = () => {
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
    
    // Create a basic material for the globe
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2
    });
    
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(globe);
    
    // Create dots for the globe surface
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x000000,
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
      color: 0x1EAEDB,
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
    
    camera.position.z = 5;
    
    // Make it interactive with mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      globe.rotation.x = y * 0.1;
      globe.rotation.z = x * 0.1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the globe slowly
      globe.rotation.y += 0.001;
      dots.rotation.y += 0.001;
      highlights.rotation.y += 0.001;
      
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
    <section className="relative py-24 bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-[#1EAEDB]">Global Presence</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          With a worldwide network of healthcare professionals and technology experts, 
          we're bringing AI-powered healthcare solutions to medical facilities around the globe.
        </p>
      </motion.div>
    </section>
  );
};

export default GlobeVisualization;
