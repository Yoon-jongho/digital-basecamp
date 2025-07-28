/**
 * UI Components - 특정 페이지나 기능을 위한 UI 컴포넌트
 * 
 * 이 폴더에는 특정 페이지나 기능에 특화된 컴포넌트들이 포함됩니다.
 * 예: BlogCard, TechStackSlider, HeroSection, AboutTimeline 등
 */

// UI 컴포넌트들
export { HeroSection } from './HeroSection';  // /HeroSection.tsx 제거
export { BlogCard } from './BlogCard';
export { LatestPostsSection } from './LatestPostsSection';

// 타입 export
export type { BlogCardProps, BlogPost } from './BlogCard';

// 추가 예정 컴포넌트들
// export { BlogList } from './BlogList';
// export { TechStackSlider } from './TechStackSlider';
// export { AboutTimeline } from './AboutTimeline';
// export { TableOfContents } from './TableOfContents';
