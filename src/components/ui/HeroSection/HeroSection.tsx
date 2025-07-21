import Link from 'next/link';

/**
 * HeroSection 컴포넌트
 * 홈페이지의 메인 Hero 영역을 담당합니다.
 * 미니멀하고 임팩트 있는 디자인으로 구성되었습니다.
 */
export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-32 md:py-40 lg:py-48">
        <div className="mx-auto max-w-4xl text-center">
          {/* 메인 헤드라인 */}
          <h1 className="mb-8 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            아웃풋이 확실한 개발자{' '}
            <span className="block text-primary mt-2">상장청부사</span>
            <span className="mt-4 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              윤종호 입니다.
            </span>
          </h1>

          {/* 서브 텍스트 */}
          <p className="mx-auto mb-12 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl leading-relaxed">
            신뢰성 있는 전문가로서의 역량과 성장 과정을 공유합니다.
            <br />
            기술력 어필, 지식 공유, 개인 브랜딩을 통해 가치를 전달합니다.
          </p>

          {/* CTA 버튼 그룹 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              블로그 읽기
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-md transform hover:-translate-y-0.5"
            >
              About Me
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 미니멀한 장식 요소 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};
