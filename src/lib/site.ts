/** Brand content for the editorial Carelax homepage. */
export const SITE = {
  year: 2026,
  nameKo: "케어렉스", nameEn: "Carelax", tagline: "헬스케어 대중화",
  thesis: "고품질 헬스케어를 합리적으로 — 누구에게나 회복이 닿게.", positioning: "Healthcare Democratization",
  description: "2026 케어렉스 — 2006년부터 이어 온 헬스케어 대중화. 단종 라인업은 아카이브로, 구매는 공식 스마트스토어에서.",
  smartStoreUrl: "https://smartstore.naver.com/carelax", blogUrl: "https://blog.naver.com/carelax0606",
  phones: { purchase: "1588-1070", service: "1877-1244" }, warrantyMonths: 61, warrantyLabel: "61개월 무상 A/S", hours: "평일 AM 09:00 ~ PM 05:00 (토·일·공휴일 휴무)",
  company: { legalName: "주식회사 케어렉스", ceo: "노재학", address: "경기도 하남시 조정대로 150 (덕풍동) 아이테코 그린존 923호 (12930)", businessNo: "195-87-00745", mailOrderNo: "제 2020-경기하남-0800", privacyOfficer: "매니저 노성진", fax: "02-2144-5657" },
} as const;

export const NAV = [
  { href: "#lead", label: "리드" }, { href: "#heritage", label: "연혁" }, { href: "#method", label: "방식" }, { href: "#now", label: "2026" }, { href: "#history", label: "아카이브" }, { href: "#trust", label: "신뢰" },
] as const;

export const HERO = {
  eyebrow: "Since 2006 · Narrative 2026",
  support: "2006년부터 이어 온 거의 20년의 케어. 2026년에도 헬스케어 대중화를 이어 갑니다. 회복은 과시가 아닌 일상의 가까운 순간에서 시작됩니다.",
  imageAlt: "현대적인 거실에 놓인 케어렉스 리클라이너 안마의자", leadCta: "케어렉스의 서사",
} as const;

export const SECTION_COPY = {
  heritage: { label: "Heritage", index: "02 — HERITAGE", title: "20년의 기록으로,\n2026년을 다시 읽습니다.", body: "2006년 이노코프에서 시작한 경험은 공급, 독자 브랜드, 현장과의 만남을 거쳐 이어져 왔습니다. 연혁은 더 많은 사람의 일상에 케어가 닿기 위한 시간의 기록입니다." },
  method: { label: "Methods / 2026", title: "방식은 가볍게,\n기준은 조용하게.", body: "2026년에도 케어렉스는 특별한 하루를 위한 과장보다, 일상에 들어오는 선택의 기준을 생각합니다." },
  history: { label: "Archive / 2026", index: "05 — ARCHIVE", title: "판매가 아닌,\n우리의 기록입니다.", suffix: "각 모델은 그 시절의 생활과 공간을 위해 고민했던 케어렉스의 기록입니다.", ended: "판매 종료 · 아카이브" },
  trust: { label: "Trust", title: "믿을 수 있는\n경로만 남깁니다.", body: "구매, 상담, A/S, 그리고 기록까지. 케어렉스와 연결되는 채널을 명확하게 열어 둡니다." },
  close: { label: "2026 / A quiet close", title: "2026년 케어렉스의 현재는,\n공식 스마트스토어에서.", body: "현재 제품 확인과 구매는 공식 네이버 스마트스토어에서 이어집니다. 케어렉스는 그 경험의 앞과 뒤를 오래 지원하겠습니다." },
} as const;

