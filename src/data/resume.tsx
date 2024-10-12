import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ramon Zubiaga",
  initials: "RZ",
  url: "https://dillion.io",
  location: "Madrid, Spain",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
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
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Ramaszss",
        icon: Icons.x,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RammonZub",
        icon: Icons.github,
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
    },
    {
      title: "Momentum - Pursuit of a Superior Self",
      href: "#",
      dates: "2024",
      active: false,
      description: "Designed and developed a full-stack Swift UI iOS app called Momentum. This social media platform concept was centered on entrepreneurs focused on personal development. The app hosted public and private communities where users could share workouts, personal developments, and projects. Features included user authentication, real-time data synchronization, and a custom UI/UX design. The goal was to create a more authentic alternative to mainstream social media platforms, fostering mutual encouragement and collaboration among like-minded individuals.",
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
      video: "/ZtrikoClip.mp4",
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
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hackathon",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;