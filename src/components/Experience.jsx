import React from 'react';

const roles = [
  {
    company: 'Bab Samhan Luxury Collection',
    role: 'Loss Prevention Supervisor',
    period: 'Mar 2025 — Present',
    location: 'Diriyah, Saudi Arabia',
    highlights: [
      'Led security operations for a 30-person team; resolved conflicts and delivered exceptional customer service to protect assets.',
      'Patrolled facilities, monitored CCTV and alarms, and controlled access to secured zones.',
      'Responded to emergencies including medical incidents and fires; conducted drills and administered first aid/CPR.',
      'Developed and delivered training programs; managed guest disturbances and escorted unauthorized persons.',
      'Documented incidents and produced comprehensive reports for authorized release while maintaining confidentiality.',
      'Acted as policy role model and first point of contact for employee concerns; supported management initiatives.',
      'Awarded Star of the Month (Aug 2025), Heart of the House.'
    ],
    stack: ['Security Ops', 'CCTV', 'Emergency Response', 'Training']
  },
  {
    company: 'Nesma',
    role: 'Safety Supervisor (Management)',
    period: '2024 — Feb 2025',
    location: 'Saudi Arabia',
    highlights: [
      'Performed daily hazard inspections and enforced safety policies, including hazardous-materials regulations.',
      'Led end-to-end incident investigations; identified root causes and recommended corrective actions.',
      'Implemented risk control action plans with management to reduce potential safety and security threats.',
      'Maintained and updated policy documentation; conducted training to promote policy awareness and adherence.',
      'Analyzed incident trends and security data to drive proactive risk mitigation and informed decisions.',
      'Developed risk assessment reports and integrated findings into safety protocols to reduce workplace incidents.',
      'Mentored and coached team members with personalized feedback and skill-building initiatives.',
      'Led safety initiatives across projects; managed cross-functional teams for operational safety and efficiency.',
      'Oversaw shift transitions and documented significant safety incidents for continuous improvement.'
    ],
    stack: ['Risk Control', 'Policy', 'Training', 'Data Analysis']
  },
  {
    company: 'National Guard Health Affairs (NGHA)',
    role: 'Tradesmen Supervisor',
    period: '2017 — 2022',
    location: 'Saudi Arabia',
    highlights: [
      'Implemented safety protocols and conducted training sessions to maintain high standards.',
      'Supervised daily operations ensuring adherence to safety and quality standards; managed a team of technicians.',
      'Conducted regular safety inspections and audits to maintain regulatory compliance.',
      'Coordinated maintenance schedules and ensured timely task completion.'
    ],
    stack: ['Safety', 'Team Leadership', 'Scheduling']
  },
  {
    company: 'Saudi Aramco',
    role: 'Mechanical Technician',
    period: '2007 — 2012',
    location: 'Saudi Arabia',
    highlights: [
      'Maintained and repaired mechanical systems in compliance with company standards.',
      'Utilized SAP for process optimization, system management, and inventory control.',
      'Collaborated with engineering teams to troubleshoot and resolve mechanical issues.',
      'Enhanced operational efficiency through continuous process improvement initiatives.'
    ],
    stack: ['Mechanical', 'SAP', 'Process Improvement']
  },
  {
    company: 'Freelance',
    role: 'International Investor and Stock Market Analyst',
    period: '2011 — Present',
    location: 'Various Countries',
    highlights: [
      'Conducted in-depth analysis of global financial markets to inform investment strategies.',
      'Managed a diversified portfolio focused on maximizing returns while mitigating risks.',
      'Completed advanced financial training programs to enhance analytical skills.',
      'Developed and executed strategies that led to sustained portfolio growth.'
    ],
    stack: ['Financial Modeling', 'Market Analysis', 'Risk Management']
  },
  {
    company: 'Freelance',
    role: 'Real Estate Broker',
    period: '2008 — Present',
    location: 'Saudi Arabia',
    highlights: [
      'Licensed broker (FAL# 1100123985); facilitated buying, selling, and leasing transactions.',
      'Provided market analysis and valuations to support informed client decisions.',
      'Managed a diverse property portfolio with high standards of service and client satisfaction.',
      'Built and maintained strong relationships with clients, agents, and legal professionals.'
    ],
    stack: ['Brokerage', 'Valuation', 'Client Relations']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 border-t border-neutral-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
          <p className="mt-2 text-neutral-400">Leadership in loss prevention, safety, and risk analytics.</p>
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

              {job.stack?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="rounded-full bg-neutral-800/70 px-3 py-1 text-xs text-neutral-300 border border-neutral-700/60">{s}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
