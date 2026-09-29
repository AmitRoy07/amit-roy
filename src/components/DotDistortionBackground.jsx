import { useEffect, useRef } from "react";

const DotDistortionBackground = ({ className = "" }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1000, y: -1000, active: false };
    let dots = [];
    let frameId;
    let isVisible = !document.hidden;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const gap = width < 640 ? 18 : 22;

      canvas.width = Math.max(1, Math.floor(width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(height * pixelRatio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      dots = [];
      for (let y = gap / 2; y < height; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          dots.push({
            homeX: x,
            homeY: y,
            x,
            y,
            velocityX: 0,
            velocityY: 0,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const movePointer = (event) => {
      const rect = container.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 &&
        pointer.x <= rect.width &&
        pointer.y >= 0 &&
        pointer.y <= rect.height;
    };

    const clearPointer = () => {
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const render = (time) => {
      const { width, height } = container.getBoundingClientRect();
      context.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        const dx = dot.x - pointer.x;
        const dy = dot.y - pointer.y;
        const distance = Math.hypot(dx, dy) || 1;
        const influence = pointer.active ? Math.max(0, 1 - distance / 145) : 0;

        if (influence > 0) {
          const force = influence * influence * 3.4;
          dot.velocityX += (dx / distance) * force;
          dot.velocityY += (dy / distance) * force;
        }

        dot.velocityX += (dot.homeX - dot.x) * 0.018;
        dot.velocityY += (dot.homeY - dot.y) * 0.018;
        dot.velocityX *= 0.88;
        dot.velocityY *= 0.88;
        dot.x += dot.velocityX;
        dot.y += dot.velocityY;

        const pulse = reduceMotion.matches
          ? 0
          : (Math.sin(time * 0.0014 + dot.phase) + 1) * 0.035;
        const opacity = 0.7 + influence * 0.55 + pulse;

        context.beginPath();
        context.fillStyle = `rgba(207, 163, 85, ${opacity})`;
        context.arc(dot.x, dot.y, 0.85 + influence * 1.35, 0, Math.PI * 2);
        context.fill();
      });

      if (isVisible && !reduceMotion.matches)
        frameId = window.requestAnimationFrame(render);
    };

    const observer = new ResizeObserver(resize);
    const visibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !reduceMotion.matches) {
        window.cancelAnimationFrame(frameId);
        frameId = window.requestAnimationFrame(render);
      }
    };

    resize();
    observer.observe(container);
    window.addEventListener("pointermove", movePointer, { passive: true });
    window.addEventListener("pointerleave", clearPointer, { passive: true });
    document.addEventListener("visibilitychange", visibilityChange);

    if (reduceMotion.matches) render(0);
    else frameId = window.requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", movePointer);
      window.removeEventListener("pointerleave", clearPointer);
      document.removeEventListener("visibilitychange", visibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
};

export default DotDistortionBackground;
