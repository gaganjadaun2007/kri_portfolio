export const personalInfo = {
  name: "Krishika Mohindru",
  profileImage: "/profileimage.jpeg",
  role: "Aspiring AI/ML Engineer | Python & C++ Developer",
  subRole: "B.Tech CSE — AI & ML",
  status: "Open to Internships",
  period: "2025 – Present",
  location: "India",
  bio: "I’m a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning, interested in building practical software, learning modern technologies and solving real-world problems through code.",
  aboutParagraphs: [
    "I’m currently pursuing a Bachelor of Technology in Computer Science Engineering with a specialization in Artificial Intelligence & Machine Learning. I enjoy working with programming, web technologies and problem-solving, while continuously strengthening my fundamentals in data structures, software development and AI/ML.",
    "My approach is simple: learn the fundamentals, build projects around them and improve through practical experimentation. I’m particularly interested in opportunities where I can contribute to real projects while growing as an engineer."
  ],
  contacts: {
    email: "[EMAIL]",
    linkedin: "https://linkedin.com/in/[LINKEDIN]",
    github: "https://github.com/[GITHUB]",
    resumeUrl: "/resume.pdf"
  }
};

export const quickStats = [
  {
    label: "Degree & Specialization",
    value: "B.Tech CSE (AI & ML)",
    sub: "Undergraduate Program"
  },
  {
    label: "Timeline",
    value: "2025 – Present",
    sub: "Active Student"
  },
  {
    label: "Current Location",
    value: "Based in India",
    sub: "Available for Remote / On-site"
  },
  {
    label: "Availability Status",
    value: "Open to Internships",
    sub: "Software & AI/ML Roles"
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages used for problem solving, algorithmic coding, and software development.",
    skills: [
      { name: "Python", status: "Comfortable" },
      { name: "C++", status: "Comfortable" },
      { name: "C", status: "Working Knowledge" },
      { name: "JavaScript", status: "Working Knowledge" }
    ]
  },
  {
    title: "Web Technologies",
    description: "Frontend tools and libraries for building clean, responsive interfaces.",
    skills: [
      { name: "React", status: "Working Knowledge" },
      { name: "JavaScript (ES6+)", status: "Working Knowledge" },
      { name: "HTML5", status: "Comfortable" },
      { name: "CSS3", status: "Comfortable" }
    ]
  },
  {
    title: "Database & Storage",
    description: "Relational database concepts and structured query operations.",
    skills: [
      { name: "DBMS Fundamentals", status: "Working Knowledge" },
      { name: "SQL", status: "Working Knowledge" }
    ]
  },
  {
    title: "Tools & Platforms",
    description: "Development environment, version control, and deployment platforms.",
    skills: [
      { name: "Git", status: "Comfortable" },
      { name: "GitHub", status: "Comfortable" },
      { name: "VS Code", status: "Comfortable" },
      { name: "Vercel", status: "Working Knowledge" }
    ]
  },
  {
    title: "Currently Learning",
    description: "Active focus areas in computer science theory and specialized machine learning topics.",
    skills: [
      { name: "Data Structures & Algorithms", status: "Currently Learning" },
      { name: "Machine Learning Concepts", status: "Currently Learning" },
      { name: "Artificial Intelligence", status: "Currently Learning" }
    ]
  }
];

export const projects = [
  {
    id: "voltage-current-detection",
    title: "Voltage and Current Detection App",
    category: "IoT / Application",
    tag: "IoT",
    shortDescription: "An application designed to detect and monitor voltage and current levels in real-time.",
    problem: "There is a need for a reliable, accessible way to monitor electrical parameters for safety, analysis, and system diagnostics without relying solely on traditional multimeters.",
    solution: "Developed a detection application that interfaces with hardware sensors to measure, log, and display real-time voltage and current data in a user-friendly interface.",
    keyFeatures: [
      "Real-time voltage and current monitoring",
      "Data visualization and historical logging",
      "Hardware sensor integration for accurate measurements",
      "Safety alert thresholds and notifications",
      "Clean and responsive user interface"
    ],
    technologies: ["IoT Architecture", "Hardware Sensors", "C / C++ (Embedded)", "Frontend Technologies"],
    developmentProcess: "Integrated hardware sensors with a microcontroller to accurately read electrical parameters, process the signals, and transmit this data to the application interface for continuous monitoring.",
    challenges: "Ensuring accurate calibration of sensors under varying load conditions and maintaining low-latency, reliable data transmission between the hardware and the app.",
    learnings: "Gained significant experience in hardware-software integration, real-time data processing, analog signal filtering, and building responsive monitoring interfaces.",
    futureImprovements: [
      "Add cloud data syncing for remote monitoring across multiple devices",
      "Implement predictive maintenance alerts based on power consumption patterns"
    ],
    githubUrl: "https://github.com/[GITHUB]/voltage-current-detection-app",
    demoUrl: null,
    featured: true
  }
];

export const educationList = [
  {
    degree: "Bachelor of Technology — Computer Science Engineering",
    specialization: "Specialization in Artificial Intelligence & Machine Learning",
    institution: "Lovely Professional University",
    period: "2025 – Present",
    status: "Currently Enrolled (Undergraduate)",
    highlights: [
      "Core coursework focusing on Data Structures, Algorithms, Object-Oriented Programming, and Database Systems",
      "Specialized foundations in Machine Learning, Statistical Methods, and Artificial Intelligence concepts",
      "Active participation in technical clubs and practical project developments"
    ]
  },
  {
    degree: "Class 12 (Higher Secondary Education)",
    specialization: "CBSE Board",
    institution: "Manav Sehyog School",
    period: "2025",
    status: "Completed",
    highlights: [
      "Achieved 78% in board examinations"
    ]
  },
  {
    degree: "Class 10 (Secondary Education)",
    specialization: "ICSE Board",
    institution: "Sant Joseph Convent School",
    period: "2023",
    status: "Completed",
    highlights: [
      "Achieved 80% in board examinations"
    ]
  }
];

export const practicalWorkList = [
  {
    title: "Academic & Personal Projects",
    type: "Hands-on Development",
    period: "2025 – Present",
    description: "Building practical web applications and embedded IoT prototypes to translate theoretical computer science concepts into functional software implementations."
  },
  {
    title: "Data Structures & Algorithmic Practice",
    type: "Problem Solving",
    period: "Ongoing",
    description: "Consistent practice solving data structure and algorithm challenges in Python and C++ to strengthen fundamental analytical and problem-solving skills."
  },
  {
    title: "Technical Hackathons & Collaborative Building",
    type: "Hackathons & Events",
    period: "2025 – Present",
    description: "Participating in team hackathons and project showcases to design rapid solutions under time constraints and collaborate on engineering workflows."
  }
];

export const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
    description: "Fundamental concepts of machine learning, including supervised and unsupervised learning, and building predictive models."
  },
  {
    title: "Python for Data Science and AI",
    issuer: "Coursera",
    date: "2023",
    description: "Comprehensive course covering Python programming, data analysis libraries (Pandas, NumPy), and AI foundations."
  }
];
