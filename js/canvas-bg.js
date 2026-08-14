/**
 * Interactive Constellation & Ambient Glow Canvas Background
 * High performance, crisp DPR rendering, mouse reactivity, dynamic accent matching
 */

(function () {
  'use strict';

  class AmbientCanvas {
    constructor() {
      this.canvas = document.getElementById('bg-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.numParticles = 60;
      this.maxDistance = 140;
      this.mouse = { x: -1000, y: -1000, radius: 180, active: false };
      this.accentColor = { r: 0, g: 240, b: 255 }; // Default cyan
      this.animationFrameId = null;

      this.init();
    }

    init() {
      this.updateAccentColor();
      this.resize();
      this.createParticles();
      this.bindEvents();
      this.animate();
    }

    updateAccentColor() {
      const computed = getComputedStyle(document.documentElement);
      const hex = computed.getPropertyValue('--accent-primary').trim() || '#00f0ff';
      this.accentColor = this.hexToRgb(hex);
    }

    hexToRgb(hex) {
      hex = hex.replace('#', '');
      if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
      }
      const num = parseInt(hex, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
      };
    }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.ctx.scale(dpr, dpr);

      // Adjust particle count based on screen area
      const area = this.width * this.height;
      this.numParticles = Math.floor(Math.min(90, Math.max(30, area / 16000)));
    }

    createParticles() {
      this.particles = [];
      for (let i = 0; i < this.numParticles; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.6 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulse: Math.random() * Math.PI
        });
      }
    }

    bindEvents() {
      window.addEventListener('resize', () => {
        this.resize();
        this.createParticles();
      });

      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.mouse.active = true;
      });

      window.addEventListener('mouseleave', () => {
        this.mouse.x = -1000;
        this.mouse.y = -1000;
        this.mouse.active = false;
      });

      // Listen for custom theme change events
      window.addEventListener('theme-changed', () => {
        this.updateAccentColor();
      });
    }

    animate() {
      this.ctx.clearRect(0, 0, this.width, this.height);

      const { r, g, b } = this.accentColor;

      // Mouse ambient halo
      if (this.mouse.active && this.mouse.x > 0 && this.mouse.y > 0) {
        const gradient = this.ctx.createRadialGradient(
          this.mouse.x, this.mouse.y, 0,
          this.mouse.x, this.mouse.y, this.mouse.radius * 1.5
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.09)`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.03)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.width, this.height);
      }

      // Update and draw particles
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from edges
        if (p.x < 0 || p.x > this.width) p.vx *= -1;
        if (p.y < 0 || p.y > this.height) p.vy *= -1;

        // Mouse interaction (gentle repulsion)
        if (this.mouse.active) {
          const dx = this.mouse.x - p.x;
          const dy = this.mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < this.mouse.radius) {
            const force = (1 - dist / this.mouse.radius) * 0.8;
            p.x -= (dx / dist) * force * 2;
            p.y -= (dy / dist) * force * 2;
          }
        }

        // Pulse alpha
        p.pulse += p.pulseSpeed;
        const currentAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));

        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;
        this.ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.6)`;
        this.ctx.shadowBlur = 8;
        this.ctx.fill();
        this.ctx.shadowBlur = 0; // reset shadow

        // Connect nearby particles
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < this.maxDistance) {
            const lineAlpha = (1 - dist / this.maxDistance) * 0.22;
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
            this.ctx.lineWidth = 0.8;
            this.ctx.stroke();
          }
        }
      }

      this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AmbientCanvas());
  } else {
    new AmbientCanvas();
  }
})();
