
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
  const [clickedPosition, setClickedPosition] = useState<{x: number, y: number} | null>(null);

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

  // Handle mouse click to create a ripple effect
  const handleMouseClick = (event: MouseEvent) => {
    if (!canvasRef.current || !interactive) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    setClickedPosition({x, y});
    
    // Reset the clicked position after animation completes
    setTimeout(() => {
      setClickedPosition(null);
    }, 2000);
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
    
    const starCount = interactive ? 2500 : 1500;
    const starPositions = [];
    const starSizes = [];
    const starColors = [];
    
    // Create stars with varying sizes and colors
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      // Make z range larger for interactive mode for more depth
      const z = (Math.random() - 0.5) * (interactive ? 100 : 50);
      
      // Smaller star sizes to match reference image
      const size = Math.random() * 0.03 + 0.005;
      
      // Add subtle color variation to stars
      const r = 0.8 + Math.random() * 0.2;  // Mostly white, slight variation
      const g = 0.8 + Math.random() * 0.2;
      const b = 0.9 + Math.random() * 0.1;  // More blue for space effect
      
      starPositions.push(x, y, z);
      starSizes.push(size);
      starColors.push(r, g, b);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
    
    // Create a custom shader material for better-looking stars
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.15,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      vertexColors: true,
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    starsRef.current = stars;
    scene.add(stars);

    // Add interactive particle lines if interactive mode is enabled
    if (interactive) {
      // Create particles that will be connected with lines
      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 120;
      const particlePositions = [];
      const particleColors = [];
      
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 80;
        const z = (Math.random() - 0.5) * 80;
        
        // More blue colors for the particles
        const r = 0.2 + Math.random() * 0.3;
        const g = 0.5 + Math.random() * 0.3;
        const b = 0.8 + Math.random() * 0.2;
        
        particlePositions.push(x, y, z);
        particleColors.push(r, g, b);
      }
      
      particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
      particlesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(particleColors, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.25,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
        vertexColors: true,
      });
      
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      particlesRef.current = particles;
      scene.add(particles);

      // Add event listener for mouse movement
      window.addEventListener('mousemove', handleMouseMove);
      
      // Add event listener for mouse click
      window.addEventListener('click', handleMouseClick);
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
        const colors = particlesRef.current.geometry.attributes.color.array as Float32Array;
        const count = positions.length / 3;
        
        // Process clicked position for ripple effect
        if (clickedPosition) {
          for (let i = 0; i < count; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;
            const ic = i * 3;
            
            // Calculate distance to click position
            const dx = positions[ix] - clickedPosition.x * 50;
            const dy = positions[iy] - clickedPosition.y * 50;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Create ripple effect based on distance
            const rippleFactor = Math.sin(distance * 0.3 - Date.now() * 0.003) * 0.3;
            
            // Apply ripple effect
            positions[iz] += rippleFactor;
            
            // Temporarily brighten colors
            colors[ic] = Math.min(1, colors[ic] + rippleFactor * 0.2);
            colors[ic + 1] = Math.min(1, colors[ic + 1] + rippleFactor * 0.2);
            colors[ic + 2] = Math.min(1, colors[ic + 2] + rippleFactor * 0.1);
          }
        }
        
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
        particlesRef.current.geometry.attributes.color.needsUpdate = true;
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
        window.removeEventListener('click', handleMouseClick);
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

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 cursor-move" 
      title={interactive ? "Click to create ripples or move mouse to interact with stars" : "Star background"}
    />
  );
};

export default StarBackground;
