
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface StarBackgroundProps {
  interactive?: boolean;
}

const StarBackground = ({ interactive = false }: StarBackgroundProps) => {
  const starsRef = useRef<THREE.Points | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<THREE.Points | null>(null);
  const raycaster = useRef(new THREE.Raycaster());
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    if (!canvasRef.current) return;

    // Calculate mouse position in normalized device coordinates
    const rect = canvasRef.current.getBoundingClientRect();
    mousePosition.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mousePosition.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Update raycaster
    if (cameraRef.current) {
      raycaster.current.setFromCamera(
        new THREE.Vector2(mousePosition.current.x, mousePosition.current.y),
        cameraRef.current
      );
    }
  };

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
    
    const starCount = interactive ? 2000 : 1500;
    const starPositions = [];
    const starSizes = [];
    
    // Create stars with varying sizes
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      // Make z range larger for interactive mode for more depth
      const z = (Math.random() - 0.5) * (interactive ? 100 : 50);
      
      // Smaller star sizes to match reference image
      const size = Math.random() * 0.02 + 0.005;
      
      starPositions.push(x, y, z);
      starSizes.push(size);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));
    
    // Create a custom shader material for better-looking stars
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    starsRef.current = stars;
    scene.add(stars);

    // Add interactive particle lines if interactive mode is enabled
    if (interactive) {
      // Create particles that will be connected with lines
      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 100;
      const particlePositions = [];
      
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 80;
        const z = (Math.random() - 0.5) * 80;
        
        particlePositions.push(x, y, z);
      }
      
      particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        color: 0x1eaedb,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      });
      
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      particlesRef.current = particles;
      scene.add(particles);

      // Add event listener for mouse movement
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    camera.position.z = 5;
    
    // Animation with subtle movement
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !starsRef.current) return;
      
      requestAnimationFrame(animate);
      
      // Very subtle rotation of the star field
      starsRef.current.rotation.y += 0.0001;
      starsRef.current.rotation.z += 0.00005;

      // Interactive mode animations
      if (interactive && particlesRef.current) {
        // Rotate particles more noticeably
        particlesRef.current.rotation.y += 0.001;
        
        // Add slight movement based on mouse position for interactive mode
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        const count = positions.length / 3;
        
        // Make particles slightly follow mouse position
        for (let i = 0; i < count; i++) {
          const ix = i * 3;
          const iy = i * 3 + 1;
          const iz = i * 3 + 2;
          
          // Add subtle movement to particles
          positions[ix] += Math.sin(Date.now() * 0.001 + i) * 0.01;
          positions[iy] += Math.cos(Date.now() * 0.001 + i) * 0.01;
          
          // Pull particles towards mouse when hovering
          if (isHovering) {
            const mouseX = mousePosition.current.x * 10;
            const mouseY = mousePosition.current.y * 10;
            
            positions[ix] += (mouseX - positions[ix]) * 0.001;
            positions[iy] += (mouseY - positions[iy]) * 0.001;
          }
        }
        
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }
      
      // Create subtle twinkling effect by modifying opacity slightly
      if (Math.random() > 0.99) {
        starsMaterial.opacity = 0.7 + Math.random() * 0.3;
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

    // Add event listeners for interactive mode
    if (interactive) {
      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);
      
      canvasRef.current.addEventListener('mouseenter', handleMouseEnter);
      canvasRef.current.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        canvasRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        canvasRef.current?.removeEventListener('mouseleave', handleMouseLeave);
        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
      };
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [interactive]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 cursor-move" />;
};

export default StarBackground;
