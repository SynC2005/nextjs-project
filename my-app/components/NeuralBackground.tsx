"use client";

import React, { useEffect, useRef } from "react";

interface NeuralBackgroundProps {
  className?: string;
}

export default function NeuralBackground({ className = "" }: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Config
    const NEURON_COUNT = 90;
    const CONNECTION_DISTANCE = 170;
    const MIN_DISTANCE = 35;
    const PULSE_INTERVAL = 3200;

    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    class Neuron {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulseTime: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;

        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;

        this.radius = Math.random() * 2 + 1;
        this.pulseTime = Math.random() * PULSE_INTERVAL;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
          this.x = 0;
          this.vx = Math.abs(this.vx);
        } else if (this.x > w) {
          this.x = w;
          this.vx = -Math.abs(this.vx);
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy = Math.abs(this.vy);
        } else if (this.y > h) {
          this.y = h;
          this.vy = -Math.abs(this.vy);
        }

        this.pulseTime += 16.67;
        if (this.pulseTime >= PULSE_INTERVAL) this.pulseTime = 0;
      }

      draw(ctx2: CanvasRenderingContext2D) {
        const p = this.pulseTime / PULSE_INTERVAL;

        const pulseSize = p < 0.5 ? Math.sin((p * Math.PI) / 0.5) * 7 : 0;
        const brightness = p < 0.5 ? 0.22 + Math.sin((p * Math.PI) / 0.5) * 0.7 : 0.22;

        const glow = ctx2.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius + pulseSize + 15
        );
        glow.addColorStop(0, `rgba(56, 189, 248, ${brightness * 0.75})`);
        glow.addColorStop(0.45, `rgba(56, 189, 248, ${brightness * 0.22})`);
        glow.addColorStop(1, "rgba(56, 189, 248, 0)");

        ctx2.fillStyle = glow;
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.radius + pulseSize + 15, 0, Math.PI * 2);
        ctx2.fill();

        ctx2.fillStyle = `rgba(147, 197, 253, ${brightness})`;
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.radius + pulseSize, 0, Math.PI * 2);
        ctx2.fill();
      }
    }

    const neurons: Neuron[] = [];
    for (let i = 0; i < NEURON_COUNT; i++) neurons.push(new Neuron());

    let rafId = 0;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of neurons) n.update();

      // Draw connections
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const a = neurons[i];
          const b = neurons[j];

          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE && dist > MIN_DISTANCE) {
            const opacity = Math.max(0, 1 - dist / CONNECTION_DISTANCE);

            const avgPulse = (a.pulseTime + b.pulseTime) / (PULSE_INTERVAL * 2);
            const pulseBoost = avgPulse < 0.4 ? avgPulse / 0.4 : 0;

            const finalOpacity = opacity * 0.12 + pulseBoost * 0.22;

            const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            g.addColorStop(0, `rgba(59, 130, 246, ${finalOpacity})`);
            g.addColorStop(0.5, `rgba(96, 165, 250, ${finalOpacity * 1.2})`);
            g.addColorStop(1, `rgba(59, 130, 246, ${finalOpacity})`);

            ctx.strokeStyle = g;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            // Pulse travel
            if (pulseBoost > 0) {
              const t = (avgPulse % 0.4) / 0.4;
              const px = a.x + dx * t;
              const py = a.y + dy * t;

              const pg = ctx.createRadialGradient(px, py, 0, px, py, 8);
              pg.addColorStop(0, `rgba(147, 197, 253, ${pulseBoost * 0.9})`);
              pg.addColorStop(1, "rgba(147, 197, 253, 0)");

              ctx.fillStyle = pg;
              ctx.beginPath();
              ctx.arc(px, py, 8, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw neurons
      for (const n of neurons) n.draw(ctx);

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        display: 'block',
        pointerEvents: 'none',
        backgroundColor: '#030a1d' 
      }}
      aria-hidden="true"
    />
  );
}