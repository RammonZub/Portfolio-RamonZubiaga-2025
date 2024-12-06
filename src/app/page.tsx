import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from 'next/image';

const BLUR_FADE_DELAY = 0.04;

function generateBlurPlaceholder() {
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 pt-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <section id="hero" className="text-center">
          <div className="mx-auto w-full max-w-2xl space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={DATA.avatarUrl}
                  alt="Profile"
                  fill
                  sizes="128px"
                  className="object-cover rounded-lg"
                  priority
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder()}
                />
                <div className="absolute -top-6 -right-14 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl px-4 py-2 text-sm font-medium shadow-md">
                  Building...
                  <div className="absolute left-0.5 bottom-1 w-4 h-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full transform translate-y-1/2"></div>
                  <div className="absolute left-0 bottom-0 w-2 h-2 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full transform translate-y-full"></div>
                </div>
              </div>
            </BlurFade>
            <div className="space-y-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="font-instrument-serif italic text-[25px] leading-[1.15em] tracking-[-0.02em] text-center text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-gray-500/90 mx-auto"
                yOffset={4}
                text={DATA.name}
              />
              {/* <BlurFadeText
                className="font-instrument-serif text-[50px] md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400/95 max-w-600px] mx-auto"
                delay={BLUR_FADE_DELAY * 3}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Markdown className="prose dark:prose-invert text-[16px] max-w-none text-muted-foreground font-sans text-base  mx-auto px-16">
                  {DATA.summary}
                </Markdown>
              </BlurFade> */}


      <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <section className="relative py-2 my-2">
                  <div className="max-w-2xl mx-auto text-center px-4 md:px-12 mb-8">
                    <h2 className="font-instrument-serif text-[26px] md:text-[32px] leading-[1.3] tracking-[-0.02em] text-center mx-auto">
                      I build{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-400/90">
                        websites, automations, and complex web and mobile applications
                      </span>{" "}
                      that deliver{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-400/80">
                        impactful user experiences and drive results
                      </span>
                    </h2>
                  </div>
                  
                  {/* Floating Tags */}
                  <div className="hidden md:block absolute -left-16 lg:-left-24 top-1">
                    <div className="space-y-8">
                      <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transform rotate-10 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:bg-white/10 hover:shadow-xl">
                        Mobile Development
                      </div>
                      <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl">
                        Web Development
                      </div>
                      <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transform -rotate-10 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:bg-white/10 hover:shadow-xl">
                        Automations
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side tags */}
                  <div className="hidden md:block absolute -right-16 lg:-right-24 top-1">
                    <div className="space-y-8 pl-8">
                      <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transform -rotate-10 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:bg-white/10 hover:shadow-xl">
                        Dashboards
                      </div>
                      <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl">
                        MVP Building
                      </div>
                      <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transform rotate-10 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:bg-white/10 hover:shadow-xl">
                        SaaS Development
                      </div>
                    </div>
                  </div>

                  {/* Mobile Tags */}
                  <div className="md:hidden relative mt-4 mb-12">
                    {/* Left side tags */}
                    <div className="absolute -left-4 -top-16 z-10">
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-all duration-300">
                          Mobile Development
                        </div>
                        <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300">
                          Web Development
                        </div>
                        <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transform -rotate-3 hover:rotate-0 transition-all duration-300">
                          Automations
                        </div>
                      </div>
                    </div>

                    {/* Right side tags */}
                    <div className="absolute -right-4 -top-16 z-10">
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transform -rotate-6 hover:rotate-0 transition-all duration-300">
                          Dashboards
                        </div>
                        <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300">
                          MVP Building
                        </div>
                        <div className="bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-all duration-300">
                          SaaS Development
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </BlurFade>
            </div>
          </div>
        </section>
      </div>

      <section id="projects" className="w-full">
        <div className="space-y-12 w-full py-8">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="px-4 sm:px-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-[1px] bg-gradient-to-r from-white/5 to-white/40"></div>
                  <h3 className="font-instrument-serif text-lg text-white/80">My Projects</h3>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-white/40 to-white/5"></div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-3 text-center">
                  <h2 className="text-2xl font-medium tracking-tighter sm:text-3xl">
                    Check Out My Latest Work
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground text-sm md:text-base">
                  From E-commerce websites to
                  complex web and mobile applications.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {DATA.projects.map((project, index) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 6 + index * 0.05}
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
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <section className="relative py-2 my-4 px-3">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-black/5 to-black/40 dark:from-white/5 dark:to-white/40"></div>
              <h3 className="font-instrument-serif text-lg text-black/80 dark:text-white/80">Skills</h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-black/40 to-black/5 dark:from-white/40 dark:to-white/5"></div>
            </div>
            <div className="flex flex-wrap gap-1 justify-center max-w-[800px]">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </section>
        </div>

        <div className="h-8"></div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <section className="relative py-2 my-4 px-3">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-black/5 to-black/40 dark:from-white/5 dark:to-white/40"></div>
              <h3 className="font-instrument-serif text-lg text-black/80 dark:text-white/80">Experience</h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-black/40 to-black/5 dark:from-white/40 dark:to-white/5"></div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {DATA.work.map((job, id) => (
                <BlurFade key={job.company} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <ResumeCard
                    href={job.href}
                    logoUrl={job.logoUrl}
                    altText={job.company}
                    title={job.title}
                    subtitle={job.company}
                    period={`${job.start} - ${job.end}`}
                    description={job.description}
                    badges={job.badges}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        </div>

        <div className=""></div>

        {/* Education Section */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <section className="relative py-2 my-4 px-3">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-black/5 to-black/40 dark:from-white/5 dark:to-white/40"></div>
              <h3 className="font-instrument-serif text-lg text-black/80 dark:text-white/80">Education</h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-black/40 to-black/5 dark:from-white/40 dark:to-white/5"></div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ResumeCard
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        </div>

        <div className="h-12"></div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <section className="relative py-2 my-4 px-3">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-black/5 to-black/40 dark:from-white/5 dark:to-white/40"></div>
              <h3 className="font-instrument-serif text-lg text-black/80 dark:text-white/80">Contact</h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-black/40 to-black/5 dark:from-white/40 dark:to-white/5"></div>
            </div>
            <div className="text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  If you want to contact me formally, you can reach me through:
                </p>
                <div className="space-y-2 mt-4">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:rzubiagasuarez@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      rzubiagasuarez@gmail.com
                    </a>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/in/ramon-zubiaga-suarez-01344b227/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Ramon Zubiaga Suarez
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
