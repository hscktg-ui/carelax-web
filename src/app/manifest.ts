import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.nameKo} (${SITE.nameEn})`,
    short_name: SITE.nameEn,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f2f4f2",
    theme_color: "#0f2e2b",
    lang: "ko-KR",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
