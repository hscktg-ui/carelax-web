/** 사이트 공통 설정 — 구매는 네이버 스마트스토어(carelax)만 사용 */
export const SITE = {
  nameKo: "케어렉스",
  nameEn: "Carelax",
  tagline: "짧은 회복, 긴 신뢰",
  positioning: "Accessible Quiet Recovery",
  description:
    "케어렉스는 안마볼 케어로 일상의 피로를 짧게, 깊게 풀어내는 안마의자·리클라이너 브랜드입니다.",
  smartStoreUrl: "https://smartstore.naver.com/carelax",
  flagshipProductUrl:
    "https://smartstore.naver.com/carelax/products/4973358450",
  officialMallUrl: "https://www.carelaxmall.com/",
  phones: {
    purchase: "1588-1070",
    service: "1877-1244",
  },
  warrantyMonths: 61,
  warrantyLabel: "61개월 무상 A/S",
  hours: "평일 AM 09:00 ~ PM 05:00 (토·일·공휴일 휴무)",
  company: {
    legalName: "주식회사 케어렉스",
    ceo: "노재학",
    address:
      "경기도 하남시 조정대로 150 (덕풍동) 아이테코 그린존 923호 (12930)",
    businessNo: "195-87-00745",
    mailOrderNo: "제 2020-경기하남-0800",
    privacyOfficer: "매니저 노성진",
    fax: "02-2144-5657",
  },
} as const;


/** FashionBiz 2023.03.09 https://fashionbiz.co.kr/article/198836 */

/** Bodyfriend company page IA reference — Carelax chapters */
export const COMPANY = {
  label: "회사소개",
  headline:
    "짧은 회복을 설계하는 안마의자 브랜드,\n케어렉스입니다.",
  intro:
    "2007년 이노코프로 출범한 이래, 후지의료기·다이와 등 글로벌 브랜드를 국내에 공급하며 안마의자 1세대의 실력을 쌓아왔습니다. 2016년 케어렉스로 사명을 변경하고 독자 브랜드를 세웠으며, 상조·데이케어 등 특화 시장에서 쌓은 고객 이해를 바탕으로 모든 가정에 짧은 회복을 제공합니다.",
  chapters: [
    {
      title: "‘짧은 회복, 긴 신뢰’를 위해 기본기에 집중합니다.",
      body: "안마의자의 핵심은 내부 볼로 신체를 두드리고 주무르고 늘려 짧은 시간 안에 피로를 푸는 데 있습니다. 케어렉스는 안마의자 전용 모터와 특화 라인 생산으로 미세 조절이 가능한 케어를 만들고, 61개월 무상 A/S로 품질 자신감을 증명합니다.",
    },
    {
      title: "고객의 몸과 공간을 함께 이해합니다.",
      body: "큰 부피와 무거운 무게는 안마의자의 고질적인 단점이었습니다. 케어렉스는 기존 대비 부피를 30% 이상 축소한 CLX157·S20을 주력으로, 인테리어에 어울리고 쉽게 이동할 수 있는 회복을 제안합니다. 접이식 온열 종아리, 낮은 고정형 프레임으로 안전까지 고려했습니다.",
    },
    {
      title: "특화 시장에서 쌓은 실력을 모든 가정으로 확장합니다.",
      body: "상조 고객과 데이케어센터 등 특화 시장에서 제작 실력과 고객 이해도를 키워왔습니다. 이제 네이버 스마트스토어를 통해 더 많은 가정에 기본기에 충실한 안마의자를 합리적인 경로로 전합니다.",
    },
  ],
} as const;

export const CEO = {
  name: "노재학",
  title: "대표이사",
  quote:
    "안마의자의 핵심은 쌓인 피로를 안마의자 내부의 볼을 이용해 짧은 시간 동안 회복할 수 있도록 고객의 신체를 두드리고 주무르고 늘리는데 있다. 최상의 컨디션으로 회복하기 위해 고객 별 상태에 맞춰 이런 기능들을 미세하게 조정을 하며 제공하는 것이 필수다.",
  source: "패션비즈",
  sourceUrl: "https://fashionbiz.co.kr/article/198836",
  sourceDate: "2023.03.09",
} as const;

