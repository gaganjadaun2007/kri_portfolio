# Krishika Mohindru — Developer Portfolio (B.Tech CSE — AI & ML)

A clean, modern, professional, and HR-friendly personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🎯 Design & Purpose

This portfolio is specifically tailored for **internship and job applications**. It enables technical recruiters and hiring managers to quickly evaluate:
- **Who Krishika Mohindru is**: B.Tech CSE student specializing in AI & ML.
- **Core Technical Stack**: Python, C++, C, JavaScript, React, DBMS/SQL, Git.
- **Applied Proof of Work**: Detailed project breakdowns (**PrivLink** & **Smart GeoCell Road System**), including technical solutions, challenges, and engineering learnings.
- **Professional Readiness**: Quick access to resume preview/download, GitHub repositories, and contact channels.

---

## 📁 Project Structure

```text
portfolio_2/
├── index.html                  # SEO & Open Graph meta tags, Inter typography
├── package.json
├── tailwind.config.js          # Tailored color system (#2563EB accent, slate neutrals)
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx                 # Core application assembler & modal state
    ├── index.css               # Tailwind directives & accessibility rules
    ├── data/
    │   └── portfolioData.js    # Single source of truth for all portfolio data
    └── components/
        ├── Navbar.jsx          # Sticky header with section spy & resume CTA
        ├── Hero.jsx            # Value proposition & interactive code terminal
        ├── QuickInfoStrip.jsx  # Recruiter quick-glance status bar
        ├── About.jsx           # Authentic narrative & engineering pillars
        ├── Skills.jsx          # Categorized tags with honest status indicators
        ├── Projects.jsx        # Project grid with tag filtering
        ├── ProjectCard.jsx     # Card with highlights & "View Details" trigger
        ├── ProjectModal.jsx    # Deep-dive engineering modal
        ├── Education.jsx       # Verified academic timeline
        ├── Experience.jsx      # Practical work, initiatives & hackathons
        ├── GitHubSection.jsx   # Codebase & repository callout
        ├── ResumeCTA.jsx       # High-visibility resume action card
        ├── ResumeModal.jsx     # In-browser ATS resume preview & download
        ├── Contact.jsx         # Copy-ready contact cards
        ├── Footer.jsx          # Copyright, social links & back-to-top
        └── ThemeToggle.jsx     # Light/Dark mode switcher (Light default)
```

---

## 🚀 How to Run & Build

### Development Server
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization Guide

All portfolio content is decoupled and stored in `src/data/portfolioData.js`. To update your details:

1. **Contact Links**: Update `contacts.email`, `contacts.linkedin`, `contacts.github`, and `contacts.resumeUrl`.
2. **University**: Replace `[University / Institute Name]` in `educationList`.
3. **Projects**: Add or modify projects in `projects` array with your actual repository links and live URLs.
4. **Resume PDF**: Place your `resume.pdf` in the `public/` directory for direct downloads.
