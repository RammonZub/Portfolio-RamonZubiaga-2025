"use client";

import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

interface SeeAlsoSectionProps {
  currentProjectTitle: string;
  currentProjectTags: string[];
}

export function SeeAlsoSection({ currentProjectTitle, currentProjectTags }: SeeAlsoSectionProps) {
  // Find related projects based on tags
  const relatedProjects = DATA.projects
    .filter(project => {
      // Exclude current project
      if (project.title === currentProjectTitle) return false;
      
      // Check for tag overlap
      return project.searchTags.some(tag => currentProjectTags.includes(tag));
    })
    // Get top 2 related projects
    .slice(0, 2);

  // If we don't have 2 related projects, add random ones
  if (relatedProjects.length < 2) {
    const remainingCount = 2 - relatedProjects.length;
    const randomProjects = DATA.projects
      .filter(project => 
        project.title !== currentProjectTitle && 
        !relatedProjects.find(p => p.title === project.title)
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, remainingCount);

    relatedProjects.push(...randomProjects);
  }

  return (
    <section className="mt-24 mb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-black/5 to-black/40 dark:from-white/5 dark:to-white/40"></div>
          <div className="font-instrument-serif text-lg text-black/60 dark:text-white/60">
            See also
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-black/40 to-black/5 dark:from-white/40 dark:to-white/5"></div>
        </div>
        <h2 className="text-5xl font-instrument-serif text-black/80 dark:text-white/80">
          More Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[900px] mx-auto px-4 sm:px-6">
        {relatedProjects.map((project, index) => (
          <BlurFade 
            key={project.title}
            delay={0.2 + index * 0.1}
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
    </section>
  );
} 