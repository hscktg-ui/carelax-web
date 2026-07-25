/** Text wordmark only — icon mark is favicon-only */
type WordmarkProps = {
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "hero";
  showKo?: boolean;
  className?: string;
};

const sizeMap = {
  sm: "text-lg tracking-[0.18em] md:text-xl",
  md: "text-xl tracking-[0.2em] md:text-2xl",
  lg: "text-3xl tracking-[0.16em] md:text-4xl",
  hero: "text-5xl tracking-[0.14em] md:text-7xl",
} as const;

export default function Wordmark({
  tone = "light",
  size = "md",
  showKo = false,
  className = "",
}: WordmarkProps) {
  const color = tone === "light" ? "text-white" : "text-purple-deep";
  const koColor = tone === "light" ? "text-cyan-soft" : "text-purple";

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <span className={`font-brand ${sizeMap[size]} ${color}`}>CARELAX</span>
      {showKo ? (
        <span
          className={`mt-1 text-sm font-medium tracking-[0.35em] md:text-base ${koColor}`}
        >
          케어렉스
        </span>
      ) : null}
    </span>
  );
}
