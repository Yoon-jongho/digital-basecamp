import Link from "next/link";
import { BlogCard } from "../BlogCard";
import type { BlogPost } from "../BlogCard";

interface LatestPostsSectionProps {
  posts: BlogPost[];
  className?: string;
}

/**
 * LatestPostsSection 컴포넌트
 * 최신 블로그 포스트를 사이드 액센트 스타일로 표시하는 섹션
 */
export const LatestPostsSection = ({
  posts,
  className = "",
}: LatestPostsSectionProps) => {
  return (
    <section className={`py-20 px-6 md:px-8 ${className}`}>
      <div className="container max-w-5xl mx-auto">
        {/* 사이드 액센트가 있는 컨테이너 */}
        <div className="relative pl-8 md:pl-12">
          {/* 왼쪽 수직 라인 - 이제 비어있는 div */}
          <div className="absolute top-0 bottom-0 left-0 w-1 rounded-full opacity-50 bg-gradient-to-b from-pastel-blue via-soft-coral to-mint-green"></div>
          
          {/* 섹션 헤더 - 수직 라인 밖으로 이동 */}
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              최신 포스트
            </h2>
            <p className="text-lg text-gray-600">
              개발 여정과 인사이트를 공유합니다
            </p>
          </div>
          
          {/* 블로그 카드 리스트 */}
          <div className="mb-12 space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="relative">
                {/* 각 카드 앞의 작은 원형 포인트 */}
                <div className="absolute w-3 h-3 rounded-full -left-8 md:-left-12 top-8 bg-pastel-blue"></div>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
          
          {/* 더 보기 링크 */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-pastel-blue hover:text-pastel-blue/80 transition-colors font-medium group"
          >
            <span>더 많은 글 보기</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
