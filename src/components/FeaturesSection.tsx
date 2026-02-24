import featureSaveTime from "@/assets/feature-save-time.png";
import featureAvoidStress from "@/assets/feature-avoid-stress.png";
import featureSaveMoney from "@/assets/feature-save-money.png";
import { useLanguageCurrency } from "@/contexts/LanguageCurrencyContext";

const FeaturesSection = () => {
  const { t } = useLanguageCurrency();

  const features = [
    { num: "01.", title: t("features.01.title"), desc: t("features.01.desc"), image: featureSaveTime },
    { num: "02.", title: t("features.02.title"), desc: t("features.02.desc"), image: featureAvoidStress },
    { num: "03.", title: t("features.03.title"), desc: t("features.03.desc"), image: featureSaveMoney },
  ];

  return (
    <section className="px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-5xl font-sans font-light text-foreground text-center mb-16">
        {t("features.title1")} <span className="font-serif italic">{t("features.title2")}</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.num} className="flex flex-col">
            <div className="bg-secondary rounded-2xl overflow-hidden mb-6">
              <img src={f.image} alt={f.title} className="w-full h-[300px] md:h-48 object-cover" />
            </div>
            <span className="text-sm text-muted-foreground font-medium">{f.num}</span>
            <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
