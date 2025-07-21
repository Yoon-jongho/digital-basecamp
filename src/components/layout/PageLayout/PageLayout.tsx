import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageLayout 컴포넌트
 * 모든 페이지의 기본 레이아웃을 제공합니다.
 * Header와 Footer를 포함하며, 메인 콘텐츠 영역을 감싸줍니다.
 */
export const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* 메인 콘텐츠 영역 */}
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
