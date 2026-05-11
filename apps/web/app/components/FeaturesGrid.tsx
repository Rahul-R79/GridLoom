import { Grid, Activity, Network } from 'lucide-react';
import Carousel from './Carousel';

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Grid className="h-8 w-8 text-white" />,
      iconBgColor: 'bg-primary',
      title: 'SHEETS',
      description:
        'Powerful tabular engine with full Excel/GSheet parity. Real-time multi-player calculation at scale.',
      bullets: ['PIVOT TABLES', 'CUSTOM FUNCTIONS'],
    },
    {
      icon: <Activity className="h-8 w-8 text-black" />,
      iconBgColor: 'bg-secondary',
      title: 'BOARDS',
      description:
        'Infinite spatial canvas. Drag data cells onto the board to create visual flows and mind maps.',
      bullets: ['AUTO-LAYOUT', 'LIVE EMBEDS'],
    },
    {
      icon: <Network className="h-8 w-8 text-black" />,
      iconBgColor: 'bg-tertiary',
      title: 'THE BRIDGE',
      description:
        'The magic layer. Two-way sync between your structured database and visual whiteboard.',
      bullets: ['API CONNECT', 'WEBHOOKS'],
    },
  ];

  return (
    <section className="w-full overflow-hidden border-b-[3px] border-black bg-neutral-100">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-12 sm:py-24 lg:px-16 lg:py-32">
        {/* Desktop Grid */}
        <div className="hidden grid-cols-1 gap-8 md:grid lg:grid-cols-3 lg:gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex h-full w-full flex-col border-[3px] border-black bg-white p-8 shadow-[8px_8px_0_#000] lg:p-10"
            >
              <div
                className={`mb-8 flex h-16 w-16 shrink-0 items-center justify-center ${feature.iconBgColor}`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-4 shrink-0 text-2xl font-black tracking-tight text-neutral-800 uppercase lg:text-3xl">
                {feature.title}
              </h3>

              <p className="mb-10 flex-grow text-base leading-relaxed font-medium text-neutral-500 lg:text-lg">
                {feature.description}
              </p>

              <div className="flex shrink-0 flex-col space-y-4">
                {feature.bullets.map((bullet, bulletIdx) => (
                  <div key={bulletIdx} className="flex items-center gap-3">
                    <div className={`h-3 w-3 ${feature.iconBgColor}`} />
                    <span className="text-xs font-bold tracking-widest text-neutral-800 uppercase">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Autoplay Carousel */}
        <Carousel className="md:hidden" autoplayInterval={4000}>
          {features.map((feature, idx) => (
            <div key={idx} className="w-full px-2 pr-4 pb-4">
              <div className="flex h-full w-full flex-col border-[3px] border-black bg-white p-8 shadow-[6px_6px_0_#000]">
                <div
                  className={`mb-8 flex h-14 w-14 shrink-0 items-center justify-center ${feature.iconBgColor}`}
                >
                  {feature.icon}
                </div>

                <h3 className="mb-4 shrink-0 text-xl font-black tracking-tight text-neutral-800 uppercase">
                  {feature.title}
                </h3>

                <p className="mb-8 flex-grow text-sm leading-relaxed font-medium text-neutral-500">
                  {feature.description}
                </p>

                <div className="flex shrink-0 flex-col space-y-4">
                  {feature.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-center gap-3">
                      <div className={`h-3 w-3 ${feature.iconBgColor}`} />
                      <span className="text-xs font-bold tracking-widest text-neutral-800 uppercase">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
