
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Environment, Html, Text } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { Vector3, Group } from 'three';
import { motion as motionDom } from 'framer-motion';
import { DemoStage } from './S10Demo';
import { useIsMobile } from '@/hooks/use-mobile';

// Placeholder models for each stage
const PatientEngagementModel = () => {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#3B82F6" />
      </mesh>
      <Text 
        position={[0, 1.5, 0]} 
        fontSize={0.3} 
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Patient Engagement
      </Text>
    </group>
  );
};

const AIScribeModel = () => {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#10B981" />
      </mesh>
      <Text 
        position={[0, 1.5, 0]} 
        fontSize={0.3} 
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        AI Medical Scribe
      </Text>
    </group>
  );
};

const AdminTasksModel = () => {
  return (
    <group>
      <mesh>
        <torusGeometry args={[0.7, 0.3, 16, 32]} />
        <meshStandardMaterial color="#EC4899" />
      </mesh>
      <Text 
        position={[0, 1.5, 0]} 
        fontSize={0.3} 
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Admin Tasks
      </Text>
    </group>
  );
};

const PostVisitModel = () => {
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.7, 0.7, 1, 32]} />
        <meshStandardMaterial color="#F59E0B" />
      </mesh>
      <Text 
        position={[0, 1.5, 0]} 
        fontSize={0.3} 
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Post-Visit Support
      </Text>
    </group>
  );
};

const ROIModel = () => {
  return (
    <group>
      <mesh>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      <Text 
        position={[0, 1.5, 0]} 
        fontSize={0.3} 
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        ROI Metrics
      </Text>
    </group>
  );
};

interface StageModelProps {
  stageId: string;
  position: [number, number, number];
  isActive: boolean;
  onClick: () => void;
}

const StageModel: React.FC<StageModelProps> = ({ stageId, position, isActive, onClick }) => {
  // Fix: Remove the Group type specification from useRef to avoid TypeScript errors
  const groupRef = useRef(null);

  useEffect(() => {
    if (groupRef.current) {
      // Cast to any to avoid TypeScript errors with position setting
      const group = groupRef.current as any;
      group.position.set(position[0], position[1], position[2]);
    }
  }, [position]);
  
  const getModelForStage = () => {
    switch (stageId) {
      case "patient-engagement":
        return <PatientEngagementModel />;
      case "ai-scribe":
        return <AIScribeModel />;
      case "admin-tasks":
        return <AdminTasksModel />;
      case "post-visit":
        return <PostVisitModel />;
      case "roi":
        return <ROIModel />;
      default:
        return <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#888888" />
        </mesh>;
    }
  };

  return (
    <motion.group 
      ref={groupRef}
      scale={isActive ? 1.2 : 0.8}
      animate={{
        scale: isActive ? 1.2 : 0.8,
        y: isActive ? position[1] + 0.3 : position[1]
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      onClick={onClick}
    >
      <Html position={[0, -1.5, 0]} center distanceFactor={10}>
        <div className={`px-2 py-1 rounded-lg ${isActive ? 'bg-blue-500 text-white' : 'bg-white/70 text-gray-800'}`}>
          Click to Focus
        </div>
      </Html>
      {getModelForStage()}
    </motion.group>
  );
};

interface SceneProps {
  currentStage: number;
  stages: DemoStage[];
  onStageClick: (index: number) => void;
}

interface DemoSceneProps extends SceneProps {
  scrollProgress: any;
}

const Scene: React.FC<SceneProps> = ({ currentStage, stages, onStageClick }) => {
  const { camera } = useThree();
  const isMobile = useIsMobile();
  const targetRef = useRef(new Vector3());
  // Fix: Remove specific camera type to avoid TypeScript errors
  const cameraRef = useRef(null);

  // Handle camera animation
  useFrame(() => {
    if (!targetRef.current) return;
    
    // Get the current target position based on stage
    const currentStageData = stages[currentStage];
    const pos = isMobile ? currentStageData.scenePosition.mobile : currentStageData.scenePosition.desktop;
    
    // Set target
    targetRef.current.set(pos.x * 0.5, pos.y * 0.5, pos.z * 0.5);
    
    // Safely handle camera positioning
    if (cameraRef.current && camera) {
      // Cast to any to safely access position properties
      const cam = camera as any;
      cam.position.lerp(new Vector3(pos.x, pos.y, pos.z), 0.05);
      cam.lookAt(targetRef.current);
      cam.updateProjectionMatrix();
    }
  });

  return (
    <>
      {/* Fixed: Removed ref from PerspectiveCamera to avoid TypeScript conflicts */}
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} castShadow />
      <Environment preset="city" />
      
      <group>
        {stages.map((stage, index) => {
          const pos = isMobile 
            ? [stage.scenePosition.mobile.x, stage.scenePosition.mobile.y, stage.scenePosition.mobile.z] 
            : [stage.scenePosition.desktop.x, stage.scenePosition.desktop.y, stage.scenePosition.desktop.z];
          
          return (
            <StageModel
              key={stage.id}
              stageId={stage.id}
              position={pos as [number, number, number]}
              isActive={currentStage === index}
              onClick={() => onStageClick(index)}
            />
          );
        })}
      </group>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
};

export const DemoScene: React.FC<DemoSceneProps> = ({ 
  currentStage, 
  stages,
  onStageClick,
  scrollProgress 
}) => {
  return (
    <div className="w-full h-full cursor-pointer">
      <motionDom.div 
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Canvas shadows>
          <Scene 
            currentStage={currentStage}
            stages={stages}
            onStageClick={onStageClick}
          />
        </Canvas>
      </motionDom.div>
    </div>
  );
};
