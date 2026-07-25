# 케어렉스(Carelax) 브랜드 홈페이지

브랜드 정체성·철학 중심의 소개 사이트입니다. 구매는 네이버 스마트스토어로 연결합니다.

## 위치

`D:\Projects\carelax-web`

## 자료

- `docs/carelax-research.md` — 공식몰·판매처 취합
- `docs/expert-consensus.md` — 세라젬·바디프랜드·코지마·비렉스 분석 + 전문가 합의 IA
- `public/images/` — AI 생성 히어로·제품 이미지
- `src/lib/site.ts` — 브랜드 카피·포지션·제품·스토어 URL

## 시작

```bash
npm install
npm run dev
```

## 스마트스토어 연결

- 스토어: https://smartstore.naver.com/carelax
- 주력 상품: https://smartstore.naver.com/carelax/products/4973358450

설정은 `src/lib/site.ts`의 `smartStoreUrl` / `flagshipProductUrl`입니다.

## 스택

Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript
`}