import React, { useEffect } from 'react';
import { X, Download, Printer, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { personalInfo, educationList, skillCategories, projects, practicalWorkList } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // If a custom PDF is placed in public/resume.pdf, it triggers download.
    // Otherwise it triggers print/save as PDF cleanly.
    const link = document.createElement('a');
    link.href = personalInfo.contacts.resumeUrl;
    link.download = 'Krishika_Mohindru_Resume_CSE_AIML.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-slate-900/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-4 max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 id="resume-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
              Resume Preview — {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted ATS-friendly Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans space-y-6 text-sm">
          
          {/* Header block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
              {personalInfo.subRole} • {personalInfo.role}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 mt-2 font-mono">
              <span>Location: {personalInfo.location}</span>
              <span>•</span>
              <span>Email: {personalInfo.contacts.email}</span>
              <span>•</span>
              <span>GitHub: {personalInfo.contacts.github}</span>
              <span>•</span>
              <span>LinkedIn: {personalInfo.contacts.linkedin}</span>
            </div>
          </div>

          {/* Objective / Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            {educationList.map((edu, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{edu.degree}</span>
                  <span className="text-xs text-slate-500">{edu.period}</span>
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{edu.specialization}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">{edu.institution}</div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="flex flex-col sm:flex-row sm:items-baseline">
                  <span className="font-bold text-slate-800 dark:text-slate-200 w-44 shrink-0">
                    {cat.title}:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Key Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {proj.title} <span className="font-normal text-xs text-slate-500">({proj.category})</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {proj.technologies.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    {proj.shortDescription}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-0.5 pl-1">
                    {proj.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Practical Work */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Practical Experience & Initiatives
            </h2>
            <div className="space-y-2">
              {practicalWorkList.map((exp, eIdx) => (
                <div key={eIdx}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">{exp.title}</span>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
