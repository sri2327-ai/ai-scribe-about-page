
import { useEffect, useRef } from "react";
import * as THREE from "three";

const GlobeVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const dotsRef = useRef<THREE.Points | null>(null);
  const hotSpotsRef = useRef<THREE.Points | null>(null);
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
    
    // Set the correct size for the renderer to fill 80-90% of screen width
    const updateSize = () => {
      if (canvasRef.current) {
        const width = Math.min(window.innerWidth * 0.85, 1200); // 85% of screen width, max 1200px
        const height = width; // Keep it square for the canvas
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    
    updateSize();
    
    // Create a sphere geometry for the globe with radius 7
    const sphereGeometry = new THREE.SphereGeometry(7, 64, 64);
    
    // Create a material with white glow effect
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff, // White (#FFFFFF)
      transparent: true,
      opacity: 0.2 // Subtle base sphere
    });
    
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeRef.current = globe;
    globe.position.y = 0;
    scene.add(globe);
    
    // Create uniform black dots for the globe surface
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x000000, // Black dots
      size: 0.08,
      transparent: true,
      opacity: 0.8
    });
    
    // Generate points concentrated to form continent-like patterns
    const positions = [];
    const radius = 7.02; // Slightly larger than the globe
    
    // Helper function to determine if a point should be rendered (for continent effect)
    const shouldRenderPoint = (lat, lon) => {
      // Northern America
      if ((lat > 20 && lat < 60) && (lon > -140 && lon < -60)) return true;
      // South America
      if ((lat > -50 && lat < 10) && (lon > -80 && lon < -30)) return true;
      // Europe & Africa
      if ((lat > -40 && lat < 60) && (lon > -20 && lon < 40)) return true;
      // Asia
      if ((lat > 0 && lat < 70) && (lon > 60 && lon < 150)) return true;
      // Australia
      if ((lat > -40 && lat < -10) && (lon > 110 && lon < 160)) return true;
      
      // Random points for oceans (sparse)
      return Math.random() > 0.85;
    };
    
    for (let i = 0; i < 8000; i++) {
      const phi = Math.random() * Math.PI; // latitude
      const theta = Math.random() * Math.PI * 2; // longitude
      
      // Convert to degrees for easier region checking
      const latDeg = (phi * 180 / Math.PI) - 90;
      const lonDeg = (theta * 180 / Math.PI) - 180;
      
      if (shouldRenderPoint(latDeg, lonDeg)) {
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        
        positions.push(x, y, z);
      }
    }
    
    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    dotsRef.current = dots;
    dots.position.y = 0;
    scene.add(dots);
    
    // Add teal blue hotspots
    const hotspotGeometry = new THREE.BufferGeometry();
    const hotspotMaterial = new THREE.PointsMaterial({
      color: 0x00CED1, // Teal blue
      size: 0.25,
      transparent: true,
      opacity: 0.9
    });
    
    // Hotspot locations 
    const hotspotPositions = [
      // North America - Silicon Valley
      7.1 * Math.sin(Math.PI * 0.3) * Math.cos(-Math.PI * 0.2),
      7.1 * Math.cos(Math.PI * 0.3),
      7.1 * Math.sin(Math.PI * 0.3) * Math.sin(-Math.PI * 0.2),
      
      // Europe - London
      7.1 * Math.sin(Math.PI * 0.3) * Math.cos(Math.PI * 0.01),
      7.1 * Math.cos(Math.PI * 0.3),
      7.1 * Math.sin(Math.PI * 0.3) * Math.sin(Math.PI * 0.01),
      
      // Asia - Singapore
      7.1 * Math.sin(Math.PI * 0.5) * Math.cos(Math.PI * 0.55),
      7.1 * Math.cos(Math.PI * 0.5),
      7.1 * Math.sin(Math.PI * 0.5) * Math.sin(Math.PI * 0.55),
      
      // Asia - Tokyo
      7.1 * Math.sin(Math.PI * 0.3) * Math.cos(Math.PI * 0.75),
      7.1 * Math.cos(Math.PI * 0.3),
      7.1 * Math.sin(Math.PI * 0.3) * Math.sin(Math.PI * 0.75),
    ];
    
    hotspotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(hotspotPositions, 3));
    
    const hotspots = new THREE.Points(hotspotGeometry, hotspotMaterial);
    hotSpotsRef.current = hotspots;
    hotspots.position.y = 0;
    scene.add(hotspots);
    
    // Create a soft white glow around the top of the globe
    const glowGeometry = new THREE.SphereGeometry(7.3, 32, 32);
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
          intensity = pow(0.7 - dot(vNormal, vNormel), 2.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float intensity;
        void main() {
          vec3 glow = vec3(1.0, 1.0, 1.0) * intensity; // White glow
          gl_FragColor = vec4(glow, 0.6);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMeshRef.current = glowMesh;
    glowMesh.position.y = 0;
    scene.add(glowMesh);
    
    // Set camera position to see the top 30% of the globe
    camera.position.z = 14;
    camera.position.y = -4; // Move camera down to see only top portion
    
    // Subtle rotation animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (!globeRef.current || !dotsRef.current || 
          !hotSpotsRef.current || !glowMeshRef.current) return;
      
      // Rotate the globe very slowly
      const rotationSpeed = 0.0005;
      globeRef.current.rotation.y += rotationSpeed;
      dotsRef.current.rotation.y += rotationSpeed;
      hotSpotsRef.current.rotation.y += rotationSpeed;
      glowMeshRef.current.rotation.y += rotationSpeed;
      
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
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default GlobeVisualization;
