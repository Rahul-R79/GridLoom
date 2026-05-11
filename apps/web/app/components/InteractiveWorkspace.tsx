'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Breakpoint = 'sm' | 'md' | 'lg';

interface CursorProps {
  color: string;
  name: string;
  size: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  showName: boolean;
}

// Scroll progress at which name tags become visible
const NAME_THRESHOLD = 0.5;

// Shared scroll-progress keyframes for cursor transforms
const X_PROGRESS = [0, 0.5, 0.6, 0.7, 0.8, 1];
const Y_PROGRESS = [0, 0.08, 0.18, 0.28, 0.38, 0.48, 0.58, 0.7, 0.8];
const SCALE_PROGRESS = [0, 0.48, 0.53, 0.58];

const X_SCALE: Record<Breakpoint, number> = { sm: 0.35, md: 0.6, lg: 1 };
const Y_SCALE: Record<Breakpoint, number> = { sm: 0.85, md: 0.75, lg: 1 };

const CURSOR_SIZE: Record<Breakpoint, { lead: number; other: number }> = {
  sm: { lead: 24, other: 16 },
  md: { lead: 30, other: 18 },
  lg: { lead: 36, other: 22 },
};
const SECTION_HEIGHT: Record<Breakpoint, string> = { sm: '250vh', md: '350vh', lg: '350vh' };

function getBreakpoint(width: number): Breakpoint {
  if (width < 640) return 'sm';
  if (width < 1024) return 'md';
  return 'lg';
}

/** Tracks viewport width and returns the current Tailwind-aligned breakpoint. */
function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>('lg');

  const handleResize = useCallback(() => {
    setBp(getBreakpoint(window.innerWidth));
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return bp;
}

/** Multiplies each value in an array by a factor for responsive scaling. */
function scale(values: number[], factor: number): number[] {
  return values.map((v) => v * factor);
}

/** Animated cursor with inline SVG arrow and a togglable name tag. */
function CollabCursor({ color, name, size, x, y, scale, showName }: CursorProps) {
  return (
    <motion.div className="pointer-events-none absolute" style={{ x, y, scale }}>
      <svg
        width={size}
        height={size * 1.17}
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L21 12L13.5 16L9 26L2 2Z"
          fill={color}
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <div
        className="-mt-1 ml-2 inline-block rounded-sm px-1.5 py-0.5 text-[8px] font-bold whitespace-nowrap transition-opacity duration-300 sm:ml-3 sm:px-2 sm:text-[10px]"
        style={{ backgroundColor: color, opacity: showName ? 1 : 0 }}
      >
        <span className="text-white">{name}</span>
      </div>
    </motion.div>
  );
}

export default function InteractiveWorkspace() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showNames, setShowNames] = useState(false);
  const bp = useBreakpoint();
  const xf = X_SCALE[bp];
  const yf = Y_SCALE[bp];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setShowNames(latest >= NAME_THRESHOLD);
  });

  const windowY = useTransform(scrollYProgress, [0, 0.35, 0.5, 1], [900, 900, 0, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, -300]);

  // Purple — lead cursor, starts centered then drifts left
  const purpleX = useTransform(scrollYProgress, X_PROGRESS, scale([0, 0, -120, -60, 90, 50], xf));
  const purpleY = useTransform(
    scrollYProgress,
    Y_PROGRESS,
    scale([0, 35, 80, 140, 200, 260, 280, 260, 270], yf)
  );
  const purpleScale = useTransform(scrollYProgress, SCALE_PROGRESS, [1.3, 1.3, 0.85, 1]);

  // Blue — splits right after landing
  const blueX = useTransform(scrollYProgress, X_PROGRESS, scale([-35, -35, 160, 220, 90, -60], xf));
  const blueY = useTransform(
    scrollYProgress,
    Y_PROGRESS,
    scale([25, 60, 105, 165, 225, 285, 310, 280, 295], yf)
  );
  const blueScale = useTransform(scrollYProgress, SCALE_PROGRESS, [0.7, 0.7, 0.6, 1]);

  // Pink — splits left after landing
  const pinkX = useTransform(
    scrollYProgress,
    X_PROGRESS,
    scale([40, 40, -150, -240, -100, 140], xf)
  );
  const pinkY = useTransform(
    scrollYProgress,
    Y_PROGRESS,
    scale([30, 65, 105, 165, 225, 280, 300, 270, 285], yf)
  );
  const pinkScale = useTransform(scrollYProgress, SCALE_PROGRESS, [0.7, 0.7, 0.6, 1]);

  const { lead, other } = CURSOR_SIZE[bp];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white"
      style={{ height: SECTION_HEIGHT[bp] }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center overflow-hidden bg-white">
        <div className="h-16 w-full shrink-0 sm:h-20 lg:h-[110px]" />

        <motion.div className="z-20 shrink-0 px-4 text-center" style={{ y: headlineY }}>
          <h2 className="text-2xl leading-tight font-black tracking-tighter uppercase sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-primary">A NEW ERA OF WORK, </span>
            <span className="text-tertiary">WHERE</span>
            <br />
            <span className="text-tertiary">DATA MEETS CANVAS</span>
          </h2>
          <Link
            href="/login"
            className="bg-primary mt-4 inline-block cursor-pointer border-2 border-black px-6 py-2.5 text-xs font-bold tracking-widest text-white uppercase shadow-[4px_4px_0_#000] transition-all hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] sm:mt-6 sm:border-[3px] sm:px-8 sm:py-3 sm:text-sm sm:shadow-[6px_6px_0_#000] sm:hover:shadow-[4px_4px_0_#000]"
          >
            START BUILDING →
          </Link>
        </motion.div>

        <div className="absolute top-[35%] left-1/2 z-30 -translate-x-1/2 sm:top-[45%]">
          <CollabCursor
            color="#8b5cf6"
            name="You"
            size={lead}
            x={purpleX}
            y={purpleY}
            scale={purpleScale}
            showName={showNames}
          />
          <CollabCursor
            color="#60a5fa"
            name="Alex"
            size={other}
            x={blueX}
            y={blueY}
            scale={blueScale}
            showName={showNames}
          />
          <CollabCursor
            color="#f472b6"
            name="Sam"
            size={other}
            x={pinkX}
            y={pinkY}
            scale={pinkScale}
            showName={showNames}
          />
        </div>

        <motion.div
          className="absolute left-1/2 z-10 w-[95%] max-w-5xl overflow-hidden border-2 border-black bg-white shadow-[8px_8px_0_#000] sm:border-[3px] sm:shadow-[16px_16px_0_#000]"
          style={{ bottom: '40px', x: '-50%', y: windowY, rotate: bp === 'sm' ? 0 : -1 }}
        >
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/images/workspace.webp"
              alt="GridLoom Workspace"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
