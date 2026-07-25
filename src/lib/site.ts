/** Carelax 2026 — short, professional brand narrative */
export const SITE = {
  year: 2026,
  nameKo: "\uCF00\uC5B4\uB809\uC2A4",
  nameEn: "Carelax",
  tagline: "\uD5EC\uC2A4\uCF00\uC5B4 \uB300\uC911\uD654",
  thesis: "\uACE0\uD488\uC9C8 \uD5EC\uC2A4\uCF00\uC5B4, \uB354 \uAC00\uAE4C\uC774.",
  positioning: "Healthcare Democratization",
  description:
    "\uCF00\uC5B4\uB809\uC2A4\uB294 \uACE0\uD488\uC9C8 \uD5EC\uC2A4\uCF00\uC5B4\uB97C \uD569\uB9AC\uC801\uC73C\uB85C \uC81C\uC548\uD569\uB2C8\uB2E4. \uAD6C\uB9E4\uB294 \uACF5\uC2DD \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4.",
  smartStoreUrl: "https://smartstore.naver.com/carelax",
  blogUrl: "https://blog.naver.com/carelax0606",
  phones: { purchase: "1588-1070", service: "1877-1244" },
  warrantyMonths: 61,
  warrantyLabel: "61\uAC1C\uC6D4 \uBB34\uC0C1 A/S",
  hours: "\uD3C9\uC77C 09:00\u201317:00 (\uC8FC\uB9D0\u00B7\uACF5\uD734\uC77C \uD734\uBB34)",
  company: {
    legalName: "\uC8FC\uC2DD\uD68C\uC0AC \uCF00\uC5B4\uB809\uC2A4",
    ceo: "\uB178\uC7AC\uD559",
    address:
      "\uACBD\uAE30\uB3C4 \uD558\uB0A8\uC2DC \uC870\uC815\uB300\uB85C 150 (\uB355\uD48D\uB3D9) \uC544\uC774\uD14C\uCF54 \uADF8\uB9B0\uC874 923\uD638 (12930)",
    businessNo: "195-87-00745",
    mailOrderNo: "\uC81C 2020-\uACBD\uAE30\uD558\uB0A8-0800",
    privacyOfficer: "\uB9E4\uB2C8\uC800 \uB178\uC131\uC9C4",
    fax: "02-2144-5657",
  },
} as const;

/** Natural Korean IA: \uC18C\uAC1C \u2192 \uCF00\uC5B4 \u2192 \uAD6C\uB9E4 \u2192 \uC5F0\uD601 \u2192 \uAE30\uB85D \u2192 \uBB38\uC758 */
export const NAV = [
  { href: "#about", label: "\uC18C\uAC1C" },
  { href: "#care", label: "\uCF00\uC5B4" },
  { href: "#buy", label: "\uAD6C\uB9E4" },
  { href: "#story", label: "\uC5F0\uD601" },
  { href: "#archive", label: "\uAE30\uB85D" },
  { href: "#contact", label: "\uBB38\uC758" },
] as const;

export const HERO = {
  eyebrow: "Since 2006",
  support: "20\uB144 \uCF00\uC5B4. \uC77C\uC0C1\uC5D0 \uB2FF\uB294 \uD68C\uBCF5.",
  imageAlt: "\uD604\uB300\uC801\uC778 \uAC70\uC2E4\uC758 \uCF00\uC5B4\uB809\uC2A4 \uC548\uB9C8\uC758\uC790",
  ctaPrimary: "\uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4",
  ctaSecondary: "\uBE0C\uB79C\uB4DC \uC18C\uAC1C",
} as const;

