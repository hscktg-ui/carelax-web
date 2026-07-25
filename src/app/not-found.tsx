import Link from "next/link";
import Wordmark from "@/components/Wordmark";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-purple-deep px-5 text-center text-white">
      <Wordmark size="lg" showKo />
      <p className="section-label mt-10 !text-cyan-soft">404</p>
      <h1 className="font-display mt-4 text-3xl md:text-5xl">
        찾는 페이지가 없습니다.
      </h1>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
        2026 케어렉스 브랜드 홈으로 돌아가 서사를 이어 가세요.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-sm bg-cyan px-6 py-3 text-sm font-bold text-purple-deep transition hover:bg-cyan-soft"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
