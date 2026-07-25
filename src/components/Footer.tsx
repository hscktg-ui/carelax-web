import Wordmark from "@/components/Wordmark";
import { FOOTER, SITE } from "@/lib/site";

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
          <p className="section-label !text-cyan-soft">{FOOTER.supportTitle}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>{FOOTER.purchaseLabel} <a href={`tel:${phones.purchase}`} className="font-semibold text-cyan-soft hover:underline">{phones.purchase}</a></li>
            <li>{FOOTER.serviceLabel} <a href={`tel:${phones.service}`} className="font-semibold text-cyan-soft hover:underline">{phones.service}</a></li>
            <li className="text-cyan-soft">{warrantyLabel}</li>
            <li className="text-white/55">{hours}</li>
          </ul>
        </div>
        <div>
          <p className="section-label !text-cyan-soft">{FOOTER.channelsTitle}</p>
          <a href={SITE.smartStoreUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block text-sm font-semibold text-cyan-soft hover:underline">{FOOTER.storeLabel}</a>
          <a href={SITE.blogUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-white/70 hover:text-cyan-soft hover:underline">{FOOTER.blogLabel}</a>
          <p className="mt-4 text-xs text-white/45">{FOOTER.storeNotice}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-1 px-5 py-5 text-[0.68rem] leading-relaxed text-white/40 md:px-8">
          <p>{company.legalName} | {company.address} | {FOOTER.representativeLabel} {company.ceo}</p>
          <p>{FOOTER.businessLabel} {company.businessNo} | {FOOTER.mailOrderLabel} {company.mailOrderNo} | {FOOTER.privacyLabel} {company.privacyOfficer}</p>
          <p>{FOOTER.contactLabel} {phones.service} | FAX {company.fax}</p>
        </div>
      </div>
    </footer>
  );
}
