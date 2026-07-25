const fs = require("fs");

let t = fs.readFileSync("src/app/page.tsx", "utf8");
console.log("before kor", /[\uac00-\ud7a3]/.test(t));

const reps = [
  ["bg-teal-deep text-stone", "bg-purple-deep text-white"],
  ["bg-teal text-stone", "bg-purple text-white"],
  ["bg-teal-deep", "bg-purple-deep"],
  ["bg-teal ", "bg-purple "],
  ["bg-teal\"", "bg-purple\""],
  ["text-teal-soft", "text-purple-soft"],
  ["text-teal-deep", "text-purple-deep"],
  ["text-teal", "text-purple"],
  ["border-teal", "border-purple"],
  ["hover:bg-teal-deep", "hover:bg-purple-deep"],
  ["bg-champagne", "bg-cyan"],
  ["hover:bg-champagne-soft", "hover:bg-cyan-soft"],
  ["text-champagne-soft", "text-cyan-soft"],
  ["text-champagne", "text-cyan"],
  ["border-champagne", "border-cyan"],
  ["hover:border-champagne-soft", "hover:border-cyan-soft"],
  ["hover:text-champagne-soft", "hover:text-cyan-soft"],
  ["text-stone/90", "text-white/90"],
  ["text-stone/75", "text-white/75"],
  ["border-stone/35", "border-white/35"],
];

for (const [a, b] of reps) t = t.split(a).join(b);

const logoBlock = `<div className="fade-up-delay mt-5">
              <Image
                src="/brand/logo-on-dark.png"
                alt="Carelax"
                width={420}
                height={117}
                className="h-14 w-auto md:h-20"
                priority
              />
            </div>`;

t = t.replace(
  /<h1 className="font-display fade-up-delay[\s\S]*?<\/h1>/,
  logoBlock,
);

t = t.replace('<main id="top">', '<main id="main">');
if (!t.includes('id="top"')) {
  t = t.replace(
    '<section className="relative min-h-[100svh]',
    '<section id="top" className="relative min-h-[100svh]',
  );
}

// CTA weight
t = t.split("text-sm font-semibold tracking-wide text-purple-deep").join(
  "text-sm font-bold tracking-wide text-purple-deep",
);
t = t.split("text-sm font-semibold tracking-wide text-white").join(
  "text-sm font-bold tracking-wide text-white",
);

fs.writeFileSync("src/app/page.tsx", t, "utf8");
console.log(
  "after kor",
  /[\uac00-\ud7a3]/.test(t),
  "logo",
  t.includes("logo-on-dark"),
);