export const HERITAGE = [
  {
    year: "2007",
    title: "이노코프 출범",
    body: "국내 안마의자 1세대로 브랜드를 시작했습니다.",
  },
  {
    year: "2007-2016",
    title: "글로벌 공급 경험",
    body: "일본 후지의료기, 다이와 등 다양한 브랜드를 국내에 공급하며 기술력을 쌓았습니다.",
  },
  {
    year: "2016",
    title: "케어렉스 독자 브랜드",
    body: "사명을 케어렉스로 변경하고 독자적인 안마의자를 출시했습니다.",
  },
  {
    year: "Now",
    title: "61개월 무상 A/S",
    body: "특화 라인 생산과 전용 모터 기술로 품질 자신감을 증명합니다.",
  },
] as const;

/** 시장 속 좌표 — 경쟁사 분석 합의 */
export const POSITION = {
  label: "Our Place",
  title: "거창한 스펙보다,\n집에서 계속 앉고 싶은 회복.",
  body: "국내외 안마의자 시장은 의료·특허 서사와 프로모션 몰로 양분됩니다. 케어렉스는 그 사이에서 부드러운 안마볼 케어, 주거에 맞는 스케일, 스마트스토어로 이어지는 단순한 구매를 선택합니다.",
  pillars: [
    {
      title: "Soft over Spectacle",
      body: "강한 연출보다, 전 가족이 부담 없이 받는 안마감.",
    },
    {
      title: "Home-scale Design",
      body: "풀사이즈부터 컴팩트까지. 공간이 제품을 고르게 합니다.",
    },
    {
      title: "61 Months Care",
      body: "브랜드에서 이해하고, 스마트스토어에서 구매합니다.",
    },
  ],
} as const;

export const PHILOSOPHY = [
  {
    key: "Care",
    titleKo: "케어",
    body: "두드리고 주무르는 안마볼로, 몸의 긴장을 섬세하게 다룹니다.",
  },
  {
    key: "Relax",
    titleKo: "릴랙스",
    body: "부담 없는 부드러운 안마감으로, 누구나 편하게 쉴 수 있습니다.",
  },
  {
    key: "Recover",
    titleKo: "리커버",
    body: "짧은 시간 안에 일상 피로를 푸는 것—그것이 케어렉스의 약속입니다.",
  },
] as const;

/** 자체 기술 언어 — 세라젬 TECH / 바디프랜드 ROVO 패턴 차용 */
export const METHODS = [
  {
    code: "Ball Care",
    title: "안마볼 케어",
    body: "내부 안마볼이 두드리고 주무르며, 짧은 휴식에도 이완의 리듬을 만듭니다.",
  },
  {
    code: "Soft Mode",
    title: "소프트 모드",
    body: "강함의 경쟁이 아닙니다. 오래 앉아도 부담 없는 케어 감도를 기준으로 설계합니다.",
  },
  {
    code: "Space Fit",
    title: "스페이스 핏",
    body: "미니·컴팩트·풀사이즈. 국내 거실과 원룸 스케일에 맞춘 라인업.",
  },
] as const;

export const TRUST = [
  {
    title: "구매",
    body: "네이버 스마트스토어 케어렉스. 주력 상품에서 바로 주문합니다.",
  },
  {
    title: "상담",
    body: `구매문의 ${SITE.phones.purchase}`,
  },
  {
    title: "61개월 무상 A/S",
    body: `A/S ${SITE.phones.service} · ${SITE.hours}`,
  },
] as const;

export type Product = {
  id: string;
  nameKo: string;
  nameEn: string;
  code: string;
  badge: string;
  need: "family" | "smart" | "space" | "business";
  needLabel: string;
  summary: string;
  detail: string;
  image: string;
  featured?: boolean;
};

