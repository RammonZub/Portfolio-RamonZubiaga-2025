"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/#projects')}
      className="group flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-8"
    >
      <svg 
        className="w-4 h-4 transform transition-transform group-hover:-translate-x-1"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span className="text-sm font-medium">Back to Projects</span>
    </button>
  );
} 