export const COMPANY = {
  label: "The Lead / 2026", headline: "2026년에도 품질의 기준은 지키고,\n접근의 문턱은 낮추겠습니다.",
  intro: "케어렉스는 2006년 이노코프에서 시작한 경험을 이어갑니다. 글로벌 제품 공급과 독자 브랜드의 시간을 거쳐, 오늘도 좋은 케어의 기준은 지키고 누구나 다가갈 수 있는 경로를 고민합니다.",
  chapters: [
    { title: "누구에게나 건강을 선물합니다.", body: "과시를 위한 기능보다 오래 일상에 남는 케어에 집중합니다. 품질과 합리성의 균형을 지킵니다." },
    { title: "일상에서 회복의 시간을 만듭니다.", body: "짧은 휴식에도 다시 돌아올 수 있도록, 몸과 공간이 편안한 감도를 생각합니다." },
    { title: "현장과 오래 연결됩니다.", body: "주거 공간과 주간보호센터 같은 현장의 일상을 살피며, 구매 이후에도 고객 지원과 61개월 무상 A/S로 신뢰를 이어 갑니다." },
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

export const NOW = { label: "2026 Now", title: "구매는 하나의,\n분명한 경로로.", body: "2026년 현재, 제품 확인과 구매는 공식 네이버 스마트스토어에서만 이어집니다. 브랜드 사이트는 케어렉스의 서사와 지원 정보를 기록합니다.", pills: ["61개월 무상 A/S", "공식 스마트스토어", "전문 고객 지원"] } as const;

export const HISTORY_INTRO = "2026년 기준으로 이 라인업은 모두 판매하지 않는 아카이브입니다.";

export type HistoryItem = { id: string; nameKo: string; nameEn: string; code: string; era: string; summary: string; image: string };
export const HISTORY: HistoryItem[] = [
  { id: "honors", nameKo: "아너스", nameEn: "Honors", code: "CLX 990", era: "Archive / 3D", summary: "입체 안마 모듈로 몸의 굴곡을 따라가던 플래그십 기록입니다.", image: "/images/product-honors.jpg" },
  { id: "salute", nameKo: "샬루트", nameEn: "Salute", code: "CLX 770", era: "Archive / Soft", summary: "온 가족이 부담 없이 앉을 수 있는 부드러운 안마감을 제안했습니다.", image: "/images/product-salute.jpg" },
  { id: "rex", nameKo: "렉스", nameEn: "Rex", code: "R21", era: "Legacy / Smart", summary: "조그셔틀 조작으로 일상에 스며드는 스마트 휴식을 설계했습니다.", image: "/images/product-rex.jpg" },
  { id: "aurora", nameKo: "오로라", nameEn: "Aurora", code: "CLX 570", era: "Legacy / Balance", summary: "필요한 케어 기능과 합리적인 선택의 균형을 담은 모델입니다.", image: "/images/product-aurora.jpg" },
  { id: "creampink", nameKo: "크림핑크", nameEn: "Cream Pink", code: "CLX 650", era: "Archive / Interior", summary: "가구처럼 어울리는 색감과 안마 경험을 함께 고민했습니다.", image: "/images/product-creampink.jpg" },
  { id: "avantgarde", nameKo: "아방가르", nameEn: "Avant-garde", code: "CLX 157", era: "Legacy / Compact", summary: "작은 공간에서도 본격적인 케어를 경험하도록 만든 컴팩트 기록입니다.", image: "/images/product-avantgarde.jpg" },
  { id: "compact", nameKo: "컴팩트", nameEn: "Compact", code: "S20", era: "Archive / Portable", summary: "가벼운 풋프린트로 이동과 배치의 자유를 생각한 회복의 기록입니다.", image: "/images/product-compact.jpg" },
  { id: "phoenix", nameKo: "피닉스", nameEn: "Phoenix", code: "CLX 500T", era: "Legacy / Business", summary: "매장과 업소 환경에서의 내구성과 운영 경험을 고민한 전용 라인입니다.", image: "/images/product-phoenix.jpg" },
];

export const HERITAGE = [
  { year: "2006", title: "이노코프 설립", body: "안마의자 유통과 서비스 경험을 바탕으로 이노코프를 설립하며 케어의 여정을 시작했습니다." },
  { year: "2007–2015", title: "글로벌 공급", body: "후지의료기와 다이와 등 다양한 제품을 국내에 소개하며 시장과 고객의 리듬을 배웠습니다." },
  { year: "2015–16", title: "케어렉스 출범", body: "독자 브랜드 케어렉스로 일상 가까운 케어의 기준을 제안하기 시작했습니다." },
  { year: "2017–23", title: "대중화의 언어", body: "이데일리와 패션비즈 등을 통해 헬스케어 대중화와 일상의 회복에 대한 이야기를 나눴습니다." },
  { year: "2024–25", title: "현장으로의 확장", body: "주간보호센터와 공식 스마트스토어 등 현장과의 접점을 통해 고객을 만나고 기록했습니다." },
  { year: "2026", title: "서사의 재정리", body: "단종 라인업은 아카이브로 남기고, 구매는 공식 네이버 스마트스토어에서, 브랜드 사이트는 우리의 서사로 이어갑니다." },
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