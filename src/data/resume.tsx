import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import React from "react";

export const DATA = {
  name: "Ramon Zubiaga",
  initials: "RZ",
  url: "https://ramonzubiaga.com",
  location: "Madrid, Spain",
  locationLink: "",
  description: "Building Tech, Solving Problems, Automating the Future",
  summary: "Interested in software and building companies. Currently pursuing a double degree in Business Administration and Data Analytics while developing software and apps. Always eager to learn and create solutions that make a difference.",
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
    "RevenueCat"
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
      description:
        "Contributing to a statistics system for employee training performance evaluation. Supporting migration from AWS to Azure, including databases, APIs, and telemetry. Designing new data models, developing front-end interfaces with data visualizations, and implementing Azure SQL Server with Entity Framework Core.",
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
      description:
        "Created Power BI reports, implemented SQL databases, and analyzed large volumes of data. Developed skills in data modeling, performance optimization, and multidimensional dashboard design. Focused on data cleaning, transformation, and statistical modeling to identify trends and make predictions.",
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
      description:
        "Worked on decoding, filtering, and converting Betfair's real-time API data to create a database for statistical analysis of Premier League events. Focused on understanding the impact of real-time events on lay and back bets, and developing a statistical algorithm for automated betting. Improved skills in API handling, data interpretation, and analysis.",
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
      title: "Newsletter iOS App (In Development)",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description: "Currently working on an innovative iOS app in the newsletter space. This project aims to revolutionize how people interact with newsletters. More details to be disclosed soon.",
      technologies: [
        "Swift",
        "iOS Development",
        "Firebase",
        "Google Text-to-Speech API",
        "Gmail API",
        "OpenAI API",
        "Newsletter Technology"
      ],
      links: [],
      image: "/InDevelopment.jpg",
      video: undefined,
      imagePosition: undefined,
    },
    {
      title: "Scribix",
      href: "https://getscribix.com",
      dates: "2024 - Present",
      active: true,
      description: "Created an AI-powered email automation tool designed to simplify email management for professionals. Scribix is a SaaS platform that integrates seamlessly with popular email providers, using AI to generate context-aware, multilingual replies. The goal is to improve email response rates, enhance cold email strategies, and drive business growth by making communication more efficient and effective.",
      technologies: [
        "Next.js",
        "Prisma",
        "TypeScript",
        "PostgreSQL",
        "Vercel",
        "Figma",
        "AI Integration",
        "Saas"
      ],
      links: [
        {
          title: "Website",
          href: "https://getscribix.com",
          icon: "",
        },
      ],
      image: "/ScribixCanvas.png",
      video: undefined,
      imagePosition: undefined,
    },
    {
      title: "Momentum - Pursuit of a Superior Self",
      href: "#",
      dates: "2024 - Future",
      active: true,
      description: "I've started designing and developing a full-stack Swift UI iOS app called Momentum, with plans to complete it in the future. This social media platform concept is centered on entrepreneurs focused on personal development. The app will host public and private communities where users can share workouts, personal developments, and projects. Planned features include user authentication, real-time data synchronization, and a custom UI/UX design. The goal is to create a more authentic alternative to mainstream social media platforms, fostering mutual encouragement and collaboration among like-minded individuals. This project is in ongoing development and will continue to evolve as work progresses.",
      technologies: [
        "Swift UI",
        "iOS Development",
        "Firebase",
        "RESTful APIs",
        "UI/UX Design",
        "Figma",
        "Social Media Platform",
        "User Authentication",
        "Real-time Data Sync"
      ],
      links: [],
      image: "/MomentumCover.png",
      video: undefined,
      imagePosition: undefined,
    },
    {
      title: "Ztriko",
      href: "https://www.instagram.com/byztriko/",
      dates: "2023 - 2024",
      active: false,
      description: "As the lead developer of Lemon Delight Cakes (Ztriko), innovated the e-commerce platform by integrating personalized QR codes for custom packaging messages, automated order management with calendar syncing for precise deliveries, and targeted email marketing campaigns. Blended culinary art with digital innovation, enhancing customer experience through automation and personal touches while ensuring operational efficiency.",
      technologies: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "AWS S3 Bucket",
        "E-commerce",
        "QR Code Integration",
        "Email Marketing"
      ],
      links: [
        {
          title: "Instagram",
          href: "https://www.instagram.com/byztriko/",
          icon: "",
        },
      ],
      image: "/ZtrikoCaja.png",
      video: "/ZtrikoClip.mp4",
      imagePosition: undefined,
    },
    {
      title: "Melt",
      href: "#",
      dates: "2023",
      active: false,
      description: "Developed the e-commerce platform for Sensual Delights, a brand specializing in sexual chocolates. Created an engaging online experience using Figma for design and HTML, CSS, and JavaScript for the front end. Integrated with Shopify's Liquid language for seamless e-commerce operations, showcasing the ability to merge creative design with technical execution in a unique niche market.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Figma",
        "Shopify Liquid",
        "E-commerce"
      ],
      links: [],
      image: "/MeltDesign.png",
      imagePosition: "object-top",
      video: undefined,
    },
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
    technologies: readonly string[];
    links: readonly {
      title: string;
      href: string;
      icon: React.ReactNode;
    }[];
    image: string | undefined;
    video: string | undefined;
    imagePosition: string | undefined;
  }[];
};

export function getIconComponent(iconName: keyof typeof Icons) {
  return Icons[iconName];
}
