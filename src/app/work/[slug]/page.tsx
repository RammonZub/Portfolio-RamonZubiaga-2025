import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { MoreDetailsButton } from "@/components/more-details-button";
import { BackButton } from "@/components/back-button";
import { SeeAlsoSection } from "@/components/see-also-section";
import { Badge } from "@/components/ui/badge";
import { ImageOverlay } from "@/components/image-overlay";

// Add this helper function at the top of the file
function hasGalleryImages(project: typeof DATA.projects[number]): project is typeof DATA.projects[number] & { galleryImages: string[] } {
  return 'galleryImages' in project && Array.isArray(project.galleryImages);
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const project = DATA.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  ) as (typeof DATA.projects)[number];

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-[100dvh] py-12 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Back Button */}
      <BackButton />
      
      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {project.displayTags.map((tag, index) => (
          <Badge 
            key={index}
            variant="secondary"
            className="text-sm px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title & Brief Description */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="font-instrument-serif text-4xl md:text-6xl mb-6 text-black/90 dark:text-white/90">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-black/70 dark:text-white/70">
          {project.description}
        </p>
      </div>

      {/* Info Rectangle */}
      <div className="grid grid-cols-3 mb-12 max-w-3xl mx-auto">
        <div className="flex justify-center">
          <InfoCard title="TIMELINE" value={project.dates} />
        </div>
        <div className="flex justify-center">
          <InfoCard title="SERVICES" value={project.service || "Web Design"} />
        </div>
        <div className="flex justify-center">
          <InfoCard 
            title="WEBSITE" 
            value={project.href !== "#" ? new URL(project.href).hostname : "Coming Soon"}
            href={project.href}
          />
        </div>
      </div>

      {/* Main Image/Video */}
      <div className="mb-24 max-w-5xl mx-auto w-full">
        {project.title === "Ztriko" ? (
          <img 
            src="/projects/Ztriko/ZtrikoProductView.png"
            alt={project.title}
            className={cn(
              "w-full rounded-lg shadow-lg",
              project.imagePosition || "object-cover"
            )}
          />
        ) : (
          <img 
            src={`/${project.image}`}
            alt={project.title}
            className={cn(
              "w-full rounded-lg shadow-lg",
              project.imagePosition || "object-cover"
            )}
          />
        )}
      </div>

      {/* Project Details Section */}
      <div className="max-w-3xl mx-auto w-full mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-instrument-serif">Overview</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-black/40 to-black/5 dark:from-white/40 dark:to-white/5"></div>
        </div>
        
        <div className="space-y-12">
          {/* Project Details */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-black/70 dark:text-white/70 leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black/90 dark:text-white/90">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2 mb-12">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Gallery */}
          {hasGalleryImages(project) && project.galleryImages.length > 0 && (
            <div className="space-y-8 mt-12">
              <h3 className="text-xl font-semibold mb-6 text-black/90 dark:text-white/90">
                Project Gallery
              </h3>
              <div className="space-y-6 max-w-2xl mx-auto">
                {project.galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={`/${image}`}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* See Also Section */}
      <SeeAlsoSection 
        currentProjectTitle={project.title}
        currentProjectTags={project.searchTags}
      />
    </main>
  );
}

// Info Card Component
function InfoCard({ title, value, href }: { title: string; value: string; href?: string }) {
  const content = (
    <div className="border border-black/10 dark:border-white/10 rounded-lg p-6 hover:border-black/20 dark:hover:border-white/20 transition-colors">
      <h3 className="text-sm text-black/50 dark:text-white/50 mb-2">{title}</h3>
      <p className="font-instrument-serif text-lg text-black/80 dark:text-white/80">
        {value}
      </p>
    </div>
  );

  if (href && href !== "#") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
} 