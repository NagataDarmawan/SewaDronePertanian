'use client';

import { useState, useEffect, useCallback } from 'react';

export function useAutoSlide(length: number, intervalTime = 6000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(timer);
  }, [length, intervalTime, nextSlide]);

  return { currentIndex, nextSlide, prevSlide, setCurrentIndex };
}