import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pt-48 pb-16 sm:px-6 sm:pt-56 sm:pb-20 lg:pt-64 lg:pb-32">
      <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-8">
        {/* Left Column: Typography & CTA */}
        <div className="flex max-w-2xl flex-col items-start space-y-6 sm:space-y-8">
          <h1 className="text-[2.75rem] leading-[1.1] font-black tracking-tighter text-black uppercase sm:text-5xl sm:leading-[0.9] md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem]">
            Where
            <br />
            Structured
            <br />
            Data <span className="text-primary">Meets</span>
            <br />
            Visual Thinking
          </h1>

          <div className="border-l-[3px] border-lime-800 pl-4 sm:border-l-4 sm:pl-6">
            <p className="max-w-lg text-base leading-relaxed font-medium text-neutral-600 sm:text-lg md:text-xl">
              Break the cells. Bridge the canvas. GridLoom merges the analytical power of
              spreadsheets with the infinite flexibility of a whiteboard.
            </p>
          </div>

          <button
            className="group bg-primary flex items-center gap-2 rounded-lg border-[3px] border-black px-6 py-3 text-xs font-black tracking-widest text-black uppercase shadow-[4px_4px_0_#000] transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000] sm:px-8 sm:py-4 sm:text-sm md:text-base md:shadow-[6px_6px_0_#000] md:hover:shadow-[8px_8px_0_#000]"
            aria-label="Start building"
          >
            Start Building
            <ArrowUpRight
              size={20}
              strokeWidth={3}
              className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-5 sm:w-5"
            />
          </button>
        </div>

        {/* Right Column: Visual Component */}
        <div className="relative mx-auto mt-10 w-full max-w-md px-4 sm:mt-16 sm:max-w-lg sm:px-0 lg:mt-0 lg:ml-auto lg:max-w-2xl">
          {/* Neon Green Abstract Background Shapes */}
          <div className="bg-secondary absolute -top-3 -left-3 h-[85%] w-[85%] rounded-2xl sm:-top-6 sm:-left-6 md:rounded-[2rem]"></div>
          <div className="bg-secondary absolute -right-3 -bottom-3 h-[85%] w-[85%] rounded-2xl sm:-right-6 sm:-bottom-6 md:rounded-[2rem]"></div>

          <div className="border-primary relative z-10 w-full overflow-hidden rounded-2xl border-2 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:border-0 sm:shadow-2xl md:rounded-[2rem]">
            <Image
              src="/images/hero-v2.webp"
              alt="GridLoom Interface Preview"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
