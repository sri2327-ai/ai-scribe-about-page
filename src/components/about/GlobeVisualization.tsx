
import { useEffect, useRef } from "react";
import * as THREE from "three";

const GlobeVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const dotsRef = useRef<THREE.Points | null>(null);
  const highlightsRef = useRef<THREE.Points | null>(null);
  const glowMeshRef = useRef<THREE.Mesh | null>(null);

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
      antialias: true,
    });
    
    // Set the correct size for the renderer
    const updateSize = () => {
      if (canvasRef.current) {
        // Set width to 90% of screen width for better coverage
        const width = window.innerWidth * 0.9;
        const height = canvasRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    
    updateSize();
    
    // Create a sphere geometry for the globe - increased radius to 8 for larger diameter
    const sphereGeometry = new THREE.SphereGeometry(8, 64, 64);
    
    // Create a material with white color for water bodies
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff, // Pure white for water bodies
      transparent: true,
      opacity: 1.0
    });
    
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeRef.current = globe;
    globe.position.y = -4; // Position to show 50% of the globe (moving it up in the scene)
    scene.add(globe);
    
    // Create black dots for the continents
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x000000, // Black dots for the continents
      size: 0.08,
      transparent: true,
      opacity: 0.9
    });
    
    // Generate dots that form continent shapes
    const positions = [];
    const continentData = generateContinentData();
    
    for (let i = 0; i < continentData.length; i++) {
      const { lat, lng } = continentData[i];
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      const x = -(8.02 * Math.sin(phi) * Math.cos(theta));
      const y = (8.02 * Math.cos(phi)) - 4; // Adjusted for globe position
      const z = (8.02 * Math.sin(phi) * Math.sin(theta));
      
      positions.push(x, y, z);
    }
    
    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    dotsRef.current = dots;
    scene.add(dots);
    
    // Add teal blue hotspots
    const highlightGeometry = new THREE.BufferGeometry();
    const highlightMaterial = new THREE.PointsMaterial({
      color: 0x33C3F0, // Teal blue (#33C3F0) for hotspots
      size: 0.25,
      transparent: true,
      opacity: 0.9
    });
    
    // Define hotspot locations (major tech/healthcare hubs)
    const hotspotLocations = [
      { lat: 37.7749, lng: -122.4194 }, // San Francisco
      { lat: 51.5074, lng: -0.1278 },   // London
      { lat: 35.6762, lng: 139.6503 },  // Tokyo
      { lat: 28.6139, lng: 77.2090 },   // New Delhi
      { lat: -33.8688, lng: 151.2093 }, // Sydney
    ];
    
    const hotspotPositions = [];
    
    for (let i = 0; i < hotspotLocations.length; i++) {
      const { lat, lng } = hotspotLocations[i];
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      const x = -(8.1 * Math.sin(phi) * Math.cos(theta));
      const y = (8.1 * Math.cos(phi)) - 4; // Adjusted for globe position
      const z = (8.1 * Math.sin(phi) * Math.sin(theta));
      
      hotspotPositions.push(x, y, z);
    }
    
    highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute(hotspotPositions, 3));
    
    const highlights = new THREE.Points(highlightGeometry, highlightMaterial);
    highlightsRef.current = highlights;
    scene.add(highlights);
    
    // Create a stronger glow effect around the globe
    const glowGeometry = new THREE.SphereGeometry(8.3, 32, 32);
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
          intensity = pow(0.6 - dot(vNormal, vNormel), 2.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float intensity;
        void main() {
          vec3 glow = vec3(1.0, 1.0, 1.0) * intensity; // White glow (#FFFFFF)
          gl_FragColor = vec4(glow, 1.0);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMeshRef.current = glowMesh;
    glowMesh.position.y = -4; // Adjusted for globe position
    scene.add(glowMesh);
    
    // Move camera back to see the bigger globe
    camera.position.z = 14;
    
    // Add subtle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect || !globeRef.current || !dotsRef.current || 
          !highlightsRef.current || !glowMeshRef.current) return;
      
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      // Exclude y rotation for a more subtle effect
      
      // Subtle rotation based on mouse position
      globeRef.current.rotation.y = x * 0.2;
      dotsRef.current.rotation.y = x * 0.2;
      highlightsRef.current.rotation.y = x * 0.2;
      glowMeshRef.current.rotation.y = x * 0.2;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (!globeRef.current || !dotsRef.current || 
          !highlightsRef.current || !glowMeshRef.current) return;
      
      // Rotate the globe very slowly
      globeRef.current.rotation.y += 0.001;
      dotsRef.current.rotation.y += 0.001;
      highlightsRef.current.rotation.y += 0.001;
      glowMeshRef.current.rotation.y += 0.001;
      
      // Update glow effect
      glowMaterial.uniforms.viewVector.value = new THREE.Vector3(
        camera.position.x - globeRef.current.position.x,
        camera.position.y - globeRef.current.position.y,
        camera.position.z - globeRef.current.position.z
      ).normalize();
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      updateSize();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Helper function to generate continent data
  const generateContinentData = () => {
    // This is a simplified representation of continents with latitude/longitude points
    // We'll create a denser pattern for the main continents
    const continents = [];
    
    // North America
    for (let lat = 30; lat <= 70; lat += 2) {
      for (let lng = -170; lng <= -50; lng += 2) {
        if ((lat > 50 && lng > -140 && lng < -60) || 
            (lat > 30 && lat < 50 && lng > -130 && lng < -70)) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // South America
    for (let lat = -55; lat <= 10; lat += 2) {
      for (let lng = -80; lng <= -35; lng += 2) {
        if ((lat > -50 && lat < 10 && lng > -80 && lng < -40)) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // Europe
    for (let lat = 35; lat <= 70; lat += 2) {
      for (let lng = -10; lng <= 40; lng += 2) {
        if ((lat > 35 && lat < 70 && lng > -10 && lng < 40)) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // Africa
    for (let lat = -35; lat <= 35; lat += 2) {
      for (let lng = -20; lng <= 50; lng += 2) {
        if ((lat > -35 && lat < 35 && lng > -20 && lng < 50)) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // Asia
    for (let lat = 0; lat <= 70; lat += 2) {
      for (let lng = 40; lng <= 150; lng += 2) {
        if ((lat > 0 && lat < 70 && lng > 40 && lng < 150)) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // Australia
    for (let lat = -45; lat <= -10; lat += 2) {
      for (let lng = 110; lng <= 155; lng += 2) {
        if ((lat > -45 && lat < -10 && lng > 110 && lng < 155)) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // Add some randomness to make the patterns more natural
    return continents.filter(() => Math.random() > 0.5);
  };

  return <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: "1200px", maxHeight: "1200px" }} />;
};

export default GlobeVisualization;
