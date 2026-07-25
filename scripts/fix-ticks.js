const fs = require("fs");
const files = [
  "src/app/page.tsx",
  "src/app/layout.tsx",
  "src/components/Header.tsx",
  "src/components/Footer.tsx",
  "src/app/globals.css",
  "src/app/manifest.ts",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
];

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  let t = fs.readFileSync(f, "utf8");
  const before = t;
  // Remove a trailing line that is only `}
  t = t.replace(/(?:\r?\n)`\}\s*$/, "\n");
  // Also if file ends with `} without newline handling
  if (t.trimEnd().endsWith("`}")) {
    t = t.trimEnd().slice(0, -2).trimEnd() + "\n";
  }
  if (!t.endsWith("\n")) t += "\n";
  fs.writeFileSync(f, t, "utf8");
  console.log(
    f,
    "changed",
    before !== t,
    "kor",
    /[\uac00-\ud7a3]/.test(t),
    "tail",
    JSON.stringify(t.trimEnd().slice(-40)),
  );
}
