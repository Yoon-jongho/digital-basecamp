import { PageLayout } from '@/components/layout';
import { HeroSection } from '@/components/ui';

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      
      {/* 추가 섹션들이 여기에 들어갈 예정 */}
      {/* <LatestPostsSection /> */}
      {/* <TechStackSection /> */}
    </PageLayout>
  );
}
