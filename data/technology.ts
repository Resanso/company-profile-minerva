/**
 * Content for the Technology section (Company Profile pages 04–05).
 *
 * Page 04 — Our Technology Approach: the physical → digital → action chain.
 * Page 05 — Technology Foundation: the six capability layers underneath it.
 *
 * Copy is deliberately non-quantitative: no impact figures are claimed here.
 */

export interface FlowStage {
  /** Stable id, also used as the anchor for the detail panel. */
  id: string;
  index: string;
  /** Short label shown on the rail. */
  label: string;
  /** Full statement shown in the detail panel. */
  headline: string;
  description: string;
  /** Concrete, checkable elements of this stage. */
  elements: string[];
}

export const flowStages: FlowStage[] = [
  {
    id: "physical",
    index: "01",
    label: "Physical Industrial World",
    headline: "Operations begin on the plant floor, not in the cloud.",
    description:
      "Machines, equipment, processes and the people operating them. This is where value is created and where every constraint is real — thermal, mechanical, procedural and human.",
    elements: ["Machines", "Equipment", "Processes", "Operators & engineers"],
  },
  {
    id: "connectivity",
    index: "02",
    label: "Connectivity & Data Acquisition",
    headline: "Signals are acquired from the assets that already exist.",
    description:
      "Existing control and instrumentation layers are read where they are, without replacing the installed base. Connectivity is selected per site — wired industrial networks, private cellular or a mix.",
    elements: ["PLC & SCADA", "Sensors", "IoT gateways", "Industrial cameras", "5G / private network"],
  },
  {
    id: "data",
    index: "03",
    label: "Industrial Data",
    headline: "Raw signals become structured, contextualised operational data.",
    description:
      "Tags are mapped to assets, assets to processes, processes to production context. Without this contextualisation, a time series is a number stream — not something an engineer or a model can reason about.",
    elements: ["Time series", "Asset hierarchy", "Process context", "Event & alarm history"],
  },
  {
    id: "twin",
    index: "04",
    label: "Digital Twin",
    headline: "A live digital representation of the physical operation.",
    description:
      "The twin holds the current state of assets and processes and keeps it synchronised with the plant. It is the shared reference that analytics, simulation and operators all read from.",
    elements: ["Asset & process model", "Live state synchronisation", "Scenario simulation", "Spatial representation"],
  },
  {
    id: "intelligence",
    index: "05",
    label: "Industrial Intelligence",
    headline: "Analytics and AI applied to a model that understands the plant.",
    description:
      "Machine learning, anomaly detection and analytics run against contextualised data rather than isolated tags — which is what makes an output attributable to a specific asset and a specific process condition.",
    elements: ["Machine learning", "Anomaly detection", "Predictive analytics", "Optimisation"],
  },
  {
    id: "prediction",
    index: "06",
    label: "Prediction & Optimisation",
    headline: "Outputs are stated as conditions, not dashboards.",
    description:
      "What is likely to happen, on which asset, within what horizon — and which of the available responses is preferable given current production constraints.",
    elements: ["Condition forecasting", "Deviation prediction", "Ranked recommendations", "Constraint-aware options"],
  },
  {
    id: "action",
    index: "07",
    label: "Action",
    headline: "The decision returns to the operator, and the loop closes.",
    description:
      "An intervention is made in the physical world. The result is observed by the same acquisition layer that started the chain, and becomes evidence the next prediction is built on.",
    elements: ["Operator intervention", "Maintenance action", "Setpoint adjustment", "Feedback to the model"],
  },
];

export interface FoundationLayer {
  index: string;
  title: string;
  description: string;
}

export const foundationLayers: FoundationLayer[] = [
  {
    index: "01",
    title: "Industrial Connectivity",
    description:
      "Connect machines, PLCs, sensors, cameras, IoT devices and existing industrial systems — reading the installed base rather than replacing it.",
  },
  {
    index: "02",
    title: "Edge Computing",
    description:
      "Process industrial data close to the physical asset, so latency-sensitive and bandwidth-constrained applications remain viable on site.",
  },
  {
    index: "03",
    title: "Industrial Data Platform",
    description:
      "Collect, contextualise and structure operational data into an asset and process model that analytics and engineers can both work against.",
  },
  {
    index: "04",
    title: "Digital Twin",
    description:
      "Maintain a dynamic digital representation of industrial assets and processes, synchronised with the state of the physical operation.",
  },
  {
    index: "05",
    title: "Industrial AI",
    description:
      "Apply machine learning, anomaly detection, predictive analytics and optimisation to contextualised operational data.",
  },
  {
    index: "06",
    title: "AI Agent",
    description:
      "Provide an interface for querying industrial data and insight directly, so operational knowledge is reachable without navigating the full system.",
  },
];

export const technologyPrinciples = [
  {
    title: "Built on the installed base",
    description:
      "Designed to connect to industrial infrastructure that is already in operation, across edge, on-premise and cloud deployments.",
  },
  {
    title: "Contextualised, not aggregated",
    description:
      "Data is mapped to assets and processes before intelligence is applied — the condition of a specific machine, not a plant-wide average.",
  },
  {
    title: "Closed loop by design",
    description:
      "Every output is intended to return to an operational decision, and every decision returns evidence to the model.",
  },
];
