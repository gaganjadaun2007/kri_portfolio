import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Formal undergraduate academic qualification in Computer Science Engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-8 border-l-2 border-blue-600 dark:border-blue-500 py-1"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500"></div>

              {/* Education Card */}
              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {edu.status}
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5 mb-2">
                  {edu.specialization}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-4">
                  {edu.institution}
                </p>

                {/* Highlights */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Curriculum Focus:
                  </p>
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
