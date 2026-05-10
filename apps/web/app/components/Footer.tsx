'use client';

import Link from 'next/link';
import { Box, Book, Share2, AtSign, MessageSquare } from 'lucide-react';

export default function Footer() {
  const productLinks = ['FEATURES', 'TEMPLATES', 'ROADMAP'];
  const resourceLinks = ['DOCS', 'BLOG', 'COMMUNITY'];

  return (
    <footer className="w-full bg-white px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Footer Block */}
        <div className="relative mb-16 overflow-hidden rounded-tr-[40px] rounded-br-[40px] border-[3px] border-black shadow-[16px_16px_0_#000]">
          {/* Top Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="flex flex-col items-start space-y-6 bg-white p-8 lg:p-12">
              <h2 className="text-3xl font-black tracking-tighter text-black">GridLoom</h2>
              <p className="max-w-[200px] text-xs leading-tight font-black tracking-widest text-neutral-500 uppercase">
                WHERE STRUCTURED DATA MEETS VISUAL THINKING.
              </p>
              <button className="bg-primary border-[3px] border-black px-8 py-3 text-xs font-black tracking-widest text-white uppercase shadow-[4px_4px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_#000]">
                START BUILDING
              </button>
            </div>

            {/* Product Column (Light Gray) */}
            <div className="flex flex-col border-t-[3px] border-l-[3px] border-black bg-neutral-100 p-8 md:border-t-0 md:border-l-0 lg:border-l-[3px] lg:p-12">
              <div className="mb-10 flex items-center gap-3">
                <Box className="text-primary h-5 w-5" strokeWidth={3} />
                <span className="text-sm font-black tracking-widest text-black">PRODUCT</span>
              </div>
              <ul className="space-y-5">
                {productLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-primary text-sm font-black tracking-widest text-neutral-800 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col border-t-[3px] border-l-[3px] border-black bg-white p-8 lg:border-t-0 lg:p-12">
              <div className="mb-10 flex items-center gap-3">
                <Book className="h-5 w-5 text-neutral-800" strokeWidth={3} />
                <span className="text-sm font-black tracking-widest text-black uppercase">
                  RESOURCES
                </span>
              </div>
              <ul className="space-y-5">
                {resourceLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-primary text-sm font-black tracking-widest text-neutral-800 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div className="bg-tertiary flex flex-col rounded-tr-[36px] border-t-[3px] border-l-[3px] border-black p-8 lg:border-t-0 lg:p-12">
              <div className="mb-10 flex items-center gap-3">
                <Share2 className="h-5 w-5 text-black" strokeWidth={3} />
                <span className="text-sm font-black tracking-widest text-black uppercase">
                  CONNECT
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="flex items-center gap-4 border-[3px] border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_#000]"
                >
                  <span className="text-lg font-bold">{'< >'}</span>
                  <span className="text-xs font-black tracking-widest text-black uppercase">
                    GITHUB
                  </span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 border-[3px] border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_#000]"
                >
                  <AtSign className="h-5 w-5" strokeWidth={3} />
                  <span className="text-xs font-black tracking-widest text-black uppercase">X</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 border-[3px] border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_#000]"
                >
                  <MessageSquare className="h-5 w-5" strokeWidth={3} />
                  <span className="text-xs font-black tracking-widest text-black uppercase">
                    DISCORD
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Bar */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-br-[36px] border-t-[3px] border-black bg-neutral-200 p-8 sm:flex-row">
            <div className="text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs">
              © 2026 GRIDLOOM · OPEN SOURCE
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs">
              <Link
                href="#"
                className="hover:text-primary underline decoration-2 underline-offset-4 transition-colors"
              >
                PRIVACY POLICY
              </Link>
              <Link
                href="#"
                className="hover:text-primary underline decoration-2 underline-offset-4 transition-colors"
              >
                TERMS OF SERVICE
              </Link>
              <Link
                href="#"
                className="hover:text-primary underline decoration-2 underline-offset-4 transition-colors"
              >
                SECURITY
              </Link>
            </div>
          </div>
        </div>

        {/* Rainbow Bar */}
        <div className="flex h-8 w-full overflow-hidden rounded-full border-[3px] border-black bg-white shadow-[4px_4px_0_#000]">
          <div className="bg-primary h-full flex-1 border-r-[3px] border-black" />
          <div className="bg-secondary h-full flex-1 border-r-[3px] border-black" />
          <div className="bg-tertiary h-full flex-1 border-r-[3px] border-black" />
          <div className="h-full flex-1 bg-neutral-800" />
        </div>
      </div>
    </footer>
  );
}
