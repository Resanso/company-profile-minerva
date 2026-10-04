/**
 * Use Case 2 data — Forklift Safety Monitoring & Geofencing.
 *
 * Source: "Future Tech MINERVA Project IntegrateX Impactto Komdigi Ericsson"
 * PDF, pages 13–18 (Project IntegrateX PoC at GMF AeroAsia, enabled by
 * Ericsson Private 5G). Budget figures are intentionally left out.
 */

export const useCase2 = {
  eyebrow: "Use Case 02 — Project IntegrateX",
  title: "5G-enabled forklift safety monitoring with AI camera & geofencing",
  subtitle:
    "A one-month PoC at GMF AeroAsia's aviation MRO facility, enabled by Ericsson Private 5G under the Komdigi × Garuda Spark IntegrateX program for Impactto.",
  meta: [
    { label: "Scope", value: "~2 forklifts" },
    { label: "Duration", value: "~1 month · Oct 2026" },
    { label: "Connectivity", value: "Ericsson Private 5G" },
  ],
  challenges: [
    {
      title: "Limited forklift visibility",
      description:
        "Forklift location and movement are not continuously visible across operational areas, making it hard to monitor position within designated zones.",
    },
    {
      title: "Limited real-time safety monitoring",
      description:
        "Operator condition and surrounding hazards are not continuously monitored, limiting early detection of drowsiness, distraction, pedestrians and obstacles.",
    },
    {
      title: "Reactive, fragmented supervision",
      description:
        "Monitoring relies on manual observation while operational and safety information stays fragmented, limiting proactive intervention.",
    },
  ],
  objectives: [
    {
      title: "Real-time forklift tracking",
      description:
        "Monitor location, movement and restricted operating zones through a 5G-connected tracking device.",
    },
    {
      title: "AI-based safety monitoring",
      description:
        "Detect driver drowsiness, distraction and risky behaviour, plus surrounding hazards such as pedestrians and obstacles.",
    },
    {
      title: "Real-time safety alerts",
      description:
        "Automated alerts to the driver and command center when targeted risk conditions are detected.",
    },
    {
      title: "Safety & impact data baseline",
      description:
        "Structured event data to compare against historical incidents and measure safety and COPQ impact.",
    },
  ],
  pipeline: [
    {
      step: "01",
      label: "Capture",
      description:
        "A 5G tracking device and two cameras (cabin and forward-facing) capture forklift location, driver condition and surroundings.",
    },
    {
      step: "02",
      label: "Connect",
      description:
        "Data from the moving forklift is transmitted over Private 5G to the AI and MINERVA environment.",
    },
    {
      step: "03",
      label: "Position",
      description:
        "Network-based positioning derives real-time location, movement and proximity to restricted zones.",
    },
    {
      step: "04",
      label: "Process",
      description:
        "Edge AI analyses camera feeds for drowsiness, distraction, unsafe behaviour, pedestrians and obstacles.",
    },
    {
      step: "05",
      label: "Visualise",
      description:
        "MINERVA consolidates forklift position, status and safety events into a command center view.",
    },
    {
      step: "06",
      label: "Act",
      description:
        "Alerts reach the driver and command center the moment predefined risk conditions are detected.",
    },
  ],
  why5G: [
    "Mobility — forklifts move across areas and need continuous wireless connectivity without fixed network points",
    "Real-time safety response — drowsiness, distraction or restricted-zone entry require rapid detection and notification",
    "Multi-device connectivity — tracker and dual camera streams share one reliable, low-latency network",
    "Scalable — the same foundation extends from a single forklift to fleet-wide operational monitoring",
  ],
  techStack: [
    "Ericsson Private 5G",
    "5G Tracking Device",
    "Cabin & Forward-Facing AI Cameras",
    "Edge AI / Computer Vision",
    "Geofencing & Event Logic",
    "MINERVA Command Center Dashboard",
  ],
};