export const NEED_GROUPS = [
  {
    id: "family",
    label: "가족 소프트",
    desc: "부드럽고 부담 없는 일상 케어",
  },
  {
    id: "smart",
    label: "스마트 조작",
    desc: "조그셔틀·3D로 쉬운 선택",
  },
  {
    id: "space",
    label: "공간 효율",
    desc: "작은 집에도 맞는 스케일",
  },
  {
    id: "business",
    label: "업소·비즈니스",
    desc: "매장 운영을 위한 전용 라인",
  },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "honors",
    nameKo: "아너스",
    nameEn: "Honors",
    code: "CLX 990",
    badge: "플래그십 · 3D",
    need: "smart",
    needLabel: "스마트 조작",
    summary: "3D 안마 방식의 스마트 케어 모델",
    detail:
      "입체 안마 모듈로 몸의 굴곡을 따라가는 플래그십. 집에서 받는 본격적인 스마트 케어.",
    image: "/images/product-honors.jpg",
    featured: true,
  },
  {
    id: "salute",
    nameKo: "샬루트",
    nameEn: "Salute",
    code: "CLX 770",
    badge: "소프트 케어",
    need: "family",
    needLabel: "가족 소프트",
    summary: "부드러운 안마로 누구나 편하게",
    detail:
      "강하지 않아도 충분합니다. 전 가족이 부담 없이 앉을 수 있는 부드러운 안마감.",
    image: "/images/product-salute.jpg",
    featured: true,
  },
  {
    id: "rex",
    nameKo: "렉스",
    nameEn: "Rex",
    code: "R21",
    badge: "스마트 · 조그셔틀",
    need: "smart",
    needLabel: "스마트 조작",
    summary: "조그셔틀 방식의 스마트 안마의자",
    detail:
      "직관적인 조그셔틀 조작으로 모드를 빠르게 전환. 일상에 스며드는 스마트 휴식.",
    image: "/images/product-rex.jpg",
    featured: true,
  },
  {
    id: "aurora",
    nameKo: "오로라",
    nameEn: "Aurora",
    code: "CLX 570",
    badge: "밸런스",
    need: "family",
    needLabel: "가족 소프트",
    summary: "가격과 기능을 동시에 잡은 선택",
    detail:
      "꼭 필요한 케어 기능에 집중한 밸런스 모델. 첫 안마의자로 부담 없는 입문.",
    image: "/images/product-aurora.jpg",
  },
  {
    id: "creampink",
    nameKo: "크림핑크",
    nameEn: "Cream Pink",
    code: "CLX 650",
    badge: "헬스테리어",
    need: "space",
    needLabel: "공간 효율",
    summary: "화사한 색상, 공간까지 케어",
    detail:
      "가구처럼 어울리는 컬러감. 안마 기능과 인테리어를 함께 원하는 분께.",
    image: "/images/product-creampink.jpg",
  },
  {
    id: "avantgarde",
    nameKo: "아방가르",
    nameEn: "Avant-garde",
    code: "CLX 157",
    badge: "미니 · 풀기능",
    need: "space",
    needLabel: "공간 효율",
    summary: "기능은 풀, 크기는 컴팩트",
    detail:
      "작은 공간에도 본격 안마 기능을. 미니멀한 주거·원룸에 맞춘 컴팩트 풀케어.",
    image: "/images/product-avantgarde.jpg",
  },
  {
    id: "compact",
    nameKo: "컴팩트",
    nameEn: "Compact",
    code: "S20",
    badge: "어디서나",
    need: "space",
    needLabel: "공간 효율",
    summary: "어느 곳에서나 편안한 휴식",
    detail:
      "가벼운 풋프린트로 이동과 배치가 자유로운 컴팩트 휴식 솔루션.",
    image: "/images/product-compact.jpg",
  },
  {
    id: "phoenix",
    nameKo: "피닉스",
    nameEn: "Phoenix",
    code: "CLX 500T",
    badge: "업소 전용",
    need: "business",
    needLabel: "업소·비즈니스",
    summary: "고객 만족과 수익을 함께",
    detail:
      "매장·업소 환경을 위한 전용 라인. 내구성과 운영 효율을 고려한 비즈니스 케어.",
    image: "/images/product-phoenix.jpg",
  },
];
