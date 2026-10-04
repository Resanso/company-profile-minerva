export interface Partner {
  name: string;
  logo: string;
  /** Relationship context shown on hover / screen readers. */
  role: string;
  /** Tailwind height class — wordmarks and stacked marks need different heights to look balanced. */
  heightClass: string;
}

export const partners: Partner[] = [
  {
    name: "Ericsson",
    logo: "/partners/ericsson.png",
    role: "Private 5G connectivity & positioning partner — Project IntegrateX",
    heightClass: "h-12 md:h-14",
  },
  {
    name: "Impactto",
    logo: "/partners/impactto.png",
    role: "Program partner — Project IntegrateX",
    heightClass: "h-6 md:h-8",
  },
];
