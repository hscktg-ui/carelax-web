/** Brand content for the editorial Carelax homepage. */
export const SITE = {
  nameKo: "케어렉스",
  nameEn: "Carelax",
  tagline: "헬스케어 대중화",
  thesis: "고품질 헬스케어를 합리적으로 — 누구에게나 회복이 닿게.",
  positioning: "Accessible Quiet Recovery",
  description: "케어렉스는 고품질 헬스케어를 합리적으로 제안하며, 누구에게나 회복이 닿는 일상을 만듭니다.",
  smartStoreUrl: "https://smartstore.naver.com/carelax",
  blogUrl: "https://blog.naver.com/carelax0606",
  phones: { purchase: "1588-1070", service: "1877-1244" },
  warrantyMonths: 61,
  warrantyLabel: "61개월 무상 A/S",
  hours: "평일 AM 09:00 ~ PM 05:00 (토·일·공휴일 휴무)",
  company: {
    legalName: "주식회사 케어렉스",
    ceo: "노재학",
    address: "경기도 하남시 조정대로 150 (덕풍동) 아이테코 그린존 923호 (12930)",
    businessNo: "195-87-00745",
    mailOrderNo: "제 2020-경기하남-0800",
    privacyOfficer: "매니저 노성진",
    fax: "02-2144-5657",
  },
} as const;

export const NAV = [
  { href: "#lead", label: "리드" },
  { href: "#method", label: "방식" },
  { href: "#now", label: "지금" },
  { href: "#history", label: "히스토리" },
  { href: "#heritage", label: "헤리티지" },
  { href: "#trust", label: "신뢰" },
] as const;

export const COMPANY = {
  label: "The Lead",
  headline: "헬스케어의 기준을 낮추지 않고,\n접근의 문턱을 낮춥니다.",
  intro: "파나소닉 한국 총판에서 10여 년을 보낸 노재학 대표는 2006년 이노코프를 설립했습니다. 후지의료기·다이와를 국내에 공급하며 쌓은 경험을 바탕으로 2015년 케어렉스를 출범했습니다. 좋은 회복은 일부의 사치가 아니라, 일상 가까이에 있어야 한다고 믿습니다.",
  chapters: [
    { title: "누구에게나 건강을 선물합니다.", body: "과시를 위한 기능보다 실제로 오래 쓰이는 케어에 집중합니다. 불필요한 요소를 덜고 튼튼하고 합리적인 소재를 선택해, 고품질 헬스케어가 더 많은 집과 공간에 닿도록 합니다." },
    { title: "짧은 회복에도, 미세하게 응답합니다.", body: "마사지볼은 손가락 지압처럼 몸의 긴장을 섬세하게 다룹니다. 팔부터 종아리·발가락·뒤꿈치까지 이어지는 토털 풋케어로, 바쁜 하루의 짧은 틈에도 회복의 리듬을 만듭니다." },
    { title: "몸과 공간을 함께 이해합니다.", body: "회복은 거실과 방, 그리고 시설의 일상 안에서 일어납니다. 케어렉스는 주거와 주간보호센터 같은 공간의 스케일을 고려하고, 61개월 무상 A/S로 오래 남는 신뢰를 약속합니다." },
  ],
} as const;

export const DEMOCRATIZATION = {
  quote: "고품질 헬스케어 기기를 합리적인 가격에 공급하는 전략으로 헬스케어 대중화를 앞당기는 것입니다.",
  source: "이데일리",
  sourceUrl: "https://www.edaily.co.kr/News/Read?newsId=01272646615893496&mediaCodeNo=257",
  sourceDate: "2017.04.06",
} as const;

export const METHODS = [
  { code: "01 / Ball Care", title: "안마볼 케어", body: "내부 안마볼이 두드리고 주무르며, 짧은 휴식에도 이완의 리듬을 만듭니다. 강한 자극보다 몸이 편안하게 받아들이는 감도를 찾습니다." },
  { code: "02 / Soft Mode", title: "소프트 모드", body: "강함을 겨루지 않습니다. 오래 앉아도 부담이 적고, 가족이 함께 사용할 수 있는 부드러운 케어 경험을 기준으로 생각합니다." },
  { code: "03 / Space Fit", title: "스페이스 핏", body: "회복은 특별한 방에만 머물지 않습니다. 국내 거실과 원룸, 시설 공간의 흐름에 맞춰 몸과 공간이 함께 편안한 선택을 제안합니다." },
] as const;

export const NOW = {
  label: "Now",
  title: "구매는 하나의,\n분명한 경로로.",
  body: "현재의 케어렉스는 브랜드 이야기와 고객 지원에 집중합니다. 제품 확인과 구매는 공식 네이버 스마트스토어에서 안전하고 간결하게 이어집니다.",
  pills: ["61개월 무상 A/S", "공식 스마트스토어", "전문 고객 지원"],
} as const;

