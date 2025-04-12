
import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarBackground = () => {
  const starsRef = useRef<THREE.Points | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Basic Three.js setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    rendererRef.current = renderer;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Add subtle star background with varying sizes
    const starsGeometry = new THREE.BufferGeometry();
    
    const starPositions = [];
    const starSizes = [];
    const starColors = [];
    
    // Create 3000 stars with varying sizes and slight color variations
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 50;
      
      // Add slight randomness to star sizes
      const size = Math.random() * 0.04 + 0.01;
      
      // Add slight color variation (mostly white with hints of blue)
      const r = 0.9 + Math.random() * 0.1;
      const g = 0.9 + Math.random() * 0.1;
      const b = 1.0; // Slight blue tint
      
      starPositions.push(x, y, z);
      starSizes.push(size);
      starColors.push(r, g, b);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      sizeAttenuation: true
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    starsRef.current = stars;
    scene.add(stars);
    
    camera.position.z = 5;
    
    // Animation with twinkling effect
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !starsRef.current) return;
      
      requestAnimationFrame(animate);
      
      // Subtle rotation of the star field
      starsRef.current.rotation.y += 0.0001;
      starsRef.current.rotation.z += 0.0001;
      
      // Create subtle twinkling effect by modifying opacity slightly
      if (Math.random() > 0.95) {
        starsMaterial.opacity = 0.6 + Math.random() * 0.4;
      }
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default StarBackground;
