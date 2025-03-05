import React, {useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import birdScene from '../assets/3d/bird.glb';
import { useFrame } from '@react-three/fiber';

const Bird = ({isRotating}) => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef()
    const {actions} = useAnimations(animations, birdRef)

    useEffect (() => {
actions['Take 001'].play();

    }, []);

    useFrame((_, delta) => {
        birdRef.current.rotation.y += 0.15 * delta;
  return (
    <mesh 
    position={[-5,2,1]} 
    scale={[0.003, 0.003, 0.003]} 
    ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
