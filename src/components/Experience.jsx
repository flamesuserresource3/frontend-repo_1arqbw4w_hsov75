import React from 'react';

const roles = [
  {
    company: 'Acme Corp',
    role: 'Senior Software Engineer',
    period: '2022 — Present',
    location: 'Remote',
    highlights: [
      'Led the rebuild of a design system used across 6 product teams, improving delivery speed by 30%.',
      'Architected a micro-frontend setup to scale independently deployable modules.',
      'Mentored 5 engineers, introduced testing culture with 85% coverage.'
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Node.js']
  },
  {
    company: 'Globex',
    role: 'Full‑stack Engineer',
    period: '2020 — 2022',
    location: 'Berlin, DE',
    highlights: [
      'Delivered real-time analytics dashboard handling 50k events/min with websockets.',
      'Designed and implemented role-based access control across the platform.',
      'Improved Core Web Vitals (LCP < 1.5s) across key pages.'
    ],
    stack: ['Next.js', 'Go', 'PostgreSQL', 'Redis']
  },
  {
    company: 'Initech',
    role: 'Frontend Engineer',
    period: '2018 — 2020',
    location: 'London, UK',
    highlights: [
      'Migrated legacy app to React with TypeScript, reducing bugs by 40%.',
      'Introduced component-driven development with Storybook.',
      'Collaborated with design to establish accessible color system (WCAG AA).'
    ],
    stack: ['React', 'TypeScript', 'Jest', 'Storybook']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 border-t border-neutral-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
          <p className="mt-2 text-neutral-400">A snapshot of recent roles and impact.</p>
        </div>

        <div className="space-y-8">
          {roles.map((job) => (
            <div key={`${job.company}-${job.role}`} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{job.role} · <span className="text-neutral-300">{job.company}</span></h3>
                  <p className="text-sm text-neutral-400">{job.location}</p>
                </div>
                <div className="text-sm text-neutral-400">{job.period}</div>
              </div>

              <ul className="mt-4 list-disc list-inside space-y-2 text-neutral-300">
                {job.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <span key={s} className="rounded-full bg-neutral-800/70 px-3 py-1 text-xs text-neutral-300 border border-neutral-700/60">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
