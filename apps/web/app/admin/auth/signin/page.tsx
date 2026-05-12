'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function AdminSigninPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      {/* Decorative Top-Right Square */}
      <div className="bg-primary absolute -top-2 -right-2 z-10 h-8 w-8 rotate-[5deg] border-[3px] border-black shadow-[4px_4px_0_#000]"></div>

      <div className="w-full border-[3px] border-black bg-white p-8 shadow-[12px_12px_0_#000] sm:p-12">
        {/* Logo and Admin Tag */}
        <div className="mb-8">
          <h1 className="mb-2 text-5xl font-black tracking-tighter text-black uppercase sm:text-6xl">
            GRIDLOOM
          </h1>
          <div className="bg-primary inline-block border-[3px] border-black px-4 py-1 text-xs font-black tracking-widest text-black uppercase">
            ADMIN PANEL
          </div>
          <div className="mt-8 h-[3px] w-full bg-black"></div>
        </div>

        {/* Login Form */}
        <form className="flex flex-col space-y-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs"
            >
              EMAIL ADDRESS
            </label>
            <input
              id="email"
              type="email"
              placeholder="admin@gridloom.net"
              className="focus:border-primary focus:ring-primary w-full border-2 border-black bg-neutral-50 p-4 text-sm font-medium text-black placeholder:text-neutral-400 focus:ring-1 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs"
            >
              PASSWORD
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="focus:border-primary focus:ring-primary w-full border-2 border-black bg-neutral-50 p-4 pr-12 text-sm font-medium text-black placeholder:text-neutral-400 focus:ring-1 focus:outline-none"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between py-2">
            <label className="flex cursor-pointer items-center gap-3">
              <div className="relative flex h-6 w-6 items-center justify-center">
                <input
                  type="checkbox"
                  className="peer checked:bg-primary h-full w-full cursor-pointer appearance-none border-2 border-black bg-white transition-all"
                />
                <svg
                  className="pointer-events-none absolute hidden h-4 w-4 text-white peer-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs">
                REMEMBER ME
              </span>
            </label>
            <Link
              href="/admin/auth/reset-password"
              className="text-primary hover:text-primary/80 text-[10px] font-black tracking-widest uppercase underline underline-offset-4 sm:text-xs"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-tertiary mt-4 flex w-full items-center justify-center gap-3 border-[3px] border-black py-4 text-sm font-black tracking-widest text-black uppercase shadow-[8px_8px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000] sm:text-base"
          >
            SIGN IN <ArrowRight size={20} />
          </button>
        </form>

        {/* Divider and Restriction Footer */}
        <div className="mt-10 mb-8 h-[3px] w-full bg-black"></div>
        <div className="text-center">
          <p className="mx-auto max-w-[280px] text-[10px] leading-relaxed font-black tracking-widest text-neutral-500 uppercase sm:text-xs">
            THIS PORTAL IS RESTRICTED TO AUTHORIZED ADMINISTRATORS ONLY.
          </p>
        </div>
      </div>
    </div>
  );
}
