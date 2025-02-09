import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ReactNode } from "react";
import "@/styles/globals.css";
import I18nProvider from "@/context/i18nProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <I18nProvider>
          <LanguageSwitcher />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
