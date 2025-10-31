"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogCardProps, categoryColors } from "./BlogCard.types";

export const BlogCard = ({ post, onClick, className = "" }: BlogCardProps) => {
  const { title, excerpt, slug, date, category, tags, readTime, thumbnail } =
    post;

  // 카테고리별 색상 가져오기
  const colorClass = categoryColors[category] || categoryColors.default;

  // 날짜 포맷팅 (YYYY.MM.DD 형식)
  const formattedDate = new Date(date)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ".")
    .replace(/\.$/, "");

  return (
    <Link
      href={`/blog/${slug}`}
      onClick={onClick}
      className={`group block ${className}`}
    >
      <article className="relative flex gap-6 p-6 transition-all duration-300 border rounded-2xl backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-1">
        {/* 썸네일 영역 */}
        {thumbnail && (
          <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src={thumbnail}
              alt={title}
              width={128}
              height={128}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}

        {/* 썸네일이 없을 때 대체 디자인 */}
        {!thumbnail && (
          <div
            className={`flex-shrink-0 w-32 h-32 rounded-xl bg-gradient-to-br ${colorClass} backdrop-blur-sm flex items-center justify-center`}
          >
            <span className="text-4xl font-bold text-gray-600/20">
              {category.charAt(0)}
            </span>
          </div>
        )}

        {/* 콘텐츠 영역 */}
        <div className="flex flex-col justify-between flex-1">
          {/* 상단: 제목과 요약 */}
          <div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors line-clamp-2 group-hover:text-pastel-blue">
              {title}
            </h3>
            <p className="leading-relaxed text-gray-600 line-clamp-2">
              {excerpt}
            </p>
          </div>

          {/* 하단: 메타 정보 */}
          <div className="flex items-center gap-4 mt-4 text-sm">
            {/* 날짜 */}
            <span className="text-gray-500">{formattedDate}</span>

            {/* 구분선 */}
            <span className="text-gray-300">·</span>

            {/* 카테고리 */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorClass} backdrop-blur-sm`}
            >
              {category}
            </span>

            {/* 읽기 시간 */}
            {readTime && (
              <>
                <span className="text-gray-300">·</span>
                <span className="text-gray-500">{readTime}</span>
              </>
            )}

            {/* 태그들 */}
            {tags && tags.length > 0 && (
              <div className="flex gap-2 ml-auto">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 transition-colors hover:text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 호버 시 화살표 아이콘 */}
        <div className="absolute transition-opacity -translate-y-1/2 opacity-0 right-6 top-1/2 group-hover:opacity-100">
          <svg
            className="w-5 h-5 text-pastel-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
};
