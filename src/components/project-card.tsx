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
import { useState, useEffect } from "react";
import { ImageOverlay } from "./image-overlay";
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      {video && !isMobile ? (
        <video
          src={video}
          poster={image}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`}
        />
      ) : image ? (
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={imagePosition}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
        imageSrc={isMobile && image ? image : (video || image || "")}
        imageAlt={title}
      />
    </>
  );
}

// Helper functions for blur placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
