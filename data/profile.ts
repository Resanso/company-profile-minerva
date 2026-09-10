/**
 * Content for the company-profile pages that sit outside the Technology and
 * MINERVA sections: Who We Are (02), The Industrial Challenge (03),
 * Industrial Implementation (08), Industries & Use Cases (10), and
 * Why Future Tech (12).
 *
 * These pages describe Future Tech the company, not MINERVA the product —
 * keep MINERVA-specific claims out of here; that separation is the point.
 */

export const whoWeAre = {
  description:
    "Future Tech is a deep-tech company developing industrial intelligence systems that bridge physical industrial assets with data, digital twins, and AI.",
  pillars: [
    {
      title: "Industrial Intelligence",
      description:
        "Turning fragmented operational data into a coherent, actionable picture of what a plant is actually doing.",
    },
    {
      title: "Digital Twin",
      description:
        "A live digital representation of physical assets and processes, kept in sync with the plant floor.",
    },
    {
      title: "Industrial AI",
      description:
        "Machine learning and analytics applied to contextualised operational data — prediction and optimisation, not dashboards.",
    },
  ],
};

export const industrialChallenge = {
  sources: ["Machines", "Sensors", "PLC", "Cameras", "Industrial Systems"],
  consequences: [
    "Limited visibility",
    "Reactive maintenance",
    "Operational inefficiency",
    "Slow decisions",
  ],
  transition:
    "Future Tech connects fragmented industrial systems into an intelligent representation of industrial operations.",
};

export interface ImplementationStage {
  label: string;
}

export const implementationStages: ImplementationStage[] = [
  { label: "Industrial Equipment" },
  { label: "PLC / Sensors / Machines" },
  { label: "Industrial Network" },
  { label: "Data Acquisition" },
  { label: "MINERVA" },
  { label: "Digital Twin + AI + Analytics" },
  { label: "Operator / Engineer" },
  { label: "Decision / Action" },
];

export interface Industry {
  index: string;
  name: string;
  problem: string;
  capability: string[];
}

export const industries: Industry[] = [
  {
    index: "01",
    name: "Manufacturing",
    problem: "Production variance and unplanned downtime erode throughput.",
    capability: [
      "Production Intelligence",
      "Digital Twin",
      "Predictive Maintenance",
      "Process Optimization",
    ],
  },
  {
    index: "02",
    name: "Mining & Smelting",
    problem: "Heavy equipment runs continuously with little room for surprises.",
    capability: ["Asset Intelligence", "Equipment Monitoring", "Energy Optimization"],
  },
  {
    index: "03",
    name: "Aviation & MRO",
    problem: "Asset history and maintenance records are scattered across systems.",
    capability: ["Asset Tracking", "Operational Intelligence", "AI-assisted Operations"],
  },
  {
    index: "04",
    name: "Energy & Utilities",
    problem: "Equipment failure is expensive to predict without contextualised data.",
    capability: ["Equipment Monitoring", "Energy Intelligence", "Predictive Analytics"],
  },
  {
    index: "05",
    name: "FMCG",
    problem: "Fast production cycles leave little margin for quality drift.",
    capability: [
      "Production Monitoring",
      "Asset Intelligence",
      "Process Optimization",
      "Energy Efficiency",
    ],
  },
  {
    index: "06",
    name: "Ports & Logistics",
    problem: "Equipment and asset visibility fragments across a large physical footprint.",
    capability: [
      "Asset Tracking",
      "Operational Visibility",
      "Equipment Intelligence",
      "AI-assisted Operations",
    ],
  },
];

export const whyFutureTech = [
  {
    index: "01",
    title: "Flexible Deployment",
    description: "Edge, on-premise and cloud architectures.",
  },
  {
    index: "02",
    title: "Open Integration",
    description: "Designed to connect with existing industrial infrastructure.",
  },
  {
    index: "03",
    title: "Deep Customization",
    description:
      "Industrial intelligence adapted to specific processes and operational requirements.",
  },
  {
    index: "04",
    title: "Pilot-to-Deployment",
    description: "Designed to move from industrial PoC toward practical deployment.",
  },
];

export const whyFutureTechPositioning =
  "Enterprise-grade industrial intelligence with the flexibility and speed of a deep-tech company.";
