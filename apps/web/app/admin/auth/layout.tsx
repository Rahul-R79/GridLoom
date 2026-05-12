'use client';

import { ReactNode } from 'react';

export default function AdminAuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-neutral-100 p-4 sm:p-8">
      {/* Admin Auth Card Wrapper */}
      <div className="w-full max-w-[520px]">{children}</div>
    </main>
  );
}
