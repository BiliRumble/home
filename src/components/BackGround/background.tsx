import { useEffect, useRef, useState } from "react";
import styles from "./background.module.css";

type Particle = {
  x: number;
  y: number;
  speed: number;
  size: number;
  color: string;
  angle: number;
  RotationSpeed: number;
};

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles] = useState<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (particles.length > 0) return;

    if (!canvas) {
      console.error("[BGPL] Unable to get canvas element");
      return;
    }

    const particlecount = window.innerWidth > 0 ? window.innerWidth > 768 ? Math.max(100, Math.min(500, window.innerWidth / 2)) : Math.max(10, Math.min(25, window.innerWidth / 2)) : 1;
    console.debug("[BGPL] will create %1 particles.", particlecount);

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      console.error("[BGPL] Unable to get canvas context");
      return;
    }

    // 初始化粒子
    for (let i = 0; i < particlecount; i++) {
      const particle = {
        x: window.innerWidth * Math.random(),
        y: window.innerHeight * Math.random(),
        speed: Math.random() * 0.5 + 0.5,
        size: Math.random() * 2 + 1,
        color: `white`,
        angle: Math.floor(Math.random() * (50 - 40 + 1)) + 40,
        RotationSpeed: Math.floor(Math.random() * (0.1 - 0.01 + 0.1)) + 0.01,
      };
      particles.push(particle);
    }

    function drawParticles() {
      if (!context || !canvas) {
        console.error("[BGPL] Unable to get canvas context");
        return;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        context.translate(particle.x + particle.size / 2, particle.y + particle.size / 2);
        context.rotate(particle.angle);
        context.fillStyle = particle.color;
        context.fillRect(
          -particle.size / 2,
          -particle.size / 2,
          particle.size,
          particle.size
        );
        context.rotate(-particle.angle);
        context.translate(
          -(particle.x + particle.size / 2),
          -(particle.y + particle.size / 2)
        );

        // 更新粒子位置
        particle.x += particle.speed * Math.cos(particle.angle);
        particle.y += particle.speed * Math.sin(particle.angle);

        // 粒子碰到画布边缘反弹
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.angle = -(Math.PI -particle.angle);
        } else if (particle.x < 0 || particle.x > canvas.width) {
          particle.angle = Math.PI - particle.angle;
        }

        if (particle.y < 0) {
          particle.y = 0;
        } else if (particle.y > canvas.height) {
          particle.y = canvas.height;
        }
      });
    }

    function move() {
      drawParticles();
      requestAnimationFrame(move);
    }

    move();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas_background} />;
};

export default CanvasBackground;
