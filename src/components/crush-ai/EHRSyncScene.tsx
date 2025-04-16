
import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// Interactive Node Component
function InteractiveNode({ position, color, label }: { position: [number, number, number]; color: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 1.3 : 1);
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? '#ff4081' : color}
          emissive={hovered ? '#ff4081' : color}
          emissiveIntensity={0.6}
        />
      </mesh>
      {hovered && (
        <Html position={[position[0], position[1] + 1.5, position[2]]}>
          <div style={{ color: 'white', background: '#111', padding: '4px 8px', borderRadius: 4, fontSize: 14 }}>
            {label}
          </div>
        </Html>
      )}
    </>
  );
}

// Data Flow Particle Component
function DataFlowParticles({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(...from),
      new THREE.Vector3(0, 2, 0),
      new THREE.Vector3(...to),
    ]);
  }, [from, to]);

  const points = useMemo(() => curve.getPoints(100), [curve]);
  const particleRef = useRef<THREE.Line>(null);
  const trailLength = 20;

  const trailPoints = useMemo(() => new Array(trailLength).fill(0).map(() => new THREE.Vector3()), []);
  const geometry = new THREE.BufferGeometry().setFromPoints(trailPoints);
  const positions = new Float32Array(trailLength * 3);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * 0.25) % 1;
    const point = curve.getPoint(t);

    // Update trail
    trailPoints.pop();
    trailPoints.unshift(point.clone());

    for (let i = 0; i < trailPoints.length; i++) {
      positions[i * 3] = trailPoints[i].x;
      positions[i * 3 + 1] = trailPoints[i].y;
      positions[i * 3 + 2] = trailPoints[i].z;
    }

    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <line>
      <bufferGeometry attach="geometry" attributes-position={new THREE.BufferAttribute(positions, 3)} />
      <lineBasicMaterial
        attach="material"
        color="#00e5ff"
        linewidth={2}
        transparent
        opacity={0.8}
      />
    </line>
  );
}

// Main Scene Component
export default function EHRSyncScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} enablePan={false} />

        {/* Nodes */}
        <InteractiveNode position={[-4, 0, 0]} color="#3f51b5" label="Clinic A" />
        <InteractiveNode position={[4, 0, 0]} color="#00e676" label="Clinic B" />

        {/* Data Flow */}
        <DataFlowParticles from={[-4, 0, 0]} to={[4, 0, 0]} />
      </Canvas>
    </div>
  );
}
