import { useLanguageCurrency } from "@/contexts/LanguageCurrencyContext";

const HeroSection = () => {
  const { t } = useLanguageCurrency();
  return (
    <section className="px-6 md:px-12 pt-8 pb-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-foreground">
        {t("hero.title1")} <span className="font-serif italic text-foreground">{t("hero.title2")}</span>
      </h1>
    </section>
  );
};

export default HeroSection;
