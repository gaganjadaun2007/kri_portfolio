import React from 'react';
import { Github, Code2, ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function GitHubSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Codebase & Repositories</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Explore My Code on GitHub
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Browse through public repositories, project architectures, algorithms, and practical implementations. All source code is version-controlled with structured commit histories.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center lg:items-end gap-3">
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600 text-sm font-semibold shadow-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`${personalInfo.contacts.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-semibold transition-colors"
              >
                <GitBranch className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Browse All Repositories</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