export const HISTORY_INTRO = "단종된 라인업은 우리의 히스토리입니다. (현재 판매하지 않습니다.)";

export type HistoryItem = { id: string; nameKo: string; nameEn: string; code: string; era: string; summary: string; image: string };
export const HISTORY: HistoryItem[] = [
  { id: "honors", nameKo: "아너스", nameEn: "Honors", code: "CLX 990", era: "Archive / 3D", summary: "입체 안마 모듈로 몸의 굴곡을 따라가던 플래그십 기록입니다.", image: "/images/product-honors.jpg" },
  { id: "salute", nameKo: "샬루트", nameEn: "Salute", code: "CLX 770", era: "Archive / Soft", summary: "온 가족이 부담 없이 앉을 수 있는 부드러운 안마감을 제안했습니다.", image: "/images/product-salute.jpg" },
  { id: "rex", nameKo: "렉스", nameEn: "Rex", code: "R21", era: "Legacy / Smart", summary: "조그셔틀 조작으로 일상에 스며드는 스마트 휴식을 설계했습니다.", image: "/images/product-rex.jpg" },
  { id: "오로라", nameKo: "오로라", nameEn: "Aurora", code: "CLX 570", era: "Legacy / Balance", summary: "필요한 케어 기능과 합리적인 선택의 균형을 담은 모델입니다.", image: "/images/product-aurora.jpg" },
  { id: "creampink", nameKo: "크림핑크", nameEn: "Cream Pink", code: "CLX 650", era: "Archive / Interior", summary: "가구처럼 어울리는 색감과 안마 경험을 함께 고민했습니다.", image: "/images/product-creampink.jpg" },
  { id: "avantgarde", nameKo: "아방가르", nameEn: "Avant-garde", code: "CLX 157", era: "Legacy / Compact", summary: "작은 공간에서도 본격적인 케어를 경험하도록 만든 컴팩트 기록입니다.", image: "/images/product-avantgarde.jpg" },
  { id: "compact", nameKo: "컴팩트", nameEn: "Compact", code: "S20", era: "Archive / Portable", summary: "가벼운 풋프린트로 이동과 배치의 자유를 생각한 회복의 기록입니다.", image: "/images/product-compact.jpg" },
  { id: "phoenix", nameKo: "피닉스", nameEn: "Phoenix", code: "CLX 500T", era: "Legacy / Business", summary: "매장과 업소 환경에서의 내구성과 운영 경험을 고민한 전용 라인입니다.", image: "/images/product-phoenix.jpg" },
];

export const HERITAGE = [
  { year: "2006", title: "이노코프 설립", body: "파나소닉 한국 총판 경험을 바탕으로 이노코프를 설립했습니다." },
  { year: "2007", title: "이노코프 출범", body: "국내 안마의자 1세대로 브랜드의 여정을 시작했습니다." },
  { year: "2007–2016", title: "글로벌 공급 경험", body: "후지의료기, 다이와 등 다양한 브랜드를 국내에 공급하며 기술을 쌓았습니다." },
  { year: "2016", title: "케어렉스 독자 브랜드", body: "독자적인 안마의자를 통해 회복의 접근성을 넓히기 시작했습니다." },
  { year: "Now", title: "오래 가는 케어", body: "61개월 무상 A/S와 고객 지원으로 신뢰의 시간을 이어갑니다." },
] as const;

export const CEO = {
  name: "노재학", title: "대표이사",
  quote: "안마의자의 핵심은 쌓인 피로를 짧은 시간 동안 회복할 수 있도록 고객의 신체를 두드리고 주무르고 늘리는 데 있습니다. 최상의 컨디션으로 회복하기 위해 고객별 상태에 맞춰 이런 기능을 미세하게 조정하며 제공하는 것이 필수입니다.",
  source: "패션비즈", sourceUrl: "https://fashionbiz.co.kr/article/198836", sourceDate: "2023.03.09",
} as const;

export const TRUST = [
  { title: "공식 구매", body: "구매와 제품 정보는 네이버 스마트스토어 케어렉스에서 확인할 수 있습니다." },
  { title: "고객 상담", body: `구매 문의 ${SITE.phones.purchase} · 평일 운영 시간에 안내합니다.` },
  { title: "오래 가는 지원", body: `A/S ${SITE.phones.service} · ${SITE.warrantyLabel}로 신뢰를 이어갑니다.` },
  { title: "브랜드 소식", body: "주간보호센터·시설 현장과 브랜드의 이야기는 공식 블로그에 기록합니다." },
] as const;