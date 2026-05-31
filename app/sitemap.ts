import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/oferta", "/realizacje", "/o-pracowni", "/kontakt"];

  return routes.map((route) => ({
    url: new URL(route || "/", siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
