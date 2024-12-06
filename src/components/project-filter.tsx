"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const PROJECT_CATEGORIES = [
  "Web",
  "Mobile",
  "iOS",
  "SaaS",
  "E-commerce",
  "AI",
  "Design",
  "Automation"
] as const;

type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

interface ProjectFilterProps {
  onFilterChange: (selectedTags: ProjectCategory[]) => void;
}

export function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [selectedTags, setSelectedTags] = useState<ProjectCategory[]>([]);

  const toggleTag = (tag: ProjectCategory) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    onFilterChange(newTags);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {PROJECT_CATEGORIES.map((category) => (
        <Badge
          key={category}
          variant={selectedTags.includes(category) ? "default" : "secondary"}
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => toggleTag(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
} 