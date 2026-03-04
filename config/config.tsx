import { ExpertiseItem, Skill, Social } from '@/lib/interfaces';

export const config = {
  name: 'Nasirul Ahmed',
  username: 'nasirulahmed',
  role: 'Full Stack Software Developer',
  domain: 'https://nasirulahmed.com',
  description: 'Software engineer portfolio showcasing full-stack development with Next.js',
  contact: {
    phone: '+91 9101336849',
    email: 'nasirul369@gmail.com',
    address: 'Assam, India',
    birthday: 'Aug 2',
  },
  education: [
    {
      institution: 'North Eastern Hill University',
      location: 'Meghalaya',
      degree: 'B.Tech in Information Technology',
      duration: '2016 - 2020',
    },
    {
      institution: 'Ranjit Sharma Junior Academy',
      location: 'Mangaldoi',
      degree: 'Intermediate (12th standards)',
      duration: '2014 - 2016',
    },
    {
      institution: 'Sankardev Sishu Vidya Niketan',
      location: 'Mangaldoi',
      degree: 'Matriculation (10th standards)',
      duration: '2014',
    },
  ],
  primarySkills: [
    {
      icon: 'GiArtificialIntelligence',
      color: 'text-purple-600 dark:text-purple-400',
      skill: 'AI Powered Development',
      rating: 85,
    },
    {
      icon: 'TbPrompt',
      color: 'text-yellow-500 dark:text-yellow-400',
      skill: 'Prompt Engineering',
      rating: 70,
    },
    {
      icon: 'SiClaude',
      color: 'text-[#D97757] dark:text-[#D97757]/80',
      skill: 'Claude Code',
      rating: 85,
    },
    {
      icon: 'DiMongodb',
      color: 'text-green-600 dark:text-green-400',
      skill: 'MongoDB',
      rating: 70,
    },
    {
      icon: 'DiPostgresql',
      color: 'text-blue-600 dark:text-blue-400',
      skill: 'Postgres',
      rating: 36,
    },
    {
      icon: 'SiNodedotjs',
      color: 'text-green-600 dark:text-green-400',
      skill: 'Node.Js/Express.Js',
      rating: 90,
    },
    {
      icon: 'SiReact',
      color: 'text-blue-600 dark:text-blue-400',
      skill: 'React.Js',
      rating: 82,
    },
    {
      icon: 'SiNextdotjs',
      color: 'text-gray-800 dark:text-gray-300',
      skill: 'Next.Js',
      rating: 55,
    },
    {
      icon: 'FaAws',
      color: 'text-orange-600 dark:text-orange-400',
      skill: 'AWS EC2/S3/CloudFront',
      rating: 52,
    },
    {
      icon: 'FaDocker',
      color: 'text-blue-600 dark:text-blue-400',
      skill: 'Docker, CI/CD',
      rating: 33,
    },
    {
      icon: 'FaGithub',
      color: 'text-gray-800 dark:text-gray-300',
      skill: 'Github/Git',
      rating: 70,
    },
  ] as Skill[],
  workExperiences: [
    {
      company: 'Pixentech Private Limited',
      role: 'Full Stack Software Engineer',
      duration: 'July 2022 - October 2025',
      summary:
        'Full Stack Engineer specializing in building scalable, real-time applications serving 50K+ concurrent users. Expert in Node.js/React ecosystems with deep experience in GraphQL, MongoDB, and Redis for high-performance data layers. Proven track record of reducing query latency by 40% and API response times by 25% through optimized indexing and caching strategies. Strong background in cloud deployment (AWS EC2/S3) and CI/CD automation with GitHub Actions, ensuring reliable, fast production releases.',
    },
  ],
  knowledge: [
    'Database Query Optimization & Performance Tuning',
    'AI-Powered Development',
    'Claude AI',
    'Advanced Prompt Engineering',
    'Agile/Scrum Methodology',
    'Microservice Architecture',
    'Server-side Optimization',
    'RESTful API & GraphQL Development',
    'iGaming Development',
    'Performance Monitoring',
    'Github Actions & CI/CD Pipeline',
    'Cross-functional Collaboration',
    'Debugging & Testing',
    'Server Actions & Form Handling',
    'Streaming & Suspense Boundaries',
    'Rendering Strategies (SSR, SSG)',
    'Understanding of RSC (React Server Components)',
    'React Custom Hooks Deigns',
    'Atomic Design Patterns',
    'Frontend Integration/Testing',
    'Windowing',
    'Code Splitting',
    'Reconciliation & Diffing',
    'Responsive Web Design',
    'MongoDB Schema Design',
    'PostGreSQL Entity Design',
    'Game Engine Development',
    'Remote Gaming Server (RGS)',
    'Continuous Learning',
    'Mentoring & Knowledge Sharing',
    'Code Review & Quality Assurance',
  ],
  projects: [
    {
      id: 'onepe',
      title: 'OnePe',
      subtitle: 'Mobile first Web Application for bill payments & other services',
      thumbnail: '/projects/onepe/thumbnail.png',
      description:
        'OnePe is a modern, responsive bill payment application built with Next.js, focused on bill payments and wallet management (without peer-to-peer transfers or QR scanning).',
      technologies: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'Node.js',
        'PostgresSQL',
        'MongoDB',
        'Microservices',
        'AWS',
        'Redis',
      ],
      liveUrl: 'https://onepe.netbitstudio.com/',
      githubUrl: 'https://github.com/nasirul-ahmed/onepe_fe_v2',
      featured: true,
      sampleImages: [
        '/projects/onepe/thumbnail.png',
        '/projects/onepe/image2.png',
        '/projects/onepe/image3.png',
        '/projects/onepe/image4.png',
        '/projects/onepe/image5.png',
        '/projects/onepe/image6.png',
      ],
      year: '2024',
    },
  ],
  headerNavs: [
    {
      item: 'About',
      href: '/about',
    },
    {
      item: 'Projects',
      href: '/projects',
    },
    {
      item: 'CV',
      href: '/resume',
    },
    {
      item: 'Contact',
      href: '/contact',
    },
  ],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/nasirul-ahmed',
      viewBox: '0 0 24 24',
      color: '#4460A0',
      icon: 'FaGithub',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nasirul-ahmed',
      viewBox: '0 0 382 382',
      color: '#4460A0',
      icon: 'FaLinkedin',
    },
    {
      name: 'X',
      url: 'https://x.com/n__ahmed_',
      viewBox: '0 0 24 24',
      color: '#4460A0',
      icon: 'FaXTwitter',
    },
    {
      name: 'facebook',
      url: 'https://facebook.com/share/1FDJAKXT7F/',
      viewBox: '0 0 24 24',
      color: '#4460A0',
      icon: 'FaFacebookSquare',
    },
  ] as Social[],
  about: [
    {
      text: `I'm a Full Stack Software Engineer from Assam, India, who builds fast,
          reliable web applications that scale under real traffic. My strength
          is backend development—designing scalable APIs, optimizing data
          access, and keeping systems stable as demand grows.`,
    },
    {
      text: (
        <>
          I work primarily with <span className='font-semibold text-blue-400'>Node.js</span> and{' '}
          <span className='font-semibold text-blue-400'>NestJS</span>, building REST and GraphQL
          services on <span className='font-semibold text-blue-400'>MongoDB</span> and{' '}
          <span className='font-semibold text-blue-400'>Redis</span>. I've implemented real-time
          features with WebSockets and GraphQL subscriptions, tuned database indexes to cut latency,
          and built applications that handle thousands of concurrent users.
        </>
      ),
    },
    {
      text: (
        <>
          On the frontend, I develop responsive interfaces using{' '}
          <span className='font-semibold text-blue-400'>React</span> and{' '}
          <span className='font-semibold text-blue-400'>Next.js</span>, focusing on clean state
          management, component architecture, and user experience. I've deployed production systems
          on <span className='font-semibold text-blue-400'>AWS</span> (EC2, S3, CloudFront) with
          CI/CD pipelines using <span className='font-semibold text-blue-400'>Docker</span> and{' '}
          <span className='font-semibold text-blue-400'>GitHub Actions</span> for reliable releases.
        </>
      ),
    },
    {
      text: (
        <>
          I've contributed to microservices-oriented architectures, learning firsthand about service
          boundaries and operational trade-offs. Recently, I've integrated AI tools like{' '}
          <a
            href='https://www.anthropic.com/claude'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-blue-400 hover:text-blue-800 font-medium'
          >
            Claude
          </a>
          ,{' '}
          <a
            href='https://github.com/features/copilot'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-blue-400 hover:text-blue-800 font-medium'
          >
            Copilot
          </a>
          , and{' '}
          <a
            href='https://cursor.sh'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-blue-400 hover:text-blue-800 font-medium'
          >
            Cursor
          </a>{' '}
          into my workflow — not to cut corners, but to solve problems faster and iterate smarter
          while keeping code quality high.
        </>
      ),
    },
  ],
  expertise: [
    {
      title: 'AI-Powered Development',
      badge: 'Cutting-edge',
      icon: 'HiMiniCpuChip',
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
      highlightColor: 'text-purple-600 dark:text-purple-400',
      description: (
        <>
          Leveraging tools like{' '}
          <span className='font-medium text-purple-600 dark:text-purple-400'>Claude Code</span>,
          GitHub Copilot with Sonnet 4, Cursor, and ForgeCode to revolutionize workflows, accelerate
          problem-solving, and create innovative solutions.
        </>
      ),
    },
    {
      title: 'Backend & APIs',
      icon: 'FaServer',
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      highlightColor: 'text-blue-600 dark:text-blue-400',
      description: (
        <>
          Architecting high-performance systems with{' '}
          <span className='font-medium text-blue-600 dark:text-blue-400'>Node.js</span>, Express,
          NestJS, REST API and GraphQL. Understanding in microservices, MongoDB optimization, Redis
          caching.
        </>
      ),
    },
    {
      title: 'Infrastructure & DevOps',
      icon: 'FaCloud',
      iconBg: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400',
      description:
        'Hands-on experience deploying applications on AWS using EC2, S3, and CloudFront. Familiar with server configuration, static asset hosting, CDN integration, and supporting CI/CD pipelines to streamline production deployments.',
    },
    {
      title: 'Frontend Development',
      icon: 'SiReact',
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
      description: (
        <>
          Creating responsive, performant interfaces with{' '}
          <span className='font-medium text-green-600 dark:text-green-400'>React.js</span> and{' '}
          <span className='font-medium text-green-600 dark:text-green-400'>Next.js</span>. Focus on
          clean component architecture, state management, and exceptional user experiences.
        </>
      ),
    },
    {
      title: 'iGaming Backend Development',
      badge: 'Specialized',
      icon: 'LuWorkflow',
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-500',
      iconColor: 'text-white',
      special: true,
      description:
        'Developed scalable backends specializing in slot games engine, table games engine and provably fair games backend. Expert in building Remote Gaming Server (RGS) architecture for modular and reliable game integrations.',
      tags: ['Node.JS', 'Socket.io', 'Redis Pub/Sub', 'MongoDB'],
    },
  ] as ExpertiseItem[],
};
