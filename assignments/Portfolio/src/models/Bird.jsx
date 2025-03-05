import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    // Create a clock for animation
    const clock = new THREE.Clock();

    useEffect(() => {
        actions['Take 001'].play();
    }, [actions]);

    useFrame(({ camera }) => {
        // Update bird's position for a smooth flying motion
        if (birdRef.current) {
            // Make the bird move in a sine wave pattern
            birdRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + 2;

            // Check if bird reached boundary and change direction
            if (birdRef.current.position.x > camera.position.x + 10) {
                birdRef.current.rotation.y = Math.PI;
            } else if (birdRef.current.position.x < camera.position.x - 10) {
                birdRef.current.rotation.y = 0;
            }

            // Move bird forward or backward based on rotation
            if (birdRef.current.rotation.y === 0) {
                birdRef.current.position.x += 0.01;
                birdRef.current.position.z -= 0.01;
            } else {
                birdRef.current.position.x -= 0.01;
                birdRef.current.position.z += 0.01;
            }
        }
    });
    
    return (
        <mesh 
            position={[-5, 2, 1]} 
            scale={[0.003, 0.003, 0.003]} 
            ref={birdRef}
        >
            <primitive object={scene} />
        </mesh>
    );
};

export default Bird;