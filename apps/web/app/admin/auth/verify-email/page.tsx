'use client';

import Link from 'next/link';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AdminVerifyEmailPage() {
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
    <div className="w-full border-[3px] border-black bg-white p-6 shadow-[12px_12px_0_#000] sm:p-12">
      {/* Icon Section */}
      <div className="mb-8 flex justify-center">
        <div className="bg-primary relative flex h-16 w-16 rotate-[-5deg] items-center justify-center border-[3px] border-black shadow-[4px_4px_0_#000]">
          <Mail className="text-white" size={32} strokeWidth={3} />
        </div>
      </div>

      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl leading-none font-black tracking-tighter text-black uppercase sm:text-5xl">
          CHECK YOUR EMAIL
        </h1>
        <p className="text-sm font-medium text-neutral-500 sm:text-base">
          We sent a 6-digit code to
          <br className="hidden sm:block" />
          <span className="font-bold text-black">admin@gridloom.com</span>
        </p>
      </div>

      {/* Form Section */}
      <form className="flex flex-col space-y-8">
        {/* OTP Inputs */}
        <div className="flex justify-between gap-2 sm:gap-4">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength={1}
              onChange={handleInput}
              className="focus:border-primary focus:ring-primary h-14 w-full border-2 border-black bg-neutral-50 text-center text-xl font-black focus:ring-1 focus:outline-none sm:h-16 sm:text-2xl"
              autoFocus={i === 0}
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-tertiary flex w-full items-center justify-center gap-3 border-[3px] border-black py-4 text-sm font-black tracking-widest text-black uppercase shadow-[6px_6px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000] sm:text-base"
        >
          VERIFY <ArrowRight size={20} className="stroke-[3]" />
        </button>
      </form>

      {/* Resend Section */}
      <div className="mt-8 text-center">
        <p className="mb-2 text-[10px] font-black tracking-widest text-neutral-600 uppercase sm:text-xs">
          DIDN&apos;T RECEIVE THE CODE?
        </p>
        <div className="flex items-center justify-center gap-2 text-[10px] font-black tracking-widest uppercase sm:text-xs">
          <button type="button" className="text-primary transition-colors hover:underline">
            RESEND CODE
          </button>
          <span className="bg-neutral-100 px-2 py-1 text-neutral-500">45s</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 mb-8 h-[3px] w-full bg-black"></div>

      {/* Footer Link */}
      <div className="flex justify-center">
        <Link
          href="/admin/auth/signin"
          className="flex items-center gap-2 text-[10px] font-black tracking-widest text-black uppercase transition-colors hover:text-neutral-600 sm:text-xs"
        >
          <ArrowLeft size={16} className="stroke-[3]" /> BACK TO LOGIN
        </Link>
      </div>
    </div>
  );
}
