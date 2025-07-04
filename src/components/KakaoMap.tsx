"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [scriptLoad, setScriptLoad] = useState(false);

  // 서울 서초구 양재동 108-7 좌표
  const companyLat = 37.47739558483108;
  const companyLng = 127.03773511542745;

  useEffect(() => {
    // 이미 스크립트가 로드되어 있는지 확인
    if (window.kakao) {
      setScriptLoad(true);
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    
    if (!apiKey) {
      console.error("Kakao Map API key is not configured");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    
    const onLoadKakaoMap = () => {
      setScriptLoad(true);

      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = mapRef.current;
          if (container) {
            const mapOption = {
              center: new window.kakao.maps.LatLng(companyLat, companyLng),
              level: 3,
            };
            const map = new window.kakao.maps.Map(container, mapOption);

            const markerPosition = new window.kakao.maps.LatLng(
              companyLat,
              companyLng,
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });

            marker.setMap(map);

            const iwContent = `
              <div style="padding:10px; min-width:200px;">
                <div style="font-weight:bold; font-size:14px; margin-bottom:5px;">(주)나무아이앤씨</div>
                <div style="font-size:12px; color:#666; margin-bottom:8px;">서울 서초구 양재동 108-7 2층</div>
                <div style="display:flex; gap:10px;">
                  <a href="https://map.kakao.com/link/map/나무아이앤씨,${companyLat},${companyLng}" 
                     style="color:#96cb4f; text-decoration:none; font-size:12px;" target="_blank">
                    큰지도보기
                  </a>
                  <a href="https://map.kakao.com/link/to/나무아이앤씨,${companyLat},${companyLng}" 
                     style="color:#96cb4f; text-decoration:none; font-size:12px;" target="_blank">
                    길찾기
                  </a>
                </div>
              </div>
            `;

            const iwPosition = new window.kakao.maps.LatLng(
              companyLat,
              companyLng,
            );

            const infowindow = new window.kakao.maps.InfoWindow({
              position: iwPosition,
              content: iwContent,
            });

            infowindow.open(map, marker);
          }
        });
      }
    };

    script.addEventListener("load", onLoadKakaoMap);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", onLoadKakaoMap);
    };
  }, []);
  
  return (
    <div className="border shadow-lg rounded-lg overflow-hidden">
      {scriptLoad ? (
        <div
          ref={mapRef}
          style={{ width: "100%" }}
          className="h-[20rem] sm:h-[25rem] lg:h-[35rem]"
        />
      ) : (
        <div className="relative h-[20rem] sm:h-[25rem] lg:h-[35rem] bg-gray-100 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-gray-500">지도를 불러오는 중...</div>
            <div className="text-sm text-gray-400">카카오맵을 로딩하고 있습니다</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KakaoMap;
