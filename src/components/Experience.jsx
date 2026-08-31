import React from 'react';
import { Briefcase, Code, Award, Users } from 'lucide-react';
import { practicalWorkList } from '../data/portfolioData';

const icons = [
  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Practical Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A transparent overview of practical development initiatives, algorithmic practice, and collaborative engineering work.
          </p>
        </div>

        {/* Practical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practicalWorkList.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-sm">
                    {icons[idx % icons.length]}
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
                  {item.type}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
