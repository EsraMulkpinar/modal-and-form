"use client";
import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/i18n/i18n";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}${pathname}`);
  };

  return (
    <div>
      {locales.map((locale) => (
        <button key={locale} onClick={() => changeLanguage(locale)}>
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
