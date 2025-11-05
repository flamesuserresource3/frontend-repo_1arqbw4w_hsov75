import React from 'react';

const categories = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL']
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind', 'Redux/RTK', 'Jest']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'DevOps',
    items: ['Docker', 'CI/CD', 'Vercel', 'AWS', 'Kubernetes']
  }
];

const education = [
  {
    school: 'State University',
    degree: 'B.Sc. in Computer Science',
    period: '2014 — 2018'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-14 sm:py-20 border-t border-neutral-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills & Education</h2>
          <p className="mt-2 text-neutral-400">Tech stack and formal training.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
                <h3 className="text-base font-medium">{cat.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="rounded-full bg-neutral-800/70 px-3 py-1 text-xs text-neutral-300 border border-neutral-700/60">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-base font-medium">Education</h3>
            <div className="mt-4 space-y-3">
              {education.map((e) => (
                <div key={e.school}>
                  <p className="font-medium">{e.school}</p>
                  <p className="text-sm text-neutral-300">{e.degree}</p>
                  <p className="text-xs text-neutral-500">{e.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
