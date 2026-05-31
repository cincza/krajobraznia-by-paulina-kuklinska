import type { Metadata } from "next";

import { siteConfig } from "@/data/siteConfig";

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata(
  options: BuildMetadataOptions = {},
): Metadata {
  const title = options.title
    ? `${options.title} | ${siteConfig.companyName}`
    : siteConfig.seo.defaultTitle;
  const description = options.description ?? siteConfig.seo.description;
  const image = options.image ?? siteConfig.seo.ogImage;
  const metadataBase = new URL(siteConfig.url);
  const canonical = new URL(options.path ?? "/", metadataBase).toString();

  return {
    title,
    description,
    metadataBase,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      title,
      description,
      siteName: siteConfig.companyName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
