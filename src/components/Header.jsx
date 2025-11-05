import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-indigo-900/30 via-transparent to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 sm:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="shrink-0">
            <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 grid place-items-center text-3xl font-semibold">
              MA
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Mohammed Awwadh K AlMahlaki</h1>
            <p className="mt-2 text-lg sm:text-xl text-neutral-300">Loss Prevention Supervisor • Safety & Risk Management • Financial Risk Analyst</p>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-neutral-300 text-sm">
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Ad Diriyah, Saudi Arabia</span>
              <a href="tel:+966538135535" className="inline-flex items-center gap-2 hover:text-white"><Phone size={16} /> +966 53 813 5535</a>
              <a href="mailto:m.awwadh.k@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={16} /> m.awwadh.k@gmail.com</a>
              <a
                href="https://linkedin.com/in/mohammed-almahlaki-47922631b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            <p className="mt-6 max-w-4xl text-neutral-300 leading-relaxed">
              Versatile professional combining 10+ years of safety supervision and compliance management with deep expertise in financial risk
              analysis and investment strategies. Adept at leveraging data analytics, financial modeling, and market analysis to identify and mitigate
              operational and financial losses. Currently pursuing a Finance degree, committed to applying technical acumen and process
              optimization skills to holistic organizational risk management.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
