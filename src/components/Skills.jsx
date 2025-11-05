import React from 'react';

const categories = [
  {
    title: 'Technical Tools',
    items: ['SAP', 'Microsoft Excel', 'Word', 'PowerPoint', 'Thinkcell', 'Visio', 'Project']
  },
  {
    title: 'Financial Analysis',
    items: ['Financial Modeling', 'Market Analysis', 'Investment Strategies', 'Data Insights']
  },
  {
    title: 'Project Management',
    items: ['Team Leadership', 'Cross-Functional Collaboration', 'Process Optimization', 'Safety Compliance']
  },
  {
    title: 'Analytical Skills',
    items: ['Data Analytics', 'Problem-Solving', 'Numerical Accuracy']
  },
  {
    title: 'Languages',
    items: ['English (Fluent)', 'Arabic (Fluent)', 'German (Basic)', 'Italian (Basic)', 'Spanish (Basic)', 'Chinese (Basic)', 'Japanese (Basic)']
  }
];

const education = [
  {
    school: 'Saudi Electronic University (SEU)',
    degree: 'Bachelor of Science in Finance (Expected Graduation: 2026)',
    period: 'Saudi Arabia'
  },
  {
    school: 'Oregon State University',
    degree: 'Engineering Studies (2012 — 2017, Incomplete due to family commitments)',
    period: 'Corvallis, USA'
  }
];

const certifications = [
  'Financial Accounting Training',
  'Change Management and Challenges in Transitioning Government Entities to Accrual-Based Accounting',
  'Total Quality Management (TQM)',
  'Lean Six Sigma Black Belt',
  'Lean Six Sigma Yellow & Green Belt',
  'Data Analysis using Microsoft Power BI',
  'Microsoft Excel Fundamentals',
  'Artificial Intelligence (AI) Fundamentals'
];

const Skills = () => {
  return (
    <section id="skills" className="py-14 sm:py-20 border-t border-neutral-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills, Education & Certifications</h2>
          <p className="mt-2 text-neutral-400">Core strengths and formal training.</p>
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

          <div className="space-y-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-base font-medium">Education</h3>
              <div className="mt-4 space-y-4">
                {education.map((e) => (
                  <div key={e.school}>
                    <p className="font-medium">{e.school}</p>
                    <p className="text-sm text-neutral-300">{e.degree}</p>
                    <p className="text-xs text-neutral-500">{e.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-base font-medium">Certifications</h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-neutral-300 text-sm">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
