"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";

function AnimatedSphere() {
  const sphereRef = useRef<any>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    sphereRef.current.rotation.set(t / 4, t / 4, 0);
  });

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#facc15" // HIT Yellow
          speed={3}
          distort={0.4}
          radius={1}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}