import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.nameKo} (${SITE.nameEn})`,
    short_name: SITE.nameEn,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5fa",
    theme_color: "#46247d",
    lang: "ko-KR",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
