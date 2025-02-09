"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

export default function I18nProvider({ children, locale }: { children: ReactNode; locale: string }) {
  return (
    <NextIntlClientProvider locale={locale} messages={require(`@/../public/locales/${locale}/common.json`)}>
      {children}
    </NextIntlClientProvider>
  );
}
