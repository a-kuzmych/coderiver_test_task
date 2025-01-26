import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const BackgroundScene = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 1000);
    const controls = new OrbitControls(camera, renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    camera.position.set(0, 0, 5);
    controls.enableZoom = false;

    const material = new THREE.PointsMaterial({
      size: 0.01,
      sizeAttenuation: true,
      transparent: true,
      vertexColors: true,
    });

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    const getPoint = () => {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random());
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
      };
    };

    for (let i = 0; i < 10000; i++) {
      const { x, y, z } = getPoint();
      vertices.push(x * 4, y * 4, z * 4);
      colors.push(Math.random(), Math.random(), Math.random());
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let size = 0.001;
    const targetSize = 0.02;

    const animate = () => {
      if (size < targetSize) {
        size += 0.0002;
        material.size = size;
      }
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      camera.rotation.x = mouse.y * 0.1;
      camera.rotation.y = mouse.x * 0.1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default BackgroundScene;
