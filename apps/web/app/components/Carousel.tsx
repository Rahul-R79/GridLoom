'use client';

import React, { useState, useEffect } from 'react';

interface CarouselProps {
  children: React.ReactNode;
  autoplayInterval?: number;
  className?: string;
  theme?: 'light' | 'dark';
}

export default function Carousel({
  children,
  autoplayInterval = 4000,
  className = '',
  theme = 'light',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;

  useEffect(() => {
    if (totalSlides <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [totalSlides, autoplayInterval]);

  if (totalSlides === 0) return null;

  const baseDotClass = theme === 'dark' ? 'border-white' : 'border-black';
  const activeDotClass = theme === 'dark' ? 'bg-white' : 'bg-black';

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-full overflow-hidden">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {childrenArray.map((child, idx) => (
            <div key={idx} className="w-full shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="mt-6 flex items-center gap-3">
          {childrenArray.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-3 w-3 rounded-full border-2 transition-colors ${baseDotClass} ${
                idx === currentIndex ? activeDotClass : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
