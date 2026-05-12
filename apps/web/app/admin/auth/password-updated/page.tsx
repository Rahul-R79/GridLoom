import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function AdminPasswordUpdatedPage() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Main Card */}
      <div className="relative w-full border-[3px] border-black bg-white p-8 shadow-[12px_12px_0_#000] sm:p-12">
        {/* Decorative Top-Right Blue Triangle */}
        <div
          className="bg-primary absolute top-0 right-0 h-20 w-20"
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        ></div>

        {/* Icon Section */}
        <div className="relative z-10 mt-4 mb-8 flex justify-center">
          <div className="bg-secondary flex h-16 w-16 items-center justify-center border-[3px] border-black shadow-[4px_4px_0_#000]">
            <Check className="h-10 w-10 text-black" strokeWidth={3} />
          </div>
        </div>

        {/* Header Section */}
        <div className="relative z-10 mb-6 text-center">
          <h1 className="mb-4 text-4xl leading-none font-black tracking-tighter text-black uppercase sm:text-5xl">
            PASSWORD
            <br />
            UPDATED!
          </h1>
          <p className="mx-auto max-w-sm text-sm leading-relaxed font-medium text-neutral-600 sm:text-base">
            Your admin password has been changed successfully. Please log in with your new password.
          </p>
        </div>

        {/* Action Button */}
        <div className="relative z-10 mt-8">
          <Link
            href="/admin/auth/signin"
            className="bg-tertiary flex w-full items-center justify-center gap-3 border-[3px] border-black py-4 text-sm font-black tracking-widest text-black uppercase shadow-[6px_6px_0_#000] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000] sm:text-base"
          >
            BACK TO LOGIN <ArrowRight size={20} className="stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
