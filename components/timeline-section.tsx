import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/timeline";

export function TimelineSection() {
  const data = timelineData.map((entry, idx) => ({
    title: entry.year,
    content: (
      <div key={`timeline-content-${idx}`}>
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
              key={`item-${idx}-${index}`}
              className="flex items-start gap-3 text-xs text-gray-300 md:text-sm"
            >
              <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Images - Grid Layout for Multiple Images */}
        {entry.images ? (
          <div className="grid grid-cols-2 gap-3 max-h-[400px]">
            {/* Left: Main Image (Hackathon) */}
            <div className="rounded-lg overflow-hidden shadow-lg row-span-2 h-full">
              <img
                src={entry.images.main}
                alt={`${entry.title} - Main`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right: Grid Images (Pilot Photos) */}
            {entry.images.grid && entry.images.grid.map((img, imgIdx) => (
              <div key={imgIdx} className="rounded-lg overflow-hidden shadow-lg h-[196px]">
                <img
                  src={img}
                  alt={`${entry.title} - ${imgIdx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : entry.image ? (
          /* Single Image Fallback */
          <div className="rounded-lg overflow-hidden shadow-lg max-h-[400px]">
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
