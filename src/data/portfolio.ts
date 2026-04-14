export interface Experience {
  role: string;
  company: string;
  department?: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: string;
  status?: "published" | "communicated";
}

export interface Achievement {
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: "Assistant Professor & Member of AI R&D Cell",
    company: "Brainware University",
    department: "Department of Computer Science Engineering – Artificial Intelligence",
    location: "Barasat, Kolkata",
    period: "July 2025 – Present",
    points: [
      "Teaching undergraduate courses in AI and Computer Science.",
      "Building AI automations and products for university use.",
      "Member of the AI R&D cell driving innovation projects.",
    ],
  },
  {
    role: "Associate Sales Engineering Analyst (Intern)",
    company: "Dell Technologies",
    location: "Bangalore",
    period: "January 2023 – May 2023",
    points: [
      "Designed storage and computing solutions for data centers.",
      "Analyzed capacity requirements and provided pre-sales technical support.",
      "Collaborated with cross-functional teams to deliver optimal solutions.",
    ],
  },
];

export const educations: Education[] = [
  {
    degree: "UGC NET – Computer Science and Applications",
    institution: "National Testing Agency, India",
    period: "Qualified: January 2025",
    score: "Qualified",
    scoreLabel: "Status",
  },
  {
    degree: "M.Tech in Computer Science and Engineering",
    institution: "Maulana Abdul Kalam Azad University of Technology",
    period: "2023 – 2025",
    score: "7.79",
    scoreLabel: "CGPA",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Siliguri Institute of Technology",
    period: "2019 – 2023",
    score: "9.42",
    scoreLabel: "CGPA",
  },
];

export const projects: Project[] = [
  {
    title: "Arrhythmia Detection using Graph Neural Network",
    description:
      "Developed an ML model using ECG dataset to train Graph Neural Networks for automated arrhythmia classification.",
    tech: ["Python", "Machine Learning", "Graph Neural Networks"],
  },
  {
    title: "Note Taking Application",
    description:
      "Cross-platform mobile application with Firebase backend featuring user authentication, CRUD operations, and real-time sync.",
    tech: ["Flutter", "Firebase", "Dart"],
  },
  {
    title: "Book Reading Application",
    description:
      "Mobile reading platform with user-friendly interface, content selection and reading functionality.",
    tech: ["Flutter", "Mobile Development"],
  },
  {
    title: "Interactive Quiz Application",
    description:
      "Gamified quiz platform with scoring system, user engagement features and performance tracking.",
    tech: ["Flutter", "Mobile Development"],
  },
];

export const publications: Publication[] = [
  {
    authors: "Das, Subhajeet, Pritam Paul, Rohit Bahadur, and Sohan Das.",
    title:
      "Stro-VIGRU: defining the vision recurrent-based baseline model for brain stroke classification.",
    venue: "Connecting Intelligence, pp. 745–749. CRC Press",
    year: "2025",
    status: "published",
  },
  {
    authors: "Paul, Pritam, Subhajeet Das, Sohan Das, and Anirbit Sengupta.",
    title: "Arrhythmia Detection Using Graph Neural Networks.",
    venue: "8th International Selçuk Scientific Research Congress, pp. 1267–1277",
    year: "2025",
    status: "published",
  },
  {
    authors: "Paul, Pritam, Sohan Das, Subhajeet Das, and Anirbit Sengupta.",
    title:
      "Improving Logistics and Supply Chain Operational Efficiency Using Data Science.",
    venue: "8th Bilsel International Ahlat Scientific Researches Congress, Bitlis, Türkiye",
    year: "2026",
    status: "communicated",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Core Team Member – GirlScript Siliguri",
    description:
      "Served as Faculty for App Development and Flutter for 2 years. Mentored students and organized technical workshops.",
  },
  {
    title: "3rd Place – WEB-A-THON",
    description:
      "Developed a Q&A website using HTML, CSS, and JavaScript in a competitive hackathon.",
  },
  {
    title: "Hackathon Organizer – 'Web Boot Camp'",
    description:
      "Organized and led a Web Development Hackathon, fostering community learning.",
  },
  {
    title: "Open Source Contributor",
    description:
      "Active contributor to open-source projects and technical mentor in workshops.",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "Dart", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Frameworks & Technologies",
    skills: ["Flutter", "Firebase", "Graph Neural Networks", "Neural Networks"],
  },
  {
    category: "Academic Subjects",
    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Computer Organization & Architecture",
      "Computer Networks",
      "Operating Systems",
      "Robot Operating System",
      "Data Visualization",
    ],
  },
  {
    category: "Core Competencies",
    skills: [
      "Machine Learning",
      "App Development",
      "Database Management",
      "Software Engineering",
      "Research & Development",
    ],
  },
];

export const languages = [
  { lang: "English", level: "Full Professional Proficiency" },
  { lang: "Bengali", level: "Native Proficiency" },
  { lang: "Hindi", level: "Intermediate Proficiency" },
];

export const interests = [
  "Painting & Sketching",
  "Chess",
  "Technology Innovation",
  "Research & Development",
];
