import {
  ExternalLink,
  Terminal,
  Server,
  Database,
  LayoutTemplate,
  Briefcase,
  Sparkles,
  Star,
  Cat,
  Music,
  Code2,
  Layers,
  Award,
  CheckCircle2,
  Heart,
  Wand2,
  ChevronRight,
} from 'lucide-react';
import hanzitwinsVideo from './assets/hanzitwins.mp4';

// --- Data ---

const projects = [
  {
    id: 'hanzitwins',
    title: 'HanziTwins',
    subtitle: "Bachelor's Thesis Project",
    tags: ['AI / Machine Learning', 'Full-stack', 'PyTorch'],
    badgeColor: 'from-cyan-500 to-blue-500',
    description: 'A full-stack web application that helps learners distinguish visually similar Chinese characters through adaptive quizzes.',

    problem: 'Many Chinese characters share similar visual structures, making them easy to confuse. Traditional flashcards test character recognition but do not specifically address these visual similarities.',

    approach: 'Designed and trained a Siamese neural network using triplet loss on rendered images of 8,000+ Chinese characters to learn visual embeddings. Used nearest-neighbor search over these embeddings to generate quiz distractors at adjustable similarity levels. Built the quiz generation logic and integrated the trained model into a FastAPI backend, with a React frontend and SQLite persistence through SQLAlchemy. Also developed an interactive 2D UMAP explorer to visualize relationships between characters.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'React', 'SQLite', 'SQLAlchemy', 'UMAP'],
    mediaType: 'video',
    mediaLabel: 'HanziTwins Interactive Demo & UMAP Visualizer',
    links: [
      { label: 'AI Model & Training Repo', url: 'https://github.com/ilincutzaa/Bachelor_Thesis' },
      { label: 'FastAPI Backend Repo', url: 'https://github.com/ilincutzaa/HanziTwins-BE' },
      { label: 'React Frontend Repo', url: 'https://github.com/ilincutzaa/HanziTwins-FE' }
    ]
  },
  {
    id: 'vibecheck',
    title: 'VibeCheck',
    subtitle: 'Agile Team Project (9 Developers)',
    tags: ['Backend', 'Spring Boot', 'PostgreSQL'],
    badgeColor: 'from-indigo-500 to-purple-500',
    description: 'A mobile application that generates personalized Spotify playlists based on the user’s current mood.',

    problem: 'The application needed a backend to expose its functionality to the mobile client, handle application logic, and persist data in a relational database.',

    approach: 'Contributed to the Java/Spring Boot backend by implementing REST controllers and service-layer business logic. Modelled persistent data using Spring Data JPA and integrated the application with a PostgreSQL database hosted on Supabase. Wrote unit tests for backend functionality and collaborated with an eight-member team in an Agile environment, using Jira to coordinate development.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Supabase', 'Jira', 'Agile / Scrum'],
    mediaType: 'app',
    mediaLabel: 'Spotify Mood Playlist Integration',
    links: [
      { label: 'View GitHub Repository', url: 'https://github.com/ZeroPing-G09/VibeCheck' }
    ]
  },
  {
    id: 'checkpoint',
    title: 'Checkpoint',
    subtitle: 'Independent Personal Project',
    tags: ['Full-stack', 'Next.js', 'Authentication'],
    badgeColor: 'from-pink-500 to-rose-500',
    description: 'A full-stack web application for managing a personal video game collection, tracking backlogs and play activity, with online and offline functionality.',

    problem: 'As game libraries grow, it becomes harder to keep track of owned games, backlogs, playtime, and ratings in one place. Checkpoint provides a centralized platform for organizing and managing a personal game collection.',

    approach: 'Independently developed a full-stack application using Next.js. Implemented database operations using Sequelize ORM with PostgreSQL hosted on Neon. Developed JWT-based authentication and two-factor authentication, alongside CRUD functionality for managing game collections. Deployed the application on Vercel.',
    technologies: ['Next.js', 'JavaScript', 'PostgreSQL', 'Sequelize', 'Neon', 'Vercel', 'JWT / 2FA'],
    mediaType: 'table',
    mediaLabel: 'Checkpoint Game Library Dashboard',
    links: [
      { label: 'View GitHub Repository', url: 'https://github.com/ilincutzaa/checkpoint' }
    ]
  }
];

