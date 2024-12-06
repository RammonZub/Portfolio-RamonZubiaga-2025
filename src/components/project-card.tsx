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
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string | undefined;
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const MediaContent = () => {
    if (video && title === "Ztriko") {
      return (
        <video
          src={video}
          className={cn("w-full aspect-video object-cover rounded-lg", className)}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }

    if (image) {
      return (
        <img
          src={`/${image}`}
          alt={title}
          className={cn(
            "w-full aspect-video object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]",
            imagePosition,
            className
          )}
        />
      );
    }

    return null;
  };

  const slug = title.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <Link href={`/work/${slug}`} className="block group space-y-4">
      <MediaContent />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {tags?.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs whitespace-nowrap px-2.5 py-0.5 rounded-full bg-opacity-80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
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