export const ABOUT = {
  label: "\uBE0C\uB79C\uB4DC",
  headline: "\uAE30\uC900\uC740 \uC9C0\uD0A4\uACE0,\n\uBB38\uD131\uC740 \uB0AE\uCD95\uB2C8\uB2E4.",
  body: "2006\uB144 \uC774\uB178\uCF54\uD504\uC5D0\uC11C \uC2DC\uC791\uD574, 2015\uB144 \uCF00\uC5B4\uB809\uC2A4\uB85C \uB3C5\uC790 \uBE0C\uB79C\uB4DC\uB97C \uC138\uC6E0\uC2B5\uB2C8\uB2E4. \uACFC\uC2DC\uAC00 \uC544\uB2C8\uB77C, \uB204\uAD6C\uB098 \uC4F0\uB294 \uD5EC\uC2A4\uCF00\uC5B4\uB97C \uD569\uB2C8\uB2E4.",
  pillars: [
    { title: "\uB300\uC911\uD654", body: "\uACE0\uD488\uC9C8\uC744 \uB354 \uAC00\uAE4C\uC774." },
    { title: "\uC18C\uD504\uD2B8 \uCF00\uC5B4", body: "\uAC15\uD568\uBCF4\uB2E4 \uC624\uB798 \uC549\uB294 \uAC10\uB3C4." },
    { title: "\uC624\uB798\uAC04 \uC9C0\uC6D0", body: "61\uAC1C\uC6D4 \uBB34\uC0C1 A/S." },
  ],
} as const;

export const DEMOCRATIZATION = {
  quote:
    "\uACE0\uD488\uC9C8 \uD5EC\uC2A4\uCF00\uC5B4\uB97C \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC5D0 \u2014 \uB300\uC911\uD654\uB97C \uC55E\uB2F9\uAE30\uB294 \uAC83\uC785\uB2C8\uB2E4.",
  source: "\uC774\uB370\uC77C\uB9AC",
  sourceDate: "2017.04.06",
} as const;

export const CARE = {
  label: "\uCF00\uC5B4",
  headline: "\uB450\uB4DC\uB9AC\uACE0, \uC8FC\uBB34\uB974\uACE0,\n\uC77C\uC0C1\uC73C\uB85C \uB3CC\uB9BD\uB2C8\uB2E4.",
  body: "\uACFC\uC7A5 \uC5C6\uC774, \uC9E7\uC740 \uD734\uC2DD\uC5D0\uB3C4 \uB2E4\uC2DC \uC551\uACE0 \uC2F6\uC740 \uAC10\uB3C4.",
  methods: [
    { title: "\uC548\uB9C8\uBCFC", body: "\uB450\uB4DC\uB9AC\uACE0 \uC8FC\uBB34\uB974\uB294 \uC774\uC644\uC758 \uB9AC\uB4DC." },
    { title: "\uC18C\uD504\uD2B8", body: "\uAC00\uC871\uC774 \uD568\uAED8 \uC4F0\uB294 \uBD80\uB4DC\uB7EC\uC6B4 \uAC10\uB3C4." },
    { title: "\uC2A4\uD398\uC774\uC2A4", body: "\uAC70\uC2E4\u00B7\uC6D0\uB8F8\u00B7\uC2DC\uC124\uC5D0 \uB9DE\uB294 \uC2A4\uCF00\uC77C." },
  ],
} as const;

export const BUY = {
  label: "\uAD6C\uB9E4",
  headline: "\uAD6C\uB9E4\uB294 \uD558\uB098\uC758 \uACBD\uB85C.",
  body: "\uD604\uC7AC \uC0C1\uD488\uC740 \uACF5\uC2DD \uB124\uC774\uBC84 \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4\uC5D0\uC11C \uD655\uC778\uD569\uB2C8\uB2E4.",
  pills: ["61\uAC1C\uC6D4 \uBB34\uC0C1 A/S", "\uACF5\uC2DD \uC2A4\uD1A0\uC5B4", "\uC804\uBB38 \uC0C1\uB2F4"],
  cta: "\uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4 \uBC14\uB85C\uAC00\uAE30",
} as const;

export const STORY = {
  label: "\uC5F0\uD601",
  headline: "2006\u20132026",
  body: "\uC720\uD1B5\uC5D0\uC11C \uB3C5\uC790 \uBE0C\uB79C\uB4DC\uB85C, \uADF8\uB9AC\uACE0 \uC77C\uC0C1 \uAC00\uAE4C\uC6B4 \uD68C\uBCF5\uC73C\uB85C.",
} as const;

export const HERITAGE = [
  { year: "2006", title: "\uC774\uB178\uCF54\uD504 \uC124\uB9BD" },
  { year: "2007\u201315", title: "\uAE00\uB85C\uBC8C \uACF5\uAE09" },
  { year: "2015", title: "\uCF00\uC5B4\uB809\uC2A4 \uCD9C\uBC94" },
  { year: "2017\u201323", title: "\uB300\uC911\uD654 \uC120\uC5B8" },
  { year: "2024\u201325", title: "\uD604\uC7A5\u00B7\uC2A4\uD1A0\uC5B4" },
  { year: "2026", title: "\uBE0C\uB79C\uB4DC \uC11C\uC0AC" },
] as const;

