interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  symbol: string;
  sourceUrl?: string;
  demoUrl?: string;
  image?: string;
}
export const portfolio = {
  name: 'Karishma Gajjar',
  email: 'karishmagajjar2903@gmail.com',
  location: 'Surat, Gujarat, India',
  github: 'https://github.com/karishmaGajjar29',
  linkedin: 'https://www.linkedin.com/in/karishma-gajjar-45a9812b6/',
  photo: '',
  resumeUrl: '',
  skills: [
    {
      title: 'Frontend & UI',
      items: [
        'Angular',
        'ReactJS',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap',
        'jQuery',
        'AJAX',
      ],
    },
    {
      title: 'Backend & frameworks',
      items: ['ASP.NET Core', 'ASP.NET Web API', 'Node.js (Basic)'],
    },
    { title: 'Databases & tools', items: ['SQL Server', 'SSMS', 'SQL', 'MongoDB', 'MySQL'] },
    { title: 'Programming languages', items: ['C', 'C++', 'Java', 'Python'] },
    { title: 'Testing', items: ['Software Testing'] },
  ],
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Technobliss',
      dates: 'July 2025 — Present',
      stack: 'ASP.NET · Angular · SQL Server',
      details: [
        'Contributing to a Clinical Management System across frontend UI, backend APIs, database operations, and module deployment.',
        'Developing patient management, appointments, doctor timetables, billing, user roles, prescriptions, drugs, and clinical workflows.',
        'Writing reusable code with ASP.NET MVC/Web API, debugging applications, and enhancing features.',
      ],
    },
    {
      role: 'Full Stack Development Intern',
      company: 'Technobliss',
      dates: 'April 21, 2025 — July 21, 2025',
      stack: 'ASP.NET · Angular · SQL Server',
      details: [
        'Contributed to Evaluate through feature development, bug fixes, and user experience improvements.',
        'Gained hands-on experience with requirements, implementation, testing, and deployment.',
      ],
    },
    {
      role: 'Angular Development Intern',
      company: 'DVIBT',
      dates: 'April 2024 — June 2024',
      stack: 'Angular · Frontend development',
      details: [
        'Completed a two-month frontend internship, contributing to an Office Management System.',
        'Assisted in building and enhancing web applications as a junior developer.',
      ],
    },
  ],
  projects: [
    {
      name: 'Clinical Management System',
      category: 'Office project · Technobliss',
      description:
        'Connected clinical workflows, from patient appointments and prescriptions to billing and user roles. Developed with the team at Technobliss.',
      technologies: ['Angular', 'ASP.NET MVC / Web API', 'SQL Server'],
      symbol: '+',
    },
    {
      name: 'Evaluate',
      category: 'Office project · Technobliss',
      description:
        'Feature development, bug fixes, and user experience improvements for a live application during my Technobliss internship.',
      technologies: ['Angular', 'ASP.NET', 'SQL Server'],
      symbol: '✓',
    },
    {
      name: 'Office Management System',
      category: 'Internship project · DVIBT',
      description:
        'Worked on this team project during my internship at DVIBT, contributing to building and enhancing the Angular frontend.',
      technologies: ['Angular'],
      symbol: '▦',
    },
    {
      name: 'Angular Portfolio Website',
      category: 'Personal project',
      description:
        'The portfolio you are viewing — built with separate Angular components, responsive layouts, light and dark themes, and links to my projects and professional profiles.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      symbol: '</>',
    },
    {
      name: 'Travel Website',
      category: 'Personal project',
      description: 'A responsive travel website built with ReactJS.',
      technologies: ['ReactJS'],
      symbol: '↗',
    },
    {
      name: 'Real Estate Website',
      category: 'Personal project',
      description: 'A real estate website built with ReactJS.',
      technologies: ['ReactJS'],
      symbol: '⌂',
    },
    {
      name: 'Job Portal Website',
      category: 'In progress',
      description: 'A job portal website I am developing with ReactJS.',
      technologies: ['ReactJS'],
      symbol: '⌘',
    },
  ] as Project[],
  education: [
    {
      degree: 'Master of Computer Applications',
      short: 'MCA',
      school: 'Bhagwan Mahavir University, Surat',
      dates: '2025 — Present · Currently in Semester 3',
    },
    {
      degree: 'Bachelor of Computer Applications',
      short: 'BCA',
      school: 'Shree Uttar Gujarat BCA College, Surat',
      dates: '2022 — 2025',
    },
    { degree: '12th Standard', short: '12', school: 'New Model High School, Surat', dates: '2022' },
    { degree: '10th Standard', short: '10', school: 'Sungrace Vidyalaya, Surat', dates: '2020' },
  ],
  languages: ['English', 'Hindi', 'Gujarati'],
};
