import { createContext, useContext, useState, ReactNode } from "react";
import { translations, serviceTranslations, productTranslations, type Language } from "./translations";

type Translations = (typeof translations)["en"] | (typeof translations)["sv"];
type ServiceTranslations = (typeof serviceTranslations)["en"] | (typeof serviceTranslations)["sv"];
type ProductTranslations = (typeof productTranslations)["en"] | (typeof productTranslations)["sv"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  st: ServiceTranslations;
  pt: ProductTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("sv");

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    st: serviceTranslations[language],
    pt: productTranslations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
