"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const initialParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-mesh"
    >
      {/* 애니메이션 그라디언트 메시 배경 */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue/30 via-soft-coral/20 to-mint-green/30 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-mint-green/20 via-pastel-blue/30 to-soft-coral/25 animate-gradient-shift-reverse"></div>
      </div>

      {/* 애니메이션 블롭 모양들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full top-20 left-20 bg-pastel-blue/10 blur-3xl animate-float-slow"></div>
        <div className="absolute w-48 h-48 rounded-full top-40 right-32 bg-soft-coral/15 blur-2xl animate-float-medium"></div>
        <div className="absolute w-56 h-56 rounded-full bottom-32 left-1/3 bg-mint-green/12 blur-3xl animate-float-fast"></div>
        <div className="absolute w-40 h-40 rounded-full bottom-20 right-20 bg-pastel-blue/8 blur-2xl animate-float-slow"></div>
      </div>

      {/* 플로팅 기하학적 도형들 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-6 h-6 ${
              i % 3 === 0
                ? "bg-pastel-blue/20"
                : i % 3 === 1
                ? "bg-soft-coral/20"
                : "bg-mint-green/20"
            } 
              ${i % 2 === 0 ? "rounded-full" : "rotate-45 rounded-sm"} 
              animate-float-geometric backdrop-blur-sm`}
            style={{
              left: `${20 + i * 12}%`,
              top: `${15 + i * 8}%`,
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* 플로팅 파티클들 */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full animate-float-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `translate(${mousePosition.x * 0.01}px, ${
                mousePosition.y * 0.01
              }px)`,
            }}
          />
        ))}
      </div>

      {/* 글래스모피즘을 적용한 메인 콘텐츠 */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-8">
        <div className="space-y-12 text-center">
          {/* 글래스모피즘 카드 컨테이너 */}
          <div className="p-8 border shadow-2xl backdrop-blur-md bg-white/10 rounded-3xl md:p-12 border-white/20">
            <div className="space-y-8">
              {/* 그라디언트 텍스트가 적용된 메인 헤딩 */}
              <h1 className="text-4xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-pastel-blue via-soft-coral to-mint-green bg-clip-text animate-gradient-text">
                아웃풋이 확실한 개발자
              </h1>

              {/* 강조 텍스트를 위한 배지/필 */}
              <div className="inline-flex items-center justify-center">
                <span className="px-8 py-4 text-2xl font-bold text-white border rounded-full shadow-lg md:text-4xl lg:text-5xl bg-gradient-to-r from-pastel-blue to-pastel-blue/80 backdrop-blur-sm border-white/30 animate-pulse-soft">
                  상장청부사
                </span>
              </div>

              <h2 className="mt-10 text-2xl font-medium text-gray-700 md:text-3xl lg:text-4xl">
                윤종호 입니다.
              </h2>
            </div>
          </div>

          {/* 글래스모피즘 카드 안의 설명 */}
          <div className="max-w-3xl p-6 mx-auto border backdrop-blur-md bg-white/5 rounded-2xl md:p-8 border-white/10">
            <p className="text-base leading-relaxed text-gray-600 md:text-lg lg:text-xl">
              신뢰성 있는 전문가로서의 역량과 성장 과정을 공유합니다. 기술력
              어필, 지식 공유, 개인 브랜딩을 통해 가치를 전달합니다.
            </p>
          </div>

          {/* 글래스모피즘 버튼들 */}
          <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row">
            <Link
              href="/blog"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white backdrop-blur-md bg-gradient-to-r from-pastel-blue/80 to-soft-coral/80 rounded-2xl border border-white/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 min-w-[160px] overflow-hidden"
            >
              <span className="relative z-10">블로그 읽기</span>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-pastel-blue to-mint-green group-hover:opacity-100"></div>
            </Link>
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 backdrop-blur-md bg-white/20 rounded-2xl border border-white/40 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:bg-white/30 min-w-[160px]"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
