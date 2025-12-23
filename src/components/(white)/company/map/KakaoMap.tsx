"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl"; 

declare global {
  interface Window {
    kakao?: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => { lat: number; lng: number };
        Map: new (container: HTMLElement, options: { center: { lat: number; lng: number }; level: number }) => unknown;
        Marker: new (options: { position: { lat: number; lng: number } }) => { setMap: (map: unknown) => void };
        InfoWindow: new (options: { position: { lat: number; lng: number }; content: string }) => { open: (map: unknown, marker: unknown) => void };
      };
    };
  }
}

const KakaoMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [scriptLoad, setScriptLoad] = useState(false);
  const t = useTranslations("map.kakaoMap");

  // 서울 서초구 양재동 108-7 좌표
  const companyLat = 37.47739558483108;
  const companyLng = 127.03773511542745;

  // 지도 초기화 함수
  const initializeMap = () => {
    if (!window.kakao?.maps) {
      console.error("Kakao Maps API가 아직 준비되지 않았습니다.");
      return false;
    }

    const container = mapRef.current;
    if (!container) {
      console.error("지도 컨테이너를 찾을 수 없습니다.");
      return false;
    }

    const kakaoMaps = window.kakao.maps;

    try {
      kakaoMaps.load(() => {
        try {
          const mapOption = {
            center: new kakaoMaps.LatLng(companyLat, companyLng),
            level: 3,
          };
          const map = new kakaoMaps.Map(container, mapOption);

          const markerPosition = new kakaoMaps.LatLng(
            companyLat,
            companyLng,
          );
          const marker = new kakaoMaps.Marker({
            position: markerPosition,
          });

          marker.setMap(map);

          const iwContent = `
            <div style="padding:10px; min-width:200px;">
              <div style="font-weight:bold; font-size:14px; margin-bottom:5px;">${t("companyName")}</div>
              <div style="font-size:12px; color:#666; margin-bottom:8px;">${t("address")}</div>
              <div style="display:flex; gap:10px;">
                <a href="https://map.kakao.com/link/map/나무아이앤씨,${companyLat},${companyLng}" 
                   style="color:#96cb4f; text-decoration:none; font-size:12px;" target="_blank">
                  ${t("actions.viewLargeMap")}
                </a>
                <a href="https://map.kakao.com/link/to/나무아이앤씨,${companyLat},${companyLng}" 
                   style="color:#96cb4f; text-decoration:none; font-size:12px;" target="_blank">
                  ${t("actions.directions")}
                </a>
              </div>
            </div>
          `;

          const iwPosition = new kakaoMaps.LatLng(
            companyLat,
            companyLng,
          );

          const infowindow = new kakaoMaps.InfoWindow({
            position: iwPosition,
            content: iwContent,
          });

          infowindow.open(map, marker);
          setScriptLoad(true);
          console.log("카카오맵 초기화 완료");
        } catch (error) {
          console.error("지도 초기화 중 오류:", error);
        }
      });
      return true;
    } catch (error) {
      console.error("지도 로드 중 오류:", error);
      return false;
    }
  };

  useEffect(() => {
    // 이미 스크립트가 로드되어 있는지 확인
    if (window.kakao?.maps) {
      console.log("카카오맵 API가 이미 로드되어 있습니다.");
      initializeMap();
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    
    if (!apiKey) {
      console.error("Kakao Map API key가 설정되지 않았습니다.");
      console.error("NEXT_PUBLIC_KAKAO_MAP_KEY 환경 변수를 확인하세요.");
      return;
    }

    console.log("카카오맵 스크립트 로드 시작...");

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    
    const onLoadKakaoMap = () => {
      console.log("카카오맵 스크립트 로드 완료");
      // 약간의 지연을 두고 지도 초기화 (API가 완전히 준비될 때까지)
      setTimeout(() => {
        if (!initializeMap()) {
          console.error("지도 초기화 실패");
        }
      }, 100);
    };

    const onErrorKakaoMap = (error: Event) => {
      console.error("카카오맵 스크립트 로드 실패:", error);
      console.error("가능한 원인:");
      console.error("1. 카카오 개발자 콘솔에서 플랫폼 설정 확인");
      console.error("2. API 키가 올바른지 확인");
      console.error("3. 네트워크 연결 확인");
    };

    script.addEventListener("load", onLoadKakaoMap);
    script.addEventListener("error", onErrorKakaoMap);
    document.head.appendChild(script);

    // 타임아웃 설정 (10초 후 실패 처리)
    const timeout = setTimeout(() => {
      if (!scriptLoad) {
        console.error("카카오맵 로드 타임아웃");
      }
    }, 10000);

    return () => {
      script.removeEventListener("load", onLoadKakaoMap);
      script.removeEventListener("error", onErrorKakaoMap);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="border shadow-lg rounded-lg overflow-hidden relative">
      {/* 지도 컨테이너는 항상 렌더링 (ref를 위해) */}
      <div
        ref={mapRef}
        style={{ width: "100%" }}
        className="h-[20rem] sm:h-[25rem] lg:h-[35rem]"
      />
      {/* 로딩 오버레이 */}
      {!scriptLoad && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-center space-y-2">
            <div className="text-gray-500">{t("loading.title")}</div>
            <div className="text-sm text-gray-400">{t("loading.subtitle")}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KakaoMap;