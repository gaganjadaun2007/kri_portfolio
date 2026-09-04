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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Profile Image */}
          <div className="lg:col-span-5 relative group">
            <div className="lg:sticky lg:top-28 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 z-10">
              <img 
                src={personalInfo.profileImage || "/profileimage.jpeg"} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 border border-white/20 dark:border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent rounded-3xl -z-0 transform rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 hidden lg:block pointer-events-none"></div>
          </div>

          {/* Main Content (Narrative + Pillars) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Main Narrative */}
            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {personalInfo.aboutParagraphs.map((para, index) => (
                <p key={index} className="text-slate-700 dark:text-slate-300">
                  {para}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                  Key Engineering Priorities
                </h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Writing clean, maintainable, and well-structured code.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Understanding core fundamentals before reaching for abstractions.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Continuous learning through documentation, building, and code reviews.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillars Cards */}
            <div className="grid grid-cols-1 gap-4">
              {corePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
