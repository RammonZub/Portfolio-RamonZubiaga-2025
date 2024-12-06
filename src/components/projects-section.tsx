"use client";

import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

interface ProjectsSectionProps {
  blurFadeDelay: number;
}

export function ProjectsSection({ blurFadeDelay }: ProjectsSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[900px] mx-auto px-4 sm:px-6">
      {DATA.projects.map((project, index) => (
        <BlurFade 
          key={project.title} 
          delay={blurFadeDelay * 6 + index * 0.05}
          className="w-full"
        >
          <ProjectCard
            title={project.title}
            href={project.href}
            description={project.description}
            dates={project.dates}
            tags={project.displayTags}
            image={project.image}
            video={project.video}
            imagePosition={project.imagePosition}
            links={project.links}
          />
        </BlurFade>
      ))}
    </div>
  );
} 