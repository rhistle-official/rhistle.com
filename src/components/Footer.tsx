import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/image/ci_white.png"
                alt="나무아이앤씨 로고"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-300">
              고객의 가치를 최우선으로 실현하는<br />
              최고의 전문 파트너
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>서울 서초구 양재동 108-7 </p>
              <p>현산빌딩 2층</p>
            </div>
          </div>

          {/* 비즈니스 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">비즈니스</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/product/vexu" className="hover:text-white transition-colors">VEXU</Link></li>
              <li><Link href="/product/lmp" className="hover:text-white transition-colors">VACI</Link></li>
              <li><Link href="/product/consulting" className="hover:text-white transition-colors">MEXI</Link></li>
            </ul>
          </div>

          {/* 회사소개 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">회사소개</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/company/ceo" className="hover:text-white transition-colors">CEO</Link></li>
              <li><Link href="/company/history" className="hover:text-white transition-colors">연혁</Link></li>
              <li><Link href="/company/recruit" className="hover:text-white transition-colors">인재상</Link></li>
              <li><Link href="/support/location" className="hover:text-white transition-colors">찾아오시는 길</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">연락처</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>대표: 김경식</p>
              <p>사업자번호: 211-87-61350</p>
              <p>대표번호: 02-3018-5114</p>
              <p>팩스: 02-3018-3026</p>
            </div>
            <div className="pt-4">
              <Link 
                href="/inquiry/corecode-inquiry"
                className="inline-block bg-white text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 (주)나무아이앤씨. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link href="/" className="hover:text-white transition-colors">이용약관</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
