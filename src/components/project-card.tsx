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
      if (isMobile) {
        return (
          <div className="relative aspect-video">
            <Image
              src="/projects/Ztriko/ZtrikoProductView.png"
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]",
                imagePosition
              )}
              placeholder="blur"
              blurDataURL={`data:image/jpeg;base64,${generateBlurPlaceholder()}`}
            />
          </div>
        );
      }
      return (
        <div className="relative aspect-video">
          <video
            src={video}
            className={cn("w-full h-full object-cover rounded-lg", className)}
            autoPlay
            loop
            muted
            playsInline
            poster="/projects/Ztriko/poster.jpg"
          />
        </div>
      );
    }

    if (image) {
      return (
        <div className="relative aspect-video">
          <Image
            src={`/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]",
              imagePosition
            )}
            placeholder="blur"
            blurDataURL={`data:image/jpeg;base64,${generateBlurPlaceholder()}`}
            priority={title === "BitesAi" || title === "Scribix"}
            onError={(e) => {
              console.error(`Error loading image for ${title}:`, e);
            }}
          />
        </div>
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

// Helper function to generate blur placeholder
function generateBlurPlaceholder() {
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
}
