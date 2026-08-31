import React from 'react';
import { Code, Globe, Database, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  "Programming Languages": <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  "Web Technologies": <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  "Database & Storage": <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  "Tools & Platforms": <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  "Currently Learning": <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
};

export default function Skills() {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Comfortable':
        return (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800">
            Comfortable
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800">
            Working Knowledge
          </span>
        );
      case 'Currently Learning':
        return (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800">
            Learning Focus
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span>Capabilities & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Categorized technical stack focused on software engineering fundamentals, applied development, and active learning areas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-xl border bg-white dark:bg-slate-800/80 p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 ${
                category.title === 'Currently Learning'
                  ? 'border-blue-200 dark:border-blue-900/60 md:col-span-2 lg:col-span-1 bg-gradient-to-b from-blue-50/20 to-transparent'
                  : 'border-slate-200 dark:border-slate-700/80'
              }`}
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-slate-700 border border-blue-100 dark:border-slate-600">
                    {categoryIcons[category.title] || <Code className="w-5 h-5 text-blue-600" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-normal">
                  {category.description}
                </p>

                {/* Skill List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/60"
                    >
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      {getStatusBadge(skill.status)}
                    </div>
                  ))}
                </div>
              </div>

              {category.title === 'Currently Learning' && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
                  Actively studying and implementing theory into code weekly.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
