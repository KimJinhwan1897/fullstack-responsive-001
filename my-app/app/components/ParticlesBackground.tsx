"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styles from './ParticlesBackground.module.css';

export default function ParticlesBackground() {
  const [isReady, setIsReady] = useState(false);

  // 컴포넌트 마운트 즉시 파티클 초기화 준비
  useEffect(() => {
    setIsReady(true);
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    // 최소한의 기능만 로드하여 초기화 속도 향상
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // 초기화 완료 후 즉시 파티클 표시
    if (container) {
      container.refresh();
    }
  }, []);

  return (
    <div className={styles.particlesContainer}>
      {isReady && (
        <Particles
          id="particles-js"
          className={styles.particlesCanvas}
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            fpsLimit: 120, // FPS 제한 증가로 더 부드러운 렌더링
            autoPlay: true, 
            particles: {
              number: { 
                value: 80,
                density: { enable: true, value_area: 800 } 
              },
              color: { 
                value: ["#ffffff", "#87ceeb", "#add8e6", "#b0e0e6", "#e6e6fa"],
              },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 0.7,
                random: false,
                anim: { 
                  enable: false,
                  speed: 0.5,
                  opacity_min: 0.7,
                  sync: false 
                },
              },
              size: {
                value: 4,
                random: true,
                anim: { 
                  enable: false,
                  speed: 2, 
                  size_min: 3, 
                  sync: false 
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.5, // 속도 약간 증가
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
              life: {
                duration: {
                  value: -1, // 무한 지속 시간 유지
                },
                count: 0, 
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { 
                  enable: false,
                  mode: "grab"
                },
                onclick: { 
                  enable: false,
                  mode: "push"
                },
                resize: true,
              },
              modes: {
                grab: { 
                  distance: 150, 
                  line_linked: { opacity: 0.8 } 
                },
                bubble: { 
                  distance: 250, 
                  size: 10, 
                  duration: 2, 
                  opacity: 0.8, 
                  speed: 3 
                },
                repulse: { 
                  distance: 200, 
                  duration: 0.8 
                },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            detectRetina: true, // 레티나 감지 활성화로 렌더링 최적화
            smooth: true,
            pauseOnBlur: false,
            pauseOnOutsideViewport: false,
            zLayers: 1, // 레이어 감소로 초기화 속도 향상
            motion: {
              disable: false,
              reduce: {
                factor: 2, // 모션 감소로 성능 향상
                value: true
              }
            }
          }}
        />
      )}
    </div>
  );
} 