'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isBluePage = pathname.includes('/signup') || pathname.includes('/forgot-password');
  const badgeColorClass = isBluePage ? 'bg-primary text-white' : 'bg-secondary text-black';

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-neutral-50 p-4 pt-24 sm:p-8 sm:pt-8">
      {/* GridLoom Badge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 sm:top-10 sm:left-10 sm:translate-x-0">
        <Link
          href="/"
          className={`${badgeColorClass} inline-block border-[3px] border-black px-4 py-2 text-lg font-black tracking-widest uppercase shadow-[6px_6px_0_#000] transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000] sm:text-xl`}
        >
          GRIDLOOM
        </Link>
      </div>

      {/* Auth Card Container */}
      <div className="w-full max-w-[480px]">{children}</div>
    </main>
  );
}
