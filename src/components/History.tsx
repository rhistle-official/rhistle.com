"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect} from "react";
import {
  RocketIcon,
  CogIcon,
  LayersIcon,
  Building2Icon
} from "lucide-react";

const historyData = [
  {
    product: "2021 - Present",
    icon: <RocketIcon className="w-6 h-6 text-emerald-600" />,
    histories: [
      {
        date: "2025년",
        items: [
          "Vexi 관제 DT 솔루션 출시 예정",
          "Nexum (제조 IT Framework) 출시 ",
          "셀트리온 제약 CoreCode Suite 공급",
          "SK 하이닉스 청주 환경안전 IRIS 조기대응 통합 시스템 구축",
          "삼성전자 반도체 평택 환경안전 IDPS P4 구축",
          "삼성전자 반도체 기흥/화성 누수 시스템 통합 구축",
          "삼성전자 기흥K1 사업장 NRD-K 신규 건물 IDPS 연계",
          "삼성디스플레이 아산1·아산2 가스 모니터링 재구축",
          "코닝정밀소재 ICS 개조 추가 (NGSD KN17 자동적재로봇)",
          "셀트리온 EBR 설비 연계",
          "셀트리온제약 EWM 구축을 위한 물류설비 연계",
          "엠아이텍 및 S&G바이오텍 컨설팅"
        ],
      },
      {
        date: "2024년",
        items: [
          "CoreCode Suite v5.1.0 출시",
          "스마트팩토리 사업 확대 (컨설팅, 시스템 구축)",
          "삼성전자 반도체 평택 환경안전 IDPS P4 구축",
          "삼성디스플레이 환경안전 천안·아산1 가스 모니터링 시스템 구축",
          "코닝정밀소재 ICS 시스템 개조",
          "셀트리온 EBR 설비 연계",
          "SBTL MES 온습도 설비 연계",
          "엠아이텍 MES PI 구축 및 PMO 컨설팅",
        ],
      },
      {
        date: "2023년",
        items: [
          "LS티라유텍 전략적 제휴 체결",
          "LG전자 CoreCode Suite 공급",
          "삼성전자 반도체 평택 환경안전 IDPS P3 구축",
          "삼성디스플레이 인도 환경안전 IDPS 연계",
          "삼성디스플레이 환경안전 아산1 SMCS 가스 모니터링 4차 구축",
          "LG전자 협력사품질데이터 연계 시스템",
          "셀트리온 EBR 설비 연계",
          "코닝정밀소재 ICS 개조 추가",
          "해성DS EAP 시스템 구축 (NIPA 과제)",
          "에너지머티리얼즈 MES 구축",
        ],
      },
      {
        date: "2022년",
        items: [
          "LGCNS 협력업체 선정",
          "SK 하이닉스 이천 환경안전 IRIS 조기대응 통합 시스템 3차 구축",
          "삼성전자 반도체 기흥/화성 환경안전 IDPS 추가 구축",
          "삼성디스플레이 환경안전 아산1 SMCS 가스 모니터링 3차 구축",
          "코닝정밀소재 ICS 개조 추가",
        ],
      },
      {
        date: "2021년",
        items: [
          "SK 하이닉스 이천 환경안전 IRIS 조기대응 통합 시스템 2차 구축",
          "삼성전자 반도체 평택 환경안전 IDPS P2 구축",
          "삼성전자 반도체 기흥/화성 환경안전 IDPS 추가 구축",
          "현대차 울산 2, 3공장 지능형 시스템 연계",
          "코닝정밀소재 ICS 개조 추가",
          "원익 IPS 설비 연계",
        ],
      },
    ],
  },
  {
    product: "2017 - 2020",
    icon: <CogIcon className="w-6 h-6 text-yellow-500" />,
    histories: [
      {
        date: "2020년",
        items: [
          "셀트리온 CoreCode Suite 공급",
          "삼성전자 미국 오스틴 GCS EES 2차 연계 및 PM WEB MANAGER 구축",
          "SK 하이닉스 이천 환경안전 IRIS 조기대응 통합 시스템 1차 구축",
          "삼성디스플레이 환경안전 아산1 SMCS 가스 모니터링 2차 구축",
          "현대차 울산3도장 지능형공장관리시스템 IoT플랫폼 구축",
          "현대기아차 남양연구소 글로벌 전장검사 IoT플랫폼 구축",
          "셀트리온 EBR 시스템 구축",
          "종근당 FEMS 설비 데이터 연계",
          "코닝정밀소재 ICS 개조 추가 및 효율화 구축",
        ],
      },
      {
        date: "2019년",
        items: [
          "삼성전자 반도체 중국 서안 환경안전 IDPS 2차 구축",
          "삼성전자 반도체 기흥/화성 환경안전 IDPS 기능 개선 구축",
          "현대차 울산51 지능형공장관리시스템 IoT플랫폼 구축",
          "현현대기아차 남양연구소 환경인증시험관리 IoT플랫폼 구축",
          "기아차 소하2 지능형공장관리시스템 IoT플랫폼 구축",
          "기아차 인도 GMES Infra Implementation 제조 IoT플랫폼 구축",
          "코닝정밀소재 ICS 개조 추가",
          "트리온 ERP 물류 설비 연계",
          "중국 CARL Automated Data Collection",
          "세아제강 SeAH Digital Infra Design Consulting ",
        ],
      },
      {
        date: "2018",
        items: [
          "기아자동차 CoreCode Suite 공급",
          "현대제철 CoreCode Suite 공급",
          "중국 JV코닝 청두/선양 QMS 구축",
          "삼성디스플레이 환경안전 아산, 천안 환경안전 IDPS 2차 구축",
          "삼성전자 반도체 천안 환경안전 IDPS 구축",
          "현대제철 울산 강관 품질 IT 시스템 IoT 플랫폼 구축",
          "현대차 울산5공장 스마트 도장공장 관리 시스템 IoT 플랫폼 구축",
          "현대차 울산 후륜8속 자동변속기 가공라인 MES 구축 IoT 개발",
          "현대차 울산 신엔진(신U + 감마2) 공장 가공라인 MES 구축 IoT 개발",
          "코닝정밀소재 ICS 개조 추가"
        ]
      },
      {
        date: "2017",
        items: [
          "현대자동차 CoreCode Suite 공급",
          "SK하이닉스 중국 우시 환경안전 CMS 통합 모니터링 3차 구축",
          "삼성디스플레이 환경안전 아산1 SMCS 가스 모니터링 1차 구축",
          "삼성디스플레이 아산2 A3 GDS 가스 모니터링 2차 구축",
          "삼성디스플레이 베트남 환경안전 IDPS V3 구축",
          "현대오토에버 제조 IoT 플랫폼 1단계 개발 구축",
          "대우조선해양 냉난방설비 통합관제시스템 구축",
          "빙그레 김해공장 EMS 구축",
          "중국 성선성 시멘트 제2공장 FEMS 구축",
          "코닝정밀소재 ICS 개조 추가"
        ]
      },
    ],
  },
  {
    product: "2012 - 2016",
    icon: <LayersIcon className="w-6 h-6 text-blue-500" />,
    histories: [
      {
        date: "2016",
        items: [
          "현대오토에버 협력업체 선정",
          "한화오션 CoreCode 공급",
          "삼성전자 반도체 평택 환경안전 IDPS P1 구축",
          "삼성전자 미국 오스틴 GCS EES 1차 연계",
          "삼성디스플레이 아산2 GCS EES 연계",
          "삼성디스플레이 아산2 A3 FMCS EES 연계",
          "삼성디스플레이 중국 소주 환경안전 IDPS 2차 구축",
          "삼성디스플레이 천안 GRAYZONE EES 연계",
          "삼성디스플레이 베트남 환경안전 IDPS V1, V2 구축",
          "삼성디스플레이 베트남 FMCS 및 EES 연계",
          "대우 조선 빌딩 EMS I/F 구축",
          "모노리스 제주 융복합 테마파크 콘텐츠 진흥원 과제",
          "부산시 스마트 시티 2차 실증사업",
          "SK하이닉스 중국 우시 환경안전 CMS 통합 모니터링 2차 구축",
          "코닝정밀소재 ICS 개조 추가"
        ]
      },
      {
        date: "2015",
        items: [
          "SK AX 협력업체 선정",
          "SK 하이닉스 CoreCode Suite 공급",
          "SK하이닉스 중국 우시 환경안전 CMS 통합 모니터링 1차 구축",
          "삼성디스플레이 환경안전 G-IDPS EES 연계",
          "삼성디스플레이 아산2 A3 GDS 가스 모니터링 1차 구축",
          "코닝정밀소재 ICS 개조 추가"
        ]
      },
      {
        date: "2014",
        items: [
          "CoreCode Suite GS 인증",
          "삼성전자 반도체 기흥/화성 환경안전 IDPS 구축",
          "삼성전자 반도체 기흥/화성 환경안전 EES 연계",
          "삼성디스플레이 아산2 A2 GDS 가스 모니터링 3차 구축",
          "삼성디스플레이 환경안전 G-IDPS 연계",
          "코닝정밀소재 ICS 개조 추가"
        ]
      },
      {
        date: "2013",
        items: [
          "CoreCode XSTORE GS 인증",
          "삼성디스플레이 아산2 A2 GDS 가스 모니터링 2차 구축",
          "삼성디스플레이 환경안전 IDPS 구축",
          "포스코 순천 마그네슘2공장 압연,정정 공정 연계",
          "코닝정밀소재 ICS 개조 추가"
        ]
      },
      {
        date: "2012",
        items: [
          "포스코, 포스하이메탈 CoreCode Suite 공급",
          "대법원 CoreCode XSTORE 공급",
          "삼성전자 기흥/화성 환경안전 EES 연계",
          "삼성전자 그린포탈 폐기물 연계",
          "포스하이메탈 통합보안방재 시스템 구축",
          "포스코 순천 마그네슘 SCM 구축",
          "코닝정밀소재 ICS 개조 안정화 및 추가",
          "대법원 사법업무 전산화 도입 구축",
          "대법원 전자소송 전산화 도입 구축"
        ]
      },
    ],
  },
  {
    product: "2005 - 2011",
    icon: <Building2Icon className="w-6 h-6 text-gray-500" />,
    histories: [
      {
        date: "2011",
        items: [
          "포스크DX 협력업체 선정",
          "삼성전자 CoreCode 공급",
          "삼성디스플레이 아산2 A2 GDS 가스 모니터링 개선",
          "삼성디스플레이 온실가스/에너지경영시스템 구축",
          "삼성디스플레이 환경안전 베스다 EES 연계",
          "코닝정밀소재 ICS 2차 구축",
          "농심 구미 생산정보시스템 구축",
          "율촌화학 생산정보시스템 구축"
        ]
      },
      {
        date: "2010",
        items: [
          "삼성SDI CoreCode Suite 공급",
          "코닝정밀소재 CoreCode Suite 공급",
          "삼성디스플레이 CoreCode Suite 공급",
          "삼성디스플레이 아산2 A2 GDS 가스 모니터링 1차 구축",
          "코닝정밀소재 ICS 1차 구축"
        ]
      },
      {
        date: "2009",
        items: ["삼성 SDS 협력업체 선정"]
      },
      {
        date: "2008",
        items: ["기술혁신형 중소기업(INNO-BIZ) 인증 (중소벤처기업부)"]
      },
      {
        date: "2007",
        items: [
          "통합 인터페이스 장치 특허 출원",
          "CoreCode Suite (인터페이스 미들웨어 )' 출시"
        ]
      },
      {
        date: "2006",
        items: [
          "CoreCode XSTORE (XML 문서관리 소프트웨어)' 출시",
          "기업부설연구소 설립",
          "우량기술기업 선정"
        ]
      },
      {
        date: "2005",
        items: ["나무아이앤씨(주) 설립"]
      }
    ],
  }
];

