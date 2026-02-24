import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type LangCode, LANG_LABELS, convertPrice } from "@/i18n/translations";

interface LanguageCurrencyContextType {
  language: LangCode;
  currency: string;
  setLanguage: (lang: LangCode) => void;
  setCurrency: (curr: string) => void;
  t: (key: string) => string;
  formatPrice: (eurPrice: string) => string;
  langLabel: string;
}

const LanguageCurrencyContext = createContext<LanguageCurrencyContextType | null>(null);

export const LanguageCurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LangCode>("en");
  const [currency, setCurrency] = useState("EUR");

  const t = useCallback(
    (key: string): string => {
      return translations[language]?.[key] || translations.en[key] || key;
    },
    [language]
  );

  const formatPrice = useCallback(
    (eurPrice: string): string => {
      return convertPrice(eurPrice, currency);
    },
    [currency]
  );

  const langLabel = LANG_LABELS[language];

  return (
    <LanguageCurrencyContext.Provider value={{ language, currency, setLanguage, setCurrency, t, formatPrice, langLabel }}>
      {children}
    </LanguageCurrencyContext.Provider>
  );
};

export const useLanguageCurrency = () => {
  const ctx = useContext(LanguageCurrencyContext);
  if (!ctx) throw new Error("useLanguageCurrency must be used within LanguageCurrencyProvider");
  return ctx;
};
