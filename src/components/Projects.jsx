import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Design System Kit',
    description:
      'A fully themable React component kit with tokens, docs, and accessible primitives.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    github: 'https://github.com/yourhandle/design-system-kit',
    demo: 'https://design-kit.example.com'
  },
  {
    title: 'Realtime Analytics',
    description:
      'Stream processing pipeline and dashboard to visualize business events in real time.',
    tags: ['Next.js', 'WebSockets', 'Redis', 'Docker'],
    github: 'https://github.com/yourhandle/realtime-analytics',
    demo: 'https://analytics.example.com'
  },
  {
    title: 'TaskFlow',
    description:
      'Opinionated task manager with keyboard-first UX and offline support.',
    tags: ['PWA', 'Service Worker', 'IndexedDB'],
    github: 'https://github.com/yourhandle/taskflow',
    demo: 'https://taskflow.example.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-14 sm:py-20 border-t border-neutral-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Selected Projects</h2>
          <p className="mt-2 text-neutral-400">Highlights from recent work and experiments.</p>
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

              <div className="mt-5 flex items-center gap-3 text-sm">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-300 hover:text-white"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-300 hover:text-white"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
