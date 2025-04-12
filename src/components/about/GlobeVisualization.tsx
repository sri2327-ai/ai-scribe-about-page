
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
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create a sphere geometry for the globe
    const sphereGeometry = new THREE.SphereGeometry(3, 64, 64);
    
    // Create a material with white glow effect
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2
    });
    
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeRef.current = globe;
    globe.position.y = 0;
    scene.add(globe);
    
    // Create dots for the globe surface
    const dotsGeometry = new THREE.BufferGeometry();
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
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
    dotsRef.current = dots;
    dots.position.y = 0;
    scene.add(dots);
    
    // Add highlights with orange color like in the provided image
    const highlightGeometry = new THREE.BufferGeometry();
    const highlightMaterial = new THREE.PointsMaterial({
      color: 0xFB6415, // Orange highlights (#FB6415) as specified
      size: 0.12,
      transparent: true,
      opacity: 1
    });
    
    // City marker locations - matching the example
    const highlightPositions = [
      // North America
      3 * Math.sin(Math.PI * 0.4) * Math.cos(-Math.PI * 0.2),
      3 * Math.sin(Math.PI * 0.4) * Math.sin(-Math.PI * 0.2),
      3 * Math.cos(Math.PI * 0.4),
      
      // South America
      3 * Math.sin(Math.PI * 0.6) * Math.cos(-Math.PI * 0.3),
      3 * Math.sin(Math.PI * 0.6) * Math.sin(-Math.PI * 0.3),
      3 * Math.cos(Math.PI * 0.6),
      
      // Europe
      3 * Math.sin(Math.PI * 0.3) * Math.cos(Math.PI * 0.1),
      3 * Math.sin(Math.PI * 0.3) * Math.sin(Math.PI * 0.1),
      3 * Math.cos(Math.PI * 0.3),
      
      // Asia
      3 * Math.sin(Math.PI * 0.4) * Math.cos(Math.PI * 0.4),
      3 * Math.sin(Math.PI * 0.4) * Math.sin(Math.PI * 0.4),
      3 * Math.cos(Math.PI * 0.4),
      
      // Australia
      3 * Math.sin(Math.PI * 0.6) * Math.cos(Math.PI * 0.6),
      3 * Math.sin(Math.PI * 0.6) * Math.sin(Math.PI * 0.6),
      3 * Math.cos(Math.PI * 0.6),
    ];
    
    highlightGeometry.setAttribute('position', new THREE.Float32BufferAttribute(highlightPositions, 3));
    
    const highlights = new THREE.Points(highlightGeometry, highlightMaterial);
    highlightsRef.current = highlights;
    highlights.position.y = 0;
    scene.add(highlights);
    
    // Create a stronger glow effect
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
          intensity = pow(0.6 - dot(vNormal, vNormel), 2.0);
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
    glowMeshRef.current = glowMesh;
    glowMesh.position.y = 0;
    scene.add(glowMesh);
    
    camera.position.z = 6;
    
    // Add subtle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect || !globeRef.current || !dotsRef.current || 
          !highlightsRef.current || !glowMeshRef.current) return;
      
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Subtle rotation based on mouse position
      globeRef.current.rotation.y = x * 0.1;
      dotsRef.current.rotation.y = x * 0.1;
      highlightsRef.current.rotation.y = x * 0.1;
      glowMeshRef.current.rotation.y = x * 0.1;
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
      if (canvasRef.current) {
        const containerWidth = canvasRef.current.clientWidth;
        const containerHeight = canvasRef.current.clientHeight;
        
        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerWidth, containerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: "700px", aspectRatio: "1/1" }} />;
};

export default GlobeVisualization;
