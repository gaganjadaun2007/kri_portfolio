import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Professional certifications and specialized training courses completed.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col h-full"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-slate-700 border border-blue-100 dark:border-slate-600 shadow-sm">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {cert.issuer}
              </p>

              <div className="mt-auto">
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
                   <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                     {cert.description}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
