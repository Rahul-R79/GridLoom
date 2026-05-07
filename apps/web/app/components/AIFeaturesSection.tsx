import { ReactNode } from 'react';
import { Sigma, MessageSquare, BarChart2, Network } from 'lucide-react';
import Carousel from './Carousel';

interface Feature {
  title: string;
  description: string;
  footerText: string;
  icon: ReactNode;
}

export default function AIFeaturesSection() {
  const features: Feature[] = [
    {
      title: 'FORMULA GENERATOR',
      description:
        'Describe what you need in plain English, AI writes the formula. Stop wrestling with nested IF statements and VLOOKUPs forever.',
      footerText: 'LOGIC ENGINE V4.0',
      icon: <Sigma className="h-5 w-5 text-white" />,
    },
    {
      title: 'DATA Q&A',
      description:
        'Ask questions about your spreadsheet, get instant answers with sources. Natural language querying across millions of rows in seconds.',
      footerText: 'NATURAL LANGUAGE',
      icon: <MessageSquare className="h-5 w-5 text-white" />,
    },
    {
      title: 'AUTO-CHART',
      description:
        'AI analyzes your data and suggests the best visualization automatically. Trend spotting and outlier detection served on a silver platter.',
      footerText: 'VISUAL INSIGHTS',
      icon: <BarChart2 className="h-5 w-5 text-white" />,
    },
    {
      title: 'CANVAS AUTO-LAYOUT',
      description:
        'Messy sticky notes? AI arranges them into clean flowcharts and mind maps. Turn your chaotic brainstorming sessions into structured documentation.',
      footerText: 'SPATIAL ORG',
      icon: <Network className="h-5 w-5 text-white" />,
    },
  ];

  const renderCard = (feature: Feature) => (
    <div className="flex h-full w-full flex-col border-[3px] border-white bg-neutral-950 p-8 shadow-[6px_6px_0_white] lg:p-10">
      <div className="mb-8 flex items-center">
        <div className="bg-tertiary mr-4 h-4 w-4 shrink-0" />
        <h3 className="text-xl font-bold tracking-wide text-white uppercase">{feature.title}</h3>
      </div>

      <p className="flex-grow text-base leading-relaxed font-medium text-neutral-400">
        {feature.description}
      </p>

      <div className="mt-10 mb-6 w-full border-t border-neutral-800" />

      <div className="flex items-center justify-between">
        <span className="text-tertiary text-xs font-bold tracking-widest uppercase">
          {feature.footerText}
        </span>
        {feature.icon}
      </div>
    </div>
  );

  return (
    <section className="w-full overflow-hidden border-b-[3px] border-black bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <div className="border-primary bg-primary mb-6 inline-block border-2 px-3 py-1">
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              AI POWERED
            </span>
          </div>
          <h2 className="text-4xl leading-none font-black tracking-tighter text-white uppercase sm:text-6xl lg:text-[5rem]">
            YOUR DATA,{' '}
            <span className="text-tertiary font-serif font-medium normal-case italic">smarter</span>
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:gap-12">
          {features.map((feature, idx) => (
            <div key={idx}>{renderCard(feature)}</div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <Carousel className="md:hidden" autoplayInterval={5000} theme="dark">
          {features.map((feature, idx) => (
            <div key={idx} className="h-full w-full px-2 pr-6 pb-6">
              {renderCard(feature)}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
