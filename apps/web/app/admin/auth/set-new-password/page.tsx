'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ArrowUpRight, Key } from 'lucide-react';

export default function AdminSetNewPasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex w-full flex-col items-center">
      {/* Main Card */}
      <div className="mb-10 w-full border-[3px] border-black bg-white p-8 shadow-[12px_12px_0_#000] sm:p-12">
        {/* Icon Section */}
        <div className="mb-6 flex justify-center">
          <div className="bg-tertiary relative flex h-14 w-16 rotate-[-5deg] items-center justify-center border-[3px] border-black shadow-[4px_4px_0_#000]">
            <Key className="h-8 w-8 text-black" strokeWidth={3} />
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-4xl leading-none font-black tracking-tighter text-black uppercase sm:text-5xl">
            SET A NEW
            <br />
            PASSWORD
          </h1>
          <p className="text-sm font-bold text-neutral-600 sm:text-base">
            Secure your GridLoom Admin account
          </p>
        </div>

        {/* Divider line */}
        <div className="mx-auto mb-8 h-[2px] w-full max-w-sm bg-neutral-600"></div>

        {/* Form Section */}
        <form className="flex flex-col space-y-6">
          {/* New Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="new-password"
              className="text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs"
            >
              NEW PASSWORD
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNewPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                className="focus:border-primary focus:ring-primary w-full border-2 border-black bg-white p-4 pr-12 text-sm font-bold text-black placeholder:text-neutral-400 focus:ring-1 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-black hover:text-neutral-600"
              >
                {showNewPassword ? (
                  <EyeOff size={20} strokeWidth={2.5} />
                ) : (
                  <Eye size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirm-password"
              className="text-[10px] font-black tracking-widest text-neutral-800 uppercase sm:text-xs"
            >
              CONFIRM PASSWORD
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Repeat new password"
                className="focus:border-primary focus:ring-primary w-full border-2 border-black bg-white p-4 pr-12 text-sm font-bold text-black placeholder:text-neutral-400 focus:ring-1 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-black hover:text-neutral-600"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} strokeWidth={2.5} />
                ) : (
                  <Eye size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-tertiary mt-2 flex w-full items-center justify-center gap-3 border-[3px] border-black py-4 text-sm font-black tracking-widest text-black uppercase shadow-[6px_6px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000] sm:text-base"
          >
            RESET PASSWORD <ArrowUpRight size={20} className="stroke-[3]" />
          </button>
        </form>
      </div>

      {/* External Footer Link */}
      <div className="mt-4 text-center">
        <Link
          href="/admin/auth/signin"
          className="text-[10px] font-black tracking-widest text-neutral-800 uppercase underline decoration-2 underline-offset-4 transition-colors hover:text-black sm:text-xs"
        >
          CANCEL & RETURN TO LOGIN
        </Link>
      </div>
    </div>
  );
}
