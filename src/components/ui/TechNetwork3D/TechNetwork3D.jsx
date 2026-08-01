import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './TechNetwork3D.module.css';

const TechNetwork3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 19;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Outer Wireframe Icosahedron (Structure)
    const geoIco = new THREE.IcosahedronGeometry(4.6, 2);
    const matIco = new THREE.MeshBasicMaterial({
      color: 0x001f3f,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const icoMesh = new THREE.Mesh(geoIco, matIco);
    mainGroup.add(icoMesh);

    // 3. Inner Core Mesh
    const geoCore = new THREE.IcosahedronGeometry(2.3, 1);
    const matCore = new THREE.MeshBasicMaterial({
      color: 0x003366,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.Mesh(geoCore, matCore);
    mainGroup.add(coreMesh);

    // 4. Orbiting Rings
    const ringGeo1 = new THREE.TorusGeometry(6.0, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x001f3f,
      transparent: true,
      opacity: 0.25,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(6.6, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x004080,
      transparent: true,
      opacity: 0.2,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 4;
    mainGroup.add(ring2);

    // 5. Nodes Particles & Connecting Lines
    const particleCount = 70;
    const positions = new Float32Array(particleCount * 3);
    const particlesData = [];

    const radius = 4.4;
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius + (Math.random() - 0.5) * 1.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        ),
      });
    }

    // Node dots canvas texture creation
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(0, 31, 63, 1)');
      gradient.addColorStop(0.4, 'rgba(0, 64, 128, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 31, 63, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();

      return new THREE.CanvasTexture(canvas);
    };

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.6,
      map: createParticleTexture(),
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const pointCloud = new THREE.Points(pGeo, pMat);
    mainGroup.add(pointCloud);

    // Dynamic Connections Lines
    const maxConnections = particleCount * particleCount;
    const linePositions = new Float32Array(maxConnections * 3);
    const lineColors = new Float32Array(maxConnections * 3);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
    });

    const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
    mainGroup.add(linesMesh);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      targetRotationY = x * 0.8;
      targetRotationX = y * 0.8;
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width - 0.5;
        const y = (touch.clientY - rect.top) / rect.height - 0.5;
        targetRotationY = x * 0.8;
        targetRotationX = y * 0.8;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continuous rotation
      mainGroup.rotation.y += 0.003;
      coreMesh.rotation.y -= 0.005;
      coreMesh.rotation.x += 0.002;
      ring1.rotation.z += 0.002;
      ring2.rotation.z -= 0.003;

      // Smooth mouse tilt
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;
      mainGroup.rotation.z += (-targetRotationY - mainGroup.rotation.z) * 0.05;

      // Update particle connections
      const posAttr = pGeo.attributes.position;
      const posArr = posAttr.array;
      let vertexIdx = 0;
      let colorIdx = 0;

      for (let i = 0; i < particleCount; i++) {
        const x1 = posArr[i * 3];
        const y1 = posArr[i * 3 + 1];
        const z1 = posArr[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = posArr[j * 3];
          const y2 = posArr[j * 3 + 1];
          const z2 = posArr[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 3.2) {
            const alpha = 1.0 - dist / 3.2;

            linePositions[vertexIdx++] = x1;
            linePositions[vertexIdx++] = y1;
            linePositions[vertexIdx++] = z1;

            linePositions[vertexIdx++] = x2;
            linePositions[vertexIdx++] = y2;
            linePositions[vertexIdx++] = z2;

            lineColors[colorIdx++] = 0.0 * alpha; // R
            lineColors[colorIdx++] = 0.12 * alpha + 0.1; // G
            lineColors[colorIdx++] = 0.25 * alpha + 0.2; // B

            lineColors[colorIdx++] = 0.0 * alpha;
            lineColors[colorIdx++] = 0.12 * alpha + 0.1;
            lineColors[colorIdx++] = 0.25 * alpha + 0.2;
          }
        }
      }

      lineGeo.setDrawRange(0, vertexIdx / 3);
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.networkContainer}>
      <div className={styles.glowBg} />
      <div ref={mountRef} className={styles.canvasContainer} />

      {/* Floating Glassmorphic Badges */}
      <div className={`${styles.glassBadge} ${styles.badgeTop}`}>
        <span className="material-symbols-outlined">hub</span>
        <div>
          <p className={styles.badgeTitle}>Ecosistema de Datos 3D</p>
          <p className={styles.badgeSub}>Sincronización en Tiempo Real</p>
        </div>
      </div>

      <div className={`${styles.glassBadge} ${styles.badgeBottom}`}>
        <span className="material-symbols-outlined">verified</span>
        <div>
          <p className={styles.badgeTitle}>Zoho CRM & Cloud</p>
          <p className={styles.badgeSub}>Arquitectura de Red Activa</p>
        </div>
      </div>
    </div>
  );
};

export default TechNetwork3D;
