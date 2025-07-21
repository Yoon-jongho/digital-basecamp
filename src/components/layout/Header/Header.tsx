import Link from 'next/link';

/**
 * Header 컴포넌트
 * 사이트의 상단 네비게이션을 담당합니다.
 */
export const Header = () => {
  const navItems = [
    { href: '/', label: '홈' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: '블로그' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          {/* 로고/사이트 제목 */}
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 transition-colors hover:text-primary"
          >
            YJH DevCamp
          </Link>

          {/* 데스크톱 네비게이션 */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* 모바일 메뉴 버튼 (일단 정적 버전) */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
            aria-label="메뉴 열기"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};
