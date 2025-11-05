import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Entrepreneurial Ventures',
    description:
      'Founded and managed several businesses in Jeddah, Madinah, Riyadh, and Cairo; successfully scaled operations and exited for profit.',
    tags: ['Operations', 'P&L', 'Growth', 'Exit Strategy']
  },
  {
    title: 'Investment Portfolio Strategy',
    description:
      'Long-term, risk-adjusted equity and real estate portfolio with disciplined market analysis and continuous learning.',
    tags: ['Financial Analysis', 'Risk Management', 'Asset Allocation']
  },
  {
    title: 'Safety & Compliance Training Programs',
    description:
      'Developed and delivered safety training and incident response drills across teams to improve compliance and readiness.',
    tags: ['Training', 'Policy', 'Incident Response']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-14 sm:py-20 border-t border-neutral-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Projects & Initiatives</h2>
          <p className="mt-2 text-neutral-400">Selected initiatives reflecting leadership, analysis, and execution.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-700 transition-colors">
              <h3 className="text-lg font-medium group-hover:text-neutral-100">{p.title}</h3>
              <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-neutral-800/70 px-3 py-1 text-xs text-neutral-300 border border-neutral-700/60">{t}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 text-sm text-neutral-400">
                <span className="inline-flex items-center gap-1"><ExternalLink size={16} /> Details available on request</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
