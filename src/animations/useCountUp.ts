import { useState, useEffect, useRef } from 'react';

export function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset ke 0 pas masuk layar, lalu jalankan animasi
          setCount(0);
          let startTime: number | null = null;
          let animationFrameId: number;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            const easeProgress = percentage * (2 - percentage);
            setCount(Math.floor(easeProgress * end));

            if (progress < duration) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          animationFrameId = requestAnimationFrame(animate);

          return () => cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.2 } // Mulai animasi saat 20% elemen terlihat di layar
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [end, duration]);

  // Kembalikan nilai count dan ref untuk dipasang ke elemen HTML
  return { count, ref: elementRef };
}