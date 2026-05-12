'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Lock, HelpCircle } from 'lucide-react';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="relative">
      {/* Decorative Floating Elements */}
      <div className="bg-secondary absolute top-20 -left-12 hidden h-14 w-14 rotate-[-12deg] items-center justify-center border-[3px] border-black shadow-[4px_4px_0_#000] lg:flex">
        <Lock className="text-black" size={24} />
      </div>
      <div className="bg-primary absolute -right-8 bottom-10 hidden h-10 w-10 rotate-[15deg] items-center justify-center border-[3px] border-black shadow-[4px_4px_0_#000] lg:flex">
        <HelpCircle className="text-white" size={20} />
      </div>

      <div className="w-full border-[3px] border-black bg-white p-6 shadow-sm sm:p-12">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="mb-4 text-3xl leading-none font-black tracking-tighter text-neutral-900 uppercase sm:text-5xl">
            SET NEW PASSWORD
          </h1>
          <div className="border-primary border-l-4 pl-4">
            <p className="text-sm font-bold text-neutral-500 sm:text-base">
              Ensure your account is secure with a strong, unique password.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form className="flex flex-col space-y-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs"
            >
              NEW PASSWORD
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••••"
                className="focus:border-primary focus:ring-primary w-full border-2 border-black bg-neutral-100 p-4 pr-12 text-sm font-medium text-black placeholder:text-neutral-400 focus:ring-1 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-neutral-500 hover:text-black"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs"
            >
              CONFIRM NEW PASSWORD
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••••••"
                className="focus:border-primary focus:ring-primary w-full border-2 border-black bg-neutral-100 p-4 pr-12 text-sm font-medium text-black placeholder:text-neutral-400 focus:ring-1 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-neutral-500 hover:text-black"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-tertiary mt-4 w-full border-[3px] border-black py-4 text-sm font-black tracking-widest text-black uppercase shadow-[8px_8px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000] sm:text-base"
          >
            UPDATE PASSWORD & LOGIN →
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-12 text-center text-xs font-bold tracking-widest text-neutral-600 uppercase sm:text-sm">
          <Link href="/signin" className="text-neutral-400 transition-colors hover:text-black">
            ← BACK TO LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}
