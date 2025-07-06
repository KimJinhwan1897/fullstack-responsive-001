"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styles from './ParticlesBackground.module.css';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // 컨테이너가 로드되면 필요한 작업 수행
  }, []);

  return (
    <div className={styles.particlesContainer}>
      <Particles
        id="particles-js"
        className={styles.particlesCanvas}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          fpsLimit: 60, // FPS 제한 낮춤
          particles: {
            number: { 
              value: 30, // 파티클 수 대폭 감소
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
                enable: false, // 애니메이션 비활성화
                speed: 0.5,
                opacity_min: 0.7,
                sync: false 
              },
            },
            size: {
              value: 4, // 크기 감소
              random: true,
              anim: { 
                enable: false, // 크기 애니메이션 비활성화
                speed: 2, 
                size_min: 3, 
                sync: false 
              },
            },
            line_linked: {
              enable: false, // 연결선 비활성화
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.3, // 이동 속도 대폭 감소
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
            life: {
              duration: {
                value: -1, // 무한 지속 시간 (-1)
              },
              count: 0, // 재생성 비활성화
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { 
                enable: false, // 호버 이벤트 비활성화
                mode: "grab"
              },
              onclick: { 
                enable: false, // 클릭 이벤트 비활성화
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
          detectRetina: false, // 레티나 감지 비활성화
          smooth: true, // 부드러운 애니메이션 활성화
        }}
      />
    </div>
  );
} 