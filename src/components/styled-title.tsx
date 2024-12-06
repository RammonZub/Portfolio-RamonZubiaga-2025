"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

interface StyledTitleProps {
  text: string;
  className?: string;
}

export function StyledTitle({ text, className }: StyledTitleProps) {
  const { theme } = useTheme();

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "font-instrument-serif italic text-[88px] leading-[1.15em] tracking-[-0.02em] text-center",
        "transition-colors duration-300",
        theme === 'dark' ? 'text-white/50' : 'text-black/50',
        className
      )}
      style={{
        wordBreak: "break-word",
        wordWrap: "break-word",
        fontFeatureSettings: "normal",
        WebkitFontSmoothing: "inherit",
      }}
    >
      {text}
    </motion.h1>
  );
} 