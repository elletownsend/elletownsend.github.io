'use client';

import { useEffect, useState, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';
import styles from './SculptureViewer.module.scss';

const CACHE_KEY = 'sculpture-snapshot-v1';

// ── Captures a JPEG snapshot of the canvas after the model has settled ───────
function SnapshotCapture() {
  const { gl } = useThree();

  useEffect(() => {
    const id = setTimeout(() => {
      try {
        const dataUrl = gl.domElement.toDataURL('image/jpeg', 0.75);
        localStorage.setItem(CACHE_KEY, dataUrl);
      } catch {
        // localStorage quota or security error — silently ignore
      }
    }, 2500);
    return () => clearTimeout(id);
  }, [gl]);

  return null;
}

// ── The actual 3‑D model ─────────────────────────────────────────────────────
function Sculpture({ scale }: { scale: number }) {
  const { scene } = useGLTF('/models/terpsichore_lyran.glb');
  return (
    <Center>
      <primitive object={scene} scale={scale} />
    </Center>
  );
}

// ── Bandwidth / data-saver detection ─────────────────────────────────────────
function useLowBandwidth(): boolean {
  const [isLow, setIsLow] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const conn = (navigator as any).connection
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ?? (navigator as any).mozConnection
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ?? (navigator as any).webkitConnection;

    if (!conn) return;

    const check = () =>
      setIsLow(
        conn.saveData === true ||
        conn.effectiveType === '2g' ||
        conn.effectiveType === 'slow-2g'
      );

    check();
    conn.addEventListener?.('change', check);
    return () => conn.removeEventListener?.('change', check);
  }, []);

  return isLow;
}

// ── Static fallback ───────────────────────────────────────────────────────────
function Fallback() {
  const [cached, setCached] = useState<string | null>(null);

  useEffect(() => {
    setCached(localStorage.getItem(CACHE_KEY));
  }, []);

  return (
    <div className={styles.fallback}>
      {cached ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cached} alt="Terpsichore sculpture" />
      ) : (
        <p className={styles.placeholderLabel}>Terpsichore</p>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function SculptureViewer() {
  const isLow = useLowBandwidth();

  // Detect mobile after mount — never use typeof window at render time as it
  // causes a server/client hydration mismatch.
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    setMounted(true);
  }, []);

  if (isLow) return <Fallback />;

  // Render a transparent placeholder until we know the viewport width.
  // This keeps the canvas dimensions stable and avoids a layout shift.
  if (!mounted) return <div className={styles.canvas} />;

  const sculptureScale = isMobile ? 2.0 : 1.7;
  const cameraZ        = isMobile ? 4.5 : 5;

  return (
    <div className={styles.canvas}>
      <Canvas
        camera={{ position: [0, 0.15, cameraZ], fov: 46 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 6, 4]}  intensity={2.0} color="#ffffff" />
        <directionalLight position={[-4, 2, -2]} intensity={0.6} color="#f5f0e8" />
        <directionalLight position={[0, -4, 2]}  intensity={0.3} color="#ffffff" />

        <Suspense fallback={null}>
          <Sculpture scale={sculptureScale} />
          <SnapshotCapture />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.6}
            enableZoom={false}
            enablePan={false}
            target={[0, -0.05, 0]}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={(2.5 * Math.PI) / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/terpsichore_lyran.glb');
