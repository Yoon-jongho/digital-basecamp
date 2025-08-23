import { PageLayout } from "@/components/layout";
import {
  HeroSection,
  LatestPostsSection,
  TechStackSection,
} from "@/components/ui";
import type { BlogPost } from "@/components/ui";

// 테스트용 더미 데이터
const dummyPosts: BlogPost[] = [
  {
    id: "1",
    title:
      "Next.js 15의 새로운 기능들: App Router와 Server Components 완벽 가이드",
    excerpt:
      "Next.js 15에서 도입된 혁신적인 기능들을 살펴보고, 실제 프로젝트에 어떻게 적용할 수 있는지 알아봅니다. 특히 App Router와 Server Components의 장점을 중심으로...",
    slug: "nextjs-15-new-features",
    date: "2025-07-24",
    category: "Frontend",
    tags: ["Next.js", "React", "Web"],
    readTime: "8분 읽기",
  },
  {
    id: "2",
    title: "TypeScript 5.0과 함께하는 타입 안전한 개발",
    excerpt:
      "타입스크립트 5.0의 새로운 기능들과 함께 더욱 안전하고 생산적인 개발 환경을 구축하는 방법을 소개합니다.",
    slug: "typescript-5-type-safe",
    date: "2025-07-22",
    category: "Frontend",
    tags: ["TypeScript", "타입시스템"],
    readTime: "5분 읽기",
  },
  {
    id: "3",
    title: "Docker와 Kubernetes로 구축하는 마이크로서비스 아키텍처",
    excerpt:
      "현대적인 클라우드 네이티브 애플리케이션을 위한 컨테이너 오케스트레이션 전략과 실전 팁을 공유합니다.",
    slug: "docker-kubernetes-microservices",
    date: "2025-07-20",
    category: "DevOps",
    tags: ["Docker", "K8s", "MSA"],
    readTime: "12분 읽기",
  },
  {
    id: "4",
    title: "개발자의 성장: 주니어에서 시니어로 가는 길",
    excerpt:
      "5년간의 개발 여정을 돌아보며, 기술적 성장뿐만 아니라 소프트 스킬과 커리어 관리에 대한 인사이트를 나눕니다.",
    slug: "developer-growth-journey",
    date: "2025-07-18",
    category: "Career",
    readTime: "10분 읽기",
  },
];

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <LatestPostsSection
        posts={dummyPosts.slice(0, 3)} // 최신 3개만 표시
        className="bg-gradient-to-b from-white/5 to-transparent"
      />
      <TechStackSection className="bg-gradient-to-b from-transparent to-white/5" />

      {/* 추가 섹션들이 여기에 들어갈 예정 */}
    </PageLayout>
  );
}
