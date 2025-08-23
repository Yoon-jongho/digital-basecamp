// Server Component - SSR 최적화
import { TechStackClient } from "./TechStackClient";
import {
  TechStackSectionProps,
  categoryColors,
} from "./TechStackSection.types";

// 기술 스택 데이터 (서버/클라이언트 공유)
export const techStacks = [
  // Frontend
  { id: "1", name: "React", category: "Frontend" as const },
  { id: "2", name: "Next.js", category: "Frontend" as const },
  { id: "3", name: "TypeScript", category: "Frontend" as const },
  { id: "4", name: "Tailwind CSS", category: "Frontend" as const },
  { id: "5", name: "Vue.js", category: "Frontend" as const },
  
  // Backend
  { id: "6", name: "Node.js", category: "Backend" as const },
  { id: "7", name: "Python", category: "Backend" as const },
  { id: "8", name: "Express", category: "Backend" as const },
  
  // Database
  { id: "9", name: "MySQL", category: "Database" as const },
  { id: "10", name: "MongoDB", category: "Database" as const },
  { id: "11", name: "Redis", category: "Database" as const },
  
  // DevOps
  { id: "12", name: "Docker", category: "DevOps" as const },
  { id: "13", name: "AWS", category: "DevOps" as const },
  { id: "14", name: "Git", category: "DevOps" as const },
  
  // Tools
  { id: "15", name: "Figma", category: "Tools" as const },
  { id: "16", name: "VS Code", category: "Tools" as const },
];

// 메인 컴포넌트 (Server Component - SEO 최적화)
export const TechStackSection = ({ className = "" }: TechStackSectionProps) => {
  return (
    <section className={`py-20 px-6 md:px-8 ${className}`}>
      <div className="container max-w-6xl mx-auto">
        {/* 섹션 헤더 - SSR로 렌더링 (SEO 최적화) */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            기술 스택
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            다양한 기술을 활용하여 최적의 솔루션을 제공합니다.
          </p>
        </div>

        {/* 배경 장식 - SSR로 렌더링 */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-pastel-blue/20 blur-3xl"></div>
            <div className="absolute w-48 h-48 rounded-full bottom-1/4 right-1/4 bg-mint-green/20 blur-3xl"></div>
          </div>

          {/* SEO를 위한 정적 태그 리스트 (숨김 처리) */}
          <div className="sr-only">
            <ul>
              {techStacks.map((tech) => (
                <li key={tech.id}>
                  {tech.name} - {tech.category}
                </li>
              ))}
            </ul>
          </div>

          {/* 3D 효과 클라이언트 컴포넌트 */}
          <div className="relative">
            <TechStackClient />
          </div>
        </div>

        {/* 하단 설명 - SSR로 렌더링 */}
        <div className="mt-12 text-sm text-center text-gray-500">
          <p>마우스를 움직여 구체를 회전시켜보세요 • 다양한 기술 스택을 보유하고 있습니다</p>
        </div>
      </div>
    </section>
  );
};
