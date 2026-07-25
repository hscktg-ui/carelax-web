import Wordmark from "@/components/Wordmark";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { company, phones, hours, warrantyLabel } = SITE;
  return (
    <footer className="bg-purple-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <Wordmark size="md" showKo />
          <p className="mt-4 max-w-sm text-sm text-white/70">{SITE.thesis}</p>
        </div>
        <div>
          <p className="section-label !text-cyan-soft">\uACE0\uAC1D\uC13C\uD130</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>\uAD6C\uB9E4 <a href={`tel:${phones.purchase}`} className="font-semibold text-cyan-soft hover:underline">{phones.purchase}</a></li>
            <li>A/S <a href={`tel:${phones.service}`} className="font-semibold text-cyan-soft hover:underline">{phones.service}</a></li>
            <li className="text-cyan-soft">{warrantyLabel}</li>
            <li className="text-white/55">{hours}</li>
          </ul>
        </div>
        <div>
          <p className="section-label !text-cyan-soft">\uCC44\uB110</p>
          <a href={SITE.smartStoreUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block text-sm font-semibold text-cyan-soft hover:underline">\uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4</a>
          <a href={SITE.blogUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-white/70 hover:text-cyan-soft hover:underline">\uBE14\uB85C\uADF8</a>
          <p className="mt-4 text-xs text-white/45">\uBE0C\uB79C\uB4DC \uC18C\uAC1C \uC0AC\uC774\uD2B8 \u00B7 \uAD6C\uB9E4\u00B7\uACB0\uC81C\uB294 \uC2A4\uB9C8\uD2B8\uC2A4\uD1A0\uC5B4</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-1 px-5 py-5 text-[0.68rem] leading-relaxed text-white/40 md:px-8">
          <p>{company.legalName} | {company.address} | \uB300\uD45C {company.ceo}</p>
          <p>\uC0AC\uC5C5\uC790 {company.businessNo} | \uD1B5\uD310 {company.mailOrderNo} | \uAC1C\uC778\uC815\uBCF4 {company.privacyOfficer}</p>
          <p>\uB300\uD45C {phones.service} | FAX {company.fax}</p>
        </div>
      </div>
    </footer>
  );
}
