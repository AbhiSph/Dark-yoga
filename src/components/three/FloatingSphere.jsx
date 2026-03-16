import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Sphere() {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    mesh.current.rotation.x = t * 0.2
    mesh.current.rotation.y = t * 0.3
    mesh.current.position.y = Math.sin(t * 0.5) * 0.3
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial
        color="#7c3aed"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

export default function FloatingSphere({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 4] }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} color="#7c3aed" intensity={2} />
        <Sphere />
      </Canvas>
    </div>
  )
}
