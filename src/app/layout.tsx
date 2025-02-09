import I18nProvider from "@/context/i18nProvider";
import { locales, defaultLocale } from "@/i18n/i18n";
import "../styles/globals.css";

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <html lang={params.locale || defaultLocale}>
      <body>
        <I18nProvider locale={params.locale || defaultLocale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
