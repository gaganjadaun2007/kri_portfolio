import React, { useState } from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, Copy, Check, Terminal, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('python');

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (personalInfo.contacts.email === '[EMAIL]') {
      alert('Email placeholder: [EMAIL]. Please configure your email in src/data/portfolioData.js');
      return;
    }
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase border border-slate-200 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              <span>{personalInfo.subRole}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm {personalInfo.name}. <br />
              <span className="text-blue-600 dark:text-blue-400">I build practical software solutions.</span>
            </h1>

            {/* Supporting Role Line */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
              {personalInfo.role}
            </p>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-3 flex items-center space-x-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>

              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-1 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Copy Email"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4" />
                <span>{copiedEmail ? 'Copied!' : 'Email'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean, Professional Developer Terminal / Code Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 shadow-md overflow-hidden font-mono text-xs sm:text-sm">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-slate-400 text-xs font-sans font-medium flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    developer_profile.py
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex space-x-1 bg-slate-900 p-0.5 rounded border border-slate-800">
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-2 py-0.5 rounded text-[11px] font-sans font-medium transition-colors ${
                      activeTab === 'python'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setActiveTab('cpp')}
                    className={`px-2 py-0.5 rounded text-[11px] font-sans font-medium transition-colors ${
                      activeTab === 'cpp'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    C++
                  </button>
                </div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-4 sm:p-5 overflow-x-auto leading-relaxed bg-slate-900/95 selection:bg-blue-800">
                {activeTab === 'python' ? (
                  <pre className="text-slate-300">
                    <code>
                      <span className="text-slate-500"># Engineering Profile & Focus</span>{'\n'}
                      <span className="text-purple-400">class</span> <span className="text-yellow-300">Engineer</span>:{'\n'}
                      {'    '}<span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-red-400">self</span>):{'\n'}
                      {'        '}<span className="text-red-400">self</span>.name = <span className="text-green-300">"Krishika Mohindru"</span>{'\n'}
                      {'        '}<span className="text-red-400">self</span>.degree = <span className="text-green-300">"B.Tech CSE (AI & ML)"</span>{'\n'}
                      {'        '}<span className="text-red-400">self</span>.primary_languages = [<span className="text-green-300">"Python"</span>, <span className="text-green-300">"C++"</span>]{'\n'}
                      {'        '}<span className="text-red-400">self</span>.interests = [<span className="text-green-300">"Applied AI"</span>, <span className="text-green-300">"Systems"</span>, <span className="text-green-300">"Web"</span>]{'\n'}
                      {'        '}<span className="text-red-400">self</span>.status = <span className="text-green-300">"Ready for Internships"</span>{'\n'}
                      {'\n'}
                      {'    '}<span className="text-purple-400">def</span> <span className="text-blue-400">solve_problem</span>(<span className="text-red-400">self</span>, requirement):{'\n'}
                      {'        '}<span className="text-purple-400">return</span> <span className="text-green-300">f"Building clean, robust code for {'{requirement}'}"</span>
                    </code>
                  </pre>
                ) : (
                  <pre className="text-slate-300">
                    <code>
                      <span className="text-slate-500">// Problem Solving & Data Structures in C++</span>{'\n'}
                      <span className="text-purple-400">#include</span> <span className="text-green-300">&lt;iostream&gt;</span>{'\n'}
                      <span className="text-purple-400">#include</span> <span className="text-green-300">&lt;vector&gt;</span>{'\n'}
                      {'\n'}
                      <span className="text-blue-400">int</span> <span className="text-yellow-300">main</span>() {'{\n'}
                      {'    '}std::vector&lt;std::string&gt; coreStack = {'{\n'}
                      {'        '}<span className="text-green-300">"C++"</span>, <span className="text-green-300">"Python"</span>, <span className="text-green-300">"Data Structures"</span>, <span className="text-green-300">"AI/ML"</span>{'\n'}
                      {'    '}{'};\n'}
                      {'    '}std::cout &lt;&lt; <span className="text-green-300">"Ready to contribute & grow as an engineer."</span>;{'\n'}
                      {'    '}<span className="text-purple-400">return</span> <span className="text-orange-400">0</span>;{'\n'}
                      {'}'}
                    </code>
                  </pre>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-slate-950 text-slate-400 text-xs border-t border-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active status: Available for Internships
                </span>
                <span className="text-slate-500">UTF-8</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
