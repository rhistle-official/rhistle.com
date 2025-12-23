"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const historyData = [
  {
    product: "CoreCode Server",
    histories: [
      {
        date: "2020년 08월 21일",
        version: "5.4.0",
        items: [
          "WebAdmin HTML5로 변경",
          "로그 백업파일 리스트 정렬시켜 반환하게 수정",
          "로그 백업 압축 시 파일이름 짤림현상 수정",
          "AdaptorList Tomcat 버전 버그 수정",
          "Adaptor 속성 조회 시 버그 수정",
          "어댑터 삭제 시 디렉토리 삭제 버그 수정",
          "어댑터 복원 시 버그 수정",
          "원격서버 시작된 어댑터 확인 버그 수정",
          "어댑터 서비스 정보 버그 수정",
          "어댑터 속성 관리기능 수정",
          "서버 리소스 수정",
          "CoreCodeEngine 기능 수정분 반영(Version 5.4.3)",
        ],
      },
      {
        date: "2020년 05월 21일",
        version: "5.3.2",
        items: [
          "ResourceMonitorManager에 기능 보완",
          "Client Tool과의 통신 암호화 기능 추가",
          "DBCP 구조 변경 반영",
          "DBCP 이용 시 재접속 Bug fix 및 기능 보완",
          "DBCP 관련 메시지 추가",
          "Adaptor 관련 로그 수정 반영",
          "OPCBridge 모듈 수정 반영",
          "Library 수정 반영",
          "CoreCodeEngine 기능 수정분 반영(Version 5.4.2)",
        ],
      },
      {
        date: "2020년 03월 23일",
        version: "5.3.1",
        items: [
          "Tomcat 버전용 Adaptor Namespace 버그 fix (FileSeparator로 구분되게 함)",
"패키지 삭제시 버그 Fix",
"ResourceMonitorManager에 Process관련 CPU 및 관련 리소스 Monitoring 추가",
"ResourceMonitorManager에 추가된 기능을 위한 처리함수 추가",
        ],
      },
      {
        date: "2020년 03월 10일",
        version: "5.3.0",
        items: [
          "NTService 4G 제한 문제 해결",
        ],
      },
      {
        date: "2020년 02월 28일",
        version: "5.3.0",
        items: [
          "WAS 종류 자동 설정 기능",
          "Reload가능 Manager만 보이게 기능 수정",
          "어댑터 속성 파일 편집 기능 추가",
          "세션 및 사용자 관리 기능 변경 추가",
          "5회 접속 오류시 5분 접속 제한 기능 추가",
          "별도의 세션관리 기능 추가",
          "시스템 모니터링과 세션관리 분리(사용자 액션이 없을 경우 세션 아웃됨)",
          "3개월 마다 암호 변경 요구 기능 추가",
          "사용자 로그인 상세이력 기능 추가(최대 10개 조회)",
          "동일 아이디로는 단일 로그인 기능(세션 ID 기준)",
          "tomcat 8.5.51 버전으로 업그레이드",
          "OpenJDK 1.8.0_u242 버전으로 업그레이드",
          "NTService 4G 제한 문제 해결",
          "CoreCodeEngine 기능 수정분 반영(Version 5.4.0)",
        ],
      },
      {
        date: "2020년 01월 10일",
        version: "5.2.0",
        items: [
          "CoreCodeDBCP 기능 추가",
          "CoreCode 전용 암호화 기능 추가",
          "Cache 관련기능 개선",
          "로그 출력 개선 및 버그 Fix",
          "Linux 버전 버그 Fix",
          "서버정보 출력 버그 Fix",
          "CoreCodeEngine 기능 수정분 반영(Version 5.4.0)",
        ],
      },
      {
        date: "2019년 12월 31일",
        version: "4.8.0",
        items: [
          "CoreCodeDBCP 기능 추가",
          "CoreCode 전용 암호화 기능 추가",
          "Linux 버전 버그 Fix",
          "CoreCodeEngine 기능 수정분 반영(Version 4.25.2)",
        ],
      },
      {
        date: "2019년 11월 18일",
        version: "4.7.5",
        items: [
          "Cache 관련기능 개선",
          "로그 출력 개선 및 버그 Fix",
          "Linux 버전 버그 Fix",
          "서버정보 출력 버그 Fix",
          "CoreCodeEngine 기능 수정분 반영(Version 4.24.0)",
        ],
      },
      {
        date: "2019년 05월 22일",
        version: "4.7.3",
        items: [
          "Cache 관련기능 추가",
        ],
      },
      {
        date: "2019년 05월 10일",
        version: "5.1.0",
        items: [
          "slf4j + log4j2 적용",
          "Log 관련 모듈 기능 업그레이드",
          "Tomcat 8.5.39 버전 반영",
          "Web Admin에 자바버전 상세적용",
          "Web Admin에 서버 로그레벨은 DEBUG > INFO > WARN > ERROR 로 수정",
          "Web Admin에 Adaptor 로그레벨은 DEBUG > VERBOSE > DIAG > INFO > WARN > ERROR > FATAL로 수정",
          "CoreCodeEngine 기능 수정분 반영(Version 5.2.0)",
        ],
      },
      {
        date: "2019년 04월 02일",
        version: "4.7.1",
        items: [
          "Cache 관리 기능 추가",
          "자동삭제기능에서 로그백업 폴더도 적용되게 수정",
          "CoreCodeEngine 기능 수정분 반영(Version 4.23.0)",
        ],
      },
      {
        date: "2019년 02월 15일",
        version: "5.0.0",
        items: [
          "OpenJDK 8 버전 적용",
          "SpringFramework 4.x 버전 적용",
          "Quartz 2 적용",
          "CoreCodeEngine 기능 수정분 반영(Version 5.0.0)",
        ],
      },
      {
        date: "2018년 04월 05일",
        version: "4.7.0",
        items: [
          "JDK 7 반영",
          "Agent 리스트 정렬 반영",
          "하위 패키지내에 동일한 이름의 Adaptor가 존재할 경우, 상위 패키지의 동일한 이름의 Adaptor가 배포안 되는 버그 수정",
          "CoreCodeEngine 기능 수정분 반영(Version 4.16.0)",
        ],
      },
      {
        date: "2017년 09월 11일",
        version: "4.6.1",
        items: [
          "CacheList 추가를 위한 기능 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 4.17.0)",
        ],
      },
      {
        date: "2017년 01월 15일",
        version: "4.6.0",
        items: [
          "JDK 7 반영",
          "Agent 리스트 정렬 반영",
          "하위 패키지내에 동일한 이름의 Adaptor가 존재할 경우, 상위 패키지의 동일한 이름의 Adaptor가 배포안 되는 버그 수정",
          "CoreCodeEngine 기능 수정분 반영(Version 4.16.0)",
        ],
      },
      {
        date: "2015년 11월 04일",
        version: "4.5.3",
        items: [
          "라이선스가 검증 후 어댑터 실행되는 부분 수정",
          "라이선스 운영 버그 수정",
          "CoreCodeEngine 기능 수정분 반영(Version 4.11.0)",
        ],
      },
      {
        date: "2015년 08월 18일",
        version: "4.5.2",
        items: [
          "라이선스 정책 반영에 따른 관리기 수정",
          "ServiceInfo Serializable화로 수정",
          "CoreCodeEngine 기능 수정분 반영(Version 4.11.0)",
        ],
      },
      {
        date: "2015년 03월 02일",
        version: "4.5.0",
        items: [
          "CCP Manager 추가",
          "Tag Manager 추가",
          "CacheManager Reload 기능 추가(추가된 Cache를 등록 기능)",
          "원격서버 기능 오류 수정",
          "WOJMX 기능 오류 수정",
          "CoreCodeEngine 기능 수정분 반영(Version 4.11.0)",
        ],
      },
      {
        date: "2014년 02월 14일",
        version: "4.4.0",
        items: [
          "Adaptor Tree의 Adaptor가 Deploy와 Repository와의 파일이 sync가 맞지 않을 때 표시를 달리해 주는 기능 추가",
          "로그인 시 선택된 언어를 환경설정 값에 적용될 수 있도록 기능 추가",
          "통계정보에서 불확실한 정보인 에러정보 삭제",
          "Adaptor Tree의 Adaptor 상태 아이콘 사라지는 버그 수정",
          "Adaptor 클릭 시 실행/정지 버튼 사라지는 버그 수정",
          "로그인 시 로그인 화면에서 선택된 언어로 환경 설정이 되도록 수정",
          "상세 통계 정보에서 리스트 전체의 상태 정보 추가표시 (전체, 가동, 정지)",
          "Adaptor Tree 최초표시 때 확장여부를 설정할 수 있도록 환경설정에 기능 추가",
          "운영환경에 따라 리스트표시에 정렬이 안되던 부분을 문자열 정렬(오름차순)이 되도록 기능 추가",
          "운영환경경에 따라 로그 리스트 표시에 정렬이 안되던 부분을 현재 운영되는 로그는 맨 위에 표시되고 나머지는 문자열 정렬(내림차순)이 되도록 기능 추가",
          "백업로그 리스트 정렬은 내림차순으로 표시 되도록 기능 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 4.9.0)",
        ],
      },
      {
        date: "2013년 06월 30일",
        version: "4.3.3",
        items: [
          "하드디스크의 용량을 감안하여 오래된 로그부터 삭제할 수 있는 기능 추가",
          "Agent의 어댑터 조회기능 오류 수정",
          "Cross Site Script 방지기능 추가",
          "로그인시 암호를 암호화 SHA256으로 변경",
          "CoreCodeEngine 기능 수정분 반영(Version 4.5.4)",
        ],
      },
      {
        date: "2013년 03월 20일",
        version: "4.3.2",
        items: [
          "GS인증으로 인한 입력 제한 기능 추가",
          "메시지 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 4.5.4)",
        ],
      },
    ],
  },
  {
    product: "CoreCode Modeler",
    histories: [
      {
        date: "2020년 05월 21일",
        version: "5.4.0",
        items: [
          "Server 통신 시 암호화 기능 추가(옵션)",
          "Spring-JDBCConnection에 DB 옵션 추가를 위한 Properties 추가",
        ],
      },
      {
        date: "2020년 03월 25일",
        version: "5.3.0",
        items: [
          "서버 종류 자동 설정 기능 반영",
          "CCM 저장 파일 용량 최대 50여% 축소",
          "어댑터 다중 등록에서 CSV,TXT(Tab 구분) Format 추가",
          "CCM 파일 관련 다국어 처리 버그 Fix",
          "CodeEditor 관련 버그 Fix",
          "모델러 도움말 수정 및 반영",
          "모델러 사용 Resource 추가 반영",
          "모델러 Component 추가 및 수정 반영",
        ],
      },
      {
        date: "2020년 01월 10일",
        version: "5.2.0",
        items: [
          "CoreCodeDBCP 이용 기능 추가",
          "멜섹Q 기본값 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 5.4.0)",
        ],
      },
      {
        date: "2019년 12월 31일",
        version: "4.15.2",
        items: [
          "CoreCodeDBCP 이용 기능 추가",
          "멜섹Q 기본값 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 4.25.2)",
        ],
      },
      {
        date: "2019년 05월 10일",
        version: "5.1.0",
        items: [
          "slf4j + log4j2 적용으로 Adaptor Launcher 모듈 수정 및 변경",
          "install 프로그램 log4j2 적용으로 재정의",
          "불필요한 라이브러리 삭제",
          "Log Level 추가로 인한 Console View의 색깔 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 5.2.0)",
        ],
      },
      {
        date: "2019년 02월 15일",
        version: "5.0.0",
        items: [
          "OpenJDK 8 버전 적용",
          "SpringFramework 4.x 버전 적용",
          "Quartz 2 적용",
          "CoreCodeEngine 기능 수정분 반영(Version 5.0.1)",
        ],
      },
      {
        date: "2018년 09월 07일",
        version: "4.15.1",
        items: [
          "편집창 기능개선",
          "파일 열기, 파일 저장 시 수동 입력이 될 수 있도록 기능 개선",
          "CoreCodeEngine 기능 수정분 반영(Version 4.21.1)",
        ],
      },
      {
        date: "2018년 08월 10일",
        version: "4.15.0",
        items: [
          "어댑터 다중 등록 기능 추가",
          "편집창(Script, SQL) 재개발",
          "Cursor Position 오류 수정",
          "찾기/바꾸기 기능 재개발",
          "자동 완성 기능 추가",
          "Windows 10에서 설치, 실행시 높은 DPI에 영향을 안 받도록 설정 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 4.21.0)",
        ],
      },
      {
        date: "2018년 04월 05일",
        version: "4.14.0",
        items: [
          "CoreCodeDBCP 이용 기능 추가",
          "멜섹Q 기본값 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 4.25.2)",
        ],
      },
      {
        date: "2017년 09월 08일",
        version: "4.13.0",
        items: [
          "CoreCodeDBCP 이용 기능 추가",
          "멜섹Q 기본값 추가",
          "CoreCodeEngine 기능 수정분 반영(Version 4.25.2)",
        ],
      },
      {
        date: "2017년 01월 14일",
        version: "4.12.0",
        items: [
          "JDK 7 반영",
          "Console View의 컬러적용 및 강조문구에 대한 컬러 적용 기능 추가",
          "BenchmarkRandomUnit 난수 발생 범위를 Integer형태로만 입력되도록 수정",
          "서버 접속시 오류부분 log에 찍힐 수 있도록 수정",
          "모델러가 서버에 접속시 전송하는 접속 아이피를 추출하기 위한 모듈에서 가상머신이 있을 경우 서버에 접속이 안되는 버그 수정",
          "모델러가 서버 접속시 전송하는 접속 아이피를 모델러가 아닌 접속자(Servlet)에서 수행토록 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.16.0)",
        ],
      },
      {
        date: "2014년 02월 14일",
        version: "4.10.0",
        items: [
          "서버에 Adaptor를 업로드 후 패키지 창 Tree에 업로드된 곳으로 포지션 이동 기능 추가",
          "Adaptor Status Bar에 현재 편집 중인 문서에 대한 전체 경로 표시 기능 추가",
          "컴포넌트를 삭제할 때 상관이 없는 Enum도 같이 삭제되는 버그 수정",
          "Base Component 추가",
          "CoreCode Engine 기능 수정분 반영(Version 4.9.0)",
        ],
      },
      {
        date: "2013년 06월 30일",
        version: "4.9.4",
        items: [
          "Look & Feel에서 비활성화 되어 있던 Aqua 부분 삭제",
          "암호화 선택 및 컴포넌트 속성 입력제한을 modeler.properties설정에 의해 기능사용 여부 기능",
          "어댑터 등록에서 최초 등록 버튼이 활성화 안되는 버그 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.5.4)",

        ],
      },
      {
        date: "2013년 03월 20일",
        version: "4.9.3",
        items: [
          "GS인증으로 인한 입력 제한 기능 추가",
          "서버정보 리스트에서 삭제시 멀티 선택을 해도 하나만 삭제되는 오류 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.5.4)",
        ],
      },
      {
        date: "2013년 01월 31일",
        version: "4.9.2",
        items: [
          "편집 중인 모델링 파일을 테스트 진행 도중에 저장할 때 오류가 발생하면서 테스트 정지도 안되고 프로세스가 남아있는 오류 수정",
          "모델링 파일을 서버 등록 시 공백허용을 비허용으로 해서 서버에서 오류나는 것을 미연에 방지토록 수정",
          "서버 접속 시 암호화를 MD5가 기본이 되게 수정.",
          "FileWriteExtensionConnector,   FileWriteOMConnector 등 Naming rule에 맞지 않는 Component를 Naming rule에 맞게 수정함",
          "CoreCode Engine 기능 수정분 반영(Version 4.5.3)",
        ],
      },
      {
        date: "2012년 07월 31일",
        version: "4.9.1",
        items: [
          "SocketClientConnection 사용 기능 추가",
          "NIO Component 추가",
          "Connection Enum 버그 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.5.1)",
          "Java 1.6.0 update 32 적용",
        ],
      },
      {
        date: "2012년 06월 07일",
        version: "4.9.0",
        items: [
          "Component 세분화 작업(기본/특화 구별)",
          "사용자 레이아웃 기능 추가",
          "Obfuscation 작업 적용",
          "기타 버그 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.4.0)",
        ],
      },
      { 
        date: "2012년 04월 31일",
        version: "4.8.5",
        items: [
          "Property 항목 조정",
          "각종 버그 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.3.2)",
        ],
      },
      {
        date: "2011년 12월 02일",
        version: "4.8.4",
        items: [
          "Diagraph식 AutoLayout 기능 새로 적용",
          "CCM에 암복호화 기능 추가",
          "Adaptor를 CoreCodeServer에 등록시 Namespace 적용을 자동 조합하는 기능 추가",
          "서버등록 기능 추가(리스트에 Scroll기능 및 여러 버그 수정)",
          "예외처리 후 어뎁터 종료 여부 기능 추가",
          "디자인 창에서 키보드 방향키로 반응하도록 기능 추가",
          "암복호화를 위한 처리 버그 수정",
          "CustomEditorContext 기능 추가",
          "기타 버그 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.3.0)",
        ],
      },
      {
        date: "2010년 09월 29일",
        version: "4.8.3",
        items: [
          "ExceptionProcessor 하나만 존재하고 있을 때, 출력 XML을 클릭하면 프로그램이 멈추는 버그 수정함.",
          "F1을 누르면 모델러 도움말이 실행되도록 수정함.",
          "ccm 더블클릭시 새문서 생성이 안되게 수정함.",
          "CoreCode Engine 기능 수정분 반영(Version 4.2.7)",
        ],
      },
      {
        date: "2010년 06월 07일",
        version: "4.8.2",
        items: [
          "TCP, UDP Melsec Component의 Property 기능에 맞게 수정.",
          "OpcSync, OpcAsync Component에 맞게 설정값 수정.",
          "Glofa관련 Component 추가",
          "SiemensS7Protocol 관련 Component 추가",
          "DDE, Modbus관련 Component 추가",
          "Spring-JDBCProcessor Component 추가",
          "DummyWriterConnector Component 추가",
          "CoreCode Engine 기능 수정분 반영(Version 4.2.1)",
        ],
      },
      {
        date: "2010년 02월 25일",
        version: "4.8.0",
        items: [
          "즐겨쓰기 기능 추가",
          "문서열기를 Drag&Drop 방식도 지원하는 기능 추가.",
          "자동정렬배치 기능을 툴바에 삽입해서 접근하기 쉽게 수정.",
          "CoreCode 기능 수정분 반영(10년 02월 23일 분)",

        ],
      },
      {
        date: "2010년 01월 28일",
        version: "4.7.2",
        items: [
          "CoreCodeServer에서 CCM Download시 Design View가 안 열리는 버그 수정.",
        ],
      },
      {
        date: "2010년 01월 26일",
        version: "4.7.1",
        items: [
          "Windows 7에 GUI 적용시키기 위해서 모델러용 JRE를 1.6.0 Update 18로 수정함.",
        ],
      },
      {
        date: "2010년 01월 11일",
        version: "4.7.0",
        items: [
          "Design View에 Design된 Node에 대한 자동정렬 기능 추가",
          "Design View의 Node에서 Required의 입력이 되지 않았을 경우에 Node의 이름의 스타일이 변하는 기능 추가.",
          "Required가 필요한 Node에 대한 가속성을 높인다.",
          "보기 메뉴에서 격자 보기를 설정하지 않고 모델링 했던 Node를 격자 보기가 설정되면 격자 설정에 맞게 Node의 위치를 이동시키는 기능 추가",
          "Adaptor 실행시 조건 실행 기능 추가",
          "Required 속성값이 존재하지 않으면 실행 안됨.",
          "컴포넌트가 존재하지 않으면 실행 안됨.",
          "Design View의  Node  이름을 예전에는  14자 이상일 때는  8자만 표시하고  ...으로 표시하던 것을 풀네임으로 표현하나 Component의 이름을 멀티라인의 하위라인으로 넘겨서 이름의 가속성을 높이게 수정.",
          "Design View의 Grid가 표시되었던 표시 되지 않았던 Node가 Grid 중심으로 이동되는 버그 수정.",
          "검색기능에서 Adaptor를 더블클릭했을 때 다른 Node에 Selection되어진 것이 안 없어지는 버그 수정.",
          "편집 문서가 없을 경우 몇몇 경우 편집메뉴의 편집기능을 disable 안되는 버그 수정.",
          "Design View의 영역이 넓었을 때, Component를 Drop하면 Drop한 위치가 아닌 다른 곳에 Drop되는 버그 수정.",
        ],
      },
      {
        date: "2010년 01월 04일",
        version: "4.6.1",
        items: [
          "경로에 공백이 있을 경우 다시 저장을 못하는 버그 수정",
        ],
      },
      { 
        date: "2009년 12월 29일",
        version: "4.6.0",
        items: [
          "검색기능 추가",
          "모델러에 열려있는 모든 문서의 키 또는 값의 내용을 검색하고 포커싱 해 주는 기능.",
          "Design View에서 Ctrl+F를 선택하거나 편집에서 검색 메뉴를 선택해서 검색 수행.",
          "CCM 저장시 모든 이진정보를 ASCII 방식으로 완전 수정함.",
          "DesignPanel",
          "EnumConverter",
          "NodeProperties",
          "CCM 저장된 파일은 항상 ReadOnly 형태로 저장되게 한다.",
          "NodeProperty에서 하위의 NodeProperty를 삭제해도 Property값이 존재하는 버그 수정.",
          "ComponentView에서 Component 선택을 단일만 되게 수정함.", 
        ],
      },
      {
        date: "2009년 12월 03일",
        version: "4.5.0",
        items: [
          "최근파일열기 기능 추가",
        ],
      },
      {
        date: "2009년 05월 21일",
        version: "4.4.4",
        items: [
          "DB JNDI 사용시 오류 수정함.",
        ],
      },
      {
        date: "2009년 04월 17일",
        version: "4.4.2",
        items: [
          "Socket Reader 5총 추가",
        ],
      },
      {
        date: "2009년 03월 31일",
        version: "4.4.1",
        items: [
          "Spring을 이용해서 DB Write시 NullPointException 발생 문제 수정",
        ],
      },
      {
        date: "2009년 02월 09일",
        version: "4.4",
        items: [
          "파일 정보 기능 추가",
          "도움말 추가",
          "서버 정보 관리시 바로 서버 접속 메뉴 연결 추가",
          "메시지 추가",
          "Benchmark 추가 팝업 화면에서 난수 발생에서 세번째 아이템인 Benchmark 타입을 난수 발생 타입으로 수정",
          "서버 접속 해제 시 대화상자 Modal화 시킴.",
          "어뎁터 등록 시 초기 언어 선택을 OS의 기본 언어 팩을 이용해서 언어를 선택되게 수정",
          "ApacheFTPConnection에서 lazyConnection 속성 추가",
          "ExceptionToOrderedMapConverter convertPayloadToString 속성 추가",
          "PreparedStatementReadRunner returnCount 속성 추가",
          "CoreCode 기능 수정분 반영(09년 02월 09일 분)",
        ],
      },
      {
        date: "2009년 01월 14일",
        version: "4.3.4",
        items: [
          "Swift관련 Component 추가",
          "Tibco 관련 Component 추가",
          "CoreCode변경에 따른 Component Property 수정",
          "CoreCode 기능 수정분 반영(09년 01월 14일 분)",
        ],
      },
      {
        date: "2009년 01월 07일",
        version: "4.3.3",
        items: [
          "XML형태의 CCM으로 저장되는 부분의 버그 수정",
          "NormalObject 입력기 추가",
          "list입력에서 list에 Object를 입력할 수 있도록 하는 기능으로 기존의 String만을 입력한 것을 수정",
          "CoreCode 변경에 따른 Component Property 수정",
        ],
      },
      {
        date: "2008년 12월 29일",
        version: "4.3.2",
        items: [
          "모델러 Component Icon 그룹을 선택 할 수 있게 수정",
          "옵션 메뉴를 일반과 어뎁터 탭으로 구분 수정",
          "Adaptor 테스트시 VM 옵션을 줄 수 있도록 수정",
        ],
      },
      {
        date: "2008년 12월 26일",
        version: "4.3.1",
        items: [
          "XML형태의 CCM으로 서버에 등록하게 수정",
          "서버의 다른 패키지의 동일 Adaptor 다운이 안되는 현상 수정",
        ],
      },
      {
        date: "2008년 12월 24일",
        version: "4.3",
        items: [
          "Spring을 이용해서 DB Write시 NullPointException 발생 문제 수정",
          "CoreCode 저장 형식을 이진파일에서 XML형태의 CCM으로 저장되게 기능 추가",
          "Open시 다이얼로그에서 문서 하나만 선택한 것을 복수 선택이 가능하게 수정함.",
          "CoreCode 기능 수정분 반영(12월 24일 자)",
        ],
      },
      {
        date: "2008년 12월 11일",
        version: "4.2.3",
        items: [
          "CoreCodeServer 접속 시 비밀번호 암호화 설정 기능 추가",
          "ResultSetToDelimited 기능 추가",
        ],
      },
      {
        date: "2008년 12월 09일",
        version: "4.2.1",
        items: [
          "도구 -> 옵션 기능 추가",
          "Benchmark에 batchSize 기능 추가",
          "Benchmark에 Random 발생시 발생값 type설정 기능 추가",
        ],
      },
      {
        date: "2008년 11월 04일",
        version: "4.1",
        items: [
          "Template Component 추가",
          "Template 입력기 추가",
          "Image 처리 Component 추가",
          "Transaction 처리 추가",
          "Adaptor runtime configuration 추가",
          "Melsec Component 추가",
          "Crypto 관련 Component 추가",
          "모델러 환경설정 파일 추가",
          "모델러 특수 환경에 Overlay Balloontip 기능 추가",
          "SCP 전용 Component 추가",
          "Copy시 XML 생성이 변경되는 버그 수정",
          "FTP 다량 전송시 버그 수정",
          "SQL, Script Editor 한글 안되는 버그 수정",
          "SQL, Script Editor 실행시 포커스 가지게 수정",
          "Property에서 동일한 OM키 사용할 수 있도록 문법 수정",
          "Props 파일 적용할 수 있도록 수정",
          "기타 버그 수정",
        ],
      },
      {
        date: "2008년 08월 07일",
        version: "4.0.2.1",
        items: [
          "Design View에 Component 삽입시 Property 창에 Property의 초기값이 설정 안되는 경우가 있었던 버그 수정",
          "File Write 관련 Rollover 기능 추가",
          "FTPWriteConnector 추가",
          "FTPWriteConnector Component 추가",
          "FTPReadConnector 수정",
          "FTPReadConnector Component 수정",
          "SocketReadConnector 수정",
          "SocketReadConnector Component 수정",
          "FileWriteConnector 수정",
          "FileWriteConnector Component 수정",
          "FileWriteExtensionConnector 수정",
          "FileWriteExtensionConnector Component 수정",
          "CoreCode 기능 수정분 반영(08월 07일 자)",
        ],
      },
      {
        date: "2008년 08월 01일",
        version: "4.0.2.0",
        items: [
          "Adaptor Test시 콘솔창에 다른 Adaptor의 log가 보이는 버그 수정",
          "모델러에서 Adaptor 닫을 때 실행중인 Test가 정지안되는 버그 수정",
          "모델러 전체를 닫을 때 수정 중인 Adaptor 저장여부를 묻는 다이얼로그 박스에서 취소 버튼과 메시지 안보이게 수정",
          "Adaptor Test시 CPU의 점유율를 많이 잡는 버그 수정",
          "Visual Debugger 실행시 실행하는 Adaptor 이름 보이게 수정",
          "Adaptor Test시 클래스 자동 로딩 되게 수정",
          "Script Editor 기능 추가",
          "SQL Editor 기능 추가",
          "DB Write시 PreparedStatement 이용되게 2종의 runner 추가",
          "CoreCode 기능 수정분 반영(08월 01일 자)",
        ],
      },
      {
        date: "2008년 07월 18일",
        version: "4.0.1.13",
        items: [
          "Visual Debugger 기능 추가",
          "Visual Debugger를 위한 Component 수정",
          "CoreCode 기능 수정분 반영(07월 18일 자)",
        ],
      },
      {
        date: "2008년 07월 14일",
        version: "4.0.1.12",
        items: [
          "Benchmark 기능의 다양성 향상",
          "날짜 발생기 추가",
          "숫자 가감발생기 추가",
          "숫자 랜덤발생기 추가",
          "일정 메시지 발생기 추가",
          "저장된 CCM문서를 읽어올 때 Component가 수정되었을 때 수정분이 반영 안되던 부분 수정",
          "FileWriterExtensionConnector에서 Combi로 선택하였을 경우 파일이름이 생성 안 되던 버그 수정",
          "DirectoryReadConnector에 postProcess가 적용안되던 부분 수정",
          "CCM 파일 불러오기 중 NPE(NullPointerException 발생분 수정",
          "CoreCode 기능 수정분 반영(07월 14일 자)",
        ],
      },
      {
        date: "2008년 07월 03일",
        version: "4.0.1.11",
        items: [
          "CryptoEncryptionConverter 추가",
          "CryptoDecryptionConverter 추가",
          "CryptoEncryptionConverter 콤포넌트 추가",
          "CryptoDecryptionConverter 콤포넌트 추가",
          "corecode.jar 및 corecode-spring.jar 수정",
          "내부 테스트 구동을 위한 CoreCode관련 lib patch",
          "Socket 관련 추가 기능 적용",
          "Observer 관련 추가 기능 적용",
          "CoreCode 기능 수정분 반영(07월 03일 자)",
        ],
      },
      {
        date: "2008년 07월 02일",
        version: "4.0.1.10",
        items: [
          "CoreCode 사용 lib 변경에 따른 startup.bat 파일 수정",
          "CoreCode 사용 msg 파일 수정",
          "CoreCode 사용 lib 변경에 따른 수정",
          "내부 테스트 구동을 위한 CoreCode관련 lib patch",
          "Socket 관련 추가 기능 적용",
          "Observer 관련 추가 기능 적용",
        ],
      },
      {
        date: "2008년 06월 09일",
        version: "4.0.1.9",
        items: [
          "내부 테스트 구동을 위한 CoreCode관련 lib patch",
        ],
      },
      {
        date: "2008년 06월 03일",
        version: "4.0.1.9",
        items: [
          "서버정보에서 취소버튼의 이름을 `취소`에서 `닫기`로 변경",
          "PackageView에서 Tree 버그 수정",
          "Adaptor등록시 Adaptor이름을 현재 편집 중인 Adaptor이름을 기본 설정이 되도록 수정",
          "파일열기 실패시 메뉴바와 툴바의 활성화 오류 수정",
          "메뉴바와 툴바에서 현재 구현되지 않은 기능 제거",
          "리슬 홈페이지 연결 기능 추가",
          "Modeler About 추가(이것은 디자인이 되서 수정이 가해져야 함)",
          "corecode의 변경된 기능 반영",
        ],  
      },
      {
        date: "2008년 05월 27일",
        version: "4.0.1.8",
        items: [
          "CoreCode의 변경된 기능 반영",
        ],
      },
      {
        date: "2008년 05월 20일",
        version: "4.0.1.7",
        items: [
          "CoreCode의 변경된 기능 반영",
        ],
      },
      {
        date: "2008년 05월 15일",
        version: "4.0.1.6",
        items: [
          "PagerWriteConnector 추가",
          "RF2000DP_PagerWriteConnector 추가",
          "RF2000DP_SMSWriteConnector 추가",
          "RF2000DP_PagerWriteConnector 콤포넌트 추가",
          "RF2000DP_SMSWriteConnector 콤포넌트 추가",
          "PagerWriteConnector는 삭제예정됨.",
        ],
      }, 
      {
        date: "2008년 05월 14일",
        version: "4.0.1.4",
        items: [
          "SplitOrderedMapProcessor 추가",
          "SplitOrderedMapProcessor 콤포넌트 추가",
          "다이얼로그 포커싱 Modal로 수정",
        ],
      },
      {
        date: "2008년 05월 13일",
        version: "4.0.1.3",
        items: [
          "PagerWriteConnector 추가",
          "단일 테스트 시 temp 폴더 밑으로 폴더가 삭제안되는 현상 수정",
          "connectionType에서 Spring과 auxiliary의 충돌현상 수정",
          "암호를 복사나 불러오기 하면 암호를 위한 * 기능이 없어지는 현상 수정",
          "콤포넌트의 노드설명을 붙였을 경우 property 로 붙는 현상 수정",
          "불러오기 후 콤포넌트 삽입시 Id 충돌나는 현상 수정",
        ],
      },
      {
        date: "2008년 05월 06일",
        version: "4.0.1.2",
        items: [
          "초기 버전 버그 수정",
        ],
      },
      {
        date: "2008년 04월 30일",
        version: "4.0.1.1",
        items: [
          "Releas",
        ],
      },
    ],
  },
  {
    product: "CoreCode Agent",
    histories: [
      {
        date: "2019년 05월 10일",
        version: "5.1.0",
        items: [
          "slf4j + log4j2 적용으로 Log관련 모듈 수정 및 변경",
          "install 프로그램 log4j2 적용으로 재정의",
          "CoreCodeEngine 기능 수정분 반영(Version 5.2.0)",
        ],
      },
      {
        date: "2019년 02월 15일",
        version: "5.0.0",
        items: [
          "OpenJDK 8 버전 적용",
        ],
      },
      {
        date: "2018년 04월 05일",
        version: "4.7.0",
        items: [
          "Windows 10 폰트 고정",
        ],
      },
      {
        date: "2017년 01월 15일",
        version: "4.6.0",
        items: [
          "JDK 7 반영",
        ],
      },
      {
        date: "2014년 02월 14일",
        version: "4.3.5",
        items: [
          "로그 자동 백업시간 단축을 위한 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.9.0)",
        ],
      },
      {
        date: "2013년 06월 30일",
        version: "4.3.4",
        items: [
          "설치시 암호규칙이 GS인증 규칙에 맞게 입력되도록 수정",
        ],
      },
      {
        date: "2013년 03월 20일",
        version: "4.3.3",
        items: [
          "GS인증을 위한 입력항목 제한 기능 추가",
          "CoreCode Engine 기능 수정분 반영(Version 4.5.4)",
        ],
      },
      {
        date: "2019년 02월 15일",
        version: "5.0.0",
        items: [
          "OpenJDK 8 버전 적용",
          "SpringFramework 4.x 버전 적용",
          "Quartz 2 적용",
          "CoreCode Engine 기능 수정분 반영(Version 5.0.1)",
        ],
      },
      {
        date: "2018년 04월 05일",
        version: "4.7.0",
        items: [
          "Windows 10 폰트 고정",
          "로그 한글 고정출력 부분 수정",
          "설치 시 호환성보기 설정 없이 설치 가능하게 재작성",
          "Linux 설치용 작성",
          "CoreCode Engine 기능 수정분 반영(Version 4.19.2)",
        ],
      },
      {
        date: "2017년 01월 15일",
        version: "4.6.0",
        items: [
          "JDK 7 반영",
          "Linux용 Agent Processor 관리 매니저 기능 추가",
          "CoreCode Engine 기능 수정분 반영(Version 4.16.0)",
        ],
      },
      {
        date: "2014년 02월 14일",
        version: "4.3.5",
        items: [
          "로그 자동 백업시간 단축을 위한 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.9.0)",
        ],
      },
      {
        date: "2013년 06월 30일",
        version: "4.3.4",
        items: [
          "설치시 암호규칙이 GS인증 규칙에 맞게 입력되도록 수정",
        ],
      },
      {
        date: "2013년 03월 20일",
        version: "4.3.3",
        items: [
          "GS인증을 위한 입력항목 제한 기능 추가",
          "CoreCode Engine 기능 수정분 반영(Version 4.5.4)",
        ],
      },
      {
        date: "2013년 01월 31일",
        version: "4.3.2",
        items: [
          "Adaptor 통계조회 오류 수정",
          "다중 패키지로 등록된 Adaptor의 내용보기 오류 수정",
          "JVM 옵션을 주지 않았을 경우의 오류 수정",
          "error.log와 sysout.log를 볼 수 있도록 파일 경로를 수정하고 조회될 수 있도록 기능 추가",
          "하드디스크의 용량을 감안하여 오래된 로그부터 자동삭제하는 자동 로그 삭제 기능 추가",
          "CoreCode Engine 기능 수정분 반영(Version 4.5.3)",
        ],
      },
      {
        date: "2012년 07월 31일",
        version: "4.3.1",
        items: [
          "Agent의 각종 Log 조회시 Line feed 기능 추가",
          "CoreCode Engine 기능 수정분 반영(Version 4.5.1)",
          "Java 1.6.0 update 32 적용",
        ],
      },
      {
        date: "2012년 06월 07일",
        version: "4.3.0",
        items: [
          "Agent에 등록된 Adaptor의 내용 조회 기능 추가",
          "Adaptor 등록시 Script에 XML내용을 추가할 때 CDATA 부분에서 발생되는 오류 수정",
          "Obfuscation 적용",
          "CoreCode Engine 기능 수정분 반영(Version 4.4.0)",
        ],
      },
      {
        date: "2011년 12월 02일",
        version: "4.2.1",
        items: [
          "Agent에서 운영 중인 Adaptor의 통계정보 기능 추가",
          "기타 버그 수정",
          "CoreCode Engine 기능 수정분 반영(Version 4.3.0)",
        ],
      },
      {
        date: "2010년 09월 29일",
        version: "4.2.0",
        items: [
          "멀티 운영 기능 추가",
        ],
      },
      {
        date: "2010년 03월 11일",
        version: "4.1.0",
        items: [
          "서버 로그 레벨 변경 기능 추가",
          "등록 라이브러리 정보 확인 기능 추가",
          "로그 파일 다운로드 기능에 Stream기능 추가",
          "Service Log중 맨 뒤에서 정한 크기 만큼만 가져오도록 기능 추가",
          "Adaptor내부의 Node State을 가져올 수 있도록 기능 추가",
          "CoreCode Engine 기능 수정분 반영(Version 4.2.7)",
        ],
      },
      {
        date: "2009년 05월 21일",
        version: "4.0.12",
        items: [
          "날짜별 Log rolling 오류 수정",
        ],
      },
      {
        date: "2009년 04월 17일",
        version: "4.0.11",
        items: [
          "Socket Reader 5총 추가",
          "CoreCode 기능 수정분 반영(Version 4.2.7)",
          "DelimitedByteArrayReader",
          "DelimitedStringReader",
          "FixedWidthByteArrayReader",
          "FixedWidthStringReader",
          "LineStringReader",
        ],
      },
      {
        date: "2009년 03월 31일",
        version: "4.0.10",
        items: [
          "로그이름에 Dot(.)이 들어가면 리스트 추출에 실패하는 버그 수정",
          "Spring을 이용해서 DB Write시 NullPointException 발생 문제 수정",
        ],
      },
      {
        date: "2009년 01월 22일",
        version: "4.0.9",
        items: [
          "설치시 cca.home 경로에 대한 인식에 대한 버그 수정",
          "propsFile 설정에 대한 경로 인식에 대한 버그 수정",
          "corecode에서 사용되는 msg 수정",
        ],
      },
      {
        date: "2009년 01월 15일",
        version: "4.0.8",
        items: [
          "library 업로드시 자동 Restart를 제거",
          "Restart 기능 추가(restartServer 메소드 추가)",
        ],
      },
      {
        date: "2008년 11월 05일",
        version: "4.0.6",
        items: [
          "Windows 7에 GUI 적용시키기 위해서 모델러용 JRE를 1.6.0 Update 18로 수정함.",
          "AutoRunConfiguration 수행시 Adaptor 중지가 되지 않도록 수정",
        ],
      },
      {
        date: "2008년 08월 07일",
        version: "4.0.5",
        items: [
          "FileWrite Rollover 기능 추가",
          "CoreCode 기능 수정분 반영(08년 08월 07일 분)",
        ],
      },
      {
        date: "2008년 08월 01일",
        version: "4.0.4",
        items: [
          "CoreCode 기능 수정분 반영(08년 8월 01일분)",
        ],
      },
      {
        date: "2008년 07월 14일",
        version: "4.0.3",
        items: [
          "CoreCode 기능 수정분 반영(08년 7월 14일분)",
        ],
      },
      {
        date: "2008년 07월 04일",
        version: "4.0.1",
        items: [
          "Package하위에 등록된 Adaptor를 하나만 가져오는 버그 수정",
        ],
      },
      {
        date: "2008년 06월 24일",
        version: "4.0.0",
        items: [
          "최초 Release",
          "Adaptor 등록 기능",
          "Adaptor 삭제 기능",
          "Adaptor 정지 기능",
          "Adaptor 구동 기능",
          "Adaptor AutoStart 기능",
          "Agent Server 구동 기능",
          "Agent Server 정기 기능",
          "Agent Server의 상태 조회 기능",
          "등록된 Service들의 상태 조회 기능",
          "Log4j에 log 등록 기능",
          "Log4j에 log 삭제 기능",
          "log4j에 등록되어져 있는 log 개별 조회 기능",
          "log4j에 등록되어져 있는 log 전체 조회 기능",
          "log4j의 log 설정값 수정 기능",
          "log4j에 의해서 생성된 log 파일 리스트 조회 기능",
          "log4j에 의해서 생성된 log 파일전송 기능",
          "library 등록 기능",
          "log4j 설정 수정에 따른 log4j Auto deploy 기능",
          "등록 library auto deploy 기능(전체 서버 재기동 방식)",
          "Tray 기능",
          "Tray 종료시 암호 확인 기능",
          "Tray  종료 암호 설정 기능",
        ],
      },
      {
        date: "2008년 07월 04일",
        version: "4.0.1",
        items: [
          "Package하위에 등록된 Adaptor를 하나만 가져오는 버그 수정",
          "CoreCode가 필요로 하는 lib 추가",
          "lib 폴더 하위에 디렉토리에 있는 lib도 같이 로딩되게 수정",
        ],
      },
      {
        date: "2008년 06월 24일", 
        version: "4.0.0",
        items: [
          "최초 Release",
          "Adaptor 등록 기능",
          "Adaptor 삭제 기능",
          "Adaptor 정지 기능",
          "Adaptor 구동 기능",
          "Adaptor AutoStart 기능",
          "Agent Server 구동 기능",
          "Agent Server 정기 기능",
          "Agent Server의 상태 조회 기능",
          "등록된 Service들의 상태 조회 기능",
          "Log4j에 log 등록 기능",
          "Log4j에 log 삭제 기능",
          "log4j에 등록되어져 있는 log 개별 조회 기능",
          "log4j에 등록되어져 있는 log 전체 조회 기능",
          "log4j의 log 설정값 수정 기능",
          "log4j에 의해서 생성된 log 파일 리스트 조회 기능",
          "log4j에 의해서 생성된 log 파일전송 기능",
          "library 등록 기능",
          "log4j 설정 수정에 따른 log4j Auto deploy 기능",
          "등록 library auto deploy 기능(전체 서버 재기동 방식)",
          "Tray 기능",
          "Tray 종료시 암호 확인 기능",
          "Tray  종료 암호 설정 기능",
        ],
      },
    ],
  },
  {
    product: "CoreCode TagRegister",
    histories: [
      {
        date: "2020-06-11",
        version: "2.3.1",
        items: [
          "최초 설비 등록 시 발생되는 Bug Fix",
        ],
      },
      {
        date: "2019-06-02",
        version: "2.0.0.0",
        items: [
          "OpenJDK 1.8 적용",
        ],
      },
      {
        date: "2019-05-22",
        version: "1.7.0.0",
        items: [
          "Cache 관련 기능 추가",
        ],
      },
      {
        date: "2019-05-15",
        version: "1.6.4.0",
        items: [
          "FUJI D3000Win 입력방식 기능 추가",
        ],
      },
      {
        date: "2019-04-02",
        version: "1.6.3.0",
        items: [
          "OPC, Rockwell 설비에서 대소문자 구별하도록 기능 수정",
          "설비 추가시 Cache 용량 설정할 수 있도록 기능 추가",  
        ],
      },
      {
        date: "2019-03-20",
        version: "1.6.2.0",
        items: [
          "DisplayAddress 등록시 DataType이 String일 경우 길이는 빼고 넣도록 수정",
        ],
      },
      {
        date: "2018-09-04",
        version: "1.6.1.0",
        items: [
          "Cache 관리 기능 추가",
        ],
      },
      {
        date: "2018-02-09",
        version: "1.6.0.0",
        items: [
          "TOYOPUC PLC 설비 추가",
          "Tag 추가시 Address에 Dash(-) 입력 되는 경우 추가",
        ],
      },
      {
        date: "2018-01-11",
        version: "1.5.1.0",
        items: [
          "설비 이름에 화이트 스페이스 들어가도 EEquipType에서 처리할 수 있도록 수정",
          "FANUC FOCAS 설비 추가",
        ],
      },
      {
        date: "2018-01-08",
        version: "1.5.0.0",
        items: [
          "Oracle DB에서 사용할 수 있도록 기능 추가",
        ],
      },
      {
        date: "2017-12-20",
        version: "1.4.1.1",
        items: [
          "GLOFA, XGT 설비에서 String 타입 입력시 저장 Address 버그 부분을 수정",
        ],
      },
      {
        date: "2017-12-20",
        version: "1.4.1.0",
        items: [
          "임시용 모든 설비를 추가할 수 있도록 설정한 ANY 설비 추가",
        ],
      },
      {
        date: "2017-12-18",
        version: "1.4.0.0",
        items: [
          "LS산전 XGT PLC 설비 추가",
          "GLOFA, XGT 설비에서 boolean 선택시 B,W,D에 따라 비트 선택 범위에 대한 문법 검증 기능 추가",
        ],
      },
      {
        date: "2017-09-11",
        version: "1.3.2.0",
        items: [
          "CoreCodeServer의 CacheManager와 연동으로 설비에 대한 연동 기능 추가",
        ],
      },
      {
        date: "2017-09-08",
        version: "1.3.1.0",
        items: [
          "메뉴바의 활성화, 비활성화 기능 수정",
        ],
      },
      {
        date: "2017-08-29",
        version: "1.2.1.0",
        items: [
          "Rockwell PLC 수정",
        ],
      },
      {
        date: "2017-08-22",
        version: "1.2.0.0",
        items: [
          "Rockwell과 Fuji PLC 추가",
        ],
      },
      {
        date: "2015-10-02",
        version: "1.1.0.0",
        items: [
          "메뉴바에 보기 기능 추가",
          "OMRON E 영역에 Boolean 값을 허용",
          "BCD16, BCD32 Type 추가",
          "옵션에서 서버 접속자 설정 추가",
          "Tag 속성에서 Access 만 변경시 확인 및 적용 버튼 활성화가 안 되는 부분 수정",
          "Import시 성공과 실패의 개수를 출력하게 수정",
          "Tag 수정시 확인 버튼 버그 수정",
          "Glofa에서 B, W 형식에 String 타입 입력시 저장 Address 버그 부분을 수정",
          "Word 타입의 Device인 Modbus, MelsecQ, Omron 에서 String 타입으로 주소 입력시 짝수만 입력될 수 있게 수정",
          "WORD Type의 Device인 Modbus, MelsecQ, Omron 에서 String 타입으로 주소 입력시 짝수만 입력될 수 있게 수정",
          "BIT Type의 Memory Device Type에서는 Boolean만 선택되게 수정",
          "WORD Type의 Memory Device Type에서 Bit 입력시 . 이후 0~15만 입력될 수 있게 수정",
          "BYTE Type의 Memory Device Type에서 Bit 입력시 . 이후 0~7만 입력될 수 있게 수정",
          "Address 검증에 따른 기능 개선",
          "태그 입력 및 수정시 대화상자의 버그 부분을 수정",
        ],
      },
      {
        date: "2015-01-26",
        version: "1.0.0.0",
        items: [
          "최초 버전 Release",
        ],
      },
    ],
  },
];

const History = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

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
            onClick={() => setExpandedProduct(expandedProduct === product.product ? null : product.product)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{product.product}</h3>
                <p className="text-gray-600">총 {product.histories.length}개의 업데이트</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedProduct === product.product ? 180 : 0 }}
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
              height: expandedProduct === product.product ? "auto" : 0,
              opacity: expandedProduct === product.product ? 1 : 0
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
                      <span className="text-lg font-semibold text-gray-800">{history.date}</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        v{history.version}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {history.items.length}개 업데이트
                    </div>
                  </div>

                  {/* Update Items */}
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
          {expandedProduct !== product.product && (
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
