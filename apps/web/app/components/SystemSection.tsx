export default function SystemSection() {
  const steps = [
    {
      number: '01',
      title: 'CREATE',
      description:
        'Import your raw data from SQL, CSV, or Airtable. GridLoom instantly structures it into high-performance atomic units.',
    },
    {
      number: '02',
      title: 'CONNECT',
      description:
        'Drag and drop entities into the canvas. Draw relationships that turn static numbers into dynamic living ecosystems.',
    },
    {
      number: '03',
      title: 'COLLABORATE',
      description:
        'Invite your team. Experience true real-time multiplayer with zero conflicts and full version history on every cell.',
    },
  ];

  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-12 lg:px-16">
        <h2 className="mb-16 text-center text-4xl font-black tracking-tight text-neutral-800 uppercase sm:mb-24 sm:text-5xl">
          THE SYSTEM
        </h2>

        <div className="flex flex-col space-y-16 sm:space-y-20">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-10 lg:gap-12"
            >
              <div className="shrink-0 text-[5rem] leading-none font-black tracking-tighter text-neutral-300 sm:w-32 sm:text-[6rem] lg:w-40">
                {step.number}
              </div>
              <div className="flex flex-col sm:pt-6">
                <h3 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 uppercase sm:mb-3 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed font-medium text-neutral-500 sm:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
