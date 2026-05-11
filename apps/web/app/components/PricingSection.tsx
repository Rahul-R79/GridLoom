import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'BASIC',
      price: 'Free',
      description: 'Everything you need to start.',
      features: ['3 Workspaces', '1GB Storage', 'Basic Bridge', 'Community Support'],
      buttonText: 'GET STARTED FOR FREE',
      buttonClass: 'bg-neutral-200 text-black hover:bg-neutral-300',
      isPopular: false,
      cardClass: 'bg-white text-black',
      iconClass: 'text-primary',
    },
    {
      name: 'PRO',
      price: '₹10,000/mo',
      description: 'Scale your data-driven vision.',
      features: [
        'Unlimited Workspaces',
        '10GB Storage',
        'Advanced Bridge',
        'AI Assistant',
        'Priority Support',
      ],
      buttonText: 'GO PRO NOW',
      buttonClass: 'bg-tertiary text-black hover:bg-yellow-400',
      isPopular: true,
      cardClass: 'bg-primary text-white',
      iconClass: 'text-white',
    },
    {
      name: 'TEAMS',
      price: 'Custom',
      description: 'For enterprise workflows.',
      features: [
        'Unlimited Everything',
        'Dedicated Support',
        'Custom Integrations',
        'Enterprise Security',
      ],
      buttonText: 'CONTACT SALES',
      buttonClass: 'bg-black text-white hover:bg-neutral-800',
      isPopular: false,
      cardClass: 'bg-white text-black',
      iconClass: 'text-primary',
    },
  ];

  return (
    <section className="w-full overflow-hidden border-b-[3px] border-black bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-20 text-center sm:mb-32">
          <h2 className="mb-6 text-5xl leading-none font-black tracking-tighter text-black uppercase sm:text-7xl">
            SIMPLE PRICING.
            <br className="hidden sm:block" /> NO HIDDEN THREADS.
          </h2>
          <p className="text-primary text-xl font-bold sm:text-2xl">
            Choose the plan that fits your weave.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex h-full flex-col border-[3px] border-black p-8 shadow-[8px_8px_0_#000] sm:p-10 ${plan.cardClass} ${plan.isPopular ? 'z-10 md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.isPopular && (
                <div className="bg-tertiary absolute -top-4 left-1/2 -translate-x-1/2 border-[3px] border-black px-4 py-1 text-xs font-bold tracking-widest whitespace-nowrap text-black uppercase shadow-[4px_4px_0_#000]">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-12">
                <h3
                  className={`mb-2 text-2xl font-bold tracking-tight uppercase ${plan.isPopular ? 'text-white' : 'text-neutral-800'}`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`mb-6 text-4xl font-black tracking-tight sm:text-5xl ${plan.isPopular ? 'text-white' : 'text-neutral-600'}`}
                >
                  {plan.price.includes('/') ? (
                    <>
                      {plan.price.split('/')[0]}
                      <span className="text-lg font-bold sm:text-xl">
                        /{plan.price.split('/')[1]}
                      </span>
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed font-medium sm:text-base ${plan.isPopular ? 'text-blue-100' : 'text-neutral-500'}`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="mb-12 flex-grow space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${plan.iconClass}`} strokeWidth={3} />
                    <span
                      className={`text-sm font-bold ${plan.isPopular ? 'text-white' : 'text-neutral-800'}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full cursor-pointer border-[3px] border-black py-4 text-sm font-bold tracking-widest uppercase transition-all ${plan.buttonClass} shadow-[4px_4px_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
