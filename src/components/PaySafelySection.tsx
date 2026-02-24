import paySafelyImg from "@/assets/pay-safely.jpg";
import { useLanguageCurrency } from "@/contexts/LanguageCurrencyContext";

const PaySafelySection = () => {
  const { t } = useLanguageCurrency();
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
        <img
          src={paySafelyImg}
          alt="Pay safely online"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-sans font-light text-primary-foreground leading-tight">
            {t("pay.title1")} <span className="font-serif italic">{t("pay.safely")}</span> {t("pay.title2")}{" "}
            <span className="font-serif italic">{t("pay.instantly")}</span>
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg">
            {t("pay.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaySafelySection;
