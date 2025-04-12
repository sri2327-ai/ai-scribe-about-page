
import { useEffect, useRef } from "react";
import * as THREE from "three";

const GlobeVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const dotsRef = useRef<THREE.Points | null>(null);
  const hotspotRef = useRef<THREE.Points | null>(null);
  const glowRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Basic Three.js setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    rendererRef.current = renderer;
    
    // Set renderer size to match viewport
    const updateSize = () => {
      if (!canvasRef.current || !camera || !renderer) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    updateSize();
    
    // Create a larger globe - pure white sphere for base
    const sphereGeometry = new THREE.SphereGeometry(10, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1.0
    });
    
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeRef.current = globe;
    scene.add(globe);
    
    // Create continent dots (black dots)
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.15,
      transparent: true,
      opacity: 0.9
    });
    
    // Generate continent pattern
    const positions = [];
    const continentData = generateSimplifiedContinentData();
    
    for (let i = 0; i < continentData.length; i++) {
      const { lat, lng } = continentData[i];
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      // Position dots slightly above the sphere surface
      const x = -(10.05 * Math.sin(phi) * Math.cos(theta));
      const y = (10.05 * Math.cos(phi));
      const z = (10.05 * Math.sin(phi) * Math.sin(theta));
      
      positions.push(x, y, z);
    }
    
    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    dotsRef.current = dots;
    scene.add(dots);
    
    // Add orange hotspots (as seen in the reference image)
    const hotspotGeometry = new THREE.BufferGeometry();
    const hotspotMaterial = new THREE.PointsMaterial({
      color: 0xFF6E27, // Orange color
      size: 0.4,
      transparent: true,
      opacity: 0.9
    });
    
    // Hotspot locations based on the reference image
    const hotspotLocations = [
      { lat: 40, lng: -100 }, // North America
      { lat: 35, lng: -10 },  // Europe/Africa
      { lat: 15, lng: 100 },  // Asia
    ];
    
    const hotspotPositions = [];
    
    for (let i = 0; i < hotspotLocations.length; i++) {
      const { lat, lng } = hotspotLocations[i];
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      const x = -(10.1 * Math.sin(phi) * Math.cos(theta));
      const y = (10.1 * Math.cos(phi));
      const z = (10.1 * Math.sin(phi) * Math.sin(theta));
      
      hotspotPositions.push(x, y, z);
    }
    
    hotspotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(hotspotPositions, 3));
    
    const hotspots = new THREE.Points(hotspotGeometry, hotspotMaterial);
    hotspotRef.current = hotspots;
    scene.add(hotspots);
    
    // Add glow effect (strong white glow as in the reference)
    const glowGeometry = new THREE.SphereGeometry(10.4, 32, 32);
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
          intensity = pow(0.4 - dot(vNormal, vNormel), 2.0);
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
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glowRef.current = glow;
    scene.add(glow);
    
    // Position camera to see the globe from the front
    camera.position.z = 20;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (!globeRef.current || !dotsRef.current || !hotspotRef.current || !glowRef.current || !rendererRef.current || !cameraRef.current) return;
      
      // Very slow rotation
      globeRef.current.rotation.y += 0.0005;
      dotsRef.current.rotation.y += 0.0005;
      hotspotRef.current.rotation.y += 0.0005;
      glowRef.current.rotation.y += 0.0005;
      
      // Update glow effect
      glowMaterial.uniforms.viewVector.value = new THREE.Vector3(
        camera.position.x,
        camera.position.y,
        camera.position.z
      ).normalize();
      
      rendererRef.current.render(scene, cameraRef.current);
    };
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('resize', updateSize);
      
      // Clean up resources
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      // Clean up geometries and materials
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      dotsGeometry.dispose();
      dotsMaterial.dispose();
      hotspotGeometry.dispose();
      hotspotMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
    };
  }, []);

  // Generate simplified continent data that looks like the reference image
  const generateSimplifiedContinentData = () => {
    const points = [];
    const density = 0.3; // Controls how many dots are generated
    
    // North America
    for (let lat = 30; lat <= 70; lat += 1) {
      for (let lng = -170; lng <= -50; lng += 1) {
        if (Math.random() < density) {
          points.push({ lat, lng });
        }
      }
    }
    
    // South America
    for (let lat = -55; lat <= 10; lat += 1) {
      for (let lng = -80; lng <= -35; lng += 1) {
        if (Math.random() < density) {
          points.push({ lat, lng });
        }
      }
    }
    
    // Europe and Africa
    for (let lat = -35; lat <= 70; lat += 1) {
      for (let lng = -20; lng <= 50; lng += 1) {
        if (Math.random() < density) {
          points.push({ lat, lng });
        }
      }
    }
    
    // Asia and Australia
    for (let lat = -45; lat <= 70; lat += 1) {
      for (let lng = 50; lng <= 180; lng += 1) {
        if (Math.random() < density) {
          points.push({ lat, lng });
        }
      }
    }
    
    return points;
  };

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full" 
      style={{ 
        height: "100vh",
        maxWidth: "100vw", 
        maxHeight: "100vh" 
      }} 
    />
  );
};

export default GlobeVisualization;
