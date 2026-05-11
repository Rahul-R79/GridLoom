'use client';

import Image from 'next/image';
import { Star, Users, Rocket, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const marqueeItems = [
    {
      id: 1,
      icon: <Star className="text-tertiary h-4 w-4 shrink-0 sm:h-5 sm:w-5" fill="currentColor" />,
      text: 'OPEN SOURCE',
    },
    {
      id: 2,
      icon: <Users className="h-4 w-4 shrink-0 text-blue-400 sm:h-5 sm:w-5" />,
      text: 'COMMUNITY DRIVEN',
    },
    {
      id: 3,
      icon: <Rocket className="text-tertiary h-4 w-4 shrink-0 sm:h-5 sm:w-5" />,
      text: 'AUTOMATIC',
    },
    {
      id: 4,
      icon: <Lock className="h-4 w-4 shrink-0 text-pink-500 sm:h-5 sm:w-5" />,
      text: 'YOUR DATA, YOUR RULES',
    },
  ];

  return (
    <section className="relative flex w-full flex-col overflow-hidden pt-16 pb-0 sm:pt-24 lg:pt-32">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-10 px-4 pb-16 sm:px-8 sm:pb-24 lg:flex-row lg:items-start lg:gap-8 lg:px-16">
        {/* Left Column */}
        <div className="flex w-full flex-col items-start space-y-6 sm:space-y-8 lg:mt-12 lg:w-[45%]">
          {/* Badge */}
          <div className="bg-tertiary inline-block border-[3px] border-black px-3 py-1 text-xs font-black text-black uppercase shadow-[3px_3px_0_#000] sm:px-4 sm:py-1.5 sm:text-sm sm:shadow-[4px_4px_0_#000]">
            ABOUT GRIDLOOM
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-[1.1] font-black tracking-tight text-neutral-800 uppercase sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1.05]">
            <span className="mb-2 block">MORE THAN</span>
            <span className="bg-primary inline-block px-2 py-1 text-white">SPREADSHEETS.</span>
          </h1>

          {/* Paragraph */}
          <p className="max-w-lg text-base leading-relaxed font-medium text-neutral-600 sm:text-lg lg:text-xl">
            Stop choosing between the spreadsheet you need and the whiteboard you love. GridLoom is
            the spatial operating system for your logic. We&apos;ve built the bridge that allows
            your data to flow freely between structured grids and infinite canvases. No more
            friction. Just flow.
          </p>

          {/* Cards */}
          <div className="flex w-full flex-col gap-4 pt-2 sm:flex-row">
            <div className="flex flex-1 flex-col justify-center border-[3px] border-black bg-neutral-200 p-4 shadow-[4px_4px_0_#000] sm:p-6">
              <div className="mb-1 flex items-center gap-2 text-xl font-black text-black sm:text-2xl">
                <span className="text-2xl leading-none sm:text-3xl">∞</span> CANVAS
              </div>
              <div className="text-[10px] font-bold tracking-wide text-neutral-500 uppercase sm:text-xs">
                INFINITE THINKING
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center border-[3px] border-black bg-neutral-200 p-4 shadow-[4px_4px_0_#000] sm:p-6">
              <div className="mb-1 flex items-center gap-2 text-xl font-black text-black sm:text-2xl">
                <span className="text-2xl leading-none sm:text-3xl">0</span> TABS
              </div>
              <div className="text-[10px] font-bold tracking-wide text-neutral-500 uppercase sm:text-xs">
                ZERO CONTEXT SWITCHING
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-[50%] lg:justify-end">
          <div className="relative mr-2 mb-2 w-full max-w-[800px] overflow-hidden border-[3px] border-black bg-white shadow-[8px_8px_0_#000] sm:mr-3 sm:mb-3 sm:shadow-[12px_12px_0_#000] lg:mr-4 lg:mb-4 lg:shadow-[16px_16px_0_#000]">
            <Image
              src="/images/sheet.webp"
              alt="GridLoom Spreadsheet Interface"
              width={1600}
              height={1200}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full overflow-hidden border-y-4 border-black bg-[#0a0a0a] text-white">
        {/* Mobile: Autoplay Marquee */}
        <div className="flex py-4 md:hidden">
          <motion.div
            className="flex shrink-0 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 15 }}
          >
            {/* Render items twice to create the infinite scroll effect */}
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex shrink-0 items-center justify-center gap-2 border-r border-neutral-800 px-6 text-xs font-bold tracking-widest uppercase sm:text-sm"
              >
                {item.icon} <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: Static Flex */}
        <div className="mx-auto hidden w-full max-w-[1400px] flex-row items-center justify-between divide-x divide-neutral-800 px-12 py-4 text-sm font-bold tracking-widest uppercase md:flex lg:text-base">
          <div className="flex w-auto items-center justify-center gap-2 px-4 text-center lg:gap-3 lg:px-6">
            <Star className="text-tertiary h-5 w-5 shrink-0" fill="currentColor" />{' '}
            <span>OPEN SOURCE</span>
          </div>
          <div className="flex w-auto items-center justify-center gap-2 px-4 text-center lg:gap-3 lg:px-6">
            <Users className="h-5 w-5 shrink-0 text-blue-400" /> <span>COMMUNITY DRIVEN</span>
          </div>
          <div className="flex w-auto items-center justify-center gap-2 px-4 text-center lg:gap-3 lg:px-6">
            <Rocket className="text-tertiary h-5 w-5 shrink-0" /> <span>AUTOMATIC</span>
          </div>
          <div className="flex w-auto items-center justify-center gap-2 px-4 text-center lg:gap-3 lg:px-6">
            <Lock className="h-5 w-5 shrink-0 text-pink-500" /> <span>YOUR DATA, YOUR RULES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
