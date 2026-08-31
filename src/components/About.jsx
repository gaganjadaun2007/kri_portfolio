import React from 'react';
import { BookOpen, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const corePillars = [
  {
    title: "Strong Foundations",
    description: "Deep focus on Data Structures, Algorithms, and Object-Oriented software principles in Python and C++.",
    icon: <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
  },
  {
    title: "AI & Machine Learning Focus",
    description: "Actively exploring mathematical concepts, data processing, and machine learning models for applied problem-solving.",
    icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
  },
  {
    title: "Hands-on Project Building",
    description: "Translating theoretical knowledge into functional web applications and embedded hardware prototypes.",
    icon: <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Background & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {personalInfo.aboutParagraphs.map((para, index) => (
              <p key={index} className="text-slate-700 dark:text-slate-300">
                {para}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Key Engineering Priorities
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Writing clean, maintainable, and well-structured code.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Understanding core fundamentals before reaching for abstractions.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Continuous learning through documentation, building, and code reviews.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