type Project = (typeof projects)[number];

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'fme',
    period: '2026',
    highlight: 'Enterprise Application Development & API Integration',
    badge: 'Enterprise Web Application',
    description: 'Contributed to an enterprise credit request management application, developing React and TypeScript features and integrating document-management and workflow services.',
    points: [
      'Developed new pages, reusable components, and custom hooks using React and TypeScript.',
      'Integrated Alfresco and Activiti REST APIs through Axios services and interceptors, connecting frontend features with document management and approval workflows.',
      'Implemented document-management functionality and role-based access controls for different user roles. Used Swagger and Postman to inspect, test, and troubleshoot API integrations.',
      'Collaborated in an Agile team through daily stand-ups, sprint planning, and demos. Took ownership of colleagues’ tasks when needed by understanding and extending unfamiliar parts of the codebase.'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Axios', 'Alfresco', 'Activiti', 'Swagger', 'Postman']
  },
  {
    role: 'RPA Developer Intern',
    company: 'Automatify',
    period: '2025',
    highlight: 'Independent Workflow Automation Development',
    badge: 'Process Automation',
    description: 'Independently developed an automated email-based order-processing workflow during a four-week UiPath internship.',
    points: [
      'Developed an automation solution using UiPath and the Robotic Enterprise Framework (REFramework) to process incoming order emails.',
      'Used UiPath Orchestrator queues and storage buckets to manage transaction data and supporting files throughout the automation workflow.',
      'Applied clean coding principles and separation of concerns, refining the implementation through code reviews and mentor feedback.',
      'Delivered a final solution praised by my mentor as having the quality and structure needed for production use.'
    ],
    tech: ['UiPath', 'REFramework', 'Orchestrator', 'Visual Basic', 'Agile Stand-ups', 'Code Reviews']
  }
];

const skillsCategories = [
  {
    title: 'Languages',
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C# / .NET']
  },
  {
    title: 'Frontend Development',
    icon: <LayoutTemplate className="w-5 h-5 text-sky-400" />,
    items: ['React', 'Next.js', 'Tailwind CSS', 'Axios', 'HTML5 / CSS3']
  },
  {
    title: 'Backend & APIs',
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    items: ['FastAPI', 'Spring Boot', 'RESTful APIs', 'Sequelize', 'SQLAlchemy']
  },
  {
    title: 'Databases & Cloud',
    icon: <Database className="w-5 h-5 text-purple-400" />,
    items: ['PostgreSQL', 'SQLite', 'SQL Server', 'AWS Cloud Practitioner', 'Supabase', 'Neon']
  },
  {
    title: 'AI & Machine Learning',
    icon: <Wand2 className="w-5 h-5 text-pink-400" />,
    items: ['PyTorch', 'Siamese Neural Networks', 'Triplet Loss', 'UMAP Embeddings', 'LLMs & Prompting']
  },
  {
    title: 'Tools & Methodology',
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    items: ['Git & GitHub', 'Postman', 'Swagger', 'Jira', 'Agile / Scrum']
  }
];

// --- Subcomponents ---