const History = () => {
  const [expandedProduct, setExpandedProduct] = useState<string[]>([]);
  
  useEffect(() => {
    setExpandedProduct(historyData.map(p => p.product));
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    hover: { 
      scale: 1.02, 
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  const handleToggle = (productName: string) => {
    setExpandedProduct(prev =>
      prev.includes(productName)
        ? prev.filter(p => p !== productName)
        : [...prev, productName]
    );
  };

  return (
    <motion.div 
      className="space-y-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {historyData.map((product, productIndex) => (
        <motion.div 
          key={product.product}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 overflow-hidden"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          {/* Product Header */}
          <motion.div 
            className="flex items-center justify-between mb-8 cursor-pointer"
            onClick={() =>
              setExpandedProduct(prev =>
                prev.includes(product.product)
                  ? prev.filter(p => p !== product.product)
                  : [...prev, product.product]
              )
            }
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md">
                {product.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{product.product}</h3>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedProduct.includes(product.product) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="space-y-6"
            initial={false}
            animate={{ 
              height: expandedProduct.includes(product.product) ? "auto" : 0,
              opacity: expandedProduct.includes(product.product) ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {product.histories.map((history, historyIndex) => (
              <motion.div 
                key={historyIndex}
                className="relative"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: historyIndex * 0.1 }}
              >
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-emerald-600" />
                
                {/* Timeline Dot */}
                <div className="absolute left-4 top-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg" />
                
                {/* Content Card */}
                <motion.div 
                  className="ml-12 bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 md:mb-0">
                      <span className="text-xl font-semibold text-gray-800">{history.date}</span>
                    </div>
                  </div>

                  {/* Items */}
                  <motion.ul 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {history.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        className="flex items-start space-x-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.05 }}
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Expand/Collapse Indicator */}
          {!expandedProduct.includes(product.product) && (
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-emerald-600 text-sm font-medium">
                클릭하여 상세 내용 보기
              </span>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default History;
