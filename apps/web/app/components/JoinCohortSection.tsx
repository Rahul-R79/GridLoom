'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function JoinCohortSection() {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="bg-primary relative border-[4px] border-black px-6 py-16 text-center shadow-[12px_12px_0_#000] sm:px-12 sm:py-20 lg:p-24 lg:shadow-[24px_24px_0_#000]">
          {/* Open Source Tag */}
          <div className="bg-tertiary absolute -top-6 -right-4 rotate-[15deg] border-[3px] border-black px-4 py-2 shadow-[4px_4px_0_#000] sm:-top-8 sm:-right-8 sm:px-6">
            <span className="text-[10px] font-black tracking-widest text-black uppercase sm:text-xs">
              OPEN SOURCE
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-black tracking-tighter text-white uppercase sm:text-6xl lg:text-7xl">
              READY TO WEAVE?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed font-medium text-blue-100 sm:text-lg lg:mb-14 lg:text-xl">
              Help us build the bridge. Join the early-access cohort and be the first to shape the
              future of GridLoom.
            </p>

            <Link
              href="/signup"
              className="group relative inline-block border-[3px] border-black bg-neutral-900 px-8 py-4 text-sm font-black tracking-widest text-white uppercase shadow-[6px_6px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_#000] sm:px-10 sm:py-5 sm:text-base"
            >
              <span className="flex items-center gap-2">
                START BUILDING <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
