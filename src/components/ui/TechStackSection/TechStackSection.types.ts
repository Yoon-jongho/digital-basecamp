export interface TechStack {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Tools";
  level: "expert" | "advanced" | "intermediate"; // 크기 결정
  description?: string; // 호버 툴팁
}

export interface TechStackSectionProps {
  className?: string;
}

// 카테고리별 색상 매핑
export const categoryColors = {
  Frontend:
    "from-pastel-blue/20 to-pastel-blue/10 border-pastel-blue/30 hover:border-pastel-blue/50",
  Backend:
    "from-mint-green/20 to-mint-green/10 border-mint-green/30 hover:border-mint-green/50",
  Database:
    "from-soft-coral/20 to-soft-coral/10 border-soft-coral/30 hover:border-soft-coral/50",
  DevOps:
    "from-purple-300/20 to-purple-300/10 border-purple-300/30 hover:border-purple-300/50",
  Tools:
    "from-amber-300/20 to-amber-300/10 border-amber-300/30 hover:border-amber-300/50",
};

// 레벨별 크기 매핑
export const levelSizes = {
  expert: "text-xl md:text-2xl px-6 py-3",
  advanced: "text-base md:text-lg px-5 py-2.5",
  intermediate: "text-sm md:text-base px-4 py-2",
};
