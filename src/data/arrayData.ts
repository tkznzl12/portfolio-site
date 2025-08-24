//경력
export const WorkInfo = [
  {
    companyName: "신성ICT",
    period: "2023.12 - 2024.10",
    career: "9개월",
    position: "개발팀 사원",
    mainJob: [
      {
        projectName: "외주 사이트 프론트 작업",
        skill:
          "TypeScript / React / Next.js / CSS / styled-components / Chart.js / Swiper / Nivo",
        job: [
          {
            title: "원모바일",
            detail: [
              "메인 페이지 퍼블리싱 및 UI 구성 (반응형 지원)",
              "모달 컴포넌트 제작 및 사용자 인터랙션 개선",
              "웰컴페이먼츠 연동을 통한 결제 기능 구현",
              "휴대폰 상품 소개 및 구매 페이지 제작으로 사용자 경험 향상",
            ],
          },
          {
            title: "에이트리 인베스트먼트, 루카스 엔터테인먼트",
            detail: [
              "사이트 전체 퍼블리싱 및 프론트엔드 개발 (Next.js 기반, 2주 내 완료)",
            ],
          },
          {
            title: "더마당",
            detail: [
              "콘서트 예매 결제 페이지 개발 (Next.js 기반, 기여도 80%)",
              "PG 연동을 통한 안정적인 결제 플로우 구축",
            ],
          },
          {
            title: "신성ICT 홈페이지",
            detail: [
              "연도별 인터랙션 컴포넌트 개발",
              "웹사이트 초기 레이아웃 설계 및 구현",
            ],
          },
        ],
      },
    ],
  },
  {
    companyName: "SAMLAB",
    period: "2021.04 - 2023.06",
    career: "2년 3개월",
    position: "개발팀 사원",
    mainJob: [
      {
        projectName: "공간샘스터디카페(렛미업) 유지보수 및 프론트 개발",
        skill: "JavaScript / React / CSS / Cuba Template / Electron",
        job: [
          {
            title: "렛미업 백오피스 유지보수 및 개발",
            detail: [
              "관리자·고객 페이지 신규 기능 개발 및 유지보수",
              "채널톡 연동으로 고객 상담 자동화 지원",
              "세미나실 예약 페이지 개발 (UI 개선)",
              "Hecto·TossPayments 연동을 통한 온라인 결제 기능 구현",
              "객체 변경·이동이 가능한 맵 뷰어 제작",
              "React 기반 데이터 그래프 출력 기능 구현",
              "AJAX 기반 API 연동을 통한 CRUD 프론트 개발",
            ],
          },
          {
            title: "렛미업 키오스크 유지보수 및 개발",
            detail: [
              "세미나실 예약 페이지 개발",
              "DaouVP, KIS, KCP 연동을 통한 결제 플로우 개선",
              "키오스크 메인 UI 및 사용자 흐름 개편",
              "전국 약 90개 지점의 키오스크 유지보수 담당",
            ],
          },
        ],
      },
      {
        projectName: "클래스업(학원관리) 프론트 개발",
        skill: "JavaScript / TypeScript / React / Next.js / CSS",
        job: [
          {
            title: "클래스업 백오피스 개발",
            detail: [
              "메인 랜딩 페이지 제작",
              "샘포인트몰 페이지 제작",
              "관리자 페이지 내 다양한 기능 구현 및 유지보수",
            ],
          },
        ],
      },
      {
        projectName: "샘랩 랜딩페이지 작업",
        skill: "JavaScript / React / Gatsby / CSS / Strapi",
        job: [
          {
            title: "샘랩 웹사이트 랜딩페이지 제작 및 유지보수",
            detail: [
              "공간디자인, SpaceBusiness, Newsroom 페이지 제작",
              "SEO(검색 엔진 최적화) 작업을 통한 검색 노출 개선",
            ],
          },
        ],
      },
    ],
  },
];

//프로젝트
export const ProjectData = [
  {
    projectName: "라온나드리",
    period: "2021.01 - 2021.02",
    explanation:
      "대한민국의 여행지 소개 및 코스만들기를 통하여 효율적인 여행계획을 짜는 웹사이트",
    part: "프론트 작업 및 로고 디자인 작업",
    skill: "HTML, CSS, JSP, JavaScript, Thymeleaf",
    work: [
      {
        title: "관광지 메인 작업",
        workExplan: [
          "공공데이터API(국문관광지정보)로 각 지역별로 화면에 출력되도록 구현",
        ],
      },
      {
        title: "관광지 디테일 작업",
        workExplan: [
          "공공데이터API(국문관광지정보)의 관광지 정보를 불러와서 사진과 \n해당 관광지의 내용이 디자인에 맞게 출력되도록 구현",
        ],
      },
      {
        title: "관광지 리스트 작업",
        workExplan: [
          "지역별 검색시 우측에 각 지역을 선택할 수 있는 component를 구현",
        ],
      },
    ],
    image: [
      "https://github.com/tkznzl12/main_portfolio/assets/74891586/4a5359d3-7f6f-4a80-9d6d-6867f2347eec",
      "https://github.com/tkznzl12/main_portfolio/assets/74891586/bcdc6b73-2058-4e15-a139-c0118c3887ba",
    ],
  },
  {
    projectName: "라온홈스테이",
    period: "2020.01 - 2020.12",
    explanation: "대한민국의 홈스테이 웹사이트",
    part: "프론트 작업 및 로고 디자인 작업",
    skill: "JavaScript, React, Material-UI",
    work: [
      {
        title: "메인페이지 작업",
        workExplan: ["API를 통해 불러온 데이터를 디자인에 맞게 출력하는 작업"],
      },
    ],
    image: [
      "https://github.com/tkznzl12/main_portfolio/assets/74891586/0aa4b5f7-ce1e-438f-88dd-cc0f129e0fa6",
    ],
  },
  {
    projectName: "멘도롱 소랑",
    period: "2020.11 - 2020.12",
    explanation: "제주도 여행지 소개와 일정을 계획할 수 있는 웹사이트",
    part: "프론트 작업 및 로고, 사이트 디자인 작업",
    skill: "Java, JavaScript, HTML, CSS, Bootstrap, jQuery, Material-UI",
    work: [
      {
        title: "메인페이지 작업",
        workExplan: [
          "javascript와 jquery를 이용하여 header구현",
          "제주도 지도를 출력하여 hover시 해당 시/읍이 강조되는 기능구현",
          "게시물 출력 구현",
        ],
      },
      {
        title: "공유게시판 작업",
        workExplan: ["디자인된 것을 토대로 정보를 불러와서 구현"],
      },
    ],
    image: [
      "https://github.com/tkznzl12/main_portfolio/assets/74891586/8cf38ae1-e7bd-4b6c-adcc-92d5868facd1",
      "https://github.com/tkznzl12/main_portfolio/assets/74891586/6c42f151-692f-49da-a46d-96243f87867b",
    ],
  },
];

export const DevSkill = [
  "React",
  "Next.js",
  "Javascript",
  "HTML5",
  "TypeScript",
  "CSS",
  "Styled-component",
  "PhotoShop",
  "figma",
  "JAVA",
  "JSP",
  "electron",
  "Git",
  "slack",
];
