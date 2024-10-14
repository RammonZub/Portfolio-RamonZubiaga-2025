"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";
import { ImageOverlay } from "./image-overlay";
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  imagePosition?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  imagePosition = "object-center",
  links,
  className,
}: Props) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleMediaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!href || href === "#") {
      setIsOverlayOpen(true);
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const MediaContent = () => (
    <motion.div 
      className="relative aspect-video w-full overflow-hidden cursor-pointer"
      onClick={handleMediaClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {video ? (
        <>
          <video
            src={video}
            poster={image} // Use the image as a poster (shown while video is loading)
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`}
          />
          <img
            src={image}
            alt={title}
            className={`absolute inset-0 h-full w-full object-cover ${imagePosition} ${video ? 'hidden' : ''}`}
          />
        </>
      ) : image ? (
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`}
        />
      ) : null}
    </motion.div>
  );

  return (
    <>
      <Card
        className={cn(
          "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full",
          className
        )}
      >
        <MediaContent />
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            {href && (
              <div className="hidden font-sans text-xs underline print:visible">
                {href.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
            )}
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank" rel="noopener noreferrer">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {link.icon}
                    {link.title}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
      <ImageOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        imageSrc={image || video || ""}
        imageAlt={title}
      />
    </>
  );
}