export const ARCHIVE = {
  label: "\uAE30\uB85D",
  headline: "\uC9C0\uB098\uAC04 \uB77C\uC778\uC5C5.",
  body: "\uD604\uC7AC \uD310\uB9E4\uD558\uC9C0 \uC54A\uB294 \uC544\uCE74\uC774\uBE0C\uC785\uB2C8\uB2E4.",
  ended: "\uD310\uB9E4 \uC885\uB8CC",
} as const;

export type HistoryItem = {
  id: string;
  nameKo: string;
  nameEn: string;
  code: string;
  summary: string;
  image: string;
};

export const HISTORY: HistoryItem[] = [
  { id: "honors", nameKo: "\uC544\uB108\uC2A4", nameEn: "Honors", code: "CLX 990", summary: "3D \uD50C\uB798\uADF8\uC2ED", image: "/images/product-honors.jpg" },
  { id: "salute", nameKo: "\uC0EC\uB8E8\uD2B8", nameEn: "Salute", code: "CLX 770", summary: "\uD328\uBC00\uB9AC \uC18C\uD504\uD2B8", image: "/images/product-salute.jpg" },
  { id: "rex", nameKo: "\uB809\uC2A4", nameEn: "Rex", code: "R21", summary: "\uC870\uADF8\uC154\uD2BC \uC2A4\uB9C8\uD2B8", image: "/images/product-rex.jpg" },
  { id: "aurora", nameKo: "\uC624\uB85C\uB77C", nameEn: "Aurora", code: "CLX 570", summary: "\uBC38\uB7F0\uC2A4 \uC785\uBB38", image: "/images/product-aurora.jpg" },
  { id: "creampink", nameKo: "\uD06C\uB9BC\uD551\uD06C", nameEn: "Cream Pink", code: "CLX 650", summary: "\uD5EC\uC2A4\uD14C\uB9AC\uC5B4", image: "/images/product-creampink.jpg" },
  { id: "avantgarde", nameKo: "\uC544\uBC29\uAC00\uB974", nameEn: "Avant-garde", code: "CLX 157", summary: "\uCEF4\uD329\uD2B8 \uD480\uCF00\uC5B4", image: "/images/product-avantgarde.jpg" },
  { id: "compact", nameKo: "\uCEF4\uD329\uD2B8", nameEn: "Compact", code: "S20", summary: "\uC774\uB3D9\uD615 \uCEF4\uD329\uD2B8", image: "/images/product-compact.jpg" },
  { id: "phoenix", nameKo: "\uD53C\uB2C9\uC2A4", nameEn: "Phoenix", code: "CLX 500T", summary: "\uBE44\uC988\uB2C8\uC2A4 \uC804\uC6A9", image: "/images/product-phoenix.jpg" },
];

export const CONTACT = {
  label: "\uBB38\uC758",
  headline: "\uD544\uC694\uD55C \uC5F0\uB77D\uB9CC.",
  items: [
    { title: "\uAD6C\uB9E4", body: "\uB124\uC774\uBC84 \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4", href: "store" as const },
    { title: "\uC0C1\uB2F4", body: "\uAD6C\uB9E4 1588-1070", href: "purchase" as const },
    { title: "A/S", body: "1877-1244 \u00B7 61\uAC1C\uC6D4 \uBB34\uC0C1 A/S", href: "service" as const },
    { title: "\uBE14\uB85C\uADF8", body: "\uACF5\uC2DD \uB124\uC774\uBC84 \uBE14\uB85C\uADF8", href: "blog" as const },
  ],
} as const;

export const CLOSE = {
  label: "Carelax",
  headline: "\uD68C\uBCF5\uC740,\n\uB354 \uAC00\uAE4C\uC6B8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  body: "\uD604\uC7AC \uC0C1\uD488\uACFC \uAD6C\uB9E4\uB294 \uACF5\uC2DD \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4\uC5D0\uC11C.",
  cta: "\uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4\uB85C",
} as const;

export const CEO = {
  name: "\uB178\uC7AC\uD559",
  title: "\uB300\uD45C\uC774\uC0AC",
} as const;
