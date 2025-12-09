export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  items: string[];
  image?: string;
  images?: {
    main: string;
    grid?: string[];
  };
  highlighted?: boolean;
}

export const timelineData: TimelineEntry[] = [
  {
    year: "2025",
    title: "Hackathon Victory & Pilot Implementation",
    description:
      "MINERVA wins 1st place in Hackathon 2025 and successfully deploys pilot project with industrial partners.",
    items: [
      "Won 1st place in Ericsson x Qualcomm x Ministry of Industry Hackathon 2025",
      "Deployed pilot implementation in national manufacturing facility",
      "Real-time digital twin successfully monitoring production processes",
    ],
    images: {
      main: "/hackathon-winner.JPG",
      grid: ["/pilot/Pilot.jpeg", "/pilot/Pilot2.jpeg"],
    },
    highlighted: true,
  },
  {
    year: "2026",
    title: "Platform Readiness & Partnerships",
    description:
      "Establishing strategic partnerships and preparing commercial platform for market deployment.",
    items: [
      "Establish partnerships with network and cloud providers",
      "Data and feature refinement for commercial MINERVA V2.0",
      "Build enterprise-grade security and compliance infrastructure",
      "Develop API integrations for major industrial systems",
    ],
  },
  {
    year: "2026",
    title: "National Expansion",
    description:
      "Scaling MINERVA across Indonesia's industrial landscape with focus on MIND ID ecosystem.",
    items: [
      "Deploy MINERVA across national industry subsidiaries sites",
      "Achieve 10+ industrial clients across manufacturing sectors",
      "Establish Jakarta Operations Hub for client support",
      "Launch industry-specific AI optimization modules",
    ],
  },
  {
    year: "2027",
    title: "Regional Scaling (APAC Program)",
    description:
      "Expanding to Southeast Asian markets through joint ventures and localization.",
    items: [
      "Expand to Malaysia, Thailand, and Vietnam through joint ventures with local industry partners",
      "Localize MINERVA for multilingual and multi-plant operations",
      "Establish regional support centers",
      "Build APAC industrial AI community and knowledge network",
    ],
  },
  {
    year: "2028",
    title: "Sustainability Impact",
    description:
      "Launching cloud-based solutions and net-zero optimization capabilities for global sustainability goals.",
    items: [
      "Launch MINERVA Cloud Intelligence Hub for global sustainability benchmarking",
      "Enable net-zero optimization modules with carbon tracking",
      "Partner with international sustainability certification bodies",
      "Deploy AI-driven circular economy solutions for manufacturing",
    ],
  },
  {
    year: "2029",
    title: "Global Industrial AI Leadership",
    description:
      "Establishing MINERVA as a global leader in industrial AI and sustainable manufacturing transformation.",
    items: [
      "Expand to European and Americas markets",
      "Launch MINERVA Research Lab for advanced industrial AI",
      "Build ecosystem of 100+ industrial partners worldwide",
      "Drive industry standards for AI-powered sustainable manufacturing",
    ],
  },
];
