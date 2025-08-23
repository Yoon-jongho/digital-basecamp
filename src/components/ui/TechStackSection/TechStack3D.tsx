"use client";

import { useEffect, useRef, useState } from "react";
import { categoryColors } from "./TechStackSection.types";

interface TechStack3DProps {
  techStacks: Array<{
    id: string;
    name: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps" | "Tools";
  }>;
}

export const TechStack3D = ({ techStacks }: TechStack3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 3D 구체 위에 태그 배치를 위한 계산
  const tags = techStacks.map((tech, index) => {
    const phi = Math.acos(-1 + (2 * index) / techStacks.length);
    const theta = Math.sqrt(techStacks.length * Math.PI) * phi;
    
    return {
      ...tech,
      x: Math.cos(theta) * Math.sin(phi),
      y: Math.sin(theta) * Math.sin(phi),
      z: Math.cos(phi),
    };
  });

  // 클라이언트 사이드에서만 3D 효과 활성화
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 마우스 움직임 추적
  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isHovered) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      setMouseX(x * 0.1);
      setMouseY(y * 0.1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered, isMounted]);

  // SSR 시에는 정적 태그 클라우드 표시
  if (!isMounted) {
    return (
      <div className="relative flex flex-wrap justify-center items-center gap-4 md:gap-6 min-h-[400px] py-8">
        {techStacks.map((tech, index) => {
          const sizes = ["text-sm", "text-base", "text-lg"];
          const randomSize = sizes[index % sizes.length];
          
          return (
            <div
              key={tech.id}
              className={`
                ${randomSize}
                px-4 py-2 rounded-full
                backdrop-blur-md bg-white/80
                border transition-all duration-300
                hover:scale-110 hover:shadow-lg
                ${categoryColors[tech.category]}
              `}
            >
              <span className="font-medium text-gray-700 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  // 클라이언트에서는 3D 효과 표시
  return (
    <div 
      ref={containerRef}
      className="relative h-[500px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative w-[400px] h-[400px] preserve-3d"
        style={{
          transform: `rotateX(${-mouseY * 20}deg) rotateY(${mouseX * 20}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "none" : "transform 1s ease-out",
          animation: !isHovered ? "gentleRotate 30s infinite linear" : "none",
        }}
      >
        {tags.map((tag) => {
          const radius = 180;
          const x = tag.x * radius;
          const y = tag.y * radius;
          const z = tag.z * radius;
          
          const scale = (tag.z + 1) / 2;
          const opacity = 0.4 + scale * 0.6;
          
          return (
            <div
              key={tag.id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${0.8 + scale * 0.4})`,
                opacity,
                zIndex: Math.floor((tag.z + 1) * 50),
              }}
            >
              <div
                className={`
                  px-3 py-1.5 rounded-full cursor-pointer
                  backdrop-blur-md bg-white/80
                  border transition-all duration-300
                  hover:scale-110 hover:shadow-lg
                  ${categoryColors[tag.category]}
                `}
                style={{
                  fontSize: `${0.8 + scale * 0.4}rem`,
                }}
              >
                <span className="font-medium text-gray-700 whitespace-nowrap">
                  {tag.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes gentleRotate {
          from {
            transform: rotateX(-10deg) rotateY(0deg);
          }
          to {
            transform: rotateX(-10deg) rotateY(360deg);
          }
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};
