
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
        // Set width to 100% of screen width for better coverage
        const width = window.innerWidth;
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
    globe.position.y = -1; // Position to show ~50% of the globe
    
    // Tilt the globe to the right by rotating on the z-axis
    globe.rotation.z = -0.2;
    
    scene.add(globe);
    
    // Create black dots for the continents with more accurate representation
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x000000, // Black dots for the continents
      size: 0.08,
      transparent: true,
      opacity: 0.9
    });
    
    // Generate dots that form better continent shapes
    const positions = [];
    const continentData = generateContinentData();
    
    for (let i = 0; i < continentData.length; i++) {
      const { lat, lng } = continentData[i];
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      const x = -(8.02 * Math.sin(phi) * Math.cos(theta));
      const y = (8.02 * Math.cos(phi)) - 1; // Adjusted for globe position
      const z = (8.02 * Math.sin(phi) * Math.sin(theta));
      
      positions.push(x, y, z);
    }
    
    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    dotsRef.current = dots;
    
    // Apply the same tilt as the globe
    dots.rotation.z = -0.2;
    
    scene.add(dots);
    
    // Add teal blue hotspots
    const highlightGeometry = new THREE.BufferGeometry();
    const highlightMaterial = new THREE.PointsMaterial({
      color: 0xFF7700, // Changed to a bright orange for better visibility
      size: 0.25,
      transparent: true,
      opacity: 0.9
    });
    
    // Define landmark locations (major cities and medical hubs)
    const landmarkLocations = [
      { lat: 37.7749, lng: -122.4194 }, // San Francisco
      { lat: 40.7128, lng: -74.0060 },  // New York
      { lat: 51.5074, lng: -0.1278 },   // London
      { lat: 48.8566, lng: 2.3522 },    // Paris
      { lat: 35.6762, lng: 139.6503 },  // Tokyo
      { lat: 28.6139, lng: 77.2090 },   // New Delhi
      { lat: -33.8688, lng: 151.2093 }, // Sydney
      { lat: 55.7558, lng: 37.6173 },   // Moscow
      { lat: -23.5505, lng: -46.6333 }, // Sao Paulo
      { lat: 19.4326, lng: -99.1332 },  // Mexico City
      { lat: 31.2304, lng: 121.4737 },  // Shanghai
      { lat: 1.3521, lng: 103.8198 }    // Singapore
    ];
    
    const landmarkPositions = [];
    
    for (let i = 0; i < landmarkLocations.length; i++) {
      const { lat, lng } = landmarkLocations[i];
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      const x = -(8.1 * Math.sin(phi) * Math.cos(theta));
      const y = (8.1 * Math.cos(phi)) - 1; // Adjusted for globe position
      const z = (8.1 * Math.sin(phi) * Math.sin(theta));
      
      landmarkPositions.push(x, y, z);
    }
    
    highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute(landmarkPositions, 3));
    
    const highlights = new THREE.Points(highlightGeometry, highlightMaterial);
    highlightsRef.current = highlights;
    
    // Apply the same tilt as the globe
    highlights.rotation.z = -0.2;
    
    scene.add(highlights);
    
    // Enhanced subtle white glow effect
    const glowGeometry = new THREE.SphereGeometry(8.5, 32, 32);
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
          intensity = pow(0.5 - dot(vNormal, vNormel), 1.8);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float intensity;
        void main() {
          vec3 glow = vec3(1.0, 1.0, 1.0) * intensity * 0.8; // Subtle white glow
          gl_FragColor = vec4(glow, 0.9); // High opacity for more visible effect
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMeshRef.current = glowMesh;
    glowMesh.position.y = -1; // Adjusted for globe position
    
    // Apply the same tilt as the globe
    glowMesh.rotation.z = -0.2;
    
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

  // Helper function to generate better continent data
  const generateContinentData = () => {
    // This is a more detailed representation of continents with latitude/longitude points
    const continents = [];
    
    // North America - more accurate shape
    for (let lat = 25; lat <= 75; lat += 1) {
      for (let lng = -170; lng <= -50; lng += 1) {
        // North America mainland
        if (lat > 30 && lat < 70 && lng > -140 && lng < -60) {
          // East coast shape
          if (lat < 50 && lng > -90 && lng < -60 && Math.random() > 0.4) {
            continents.push({ lat, lng });
          }
          // West coast shape
          else if (lat < 60 && lng < -100 && lng > -130 && Math.random() > 0.4) {
            continents.push({ lat, lng });
          }
          // Central
          else if (lat > 30 && lat < 60 && lng > -110 && lng < -90 && Math.random() > 0.3) {
            continents.push({ lat, lng });
          }
        }
        // Canada
        if (lat > 50 && lat < 70 && lng > -140 && lng < -60 && Math.random() > 0.5) {
          continents.push({ lat, lng });
        }
        // Mexico
        if (lat > 15 && lat < 30 && lng > -120 && lng < -85 && Math.random() > 0.5) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // South America - more defined shape
    for (let lat = -55; lat <= 10; lat += 1) {
      for (let lng = -85; lng <= -30; lng += 1) {
        if (lat > -55 && lat < 10) {
          // Brazil bulge
          if (lat > -25 && lat < 5 && lng > -70 && lng < -35 && Math.random() > 0.4) {
            continents.push({ lat, lng });
          }
          // Southern cone
          else if (lat < -25 && lng > -75 && lng < -55 && Math.random() > 0.5) {
            continents.push({ lat, lng });
          }
          // Andes region
          else if (lng < -65 && lng > -80 && Math.random() > 0.5) {
            continents.push({ lat, lng });
          }
        }
      }
    }
    
    // Europe - more detailed shape
    for (let lat = 35; lat <= 70; lat += 1) {
      for (let lng = -10; lng <= 40; lng += 1) {
        // Western Europe
        if (lat > 40 && lat < 60 && lng > -10 && lng < 20 && Math.random() > 0.4) {
          continents.push({ lat, lng });
        }
        // Eastern Europe
        if (lat > 45 && lat < 65 && lng > 20 && lng < 40 && Math.random() > 0.4) {
          continents.push({ lat, lng });
        }
        // Mediterranean
        if (lat > 35 && lat < 45 && lng > -5 && lng < 30 && Math.random() > 0.5) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // Africa - more accurate shape
    for (let lat = -35; lat <= 35; lat += 1) {
      for (let lng = -20; lng <= 50; lng += 1) {
        // North Africa
        if (lat > 0 && lat < 35 && lng > -15 && lng < 35 && Math.random() > 0.4) {
          continents.push({ lat, lng });
        }
        // Horn of Africa
        if (lat > 0 && lat < 15 && lng > 35 && lng < 50 && Math.random() > 0.5) {
          continents.push({ lat, lng });
        }
        // Central Africa
        if (lat > -15 && lat < 5 && lng > 10 && lng < 35 && Math.random() > 0.4) {
          continents.push({ lat, lng });
        }
        // Southern Africa
        if (lat > -35 && lat < -15 && lng > 15 && lng < 35 && Math.random() > 0.5) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // Asia - more defined regions
    for (let lat = 0; lat <= 70; lat += 1) {
      for (let lng = 40; lng <= 150; lng += 1) {
        // Middle East
        if (lat > 15 && lat < 40 && lng > 40 && lng < 65 && Math.random() > 0.5) {
          continents.push({ lat, lng });
        }
        // Russia
        if (lat > 50 && lat < 70 && lng > 40 && lng < 180 && Math.random() > 0.6) {
          continents.push({ lat, lng });
        }
        // India
        if (lat > 5 && lat < 35 && lng > 65 && lng < 90 && Math.random() > 0.4) {
          continents.push({ lat, lng });
        }
        // China
        if (lat > 20 && lat < 50 && lng > 90 && lng < 130 && Math.random() > 0.4) {
          continents.push({ lat, lng });
        }
        // Southeast Asia
        if (lat > 0 && lat < 20 && lng > 90 && lng < 130 && Math.random() > 0.5) {
          continents.push({ lat, lng });
        }
        // Japan
        if (lat > 30 && lat < 45 && lng > 130 && lng < 145 && Math.random() > 0.6) {
          continents.push({ lat, lng });
        }
      }
    }
    
    // Australia - better shape
    for (let lat = -45; lat <= -10; lat += 1) {
      for (let lng = 110; lng <= 155; lng += 1) {
        if (Math.random() > 0.5) {
          continents.push({ lat, lng });
        }
      }
    }
    
    return continents;
  };

  return <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: "2000px", maxHeight: "1200px" }} />;
};

export default GlobeVisualization;
