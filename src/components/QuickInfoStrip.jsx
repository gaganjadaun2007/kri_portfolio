import React from 'react';
import { GraduationCap, Calendar, MapPin, Briefcase } from 'lucide-react';
import { quickStats } from '../data/portfolioData';

const icons = [
  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
];

export default function QuickInfoStrip() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {quickStats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex items-start space-x-3.5 p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-950/70 shrink-0">
                {icons[idx]}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
