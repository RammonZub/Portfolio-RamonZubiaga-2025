import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section id="hero" className="text-center">
        <div className="mx-auto w-full max-w-2xl space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="relative w-32 h-32 mx-auto">
              <img
                src={DATA.avatarUrl}
                alt={DATA.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute -top-6 -right-14 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl px-4 py-2 text-sm font-medium shadow-md">
                Locked In
                <div className="absolute left-0.5 bottom-1 w-4 h-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full transform translate-y-1/2"></div>
                <div className="absolute left-0 bottom-0 w-2 h-2 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full transform translate-y-full"></div>
              </div>
            </div>
          </BlurFade>
          <div className="space-y-3">
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-2xl text-gray-500 italic mx-auto"
              yOffset={4}
              text={DATA.name}
            />
            <BlurFadeText
              className="text-3xl md:text-4xl font-medium"
              delay={BLUR_FADE_DELAY * 3}
              text={DATA.description}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose dark:prose-invert max-w-none text-pretty font-sans text-base text-muted-foreground mx-auto">
                {DATA.summary}
              </Markdown>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from E-commerce designs to
                  complex web and mobile applications.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
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
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  imagePosition={project.imagePosition}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="text-center">
        <div className="flex min-h-0 flex-col gap-y-3 items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1 justify-center max-w-[800px]">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
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

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
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

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
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
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
