import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "tr", "de"],
    defaultLocale: "de",
    localeDetection: false,
  },
};

export default nextConfig;
