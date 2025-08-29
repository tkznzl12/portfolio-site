export const caseStudiesData = [
  {
    title: "스크롤 게이지 인터랙션 구현",
    techStack: ["React", "TypeScript", "CSS"],
    situation: `프로젝트에서 스크롤 위치에 따라 연혁 진행 상황을 직관적으로 보여주는 게이지 UI가 필요했습니다.
하지만 브라우저마다 화면 높이가 달라 고정된 스크롤 기준을 잡기 어려웠고, 단순 색상 변화만으로는 자연스러운 효과를 줄 수 없었습니다.`,
    task: `기기 크기에 상관없이 동일하게 동작하는 스크롤 게이지를 구현하고, 위/아래 스크롤 모두 반영되도록 하며, 연혁 블록 활성화 여부를 동적으로 표시해야 했습니다.`,
    thoughtProcess: [
      "스크롤 포인트를 절대값으로 잡게되면 화면마다 폭이 다르니 때문에 어떤 기기에서든 자연스러운 구현이 안될것이라는 생각이 들었습니다.",
      "단순 색상 변경만으로는 위/아래 스크롤 시 비활성화가 구현되지 않으므로, refNum과 index를 활용한 동적 활성화가 필요하다고 생각했습니다.",
      "진행률을 %로 계산하면 화면 크기, 객체 내용의 크기와 상관없이 자연스러운 애니메이션이 가능하다고 생각이 들었습니다.",
    ],
    action: [
      "화면 중앙(window.innerHeight / 2)을 기준점으로 설정하여 기기 해상도와 관계없이 동일한 트리거 적용",
      "각 블록의 getBoundingClientRect().top 값을 기준으로 현재 스크롤 위치(currentScroll) 계산",
      "progressValue = (currentScroll / progressHeight.clientHeight) * 100로 % 계산 후 span 높이에 반영",
      "배열 index와 refNum을 비교해 블록 활성화/비활성화 제어",
    ],
    result: `그 결과 기기 해상도와 상관없이 자연스럽게 게이지가 차오르고 줄어드는 인터랙션을 완성했습니다.`,
    media: "/work/scroll.mp4",
  },
];
