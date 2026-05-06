'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ScrollMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress while the container is in the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Apply spring physics to the scroll progress for buttery-smooth inertia
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  // Map the scroll progress (0 to 1) to horizontal pixel translations (0% to -25%)
  // The bands are 200vw wide, so moving -25% safely traverses the screen without clipping
  const x1 = useTransform(smoothProgress, [0, 1], ['0%', '-25%']);
  const x2 = useTransform(smoothProgress, [0, 1], ['-25%', '0%']);
  const x3 = useTransform(smoothProgress, [0, 1], ['0%', '-25%']);

  // Duplicate the text content enough times to ensure it overflows the viewport gracefully
  const text1 = Array(10).fill('SPREADSHEETS + WHITEBOARDS ♦ ');
  const text2 = Array(10).fill('OPEN SOURCE ★ ');
  const text3 = Array(10).fill('AI POWERED WORKFLOWS ♦ ');

  return (
    <div
      ref={containerRef}
      className="relative h-[350px] w-full overflow-hidden bg-white md:h-[700px]"
    >
      {/* Top Band: Neon Green, angled downwards */}
      <motion.div
        style={{ x: x1 }}
        className="bg-secondary absolute top-[20%] z-30 -ml-[50vw] flex w-[200vw] rotate-[3deg] border-y-4 border-black py-3 whitespace-nowrap text-black shadow-[0_8px_0_0_#000] md:top-[15%] md:py-6"
      >
        <div className="flex gap-4 text-3xl font-black tracking-tight uppercase md:gap-8 md:text-5xl lg:text-6xl">
          {text1.map((text, i) => (
            <span key={i} className="shrink-0">
              {text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Middle Band: Blue, angled upwards */}
      <motion.div
        style={{ x: x2 }}
        className="bg-primary absolute top-[50%] z-20 -ml-[50vw] flex w-[200vw] -rotate-[3deg] border-y-4 border-black py-3 whitespace-nowrap text-white shadow-[0_8px_0_0_#000] md:top-[45%] md:py-6"
      >
        <div className="flex gap-4 text-3xl font-black tracking-tight uppercase md:gap-8 md:text-5xl lg:text-6xl">
          {text2.map((text, i) => (
            <span key={i} className="shrink-0">
              {text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bottom Band: Light Gray, strictly horizontal */}
      <motion.div
        style={{ x: x3 }}
        className="absolute top-[80%] z-10 -ml-[50vw] flex w-[200vw] rotate-0 border-y-4 border-black bg-gray-200 py-3 whitespace-nowrap text-black shadow-[0_8px_0_0_#000] md:top-[75%] md:py-6"
      >
        <div className="flex gap-4 text-3xl font-black tracking-tight uppercase md:gap-8 md:text-5xl lg:text-6xl">
          {text3.map((text, i) => (
            <span key={i} className="shrink-0">
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
