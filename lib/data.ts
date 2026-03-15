export const resumeData = {
  personalInfo: {
    name: "MADHAV SEMWAL",
    title: "Full-Stack Developer | GenAI & Backend Enthusiast",
    email: "madhavsemwal9@gmail.com",
    phone: "+91 8806799065",
    github: "GitHub",
    linkedin: "LinkedIn",
    focus: "Building high-performance microservices with Go & exploring Autonomous AI Agents using Python.",
  },
  summary:
    "Motivated Full-Stack Developer specializing in React, Next.js, and Node.js, with an increasing focus on Go (Golang) for high-performance backend systems. Experienced in building scalable web architectures, RESTful APIs, and real-time communication tools. Passionate about Generative AI integrations, including prompt engineering and intelligent UI workflows to automate complex tasks.",
  competencies: {
    Languages: ["Go (Golang)", "JavaScript (ES6+)", "TypeScript", "Python"],
    Frontend: ["React", "Next.js", "Redux Toolkit", "Tailwind", "Shadcn"],
    Databases: ["PostgreSQL", "MongoDB", "Redis"],
    "Cloud/DevOps": ["AWS (S3, EC2)", "Docker", "Git", "CI/CD pipelines"],
    "Backend & Security": [
      "Node.js, Express.js, Gin/Echo (Go)",
      "Advanced Session Handling, CORS",
      "AuthSphere (Custom Auth Service)",
      "RESTful APIs, Plug-and-Play Modules",
    ],
  },
  projects: [
    {
      title: "Syncra",
      subtitle: "Real-Time Peer Messaging Engine",
      tech: ["Go", "WebSockets", "PostgreSQL"],
      bullets: [
        "Developed a lightweight real-time messaging engine using WebSockets to enable instant communication between users without page refresh.",
        "Implemented dynamic room-based messaging where the backend pairs users and manages direct message channels efficiently.",
        "Leveraged Go's concurrency model with Goroutines to handle multiple socket connections simultaneously with minimal latency.",
        "Designed local message persistence within the Syncra folder while integrating PostgreSQL for user management and system metadata.",
      ],
    },
    {
      title: "AuthSphere",
      subtitle: "OAuth-Based Authentication Service",
      tech: ["JavaScript", "Node.js", "Express", "OAuth 2.0", "PKCE"],
      bullets: [
        "Built a centralized authentication service implementing OAuth 2.0 with PKCE to enable secure login flows.",
        "Designed the system as a plug-and-play authentication hub for seamless identity and session management.",
        "Implemented robust CORS policies and secure API communication supporting multiple frontend clients.",
        "Focused on developer-friendly architecture and extensibility for integration across modern web ecosystems.",
      ],
    },
    {
      title: "NexChat",
      subtitle: "Real-Time Messaging Platform",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      bullets: [
        "Developed a real-time messaging platform enabling instant chat operations utilizing WebSockets with Socket.io.",
        "Implemented secure user authentication and session management using JWT for profiles.",
        "Designed a scalable full-stack architecture mapping React/Next.js frontend with Node.js + Express backend.",
        "Integrated MongoDB/PostgreSQL for tracking robust chat history effectively.",
      ],
    },
    {
      title: "Discussly",
      subtitle: "Community Discussion Platform",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      bullets: [
        "Developed a full-stack community discussion platform where users can create posts, join communities, and interact through comments.",
        "Built responsive UI components using React with state management and smooth animations for an interactive user experience.",
        "Designed RESTful backend APIs with Node.js and Express and integrated MongoDB for efficient storage of users, posts, and community data.",
      ],
    },
    {
      title: "Generative AI",
      subtitle: "Intelligent API Experiments",
      tech: ["Node.js", "Gemini API"],
      bullets: [
        "Built intelligent prototypes tapping OpenAI and Gemini APIs orchestrating dynamic context-aware results.",
        "Pioneered intelligent UI workflows intended to automate heavy tasks relying entirely on natural prompts.",
      ],
    },
  ],
  experience: [
    {
      role: "Web Developer (Freelance / Remote)",
      period: "2023 - Present",
      bullets: [
        "Designed and launched fully-scaled e-commerce workflows delivering strong SEO conversion scores.",
        "Developed tailored product catalogs wrapping strongly protected contact operations globally.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. in Computer Science (Ongoing)",
      institution: "Savitribai Phule Pune University, Pune",
      period: "Expected Graduation: 2027",
    },
  ],
};
