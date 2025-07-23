import Image from "next/image";

const CompanyGreeting = () => {
  return (
    <div className="space-y-10 lg:px-[5rem] lg:pb-[6.25rem]">
      <div className="relative h-[10vh] overflow-hidden rounded-4xl md:h-[15vh] lg:h-[25vh]">
        <Image
          src="/image/com1.png"
          alt="greeting"
          fill
          priority
          className="object-cover object-bottom brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="space-y-4 text-center text-white">
            <div className="text-2xl font-bold md:text-3xl lg:text-4xl">
              인사말
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-4xl bg-white">
        <div className="mx-auto max-w-sm space-y-6 py-7 text-lg sm:max-w-xl sm:py-14 md:max-w-3xl lg:max-w-5xl">
          <div className="text-md text-center font-semibold">
            <div>GREETING</div>
            <div>|</div>
          </div>
          <div className="text-xl font-extrabold md:text-2xl lg:text-3xl">
            나무아이앤씨: 미래를 여는 기술, 축적된 역량과 경험을 기반으로 고객의
            가치를 높이다.
          </div>
          <div className="space-y-6 text-lg md:text-xl lg:text-2xl">
            <div className="leading-relaxed">
              나무아이앤씨는 20년간의 경험을 통해 축적한 업종 지식과
              사물인터넷(IoT), 빅데이터(Big Data), 인공지능(AI) 등 최첨단 ICT
              기술을 통해 고객의 가치를 극대화하는 것을 목표로 합니다. 우리는
              혁신적인 솔루션을 제공하여 고객의 비즈니스 성장을 지원하고, 더
              나은 미래를 함께 만들어갑니다.
            </div>
            <div className="leading-relaxed">
              다양한 경험을 통해 IoT, 스마트 관제, 스마트팩토리의 전문 지식과
              기술을 확보하고 있으며, 최신의 ICT 기술을 활용한 고성능 솔루션을
              공급함으로써
            </div>

            <div>
              <ul className="list-inside list-disc leading-relaxed">
                <li>
                  데이터 연결: 실시간 데이터 연결을 통해 더욱 정확하고 신속한
                  의사결정 지원
                </li>
                <li>
                  실시간 인사이트: 디지털 트윈 기술을 활용한 스마트 관제
                  시스템으로 효율성 극대화
                </li>
                <li>
                  고객 중심: 투명한 소통과 신뢰를 바탕으로 고객 맞춤형 솔루션
                  제공과 포괄적 고객 지원
                </li>
              </ul>
              <div className="leading-relaxed">을 약속 드립니다.</div>
            </div>
            <div>
              나무아이앤씨는 끊임없는 기술혁신과 최고의 역량으로 고객의 가치
              제고에 기여하고, 임직원의 열정과 고객의 신뢰가 어우러진 최고의
              파트너로서 지속적인 성장을 위해 노력하겠습니다.
            </div>
            <div className="leading-relaxed">나무아이앤씨 임직원 일동</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyGreeting;
