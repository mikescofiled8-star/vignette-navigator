import featureSaveTime from "@/assets/feature-save-time.png";
import featureAvoidStress from "@/assets/feature-avoid-stress.png";
import featureSaveMoney from "@/assets/feature-save-money.png";

const features = [
  {
    num: "01.",
    title: "Save time",
    desc: "Registering your vignette online means no more waiting at petrol stations or border shops. Within minutes you'll receive your e-vignette by email, so you can hit the road immediately.",
    image: featureSaveTime,
  },
  {
    num: "02.",
    title: "Avoid stress",
    desc: "Your license plate is registered instantly in the official toll system. That means you can drive confidently through Europe without worrying about missed tolls or last-minute purchases.",
    image: featureAvoidStress,
  },
  {
    num: "03.",
    title: "Save money",
    desc: "Driving without a valid vignette can lead to high penalties in many countries. By registering your e-vignette in advance, you save money and protect yourself from unexpected roadside fines.",
    image: featureSaveMoney,
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-5xl font-sans font-light text-foreground text-center mb-16">
        Digital vignettes for European <span className="font-serif italic">highways.</span>
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
