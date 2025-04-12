
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { SparklesCore } from "@/components/ui/sparkles";

const StarTrekSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // THREE.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    
    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1
    });
    
    const starVertices = [];
    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    // Create the Enterprise-like shape
    const createEnterprise = () => {
      const group = new THREE.Group();
      
      // Saucer section
      const saucerGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 32);
      const saucerMaterial = new THREE.MeshBasicMaterial({ color: 0xdddddd });
      const saucer = new THREE.Mesh(saucerGeometry, saucerMaterial);
      group.add(saucer);
      
      // Body
      const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.5, 2, 32);
      const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = -1;
      body.rotation.x = Math.PI / 2;
      group.add(body);
      
      // Nacelles
      const nacelleGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5, 32);
      const nacelleMaterial = new THREE.MeshBasicMaterial({ color: 0xbbbbbb });
      
      const leftNacelle = new THREE.Mesh(nacelleGeometry, nacelleMaterial);
      leftNacelle.position.set(-1, -0.5, -0.7);
      leftNacelle.rotation.x = Math.PI / 2;
      group.add(leftNacelle);
      
      const rightNacelle = new THREE.Mesh(nacelleGeometry, nacelleMaterial);
      rightNacelle.position.set(1, -0.5, -0.7);
      rightNacelle.rotation.x = Math.PI / 2;
      group.add(rightNacelle);
      
      // Scale the whole thing down
      group.scale.set(0.4, 0.4, 0.4);
      
      return group;
    };
    
    const enterprise = createEnterprise();
    scene.add(enterprise);
    
    camera.position.z = 5;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the enterprise
      enterprise.rotation.y += 0.005;
      
      // Slightly rotate the stars
      stars.rotation.x += 0.0003;
      stars.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Make it interactive with mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      enterprise.rotation.x = y * 0.1;
      enterprise.rotation.z = x * 0.1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full" 
        />
      </div>
      
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleColor="#1EAEDB"
          particleDensity={100}
          speed={1}
          className="w-full h-full"
          minSize={0.6}
          maxSize={1.4}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Like A Star Trek</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Boldly going where no healthcare AI has gone before, our technology is inspired by the 
            futuristic vision of Star Trek — making the impossible possible through innovation and collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StarTrekSection;
