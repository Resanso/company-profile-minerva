"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Adrian Badjideh",
    role: "Chief Executive Officer (CEO)",
    image: "/team/Adrian.jpeg",
    description: "Visionary leader driving MINERVA's strategic direction and business growth",
  },
  {
    name: "Dhafin Rizki",
    role: "Chief Operating Officer (COO)",
    image: "/team/Dhafin.jpeg",
    description: "Orchestrates operations and ensures seamless execution of MINERVA's initiatives",
  },
  {
    name: "Resan So",
    role: "Lead Engineer",
    image: "/team/Resan.jpeg",
    description: "Leads technical development and architecture of industrial AI solutions",
  },
  {
    name: "Ahmad Rafiansyah",
    role: "Lead Designer",
    image: "/team/Rafi.jpeg",
    description: "Crafts intuitive user experiences and visual design for digital twin interfaces",
  },
];

export function TeamSection() {
  return (
    <section className="relative py-24 bg-[#0B0F17] w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The innovators behind MINERVA, bringing together expertise in AI, engineering, and industrial automation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#151b29] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full bg-gradient-to-b from-gray-800 to-[#151b29] overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#151b29] via-transparent to-transparent z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info Container */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
