import Wordmark from "@/components/Wordmark";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { company, phones, hours, warrantyLabel } = SITE;
  return <footer className="bg-purple-deep text-white">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
      <div><Wordmark size="md" showKo /><p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{SITE.thesis} 케어렉스는 회복이 일상 가까이에 머물도록 생각합니다.</p></div>
      <div><p className="section-label !text-cyan-soft">고객 지원</p><ul className="mt-4 space-y-3 text-sm text-white/85"><li>구매 문의 <a href={`tel:${phones.purchase}`} className="font-semibold text-cyan-soft hover:underline">{phones.purchase}</a></li><li>A/S <a href={`tel:${phones.service}`} className="font-semibold text-cyan-soft hover:underline">{phones.service}</a></li><li className="font-semibold text-cyan-soft">{warrantyLabel}</li><li className="text-white/60">{hours}</li></ul></div>
      <div><p className="section-label !text-cyan-soft">공식 채널</p><a href={SITE.smartStoreUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block text-sm font-semibold text-cyan-soft hover:underline">네이버 스마트스토어</a><a href={SITE.blogUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-white/70 hover:text-cyan-soft hover:underline">공식 네이버 블로그</a><p className="mt-4 text-xs leading-relaxed text-white/50">이곳은 케어렉스의 브랜드 아카이브입니다. 구매와 결제는 공식 스마트스토어에서 진행됩니다.</p></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto max-w-6xl space-y-2 px-5 py-6 text-[0.7rem] leading-relaxed text-white/45 md:px-8"><p>상호 : {company.legalName} | {company.address} | 대표이사 : {company.ceo}</p><p>개인정보관리 책임자 : {company.privacyOfficer} | 사업자등록번호 : {company.businessNo} | 통신판매업신고 : {company.mailOrderNo}</p><p>대표전화 : {phones.service} | 팩스 : {company.fax}</p><p className="pt-2">All Rights Reserved by Carelax.</p></div></div>
  </footer>;
}