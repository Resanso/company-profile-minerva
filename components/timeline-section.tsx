import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/timeline";

export function TimelineSection() {
  const data = timelineData.map((entry) => ({
    title: entry.year,
    content: (
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
          {entry.title}
        </h3>
        <p className="mb-6 text-sm font-normal text-gray-300 md:text-base">
          {entry.description}
        </p>

        {/* Key Items */}
        <div className="mb-8 space-y-2">
          {entry.items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-xs text-gray-300 md:text-sm"
            >
              <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Image if available */}
        {entry.image && (
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
