import type { Metadata } from "next";

const title = "AstraCodeX";
const description = "A comprehensive collection of Open Source Intelligence (OSINT) resources";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "OSINT",
    "Open Source Intelligence",
    "intelligence gathering",
    "security tools",
    "digital investigation",
    "research tools",
    "information resources",
  ],
  authors: [
    {
      name: "iqlip",
    },
  ],
  creator: "iqlip",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#09090b" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};
