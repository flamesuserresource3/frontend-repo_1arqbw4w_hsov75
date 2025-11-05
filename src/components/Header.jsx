import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-indigo-900/30 via-transparent to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 sm:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="shrink-0">
            <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 grid place-items-center text-3xl font-semibold">
              YN
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Your Name</h1>
            <p className="mt-2 text-lg sm:text-xl text-neutral-300">Senior Software Engineer • Frontend & Backend</p>
            <div className="mt-2 flex items-center gap-3 text-neutral-400">
              <MapPin size={16} /> <span>City, Country</span>
            </div>

            <p className="mt-6 max-w-3xl text-neutral-300 leading-relaxed">
              Builder with a strong focus on creating delightful, accessible user experiences and scalable systems. 
              Experienced across React, TypeScript, Python, and cloud-native architectures. Passionate about velocity, design systems, and DX.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:you@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm hover:bg-neutral-800 transition-colors"
              >
                <Mail size={18} /> Contact
              </a>
              <a
                href="https://github.com/yourhandle"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm hover:bg-neutral-800 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm hover:bg-neutral-800 transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
