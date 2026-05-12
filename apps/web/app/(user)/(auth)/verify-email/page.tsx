'use client';

import Link from 'next/link';

export default function VerifyEmailPage() {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Remove non-numeric characters
    if (!/^\d*$/.test(val)) {
      e.target.value = '';
      return;
    }

    // Auto-focus next input
    if (val && e.target.nextElementSibling) {
      (e.target.nextElementSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="w-full border-[3px] border-black bg-white p-6 shadow-sm sm:p-12">
      <div className="mb-10">
        <h1 className="mb-4 text-3xl leading-none font-black tracking-tighter text-neutral-900 uppercase sm:text-5xl">
          VERIFY YOUR EMAIL
        </h1>
        <div className="border-primary border-l-4 pl-4">
          <p className="text-sm font-bold text-neutral-500 sm:text-base">
            We&apos;ve sent a 6-digit code to your email. Please enter it below.
          </p>
        </div>
      </div>

      <form className="flex flex-col space-y-10">
        <div className="flex justify-between gap-2 sm:gap-4">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength={1}
              onChange={handleInput}
              className="focus:border-primary focus:ring-primary h-12 w-full border-2 border-black bg-neutral-100 text-center text-xl font-black text-black focus:ring-1 focus:outline-none sm:h-16 sm:text-2xl"
              autoFocus={i === 0}
            />
          ))}
        </div>

        <button
          type="submit"
          className="bg-tertiary w-full border-[3px] border-black py-4 text-sm font-black tracking-widest text-black uppercase shadow-[8px_8px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000] sm:text-base"
        >
          VERIFY & START WEAVING →
        </button>
      </form>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 text-xs font-bold tracking-widest text-neutral-600 uppercase sm:text-sm">
        <button type="button" className="text-primary transition-colors hover:underline">
          RESEND CODE
        </button>
        <Link href="/signup" className="text-neutral-400 transition-colors hover:text-black">
          CHANGE EMAIL
        </Link>
      </div>
    </div>
  );
}
