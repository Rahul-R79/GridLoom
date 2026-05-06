'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'LOGIN', href: '/login' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex justify-center px-6 py-6">
      <nav
        className="relative flex w-full max-w-6xl items-center justify-between rounded-xl border-[3px] border-black bg-white px-6 py-4 shadow-[8px_8px_0_#000]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="hover:text-primary text-2xl font-black tracking-tighter text-black transition-colors duration-200"
          aria-label="GridLoom home"
        >
          GridLoom
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="m-0 hidden list-none items-center gap-10 p-0 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="hover:text-primary text-[0.85rem] font-black tracking-widest text-black transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section (GitHub + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Rahul-R79/GridLoom"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary inline-flex items-center gap-2 rounded-lg border-[3px] border-black px-4 py-2.5 text-[0.75rem] font-black tracking-widest text-white shadow-[3px_3px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#000]"
            aria-label="Star GridLoom on GitHub"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            <span className="hidden sm:inline">STAR ON GITHUB</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center rounded-lg border-[3px] border-black bg-white p-2 shadow-[3px_3px_0_#000] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#000] md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="animate-in fade-in zoom-in absolute top-[calc(100%+16px)] right-0 left-0 rounded-xl border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000] duration-200 md:hidden">
            <ul className="m-0 flex list-none flex-col gap-6 p-0">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-primary block text-lg font-black tracking-widest text-black transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
