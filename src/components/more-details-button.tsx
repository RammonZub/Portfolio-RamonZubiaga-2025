"use client";

export function MoreDetailsButton() {
  const handleClick = () => {
    const details = document.getElementById('project-details');
    details?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={handleClick}
      className="mx-auto mb-16 group flex flex-col items-center"
    >
      <span className="text-sm text-black/60 dark:text-white/60 mb-2">MORE DETAILS</span>
      <div className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center group-hover:border-black/40 dark:group-hover:border-white/40 transition-colors">
        <svg 
          className="w-4 h-4 text-black/60 dark:text-white/60 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </button>
  );
} 