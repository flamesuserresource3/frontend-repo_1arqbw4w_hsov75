import React from 'react';
import Header from './components/Header.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Experience />
        <Projects />
        <Skills />
      </main>

      <footer className="mt-16 border-t border-neutral-800/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
