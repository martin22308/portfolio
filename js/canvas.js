/**
 * Interactive Neural Network Canvas Animation
 * Renders an AI-inspired dynamic particle & synapse network in the background
 */

export function initNeuralCanvas(canvasId = "neural-canvas") {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let animationFrameId;
  let width = 0;
  let height = 0;

  // Particle configuration
  const particles = [];
  const particleCountRatio = 0.00007; // proportional to viewport area
  const maxDistance = 140;
  const mouse = { x: null, y: null, radius: 160 };

  // Color palette: Warm beige and neural gold
  const goldColor = "rgba(229, 169, 60, ";
  const beigeColor = "rgba(245, 235, 225, ";

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    initParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.55;
      this.vy = (Math.random() - 0.5) * 0.55;
      this.radius = Math.random() * 1.8 + 1.2;
      this.isGold = Math.random() > 0.65;
      this.alpha = Math.random() * 0.45 + 0.35;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseVal = Math.random() * Math.PI;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x < 0) this.x = width;
      else if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      else if (this.y > height) this.y = 0;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.8;
          this.y -= (dy / dist) * force * 1.8;
        }
      }

      this.pulseVal += this.pulseSpeed;
    }

    draw() {
      const currentAlpha = this.alpha + Math.sin(this.pulseVal) * 0.15;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.isGold 
        ? `${goldColor}${Math.max(0.1, currentAlpha)})` 
        : `${beigeColor}${Math.max(0.1, currentAlpha * 0.8)})`;
      ctx.shadowBlur = this.isGold ? 8 : 0;
      ctx.shadowColor = "rgba(229, 169, 60, 0.4)";
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particles.length = 0;
    const targetCount = Math.max(35, Math.min(85, Math.floor(width * height * particleCountRatio)));
    for (let i = 0; i < targetCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    const len = particles.length;
    for (let i = 0; i < len; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < len; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const strength = 1 - dist / maxDistance;
          const alpha = strength * 0.22;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p1.isGold || p2.isGold
            ? `${goldColor}${alpha * 1.2})`
            : `${beigeColor}${alpha})` ;
          ctx.lineWidth = strength * 0.9;
          ctx.stroke();
        }
      }

      // Connect to mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = p1.x - mouse.x;
        const dy = p1.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const strength = 1 - dist / mouse.radius;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `${goldColor}${strength * 0.4})`;
          ctx.lineWidth = strength * 1.2;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();

    animationFrameId = requestAnimationFrame(animate);
  }

  // Event Listeners
  window.addEventListener("resize", resize);

  const container = canvas.parentElement;
  container.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  container.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Check prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    resize();
    initParticles();
    particles.forEach(p => p.draw());
    drawConnections();
    return; // Do not loop animation if user prefers reduced motion
  }

  resize();
  animate();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", resize);
  };
}
