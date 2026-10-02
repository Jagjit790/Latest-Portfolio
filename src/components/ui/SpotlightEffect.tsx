import { useEffect, useRef } from "react";

export default function SmokeCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    // Resize canvas to fill the screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Track mouse movement
    window.addEventListener("mousemove", (e) => {
      // Add 2 smoke particles every time the mouse moves
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    });

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 10; // Starting size of the smoke puff
        this.life = 1; // Opacity
        
        // Creates a rainbow effect based on where the mouse is on the screen
        const hue = (x / window.innerWidth) * 360;
        this.color = `hsla(${hue}, 80%, 60%, `; // We leave the alpha open to attach this.life later
        
        // Randomize movement slightly (drifts outward and slightly upward)
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = (Math.random() - 0.5) * 2 - 0.5; 
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.size += 0.5; // Smoke expands as it ages
        this.life -= 0.02; // Smoke fades out
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Combine the color with the current life (opacity)
        ctx.fillStyle = this.color + this.life + ")"; 
        ctx.fill();
      }
    }

    const animate = () => {
      // Clear the canvas every frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        
        // Remove particles once they become invisible
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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // pointer-events-none ensures it doesn't block you from clicking links
      // z-50 places it over your background but under your navigation (if nav has higher z-index)
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60 dark:opacity-100"
    />
  );
}