export const resumeData = {
  personalInfo: {
    name: "MADHAV SEMWAL",

    title:
      "Full-Stack Developer | Backend Systems Engineer | Real-Time Systems & GenAI Enthusiast",

    location: "Pune, Maharashtra, India",

    email: "madhavsemwal9@gmail.com",

    phone: "+91 8806799065",

    github: "GitHub",

    linkedin: "LinkedIn",

    portfolio: "Portfolio",

    focus:
      "Full-stack developer focused on building scalable backend systems, real-time communication tools, and AI-enhanced applications. Passionate about system architecture, microservices, and performance-oriented backend development using Go and Node.js.",

    professionalFocus: [
      "Designing scalable backend systems and modular service architectures",
      "Building real-time communication systems using WebSockets and event-driven architectures",
      "Developing full-stack applications with React, Node.js, and modern JavaScript ecosystems",
      "Exploring high-performance backend engineering with Go and concurrent system design",
      "Integrating Generative AI workflows into modern web applications",
      "Designing developer-friendly APIs and reusable service infrastructures",
    ],

    interests: [
      "System Design",
      "Microservices Architecture",
      "Real-time Systems",
      "Generative AI Applications",
      "Developer Tools & Infrastructure",
    ],

    engineeringInterests: [
      "Distributed Systems",
      "Concurrency Models and Parallel Processing",
      "Backend Performance Optimization",
      "Scalable Web Architectures",
      "Authentication & Security Systems",
      "API Platform Engineering",
    ],

    technologiesOfInterest: [
      "Go (Golang)",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "React",
      "Next.js",
      "Docker",
      "Cloud Infrastructure",
    ],

    developmentPhilosophy:
      "I enjoy designing software systems that are simple to use yet powerful under the hood. My approach focuses on building modular, maintainable architectures that scale with growth, while delivering intuitive user experiences on the frontend.",

    learningFocus: [
      "Advanced System Design",
      "Distributed Backend Systems",
      "Event-Driven Architectures",
      "AI-powered Developer Tools",
      "High-performance server development with Go",
    ],

    availability:
      "Open to software engineering opportunities, backend development roles, and collaborative projects involving scalable systems or AI-powered applications.",
  },

  summary:
    "Motivated Full-Stack Developer specializing in modern JavaScript ecosystems including React, Next.js, and Node.js, with a growing focus on Go (Golang) for high-performance backend systems. Experienced in building scalable web platforms, real-time communication systems, and modular RESTful APIs. Strong interest in system design, distributed architectures, and Generative AI integrations. Known for creating clean, intuitive user interfaces and designing developer-friendly backend services that are modular, secure, and scalable.",

  competencies: {
    Languages: ["Go (Golang)", "JavaScript (ES6+)", "TypeScript", "Python"],

    Frontend: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Framer Motion",
      "Tailwind CSS",
      "Shadcn UI",
      "Responsive UI Architecture",
      "Component-Driven Development",
    ],

    Backend: [
      "Node.js",
      "Express.js",
      "Go (Gin / Echo)",
      "REST API Architecture",
      "WebSockets",
      "Authentication Systems",
      "Session Management",
    ],

    Databases: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database Schema Design",
      "Query Optimization",
    ],

    CloudDevOps: [
      "AWS (EC2, S3)",
      "Docker",
      "Git & GitHub",
      "CI/CD Pipelines",
      "Cloud Storage (Firebase / Cloudinary)",
      "Deployment (Vercel / Render)",
    ],

    Architecture: [
      "Microservices Architecture",
      "Scalable Backend Systems",
      "Modular API Design",
      "Real-Time System Design",
      "Authentication & Security Systems",
    ],
  },

  projects: [
    {
      title: "Syncra",
      subtitle: "Real-Time Peer Messaging Engine",
      tech: [
        "Go",
        "WebSockets",
        "PostgreSQL",
        "Goroutines",
        "Channel Concurrency",
        "REST APIs",
        "JSON Messaging Protocol",
        "Connection Pooling",
        "Event-Driven Architecture",
      ],

      bullets: [
        "Developed a lightweight real-time messaging engine enabling instant peer-to-peer communication using WebSockets.",

        "Implemented dynamic room-based message channels allowing users to connect without traditional polling mechanisms.",

        "Leveraged Go's concurrency model using Goroutines to efficiently manage thousands of socket connections.",

        "Designed a modular backend architecture where communication layers are separated from user management logic.",

        "Implemented message persistence strategies with PostgreSQL while maintaining high-performance message throughput.",

        "Engineered a custom WebSocket message routing layer responsible for broadcasting messages between active peers with minimal latency.",

        "Used Go channels and Goroutines to handle concurrent socket connections safely, ensuring efficient communication without blocking operations.",

        "Designed a structured JSON messaging protocol to standardize message types including connection events, message delivery, user presence updates, and room synchronization.",

        "Implemented connection lifecycle management including socket registration, heartbeat monitoring, graceful disconnect handling, and automatic resource cleanup.",

        "Optimized database communication using PostgreSQL connection pooling to support concurrent message persistence and user session tracking.",

        "Architected the backend to separate networking, messaging logic, and persistence layers to maintain clean service boundaries.",

        "Built scalable message broadcasting patterns enabling the server to efficiently deliver events to multiple connected clients in real time.",

        "Explored event-driven architecture patterns to handle asynchronous messaging events and socket state updates.",
      ],
    },

    {
      title: "AuthSphere",
      subtitle: "Centralized Authentication Service",
      tech: [
        "Node.js",
        "Express",
        "OAuth 2.0",
        "PKCE",
        "JWT",
        "REST APIs",
        "Session Management",
        "CORS Security",
        "Authentication Middleware",
      ],

      bullets: [
        "Built a centralized authentication platform implementing OAuth 2.0 with PKCE for secure login flows.",

        "Designed the service as a plug-and-play authentication hub capable of integrating with multiple web applications.",

        "Implemented secure token-based authentication with advanced session handling and CORS protection.",

        "Focused on developer-friendly API architecture enabling easy integration for third-party systems.",

        "Designed authentication flows supporting login, registration, token issuance, refresh tokens, and session validation.",

        "Implemented JWT-based access tokens and refresh token rotation mechanisms to improve security and session lifecycle control.",

        "Built custom authentication middleware layers responsible for validating tokens, enforcing access control, and protecting API endpoints.",

        "Implemented secure cross-origin request handling using robust CORS configurations to support multiple frontend clients safely.",

        "Designed modular Express route architecture separating authentication controllers, middleware, and token logic.",

        "Developed extensible identity management endpoints allowing integration of additional authentication providers and identity services.",

        "Focused on scalable authentication service design that can act as a centralized identity provider across multiple applications.",
      ],
    },

    {
      title: "NexChat",
      subtitle: "Full-Stack Real-Time Messaging Platform",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT Authentication",
        "REST APIs",
        "Real-Time Messaging",
        "Event-Based Communication",
      ],

      bullets: [
        "Developed a real-time chat platform enabling instant messaging through WebSockets with Socket.io.",

        "Implemented JWT-based authentication and protected routes ensuring secure communication between users.",

        "Designed scalable architecture integrating React frontend with Node.js backend APIs.",

        "Built chat history persistence using MongoDB with optimized schema for fast message retrieval.",

        "Implemented event-driven messaging architecture where server-side Socket.io events synchronize client state in real time.",

        "Designed frontend messaging interface using React component architecture enabling dynamic message rendering and state synchronization.",

        "Created efficient MongoDB schemas for storing users, chat sessions, and message history while supporting fast query performance.",

        "Built message delivery pipelines handling message creation, socket broadcast, and persistent storage simultaneously.",

        "Implemented secure API layers protecting user operations such as profile access, messaging endpoints, and session management.",

        "Designed scalable client-server communication patterns ensuring minimal latency during active messaging sessions.",

        "Integrated REST APIs with real-time socket events to maintain synchronized state between backend data and frontend UI.",
      ],
    },

    {
      title: "Discussly",
      subtitle: "Community Discussion Platform",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "Framer Motion",
        "Redux",
        "Authentication Systems",
      ],

      bullets: [
        "Developed a full-stack community discussion platform where users create posts, join communities, and interact via threaded comments.",

        "Designed responsive and modern UI components using React with smooth transitions and animated interfaces.",

        "Implemented RESTful backend services for user profiles, community management, and post interactions.",

        "Focused on scalable data models for handling community membership and content growth.",

        "Built a modular backend architecture separating controllers, services, and database access layers.",

        "Implemented user relationship systems including follow mechanisms, community membership tracking, and interaction metrics.",

        "Designed MongoDB document schemas optimized for storing posts, threaded comments, and community metadata.",

        "Implemented dynamic UI state management enabling efficient updates when users interact with posts and communities.",

        "Enhanced frontend user experience using Framer Motion animations and responsive UI layouts.",

        "Developed reusable API services responsible for handling user content creation, retrieval, and moderation workflows.",
      ],
    },

    {
      title: "AI Workflow Experiments",
      subtitle: "Generative AI Integrations",
      tech: [
        "Node.js",
        "OpenAI API",
        "Gemini API",
        "Prompt Engineering",
        "AI API Orchestration",
        "Natural Language Processing",
      ],

      bullets: [
        "Developed intelligent API prototypes integrating OpenAI and Gemini models for context-aware responses.",

        "Built prompt-driven UI workflows enabling natural language interaction with backend services.",

        "Explored AI-assisted automation tools for content generation and task orchestration.",

        "Designed API wrappers around LLM services to standardize prompt submission, response handling, and structured output processing.",

        "Experimented with prompt engineering techniques to guide AI models toward structured responses and controlled output formats.",

        "Developed lightweight experimentation environments enabling rapid testing of AI-assisted workflows.",

        "Built proof-of-concept automation systems where natural language inputs trigger backend task pipelines.",
      ],
    },

    {
      title: "Dynamic Music Streaming Platform",
      subtitle: "Scalable Audio Streaming System",
      tech: [
        "JavaScript",
        "Node.js",
        "Express",
        "Audio Streaming",
        "Cloud Storage",
        "Firebase Storage",
        "Cloudinary",
        "REST APIs",
      ],

      bullets: [
        "Developed a Spotify-style music streaming interface with dynamic audio loading and track playback controls.",

        "Implemented backend APIs to dynamically list and stream audio files from server folders.",

        "Integrated cloud storage solutions including Firebase Storage and Cloudinary for scalable media hosting.",

        "Built interactive player controls with lazy loading and metadata extraction.",

        "Engineered a dynamic audio file discovery system enabling the backend to detect and serve audio files without manual configuration.",

        "Designed streaming APIs capable of delivering audio resources efficiently to frontend players.",

        "Implemented frontend audio control systems supporting play, pause, next track navigation, and playlist synchronization.",

        "Built modular JavaScript components responsible for dynamically generating audio player elements and track listings.",

        "Explored scalable media hosting strategies by integrating cloud-based storage providers for large audio asset management.",

        "Focused on optimizing frontend playback experience through lazy loading and efficient asset retrieval.",
      ],
    },
  ],

  experience: [
    {
      role: "Web Developer (Freelance / Remote)",
      period: "2023 – Present",

      bullets: [
        "Delivered production-ready web applications for local clients including e-commerce and business platforms.",
        "Designed and implemented full-stack systems handling product catalogs, customer interactions, and contact workflows.",
        "Focused on performance optimization, SEO-friendly architecture, and responsive UI design.",
        "Collaborated with clients to translate business requirements into scalable web solutions.",
      ],
    },
  ],

  education: [
    {
      degree: "B.E. in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      location: "Pune, India",
      period: "Expected Graduation: 2027",
    },
  ],
};
