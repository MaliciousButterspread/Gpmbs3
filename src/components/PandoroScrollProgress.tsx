import { useEffect, useState } from 'react';

export function PandoroScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = totalScrollableHeight > 0 ? (scrollTop / totalScrollableHeight) * 100 : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* Pandoro Container */}
      <div className="relative w-16 h-32">
        {/* SVG Pandoro Star Shape */}
        <svg
          viewBox="0 0 100 200"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        >
          {/* Outer shell/outline of Pandoro - the star shape getting wider toward bottom */}
          <defs>
            {/* Define the Pandoro shape as a path */}
            <clipPath id="pandoro-clip">
              <path d="
                M 50 10
                L 55 15 L 65 12 L 60 22 L 70 25
                L 62 32 L 72 40 L 62 43 L 70 55
                L 60 55 L 65 70 L 55 65 L 55 82
                L 50 75 L 45 82 L 45 65 L 35 70
                L 40 55 L 30 55 L 38 43 L 28 40
                L 38 32 L 30 25 L 40 22 L 35 12
                L 45 15 L 50 10
                Z
              " />
            </clipPath>
            
            {/* Golden gradient for the cake */}
            <linearGradient id="pandoro-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4a574" />
              <stop offset="50%" stopColor="#f5d99f" />
              <stop offset="100%" stopColor="#d4a574" />
            </linearGradient>
            
            {/* Powdered sugar gradient */}
            <linearGradient id="sugar-white" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fffef9" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fffef9" />
            </linearGradient>
          </defs>
          
          {/* Empty Pandoro outline - tan/golden border */}
          <path
            d="
              M 50 10
              L 55 15 L 65 12 L 60 22 L 70 25
              L 62 32 L 72 40 L 62 43 L 70 55
              L 60 55 L 65 70 L 55 65 L 55 82
              L 50 75 L 45 82 L 45 65 L 35 70
              L 40 55 L 30 55 L 38 43 L 28 40
              L 38 32 L 30 25 L 40 22 L 35 12
              L 45 15 L 50 10
              Z
            "
            fill="none"
            stroke="#d4a574"
            strokeWidth="2"
          />
          
          {/* Inner lighter background */}
          <path
            d="
              M 50 10
              L 55 15 L 65 12 L 60 22 L 70 25
              L 62 32 L 72 40 L 62 43 L 70 55
              L 60 55 L 65 70 L 55 65 L 55 82
              L 50 75 L 45 82 L 45 65 L 35 70
              L 40 55 L 30 55 L 38 43 L 28 40
              L 38 32 L 30 25 L 40 22 L 35 12
              L 45 15 L 50 10
              Z
            "
            fill="#fef8e8"
            opacity="0.3"
          />
          
          {/* Filled portion - fills from bottom to top */}
          <g clipPath="url(#pandoro-clip)">
            <rect
              x="0"
              y={200 - (scrollProgress * 1.9)}
              width="100"
              height={scrollProgress * 1.9}
              fill="url(#pandoro-gold)"
            />
            
            {/* Add texture lines to the filled portion */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={i}
                x1="25"
                y1={200 - (scrollProgress * 1.9) + (i * (scrollProgress * 1.9) / 10)}
                x2="75"
                y2={200 - (scrollProgress * 1.9) + (i * (scrollProgress * 1.9) / 10)}
                stroke="#c89960"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}
          </g>
          
          {/* Powdered sugar top (appears when filled) */}
          {scrollProgress > 5 && (
            <g clipPath="url(#pandoro-clip)">
              <ellipse
                cx="50"
                cy={200 - (scrollProgress * 1.9) - 2}
                rx="20"
                ry="4"
                fill="url(#sugar-white)"
                opacity="0.8"
              />
            </g>
          )}
        </svg>
        
        {/* Percentage label */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-stone-500 whitespace-nowrap">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  );
}
