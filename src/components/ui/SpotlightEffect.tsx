import { useEffect, useRef } from "react";

export default function SmokeCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Helper function to create particles at specific coordinates
    const createParticles = (x, y) => {
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(x, y));
      }
    };

    // 1. Listen for standard mouse movement
    const onMouseMove = (e) => {
      createParticles(e.clientX, e.clientY);
    };

    // 2. Listen for mobile touch dragging
    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        createParticles(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove); // Added mobile listener

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 10; 
        this.life = 1; 
        
        const hue = (x / window.innerWidth) * 360;
        this.color = `hsla(${hue}, 80%, 60%, `; 
        
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = (Math.random() - 0.5) * 2 - 0.5; 
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.size += 0.5; 
        this.life -= 0.02; 
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.life + ")"; 
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove); // Clean up mobile listener
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60 dark:opacity-100"
    />
  );
}