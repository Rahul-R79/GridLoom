import Link from 'next/link';
import { Lock, HelpCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
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
            PASSWORD RECOVERY
          </h1>
          <div className="border-primary border-l-4 pl-4">
            <p className="text-sm font-bold text-neutral-500 sm:text-base">
              No worries, it happens to the best of us. Enter your email and we&apos;ll send you a
              link.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form className="flex flex-col space-y-6">
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
              placeholder="you@gridloom.io"
              className="focus:border-primary focus:ring-primary w-full border-2 border-black bg-neutral-100 p-4 text-sm font-medium text-black placeholder:text-neutral-400 focus:ring-1 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-tertiary mt-4 w-full border-[3px] border-black py-4 text-sm font-black tracking-widest text-black uppercase shadow-[8px_8px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000] sm:text-base"
          >
            SEND RECOVERY LINK →
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
