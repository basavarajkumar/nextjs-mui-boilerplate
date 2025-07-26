import { TBlogPost, TProject } from "types/index";

export const CATEGORIES = ["All", "Frontend/Web App", "Mobile App"];

export const PROJECTS: TProject[] = [
  {
    id: 1,
    image: "/my11circle.webp",
    client: "Play Games24x7",
    heading: "My11Circle",
    description:
      "10M+ active users! Developed core features for a fantasy sports platform supporting Cricket, Football, and Kabaddi.",
    className: "object-none",
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.games24x7.my11circle.fantasycricket",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/in/app/my11circle-fantasy-cricket/id1503278907",
      },
    ],
    category: "Mobile App",
  },
  {
    id: 2,
    image: "/advantage.png",
    client: "Wadhwani Foundation",
    heading: "Advantage",
    description: "Web platform for connecting entrepreneurs with consultants.",
    links: [
      {
        label: "Website",
        url: "https://web.nen.wfglobal.org/en/all-program",
      },
    ],
    category: "Frontend/Web App",
  },
  {
    id: 3,
    image: "/fasttrack.png",
    client: "Wadhwani Foundation",
    heading: "Ventures Fast Track ",
    description:
      "Educational platform for entrepreneurs to learn and grow their startups.",
    links: [
      {
        label: "Website",
        url: "https://skilling.wadhwanifoundation.org/en/guest",
      },
    ],
    category: "Frontend/Web App",
  },
  {
    id: 4,
    image: "/dropbox.png",
    client: "British Petroleum, UK",
    heading: "Mobbox",
    description: "For accessing Emails and Sharepoint drive.",
    category: "Mobile App",
  },
  // Add more projects as needed
  {
    id: 5,
    image: "/nm-health.png",
    client: "Northwestern Medicine (US)",
    heading: "NM Health",
    description: "For booking appointments with doctors.",
    category: "Frontend/Web App",
    className: "object-none",
  },
  {
    id: 6,
    image: "/minha-sky.webp",
    client: "SkyBrazil, Brazil",
    heading: "MinhaSky",
    description:
      "B2C, telecommunication application for customers to manage, pay bills, update personal details and raise complaints.",
    category: "Mobile App",
    className: "object-none",
  },
  {
    id: 7,
    image: "/fstp.avif",
    client: "AT&T, USA",
    heading: "FSTP – Field Services Tech Passport",
    description:
      "B2B, this app is for technicians to view, update and schedule their work orders.",
    category: "Mobile App",
  },
];

export const POSTS: TBlogPost[] = [
  {
    id: 1,
    title: "How I Built a Prioritized Modal Orchestrator (and You Should Too)",
    summary:
      "This blog dives into why I needed it, how I built it using Redux, and how you can plug it into your own app to bring modal sanity back.",
    date: "22 Jun, 2025",
    image: "/modal-orchestrator.webp",
    url: "https://medium.com/@basavask1010/how-i-built-a-prioritized-modal-orchestrator-and-you-should-too-b6f8868a1d88",
  },
  {
    id: 2,
    title:
      "🚀 Bootstrapping My Developer Portfolio with ChatGPT and TailwindCSS — From Zero to Pixel-Perfect",
    summary:
      "I built and deployed my complete developer portfolio in hours — not weeks. My co-pilot? ChatGPT.",
    date: "19 Jun, 2025",
    image: "/portfolio-blog.webp",
    url: "https://medium.com/@basavask1010/bootstrapping-my-developer-portfolio-with-chatgpt-and-tailwindcss-from-zero-to-pixel-perfect-8902448011bd",
    imgStyle: "object-fill",
  },
  {
    id: 3,
    title:
      "Enhancing Initial Load Time for Micro Front-End Pages in React Native App",
    summary:
      "Proposed a solution by pre-caching frequently needed assets, such as JavaScript chunk files, to reduce load times.",
    date: "8 Nov, 2024",
    image: "/games1-blog.png",
    url: "https://medium.com/@Games24x7Tech/enhancing-initial-load-time-for-micro-front-end-pages-in-react-nativ-8ec1744e4536",
  },
];
