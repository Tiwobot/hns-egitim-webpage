import React, { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/*
 * Floating wireframe "math" shapes rendered behind the hero content.
 * Kept intentionally lightweight: low-poly geometries, no shadows,
 * capped device pixel ratio.
 */

type ShapeSpec = {
  position: [number, number, number];
  geometry: 'icosahedron' | 'torus' | 'octahedron' | 'torusKnot' | 'dodecahedron';
  scale: number;
  color: string;
  speed: number;
};

const SHAPES: ShapeSpec[] = [
  { position: [-4.5, 1.5, -2], geometry: 'icosahedron', scale: 1.3, color: '#ffffff', speed: 1.2 },
  { position: [4.5, -1, -3], geometry: 'torus', scale: 1.2, color: '#67e8f9', speed: 0.8 },
  { position: [-3, -2.2, -1], geometry: 'octahedron', scale: 1.0, color: '#f0abfc', speed: 1.5 },
  { position: [3.5, 2.2, -2], geometry: 'torusKnot', scale: 0.85, color: '#fde047', speed: 1.0 },
  { position: [0, 3, -4], geometry: 'dodecahedron', scale: 1.1, color: '#c4b5fd', speed: 0.6 },
  { position: [1.5, -2.8, -2], geometry: 'icosahedron', scale: 0.65, color: '#5eead4', speed: 1.8 },
];

const Shape = ({ spec }: { spec: ShapeSpec }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x += delta * 0.15 * spec.speed;
    groupRef.current.rotation.y += delta * 0.2 * spec.speed;
  });

  const geometry = useMemo(() => {
    switch (spec.geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 12, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.9, 0.28, 64, 8]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  }, [spec.geometry]);

  return (
    <Float speed={spec.speed * 1.5} rotationIntensity={0.6} floatIntensity={1.6}>
      <group ref={groupRef} position={spec.position} scale={spec.scale}>
        {/* Glassy fill gives the shape body */}
        <mesh scale={0.98}>
          {geometry}
          <meshPhysicalMaterial
            color={spec.color}
            transparent
            opacity={0.18}
            roughness={0.2}
            metalness={0.4}
            depthWrite={false}
          />
        </mesh>
        {/* Bright wireframe on top; emissive makes lines read thicker */}
        <mesh>
          {geometry}
          <meshStandardMaterial
            color={spec.color}
            emissive={spec.color}
            emissiveIntensity={0.9}
            wireframe
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
};

/*
 * Rotates the whole scene slightly toward the mouse for a parallax feel.
 * Mouse is tracked on the window because the canvas itself has
 * pointer-events: none (so hero buttons stay clickable).
 */
const ParallaxGroup = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      target.current.x * 0.25,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      target.current.y * 0.15,
      0.05
    );
  });

  return <group ref={group}>{children}</group>;
};

const Hero3D = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <ParallaxGroup>
          {SHAPES.map((spec, i) => (
            <Shape key={i} spec={spec} />
          ))}
        </ParallaxGroup>
      </Suspense>
    </Canvas>
  );
};

export default Hero3D;
