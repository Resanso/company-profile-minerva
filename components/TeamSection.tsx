import { Section, SectionHeader } from "@/components/ui/section";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Adrian Badjideh",
    role: "Chief Executive Officer",
    image: "/team/Adrian.jpeg",
    description:
      "Leads strategic direction and industrial partnerships.",
  },
  {
    name: "Dhafin Rizki",
    role: "Chief Operating Officer",
    image: "/team/Dhafin.jpeg",
    description:
      "Runs deployment operations and delivery across pilot sites.",
  },
  {
    name: "Resan So",
    role: "Lead Engineer",
    image: "/team/Resan.jpeg",
    description:
      "Owns the platform architecture and the industrial data layer.",
  },
  {
    name: "Ahmad Rafiansyah",
    role: "Lead Designer",
    image: "/team/Rafi.jpeg",
    description:
      "Designs the operator-facing interfaces for digital twin and analytics.",
  },
];

export function TeamSection() {
  return (
    <Section tone="light">
      <SectionHeader
        eyebrow="Team"
        title="The people behind the platform"
        align="start"
      />

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <div className="aspect-[4/5] w-full overflow-hidden bg-surface-sunken">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-top grayscale"
              />
            </div>
            <h3 className="mt-6 text-lg">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
