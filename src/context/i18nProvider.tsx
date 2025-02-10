"use client";

import { ReactNode, useState, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";

const defaultLocale = "de";

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || defaultLocale;
    setLocale(savedLocale);

    import(`../../public/locales/${savedLocale}/common.json`)
      .then((mod) => setMessages(mod))
      .catch((error) => console.error("Translation file not loaded", error));
  }, []);

  if (!Object.keys(messages).length) {
    return <div>Loading...</div>;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
