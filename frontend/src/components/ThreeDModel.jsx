import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, RoundedBox } from '@react-three/drei';

const MedicalCross = () => {
    const groupRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        groupRef.current.rotation.y = time * 0.5;
        groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Horizontal part */}
                <RoundedBox args={[3, 0.8, 0.8]} radius={0.1} smoothness={4}>
                    <meshStandardMaterial color="#c23464" metalness={0.5} roughness={0.2} />
                </RoundedBox>
                {/* Vertical part */}
                <RoundedBox args={[0.8, 3, 0.8]} radius={0.1} smoothness={4}>
                    <meshStandardMaterial color="#c23464" metalness={0.5} roughness={0.2} />
                </RoundedBox>
            </Float>
        </group>
    );
};

const ThreeDModel = () => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <MedicalCross />
            </Canvas>
        </div>
    );
};

export default ThreeDModel;
