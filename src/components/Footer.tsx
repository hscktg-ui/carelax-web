import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { company, phones, hours, warrantyLabel } = SITE;

  return (
    <footer className="bg-purple-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <Image
            src="/brand/logo-on-dark.png"
            alt={`${SITE.nameKo} Carelax`}
            width={180}
            height={50}
            className="h-10 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {SITE.tagline}. 안마의자·리클라이너로 일상의 피로를 짧게, 깊게
            풀어냅니다.
          </p>
        </div>

        <div>
          <p className="section-label !text-cyan-soft">고객센터</p>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li>
              구매문의{" "}
              <a
                href={`tel:${phones.purchase}`}
                className="font-semibold text-cyan-soft hover:underline"
              >
                {phones.purchase}
              </a>
            </li>
            <li>
              A/S{" "}
              <a
                href={`tel:${phones.service}`}
                className="font-semibold text-cyan-soft hover:underline"
              >
                {phones.service}
              </a>
            </li>
            <li className="font-semibold text-cyan-soft">{warrantyLabel}</li>
            <li className="text-white/60">{hours}</li>
          </ul>
        </div>

        <div>
          <p className="section-label !text-cyan-soft">구매</p>
          <a
            href={SITE.flagshipProductUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-cyan-soft underline-offset-4 hover:underline"
          >
            주력 상품 바로가기
          </a>
          <a
            href={SITE.smartStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-sm text-white/70 underline-offset-4 hover:text-cyan-soft hover:underline"
          >
            스마트스토어 케어렉스
          </a>
          <p className="mt-3 text-xs leading-relaxed text-white/50">
            본 사이트는 브랜드 소개용이며, 구매·결제는 네이버 스마트스토어에서
            진행됩니다.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-2 px-5 py-6 text-[0.7rem] leading-relaxed text-white/45 md:px-8">
          <p>
            상호 : {company.legalName} | {company.address} | 대표이사 :{" "}
            {company.ceo}
          </p>
          <p>
            개인정보관리 책임자 : {company.privacyOfficer} | 사업자등록번호 :{" "}
            {company.businessNo} | 통신판매업신고 : {company.mailOrderNo}
          </p>
          <p>
            대표전화 : {phones.service} | 팩스 : {company.fax}
          </p>
          <p className="pt-2">All Rights Reserved by Carelax.</p>
        </div>
      </div>
    </footer>
  );
}
