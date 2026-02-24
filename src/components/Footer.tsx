import { useLanguageCurrency } from "@/contexts/LanguageCurrencyContext";

const Footer = () => {
  const { t } = useLanguageCurrency();
  return (
    <footer className="px-6 md:px-12 py-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans font-light text-foreground mb-6">
          {t("footer.title1")}{" "}
          <span className="font-serif italic">{t("footer.title2")}</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {t("footer.desc")}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-primary font-bold text-lg">toll</span>
          <span className="font-bold text-lg text-foreground">vignettes.</span>
          <span className="ml-4">© {new Date().getFullYear()} {t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
