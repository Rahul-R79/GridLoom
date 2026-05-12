import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export default function AdminResetPasswordPage() {
  return (
    <div className="w-full border-[3px] border-black bg-white p-8 shadow-[12px_12px_0_#000] sm:p-12">
      {/* Icon */}
      <div className="mb-6">
        <svg className="text-primary h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V19h-2v-1.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 13 17.723z" />
        </svg>
      </div>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="mb-4 text-4xl leading-none font-black tracking-tighter text-black uppercase sm:text-5xl">
          RESET YOUR
          <br />
          PASSWORD
        </h1>
        <p className="text-sm font-medium text-neutral-500 sm:text-base">
          Enter your admin email and we&apos;ll send you
          <br className="hidden sm:block" /> a verification code.
        </p>
      </div>

      {/* Form Section */}
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
            placeholder="admin@gridloom.com"
            className="focus:border-primary focus:ring-primary w-full border-2 border-black bg-neutral-50 p-4 text-sm font-medium text-black placeholder:text-neutral-400 focus:ring-1 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-tertiary mt-2 flex w-full items-center justify-between border-[3px] border-black px-6 py-4 text-sm font-black tracking-widest text-black uppercase shadow-[6px_6px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000] sm:text-base"
        >
          <span>SEND VERIFICATION CODE</span>
          <ArrowUpRight size={20} className="stroke-[3]" />
        </button>
      </form>

      {/* Divider */}
      <div className="mt-10 mb-8 h-[3px] w-full bg-black"></div>

      {/* Footer Link */}
      <div>
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
