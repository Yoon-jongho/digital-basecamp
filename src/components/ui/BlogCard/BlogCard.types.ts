/**
 * BlogCard 컴포넌트 타입 정의
 */

/**
 * 블로그 포스트 데이터 타입
 */
export interface BlogPost {
  /** 고유 ID */
  id: string;
  /** 포스트 제목 */
  title: string;
  /** 포스트 요약/발췌 */
  excerpt: string;
  /** URL 슬러그 */
  slug: string;
  /** 작성일 */
  date: string;
  /** 카테고리 */
  category: string;
  /** 태그 목록 (선택) */
  tags?: string[];
  /** 읽기 예상 시간 (선택) */
  readTime?: string;
  /** 썸네일 이미지 URL (선택) */
  thumbnail?: string;
}

/**
 * BlogCard 컴포넌트 Props
 */
export interface BlogCardProps {
  /** 블로그 포스트 데이터 */
  post: BlogPost;
  /** 카드 클릭 시 동작 (선택) */
  onClick?: () => void;
  /** 추가 CSS 클래스 (선택) */
  className?: string;
}

/**
 * 카테고리별 색상 맵핑 타입
 */
export const categoryColors: Record<string, string> = {
  'Frontend': 'from-pastel-blue/20 to-pastel-blue/10 border-pastel-blue/30',
  'Backend': 'from-mint-green/20 to-mint-green/10 border-mint-green/30',
  'DevOps': 'from-soft-coral/20 to-soft-coral/10 border-soft-coral/30',
  'Career': 'from-purple-300/20 to-purple-300/10 border-purple-300/30',
  'default': 'from-gray-100/50 to-gray-50/30 border-gray-200/30'
};
