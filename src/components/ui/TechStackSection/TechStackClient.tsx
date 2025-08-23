"use client";

import dynamic from "next/dynamic";
import { techStacks } from "./TechStackSection";
import { categoryColors } from "./TechStackSection.types";

// 3D 컴포넌트를 클라이언트에서만 로드
const TechStack3D = dynamic(
  () => import("./TechStack3D").then((mod) => mod.TechStack3D),
  { 
    ssr: false,
    loading: () => <TechStackStatic />
  }
);

// 정적 태그 클라우드 (초기 로딩용)
function TechStackStatic() {
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
              animate-fade-in
            `}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
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

// Client Wrapper Component
export const TechStackClient = () => {
  return <TechStack3D techStacks={techStacks} />;
};