const BackgroundGlows = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-[140px]" style={{ animationDuration: '7s' }}></div>
      <div className="absolute bottom-10 left-1/3 w-[26rem] h-[26rem] bg-purple-600/15 rounded-full blur-[130px]"></div>
      <div className="absolute top-2/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>

      {/* Subtle whimsical grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
    </div>
);

const Hero = () => {
  return (
      <header className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">

          {/* Main Title - As requested */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Welcome to my portfolio <span className="inline-block text-amber-300">✨</span>
          </h1>

          {/* Customized Warm Whimsical Intro */}
          <div className="bg-slate-900/70 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-slate-950 mb-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-bl-full pointer-events-none"></div>

            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
              My name is <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">Ilinca</span> — Computer Science graduate pursuing an MSc in Databases at Babeș-Bolyai University. I love building full-stack applications, working with APIs and AI models, petting cats <Cat className="inline w-5 h-5 text-amber-400 -mt-1 mx-0.5 animate-pulse" />, and playing classical guitar <Music className="inline w-5 h-5 text-pink-400 -mt-1 mx-0.5" />.
            </p>
          </div>

          {/* Social / Contact Quick Action Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <a
                href="https://github.com/ilincutzaa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-850 hover:shadow-lg hover:shadow-cyan-500/10 font-semibold text-sm transition-all duration-300"
            >
              GitHub - Personal
            </a>
            <a
                href="https://github.com/ilincamares"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-850 hover:shadow-lg hover:shadow-cyan-500/10 font-semibold text-sm transition-all duration-300"
            >
              GitHub - Academic
            </a>
            <a
                href="https://linkedin.com/in/ilinca-mareș-100104323"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-850 hover:shadow-lg hover:shadow-indigo-500/10 font-semibold text-sm transition-all duration-300"
            >
              LinkedIn
            </a>

            <div className="ml-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Cluj-Napoca, Romania
            </div>
          </div>

        </div>
      </header>
  );
};

const MediaMockup = ({ project }: { project: Project }) => {

  if (project.id === 'hanzitwins') {
    return (
        <div className="mb-8 rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative">
          <video
              src={hanzitwinsVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video rounded-xl border border-slate-800 object-cover shadow-2xl shadow-blue-900/10"
          />
        </div>
    );
  }
};

const ProjectCaseStudy = ({ project }: { project: Project }) => {
  return (
      <article className="bg-slate-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl shadow-slate-950 transition-all duration-300 hover:border-slate-700">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.badgeColor} shadow-md`}>
              {project.tags[0]}
            </span>
              {project.tags.slice(1).map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-750">
                {tag}
              </span>
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h3>
            <p className="text-xs font-mono text-cyan-400 mt-1">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-slate-300 text-base mb-8 leading-relaxed font-normal">{project.description}</p>

        {/* Media Mockups */}
        <MediaMockup project={project} />

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> The Problem
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5" /> Implementation & My Contribution
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">{project.approach}</p>
            </div>
          </div>

          {/* Tech & Links column */}
          <div className="space-y-4">
            <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-850 text-slate-300 text-xs font-medium rounded-lg border border-slate-800">
                  {tech}
                </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Repositories & Links</h4>
              <ul className="space-y-2">
                {project.links.map(link => (
                    <li key={link.label}>
                      <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </article>
  );
};

const Experience = () => (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-2xl shadow-lg shadow-indigo-950">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white">Work Experience</h2>
            <p className="text-slate-400 text-sm">Industry internships & enterprise software development</p>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-full inline-block mb-2">
                  {exp.badge}
                </span>
                    <h3 className="text-2xl font-bold text-white">{exp.role} <span className="text-indigo-400">@{exp.company}</span></h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 px-3 py-1 rounded-full bg-slate-800 self-start sm:self-auto">
                {exp.period}
              </span>
                </div>

                {/* Praise / Highlight Pill */}
                <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.highlight}</span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-6">
                  {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {exp.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-slate-950 text-slate-400 text-xs font-mono rounded-lg border border-slate-800">
                  {t}
                </span>
                  ))}
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
);

const Skills = () => (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl shadow-lg shadow-cyan-950">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white">Technical Toolkit</h2>
            <p className="text-slate-400 text-sm">Languages, frameworks, databases & methodologies</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl hover:border-slate-700 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                      <span key={item} className="px-3 py-1.5 bg-slate-950 text-slate-300 text-xs font-semibold rounded-xl border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all">
                  {item}
                </span>
                  ))}
                </div>
              </div>
          ))}
        </div>

        {/* Extras & Certifications Pill */}
        <div className="mt-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">AWS Certified Cloud Practitioner</h4>
              <p className="text-xs text-slate-400">Official Cloud Certification</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-slate-300">
            <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800">English (C2)</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800">Mandarin Chinese Learner 🇨🇳</span>
          </div>
        </div>

      </div>
    </section>
);

const Footer = () => (
    <footer className="py-12 border-t border-slate-800/80 relative z-10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-slate-900 border border-slate-800 text-pink-400 mb-4">
          <Heart className="w-5 h-5 fill-current animate-pulse" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Thanks for stopping by!</h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
          Built with React, Tailwind CSS & Lucide. Prepared for software engineering roles & technical discussions.
        </p>
        <div className="text-xs font-mono text-slate-500">
          © {new Date().getFullYear()} Ilinca Mares. All rights reserved.
        </div>
      </div>
    </footer>
);

export default function App() {
  return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
        <BackgroundGlows />

        <Hero />

        <main className="relative z-10 space-y-8">
          <section className="max-w-4xl mx-auto px-6 sm:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl shadow-lg shadow-cyan-950">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-white">Selected Projects</h2>
                <p className="text-slate-400 text-sm">Interactive case studies with problem descriptions & source repos</p>
              </div>
            </div>

            <div className="space-y-12">
              {projects.map(project => (
                  <ProjectCaseStudy key={project.id} project={project} />
              ))}
            </div>
          </section>

          <Experience />
          <Skills />
        </main>

        <Footer />
      </div>
  );
}