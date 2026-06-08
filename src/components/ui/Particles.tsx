import { useEffect, useRef } from 'react';

const COUNT  = 65;
const DIST   = 90;

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  r: number; a: number; c: string;
}

function makeDot(w: number, h: number, random = true): Dot {
  return {
    x:  random ? Math.random() * w : (Math.random() > .5 ? 0 : w),
    y:  random ? Math.random() * h : (Math.random() > .5 ? 0 : h),
    vx: (Math.random() - .5) * .45,
    vy: (Math.random() - .5) * .45,
    r:  Math.random() * 1.4 + .3,
    a:  Math.random() * .45 + .1,
    c:  Math.random() > .55 ? '#ff0077' : '#00f0ff',
  };
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots: Dot[] = Array.from({ length: COUNT }, () =>
      makeDot(canvas.width, canvas.height)
    );

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10 || d.x > canvas.width + 10 || d.y < -10 || d.y > canvas.height + 10) {
          dots[i] = makeDot(canvas.width, canvas.height, false);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = d.a;
        ctx.fillStyle   = d.c;
        ctx.shadowColor = d.c;
        ctx.shadowBlur  = 5;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        for (let j = i + 1; j < dots.length; j++) {
          const dx   = d.x - dots[j].x;
          const dy   = d.y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < DIST) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / DIST) * .09;
            ctx.strokeStyle = '#ff0077';
            ctx.lineWidth   = .6;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles" />;
}
