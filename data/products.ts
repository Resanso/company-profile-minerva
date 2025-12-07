export interface Product {
  id: number;
  icon: string;
  title: string;
  oneLiner: string;
  keyFeatures: string[];
  useCases: string[];
}

export const products: Product[] = [
  {
    id: 1,
    icon: "/images/icon1.png",
    title: "Interactive Digital Twin Dashboard",
    oneLiner:
      "Real-time visual replica of your factory floor for comprehensive operational awareness.",
    keyFeatures: [
      "Live synchronization with IoT sensors and production equipment",
      "Interactive 3D visualization of machines, workflows, and material flow",
      "Unified monitoring across multiple production lines and facilities",
      "Scenario simulation to test process changes before deployment",
    ],
    useCases: [
      "Real-time factory floor monitoring and anomaly detection",
      "Remote operational oversight for multi-site manufacturing",
      "Training new operators with digital environment replicas",
      "Collaborative process improvement with interactive what-if analysis",
    ],
  },
  {
    id: 2,
    icon: "/images/icon2.png",
    title: "AI Energy Optimization & Simulation",
    oneLiner:
      "Autonomous AI agents that continuously optimize energy consumption across industrial processes.",
    keyFeatures: [
      "Intelligent load balancing across machines and production schedules",
      "Autonomous optimization agents that adapt to changing conditions",
      "Predictive energy demand forecasting for proactive resource planning",
      "Multi-scenario simulation engine for evaluating efficiency strategies",
    ],
    useCases: [
      "Reducing energy waste in high-consumption manufacturing operations",
      "Optimizing machine scheduling to minimize peak demand charges",
      "Identifying energy-intensive process bottlenecks",
      "Supporting sustainability goals through intelligent resource management",
    ],
  },
  {
    id: 3,
    icon: "/images/icon3.png",
    title: "Predictive & Prescriptive Analysis",
    oneLiner:
      "AI-driven forecasting that predicts failures and prescribes optimal corrective actions.",
    keyFeatures: [
      "Early warning system for equipment degradation and potential failures",
      "Quality deviation prediction to maintain consistent output standards",
      "Prescriptive recommendations with ranked action alternatives",
      "Continuous learning from historical patterns and operational feedback",
    ],
    useCases: [
      "Preventing unplanned downtime through predictive maintenance",
      "Maintaining product quality consistency across production batches",
      "Optimizing maintenance schedules based on actual equipment condition",
      "Reducing waste from defects through early process intervention",
    ],
  },
  {
    id: 4,
    icon: "/images/icon4.png",
    title: "Ask AI Agent for Quick Insight",
    oneLiner:
      "Natural language AI assistant trained on your plant data for instant operational intelligence.",
    keyFeatures: [
      "Conversational interface for querying sensor data and production metrics",
      "Automated trend analysis and anomaly explanation",
      "Contextual insights drawn from historical operational patterns",
      "Knowledge synthesis across multiple data sources and systems",
    ],
    useCases: [
      "Rapid troubleshooting during production issues",
      "Accelerating shift handovers with AI-generated summaries",
      "Empowering operators with instant access to technical knowledge",
      "Reducing time spent navigating complex dashboard interfaces",
    ],
  },
];

export const morePotentialImpact = {
  description:
    "By integrating MINERVA's industrial AI platform, manufacturers can transform how they operate—moving from reactive problem-solving to proactive optimization. Companies gain deeper operational visibility, enabling smarter process tuning and more consistent quality outcomes. Energy inefficiencies diminish as autonomous agents continuously refine resource allocation. Decision-making accelerates through AI-assisted insights, while engineers are empowered with tools that amplify their expertise rather than replace it. The result is a more resilient, sustainable, and intelligent manufacturing environment—one where disruptions are anticipated, waste is minimized, and every operational decision is informed by comprehensive data intelligence.",
};
