"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

// Technology data with SVG paths from public folder
const technologies = [
  // Frontend
  { id: "html", name: "HTML", color: "#E34F26", icon: "/icons/HTML5.svg" },
  { id: "css", name: "CSS", color: "#1572B6", icon: "/icons/CSS3.svg" },
  { id: "javascript", name: "JavaScript", color: "#F7DF1E", icon: "/icons/javascript.svg" },
  { id: "typescript", name: "TypeScript", color: "#3178C6", icon: "/icons/typescript.svg" },
  { id: "react", name: "React", color: "#61DAFB", icon: "/icons/react.svg" },
  { id: "nextjs", name: "Next.js", color: "#000000", icon: "/icons/nextjs.svg" },
  { id: "tailwind", name: "Tailwind CSS", color: "#06B6D4", icon: "/icons/tailwind.svg" },
  
  // Backend
  { id: "nodejs", name: "Node.js", color: "#339933", icon: "/icons/nodejs.svg" },
  { id: "express", name: "Express", color: "#000000", icon: "/icons/express.svg" },
  { id: "python", name: "Python", color: "#3776AB", icon: "/icons/python.svg" },
  { id: "mongodb", name: "MongoDB", color: "#47A248", icon: "/icons/mongodb.svg" },
  { id: "postgresql", name: "PostgreSQL", color: "#4169E1", icon: "/icons/postgresql.svg" },
  
  // Tools & Others
  { id: "git", name: "Git", color: "#F05032", icon: "/icons/git.svg" },
  { id: "figma", name: "Figma", color: "#F24E1E", icon: "/icons/canva.svg" },
]

export default function TechStackCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [duplicatedTech, setDuplicatedTech] = useState<typeof technologies>([])
  const scrollSpeed = 35 // Lower number = faster scroll
  
  // Duplicate the technologies array to create an infinite scroll effect
  useEffect(() => {
    setDuplicatedTech([...technologies, ...technologies])
  }, [])
  
  // Auto-scrolling animation with optimized requestAnimationFrame usage
  useEffect(() => {
    const container = containerRef.current
    if (!container || duplicatedTech.length === 0) return
    
    let animationFrameId
    let startTime
    let currentPosition = 0
    let isPaused = false
    
    interface AnimateParams {
      timestamp: number;
    }

    interface AnimationState {
      animationFrameId: number;
      startTime: number | null;
      currentPosition: number;
      isPaused: boolean;
    }

    const animate = (timestamp: AnimateParams["timestamp"]): void => {
      if (isPaused) {
      animationFrameId = requestAnimationFrame(animate);
      return;
      }
      
      if (!startTime) startTime = timestamp;
      const elapsed: number = timestamp - startTime;
      
      // Calculate new position
      const newPosition: number = (elapsed / scrollSpeed) % (container!.scrollWidth / 2);
      currentPosition = (elapsed / scrollSpeed) % (container!.scrollWidth / 2);
      
      // Apply the scroll position
      container!.scrollLeft = currentPosition;
      
      // If we've scrolled through the first set of items, reset
      if (currentPosition >= container!.scrollWidth / 2) {
      startTime = timestamp;
      currentPosition = 0;
      container!.scrollLeft = 0;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animate)
    
    // Pause animation on hover or when not visible
    const handleMouseEnter = () => { isPaused = true }
    const handleMouseLeave = () => { 
      isPaused = false
      startTime = null
    }
    
    // Add event listeners
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [duplicatedTech, scrollSpeed])
  
  return (
    <section id="tech" className="relative py-16 md:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[250px] w-[250px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TECH STACK
            </span>
          </div>
          <h2 className="mb-4 font-space text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Tools & Technologies
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative mx-auto w-full overflow-hidden rounded-xl border border-foreground/10 bg-background/50 p-8 backdrop-blur-sm">
          {/* Main scrolling container */}
          <div 
            ref={containerRef}
            className="flex w-full gap-12 overflow-x-hidden py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedTech.map((tech, index) => (
              <div 
                key={`${tech.id}-${index}`} 
                className="flex-shrink-0"
              >
                <div 
                  className="group relative hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  {/* Icon container */}
                  <div 
                    className="flex h-20 w-20 items-center justify-center rounded-xl bg-background p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl dark:bg-foreground/5 md:h-24 md:w-24"
                    style={{ 
                      boxShadow: `0 8px 30px ${hexToRgba(tech.color, 0.1)}` 
                    }}
                  >
                    {/* SVG icon from public folder */}
                    <div 
  className="flex aspect-square w-full items-center justify-center rounded-md transition-all duration-300 bg-white dark:bg-white/90"
>
  <Image
    src={tech.icon}
    alt={tech.name}
    width={40}
    height={40}
    className="h-30 w-30 object-contain"
  />
</div>
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 translate-y-2 rounded-md bg-foreground px-3 py-1 text-xs text-background opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-background dark:text-foreground">
                    {tech.name}
                  </div>
                  
                  {/* Decorative elements */}
                  <div 
                    className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edge fading */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background/80 to-transparent backdrop-blur-sm"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background/80 to-transparent backdrop-blur-sm"></div>
        </div>
      </div>
    </section>
  )
}

// Improved helper function to convert hex color to RGBA
interface HexToRgbaOptions {
  hex: string;
  alpha?: number;
}

function hexToRgba(hex: string, alpha: number = 1): string {
  // Default color if conversion fails
  if (!hex || typeof hex !== 'string') return "rgba(0, 0, 0, " + alpha + ")";
  
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Convert 3-digit hex to 6-digits
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  try {
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Return RGBA string
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } catch (e) {
    return "rgba(0, 0, 0, " + alpha + ")";
  }
}