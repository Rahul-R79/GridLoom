'use client';

import { Check, X, AlertTriangle, Shield, Zap, Network } from 'lucide-react';
import Link from 'next/link';
import Carousel from './Carousel';

type Status = 'yes' | 'no' | 'partial' | 'warning';

interface FeatureRow {
  name: string;
  spreadsheets: Status;
  whiteboards: Status;
  gridloom: Status;
}

const COMPARISON_DATA: FeatureRow[] = [
  { name: 'Structured Data', spreadsheets: 'yes', whiteboards: 'no', gridloom: 'yes' },
  { name: 'Visual Thinking', spreadsheets: 'no', whiteboards: 'yes', gridloom: 'yes' },
  {
    name: 'Live Data Bridge',
    spreadsheets: 'no',
    whiteboards: 'no',
    gridloom: 'yes',
  },
  { name: 'Real-Time Collab', spreadsheets: 'warning', whiteboards: 'yes', gridloom: 'yes' },
  { name: 'AI Powered', spreadsheets: 'no', whiteboards: 'no', gridloom: 'yes' },
  { name: 'Open Source', spreadsheets: 'no', whiteboards: 'no', gridloom: 'yes' },
];

function StatusIcon({ status }: { status: Status }) {
  switch (status) {
    case 'yes':
      return (
        <div className="bg-secondary flex h-6 w-6 items-center justify-center rounded-full sm:h-8 sm:w-8">
          <Check className="h-4 w-4 text-black sm:h-5 sm:w-5" strokeWidth={4} />
        </div>
      );
    case 'no':
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-red-500/50 sm:h-8 sm:w-8">
          <X className="h-4 w-4 text-red-500 sm:h-5 sm:w-5" strokeWidth={3} />
        </div>
      );
    case 'warning':
      return (
        <div className="flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
          <AlertTriangle className="text-tertiary h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" />
        </div>
      );
    case 'partial':
    default:
      return (
        <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full sm:h-8 sm:w-8">
          <Check className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={4} />
        </div>
      );
  }
}

export default function ComparisonSection() {
  const cards = [
    {
      title: 'INTERCONNECTED CELLS',
      desc: 'Every cell in your grid is a portal to another dataset. No more flat files, only living ecosystems.',
      icon: <Network className="h-6 w-6 text-white" />,
      accent: 'border-white',
      shadow: 'shadow-[8px_8px_0_white]',
      iconBg: 'bg-primary',
    },
    {
      title: 'ZERO-LATENCY AI',
      desc: 'Our LLM engine lives directly in the canvas, suggesting architectural links as you design your workflow.',
      icon: <Zap className="h-6 w-6 text-black" />,
      accent: 'border-secondary',
      shadow: 'shadow-[8px_8px_0_#CCFF00]',
      iconBg: 'bg-secondary',
    },
    {
      title: 'VAULT SECURITY',
      desc: 'Military grade encryption for your proprietary data bridges. You own the keys, the data, and the grid.',
      icon: <Shield className="h-6 w-6 text-white" />,
      accent: 'border-primary',
      shadow: 'shadow-[8px_8px_0_#0029FF]',
      iconBg: 'bg-primary',
    },
  ];

  return (
    <section className="w-full border-t-[3px] border-black bg-neutral-950 py-20 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-16">
        {/* Comparison Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-black tracking-tighter text-white uppercase sm:text-7xl lg:text-8xl">
            WHY <span className="text-secondary">GRIDLOOM?</span>
          </h2>
          <div className="border-primary mt-6 flex max-w-xl border-l-4 pl-6">
            <p className="text-base leading-relaxed font-medium text-neutral-400 sm:text-lg">
              The architecture of modern work requires more than just cells or blank canvases. It
              requires a bridge between structure and chaos.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <table className="w-full min-w-[800px] border-collapse border-2 border-white text-left">
            <thead>
              <tr className="border-b-2 border-white tracking-widest text-white uppercase">
                <th className="p-4 text-sm font-black sm:p-6 sm:text-base">Feature</th>
                <th className="border-x-2 border-white p-4 text-[10px] font-black text-neutral-500 sm:p-6 sm:text-xs">
                  Spreadsheets Only
                </th>
                <th className="p-4 text-[10px] font-black text-neutral-500 sm:p-6 sm:text-xs">
                  Whiteboards Only
                </th>
                <th className="bg-primary border-l-2 border-white p-4 text-sm font-black sm:p-6 sm:text-base">
                  <div className="flex items-center gap-2">GRIDLOOM</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="border-b border-neutral-800">
                  <td className="p-4 text-xs font-bold text-white uppercase sm:p-6 sm:text-sm">
                    {row.name}
                  </td>
                  <td className="border-x border-neutral-800 p-4 sm:p-6">
                    <div className="flex justify-center">
                      <StatusIcon status={row.spreadsheets} />
                    </div>
                  </td>
                  <td className="border-r border-neutral-800 p-4 sm:p-6">
                    <div className="flex justify-center">
                      <StatusIcon status={row.whiteboards} />
                    </div>
                  </td>
                  <td className="bg-primary/10 p-4 sm:p-6">
                    <div className="flex justify-center">
                      <StatusIcon status={row.gridloom} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 flex flex-col items-center justify-between gap-8 sm:flex-row">
          <h3 className="text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl lg:text-5xl">
            READY TO UPGRADE YOUR <br />
            <span className="relative mt-2 inline-block bg-white px-2 py-1">
              <span className="text-primary relative z-10 font-serif normal-case italic underline decoration-2 underline-offset-4">
                infrastructure?
              </span>
            </span>
          </h3>
          <Link
            href="/login"
            className="bg-secondary group relative border-[3px] border-black px-8 py-5 text-lg font-black tracking-tighter text-black uppercase shadow-[8px_8px_0_white] transition-all hover:translate-y-1 hover:shadow-[4px_4px_0_white]"
          >
            BUILD YOUR FIRST GRID
          </Link>
        </div>

        {/* Bottom Highlights */}
        <div className="mt-20">
          {/* Desktop Grid */}
          <div className="hidden grid-cols-3 gap-8 md:grid">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`flex flex-col border-[3px] bg-neutral-900 p-8 transition-colors hover:bg-neutral-800 ${card.accent} ${card.shadow}`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-sm ${card.iconBg} border-2 border-black`}
                >
                  {card.icon}
                </div>
                <h4 className="mb-4 text-xl font-black tracking-tight text-white uppercase">
                  {card.title}
                </h4>
                <p className="text-sm leading-relaxed font-medium text-neutral-400">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel autoplayInterval={4000} theme="dark">
              {cards.map((card, idx) => (
                <div key={idx} className="w-full px-2 pb-8">
                  <div
                    className={`flex flex-col border-[3px] bg-neutral-900 p-8 ${card.accent} ${card.shadow}`}
                  >
                    <div
                      className={`mb-6 flex h-10 w-10 items-center justify-center rounded-sm ${card.iconBg} border-2 border-black`}
                    >
                      {card.icon}
                    </div>
                    <h4 className="mb-4 text-lg font-black tracking-tight text-white uppercase">
                      {card.title}
                    </h4>
                    <p className="text-xs leading-relaxed font-medium text-neutral-400">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
