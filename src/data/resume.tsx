import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import React from "react";

export const DATA = {
  name: "Ramon Zubiaga",
  initials: "RZ",
  url: "https://ramonzubiaga.com",
  location: "Madrid, Spain",
  locationLink: "",
  description: "Developing Software, Building Apps, Automating Workflows",
  summary: "Creating impactful solutions through code while pursuing a double degree in Business and Data Analytics.",
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "React",
    "Swift",
    "Python",
    "PostgreSQL",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Firebase",
    "REST APIs",
    "SQL",
    "Data Analysis",
    "Power BI",
    "Azure",
    "AWS",
    "Git",
    "Figma",
    "iOS Development",
    "Data Visualization",
    "Stripe",
    "RevenueCat",
    "AI Integration",
    "Health Tech",
    "SwiftUI"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // Remove or comment out the blog entry if it exists
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rzubiagasuarez@gmail.com",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ramon-zubiaga-suarez-01344b227/",
        icon: "linkedin" as keyof typeof Icons,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Ramaszss",
        icon: "x" as keyof typeof Icons,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RammonZub",
        icon: "github" as keyof typeof Icons,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ludus",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Developer Internship",
      logoUrl: "/Ludus.jpeg",
      start: "June 2024",
      end: "July 2024",
      description: `• Migrated 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲𝘀, 𝗔𝗣𝗜𝘀, 𝗮𝗻𝗱 𝘁𝗲𝗹𝗲𝗺𝗲𝘁𝗿𝘆 𝗳𝗿𝗼𝗺 𝗔𝗪𝗦 𝘁𝗼 𝗔𝘇𝘂𝗿𝗲, supporting a large-scale backend migration.\n• 𝗗𝗲𝘀𝗶𝗴𝗻𝗲𝗱 𝗮𝗻𝗱 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗮 𝗻𝗲𝘄 𝗱𝗮𝘁𝗮 𝗺𝗼𝗱𝗲𝗹 to meet evolving client needs, enhancing system performance and scalability.\n• 𝗗𝗲𝘃𝗲𝗹𝗽𝗲𝗱 𝗮 𝗳𝗿𝗼𝗻𝘁-𝗲𝗻𝗱 𝗶𝗻 𝗶𝗻𝗴 𝗺𝗼𝗻𝘁𝗵𝗹𝘆 𝗴𝗿𝗮𝗽𝗵𝘀 𝗮𝗻𝗱 𝗱𝗮𝘁𝗮 𝗿𝗲𝗽𝗼𝗿𝘁𝘀, improving client visibility into training performance metrics.\n• 𝗦𝘂𝗽𝗽𝗼𝗿𝘁𝗲𝗱 𝗰𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗮 𝗻𝗲𝘄 𝗱𝗮𝘁𝗮 𝗺𝗼𝗱𝗲𝗹 𝗼𝗻 𝗔𝘇𝘂𝗿𝗲 𝗦𝗤𝗟 𝗦𝗲𝗿𝘃𝗲𝗿 𝘂𝘀𝗶𝗻𝗴 𝗘𝗻𝘁𝗶𝘁𝘆 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸 𝗖𝗼𝗿𝗲.\n• 𝗖𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗲𝗱 𝘄𝗶𝘁𝗵 𝗰𝗹𝗶𝗲𝗻𝘁𝘀 𝘁𝗼 𝗱𝗲𝗳𝗶𝗻𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀, ensuring accurate representation of key performance indicators.`,
      preview: "Led AWS to Azure migration and developed performance tracking interfaces",
    },
    {
      company: "PKF Attest",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Data Analyst Intern",
      logoUrl: "/PKF.jpeg",
      start: "June 2023",
      end: "July 2023",
      description: `• 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗣𝗼𝘄𝗲𝗿 𝗕𝗜 𝗿𝗲𝗽𝗼𝗿𝘁𝘀 and interactive dashboards, enabling stakeholders to visualize key insights effectively.\n• 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗲𝗱 𝗦𝗤𝗟 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲𝘀 for efficient data storage, retrieval, and analysis, optimizing business operations.\n• 𝗔𝗻𝗮𝗹𝘆𝘇𝗲𝗱 𝗹𝗮𝗿𝗴𝗲 𝗱𝗮𝘁𝗮𝘀𝗲𝘁𝘀 to uncover trends, identify patterns, and provide actionable insights to support decision-making.\n• 𝗖𝗼𝗻𝗱𝘂𝗰𝘁𝗲𝗱 𝗱𝗮𝘁𝗮 𝗰𝗹𝗲𝗮𝗻𝗶𝗻𝗴, 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻, 𝗮𝗻𝗱 𝘀𝘁𝗮𝘁𝗶𝘀𝘁𝗶𝗰𝗮𝗹 𝗺𝗼𝗱𝗲𝗹𝗶𝗻 to enhance data quality and accuracy.\n• 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗺𝘂𝗹𝘁𝗶𝗱𝗶𝗺𝗲𝗻𝘀𝗶𝗼𝗻𝗮𝗹 𝗱𝗮𝘁𝗮 𝗺𝗼𝗱𝗲𝗹𝘀 for advanced performance optimization and improved reporting efficiency.\n• 𝗖𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗲𝗱 with cross-functional teams to design data-driven strategies and support business objectives.`,
      preview: "Built Power BI dashboards and implemented SQL databases for data analysis",
    },
    {
      company: "QW CAPITAL LLP",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Data Analyst Intern",
      logoUrl: "/QW.jpeg",
      start: "January 2022",
      end: "June 2022",
      description: `• 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗣𝗼𝘄𝗲𝗿 𝗕𝗜 𝗲𝗽𝗼𝗿𝘁𝘀 and interactive dashboards, enabling stakeholders to visualize key insights effectively.\n• 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗲𝗱 𝗦𝗤𝗟 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲𝘀 for efficient data storage, retrieval, and analysis, optimizing business operations.\n• 𝗔𝗻𝗮𝗹𝘆𝘇𝗲𝗱 𝗹𝗮𝗿𝗴𝗲 𝗱𝗮𝘁𝗮𝘀𝗲𝘁𝘀 to uncover trends, identify patterns, and provide actionable insights to support decision-making.\n• 𝗖𝗼𝗻𝗱𝘂𝗰𝘁𝗲𝗱 𝗱𝗮𝘁𝗮 𝗰𝗹𝗲𝗮𝗻𝗶𝗻𝗴, 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻, 𝗮𝗻𝗱 𝘀𝘁𝗮𝘁𝗶𝘀𝘁𝗶𝗰𝗮𝗹 𝗺𝗼𝗱𝗲𝗹𝗶𝗴 to enhance data quality and accuracy.\n• 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗺𝘂𝗹𝘁𝗶𝗱𝗶𝗺𝗲𝗻𝘀𝗶𝗼𝗻𝗮𝗹 𝗱𝗮𝘁𝗮 𝗺𝗼𝗱𝗲𝗹𝘀 for advanced performance optimization and improved reporting efficiency.\n• 𝗖𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗲𝗱 with cross-functional teams to design data-driven strategies and support business objectives.`,
      preview: "Analyzed Betfair API data for Premier League betting strategies",
    },
  ],
  education: [
    {
      school: "IE University",
      href: "https://www.ie.edu/",
      degree: "Double Degree in Business Administration and Data Analytics",
      logoUrl: "/IE.jpeg",
      start: "2021",
      end: "Present",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "BitesAi",
      href: "https://bitesai.vercel.app/",
      dates: "2024",
      active: true,
      description: "Developed an AI-powered calorie tracker app with meal analysis, health tracking, and advanced integrations for iOS.",
      overview: `
    • Conceptualized and developed a full-stack iOS application that revolutionizes nutrition tracking through AI-powered meal analysis and comprehensive health insights.
    • Integrated OpenAI APIs for analyzing meal photos, providing detailed nutritional information including calories, macronutrients, and portion sizes.
    • Implemented World Food Bank API integration for scanning food labels and QR codes, expanding tracking capabilities for packaged foods.
    • Built seamless integration with Apple Health API to sync step counts and calories burned, providing users with accurate calorie balance tracking.
    • Designed and developed an intuitive statistics dashboard for tracking weight trends, macronutrients, and daily calorie intake.
    • Created a robust backend infrastructure using Firebase for user authentication and real-time data synchronization.
    • Crafted a modern, user-friendly interface using SwiftUI, focusing on intuitive meal logging and health monitoring workflows.
    • Designed the app's branding, logo, and landing page to establish a strong market presence.`,
      service: "Mobile Application",
      technologies: [
        "Swift",
        "SwiftUI",
        "Firebase",
        "OpenAI API",
        "Apple Health API",
        "World Food Bank API",
        "Figma",
        "AI Integration"
      ],
      links: [
        {
          title: "Website",
          href: "https://bitesai.vercel.app/",
          icon: "",
        },
      ],
      image: "projects/BitesAi/BitesMockups.png",
      galleryImages: [
        "projects/BitesAi/BitesWebsite.png",
        "projects/BitesAi/BitesLogo.png"
      ],
      imagePosition: "object-center",
      video: undefined,
      category: "Mobile App",
      displayTags: ["iOS", "AI"],
      searchTags: ["Mobile", "iOS", "AI", "UX/UI", "Swift"],
    },
    {
      title: "Scribix",
      href: "https://getscribix.com",
      dates: "2024",
      active: true,
      description: "Developed an AI-powered email automation platform that streamlines professional communication with context-aware, multilingual replies.",
      overview: `
    • Developed a comprehensive full-stack SaaS platform and Chrome extension to streamline email management for professionals, featuring AI-powered, context-aware email composition and multilingual support for global communication.
    • Designed and built the Chrome extension using React.js and the web application with Next.js, ensuring seamless synchronization between the two for authentication and user data management.
    • Implemented robust user authentication and Stripe integration for subscription management, alongside a scalable PostgreSQL database to handle user accounts, AI usage limits, and subscription quotas.
    • Engineered advanced features such as quick replies, tone customization, and draft optimization, enabling users to compose and send emails faster while maintaining professionalism and personalization.
    • Led the entire product lifecycle, including UI/UX design, front-end and back-end development, and deployment, focusing on scalability, performance, and user-centric design.
    • Implemented precise controls for AI API usage limits, ensuring efficient and cost-effective operation while delivering high-quality services.
    • Solved complex challenges to achieve seamless synchronization between the Chrome extension and web application, providing a consistent and smooth user experience.
    • Enhanced productivity by minimizing time spent on manual email composition, allowing professionals to focus on core business tasks and priorities.
  `,
  service: "Full-Stack Application",
      technologies: [
        "Next.js",
        "Prisma",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Vercel",
        "Figma",
        "AI Integration",
        "Chrome Extension"
      ],
      links: [
        {
          title: "Website",
          href: "https://getscribix.com",
          icon: "",
        },
      ],
      image: "projects/Scribix/ScribixHeroScreenshot.png",
      galleryImages: [
        
      ],
      video: undefined,
      imagePosition: undefined,
      category: "SaaS",
      displayTags: ["SaaS", "AI"],
      searchTags: ["Web", "SaaS", "AI", "Chrome Extension", "Web App", "Design"],
    },
    {
      title: "Momentum",
      href: "#",
      dates: "2024",
      active: false,
      description: "A mobile app designed to help users build and maintain healthy habits through gamification and social accountability.",
      overview: `• Designed and developed a mobile app to help users build and maintain healthy habits through gamification and social accountability, encouraging users to connect with others who share similar goals.

• Created group-based accountability features, allowing users to join or create private groups with friends or public groups tailored to specific topics like running, chess, or programming.

• Integrated a camera-first approach where users post daily updates to share progress, motivate others, and stay consistent, fostering authentic and goal-driven interactions.

• Added gamification elements like streaks, badges, and leaderboards to keep users engaged and motivated.

• Built real-time interactions using Firebase for seamless group activity and notifications, ensuring smooth performance even as the user base grows.

• Focused on an intuitive and responsive UI/UX design, making it easy for users to join groups, track progress, and engage with others.

Key Features

• Group-based accountability: Users join private or public groups to build habits with friends or like-minded individuals.
• Daily progress updates: Encourages users to share authentic updates related to their goals.
• Gamification: Streaks, badges, and leaderboards incentivize consistent habit-building.
• Real-time updates: Built with Firebase for smooth handling of group activity and notifications.
• Goal customization: Groups can set challenges and themes to align efforts and foster engagement.`,
      service: "Mobile App",
      technologies: [
        "Swift",
        "SwiftUI",
        "Firebase",
        "Figma",
      ],
      links: [],
      image: "projects/Momentum/MomentumCover.png",
      video: undefined,
      imagePosition: undefined,
      category: "Mobile App",
      displayTags: ["iOS", "Mobile"],
      searchTags: ["Mobile", "Design", "iOS", "UX/UI"],
    },
    {
      title: "Ztriko",
      href: "https://www.instagram.com/byztriko/",
      dates: "2023 - 2024",
      active: false,
      description: "Developed and enhanced Lemon Delight Cakes' e-commerce platform with automation features and personalized QR codes.",
      overview: `• Automated QR code generation for custom packaging messages, improving personalization for customers.
• Implemented order management automation, synchronizing with Google Calendar for accurate delivery scheduling.
• Streamlined precise delivery tracking and management, ensuring timely customer satisfaction.
• Contributed to targeted email marketing campaigns, enhancing customer engagement and driving sales.`,
      service: "E-commerce",
      technologies: [
        "Python",
        "JavaScript",
        "Google API's",
        "AWS S3",
        "QR Integration",
        "Email Marketing",
        "Automation",
        "Heroku"
      ],
      links: [
        {
          title: "Instagram",
          href: "https://www.instagram.com/byztriko/",
          icon: "",
        },
      ],
      image: "/ZtrikoClip.mp4",
      galleryImages: [
        "projects/Ztriko/ZtrikoQR.png"
      ],
      mainPageImage: "/ZtrikoCaja.jpg",
      video: "/ZtrikoClip.mp4",
      imagePosition: undefined,
      category: "E-commerce",
      displayTags: ["E-commerce", "Automation"],
      searchTags: ["Web", "E-commerce", "Automation", "Web Design"],
    },
    {
      title: "Melt",
      href: "#",
      dates: "2023",
      active: false,
      description: "Designed and developed the e-commerce platform for Melt Sensual Delights, while contributing to product formulation, sourcing, and packaging design.",
      overview: `• Designed an engaging e-commerce platform using Figma for design and HTML, CSS, and JavaScript for the front end.
• Assisted in sourcing ingredients and collaborated with a food scientist to create the perfect chocolate formulation.
• Contributed to the packaging design, ensuring a premium and cohesive brand experience.
• Although the company did not continue with the project, the groundwork laid provided a strong foundation for launching a unique brand.`,
      service: "E-commerce",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Figma",
        "Shopify Liquid"
      ],
      links: [],
      image: "projects/Melt/MeltHeroScreenshot.png",
      galleryImages: [
        "projects/Melt/MeltWebDesign.png"
      ],
      imagePosition: "object-top",
      video: undefined,
      category: "E-commerce",
      displayTags: ["E-commerce", "Design"],
      searchTags: ["Web", "E-commerce", "Design", "UX/UI"],
    }
  ]
} as const satisfies {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: {
    href: string;
    icon: React.ComponentType;
    label: string;
  }[];
  contact: {
    email: string;
    social: {
      [key: string]: {
        name: string;
        url: string;
        icon: keyof typeof Icons;
        navbar: boolean;
      };
    };
  };
  work: {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
    preview: string;
  }[];
  education: {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[];
  projects: readonly {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    overview?: string;
    service?: string;
    technologies: readonly string[];
    links: readonly {
      title: string;
      href: string;
      icon: React.ReactNode;
    }[];
    image: string | undefined;
    galleryImages?: readonly string[];
    video: string | undefined;
    imagePosition: string | undefined;
    category?: string;
    displayTags: string[];
    searchTags: string[];
    mainPageImage?: string;
  }[];
};

export function getIconComponent(iconName: keyof typeof Icons) {
  return Icons[iconName];
}
