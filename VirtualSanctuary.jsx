import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Environment, ContactShadows, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

// This is a placeholder for the actual 3D Model component
// In production, you would convert your .GLB or .OBJ file to a React component using gltfjsx
const FurnitureModel = () => {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1.5, 0.8, 1.5]} />
      <meshStandardMaterial 
        color="#2D1B14" 
        roughness={0.2} 
        metalness={0.1}
      />
    </mesh>
  );
};

const VirtualSanctuary = () => {
  const [activeEnv, setActiveEnv] = useState('Dusk');

  return (
    <div className="h-screen w-full bg-[#0D0D0D] overflow-hidden flex flex-col">
      {/* 3D Navigation Overlay */}
      <div className="absolute top-12 left-12 z-10 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[#F2F0ED] font-serif italic text-5xl tracking-tighter">The Sanctuary</h1>
          <p className="text-[#B87333] text-[10px] tracking-[0.5em] uppercase mt-2">Experimental Interaction v.01</p>
        </motion.div>
        
        <div className="flex gap-4 pt-8">
          {['Dusk', 'Morning', 'Void'].map((env) => (
            <button
              key={env}
              onClick={() => setActiveEnv(env)}
              className={`text-[9px] tracking-[0.3em] uppercase px-4 py-2 border ${
                activeEnv === env ? 'border-[#B87333] text-[#B87333]' : 'border-zinc-800 text-zinc-500'
              } transition-all duration-500`}
            >
              {env}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Stage */}
      <div className="flex-grow w-full cursor-grab active:cursor-grabbing">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={35} />
          
          <Suspense fallback={<Html center className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Calibrating Geometry...</Html>}>
            <Stage 
              intensity={0.5} 
              environment={activeEnv === 'Morning' ? 'apartment' : 'night'} 
              adjustCamera={false} 
              contactShadow={{ opacity: 0.5, blur: 2 }}
            >
              <FurnitureModel />
            </Stage>
            
            {/* Additional "Silence" Lighting */}
            <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
            <Environment reflections={true} />
            <ContactShadows position={[0, -0.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
          </Suspense>

          <OrbitControls 
            enablePan={false} 
            minDistance={3} 
            maxDistance={8} 
            autoRotate={activeEnv === 'Void'}
            autoRotateSpeed={0.5}
            makeDefault 
          />
        </Canvas>
      </div>

      {/* Instructional Footer */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end z-10">
        <div className="max-w-xs">
          <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-widest">
            Drag to Rotate. Pinch to Zoom. <br />
            Observing the grain of Indian Rosewood under {activeEnv} light.
          </p>
        </div>
        
        <button className="bg-[#B87333] text-black text-[11px] px-10 py-4 font-medium tracking-widest hover:bg-white transition-colors">
          INQUIRE FOR COMMISSION
        </button>
      </div>
    </div>
  );
};

export default VirtualSanctuary;
