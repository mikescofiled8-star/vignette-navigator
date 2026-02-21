import { useParams, Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Star, Mail, Car, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { countryDataMap } from "@/data/countries";

import czechRepublic from "@/assets/countries/czech-republic.webp";
import slovakia from "@/assets/countries/slovakia.webp";
import romania from "@/assets/countries/romania.webp";
import bulgaria from "@/assets/countries/bulgaria.webp";
import hungary from "@/assets/countries/hungary.webp";
import slovenia from "@/assets/countries/slovenia.webp";
import switzerland from "@/assets/countries/switzerland.webp";
import moldova from "@/assets/countries/moldova.webp";

const heroImages: Record<string, string> = {
  "vignette-czechia": czechRepublic,
  "vignette-slovakia": slovakia,
  "vignette-romania": romania,
  "vignette-bulgaria": bulgaria,
  "vignette-hungary": hungary,
  "vignette-slovenia": slovenia,
  "vignette-switzerland": switzerland,
  "vignette-moldova": moldova,
};

const allCountries = [
  { name: "Czech Republic", slug: "vignette-czechia", flag: "/flags/czech-republic.svg" },
  { name: "Slovakia", slug: "vignette-slovakia", flag: "/flags/slovakia.svg" },
  { name: "Hungary", slug: "vignette-hungary", flag: "/flags/hungary.svg" },
  { name: "Romania", slug: "vignette-romania", flag: "/flags/romania.svg" },
  { name: "Slovenia", slug: "vignette-slovenia", flag: "/flags/slovenia.svg" },
  { name: "Bulgaria", slug: "vignette-bulgaria", flag: "/flags/bulgaria.svg" },
  { name: "Switzerland", slug: "vignette-switzerland", flag: "/flags/switzerland.svg" },
  { name: "Moldova", slug: "vignette-moldova", flag: "/flags/moldova.svg" },
];

const VignettePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? countryDataMap[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Country not found</p>
      </div>
    );
  }

  const heroImage = slug ? heroImages[slug] : "";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          <img src={heroImage} alt={data.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
            <h1 className="text-5xl md:text-7xl font-serif text-white font-light">{data.name}</h1>
            <div className="absolute top-8 right-8 flex items-center gap-2 text-white">
              <img src={data.flag} alt={`${data.name} flag`} className="w-6 h-5 rounded-sm" />
              <span className="text-sm font-medium">E-vignette</span>
            </div>
          </div>

          {/* Order form card */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground text-sm">Enter details</p>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">4.6</span>
                  <span className="text-muted-foreground">Trustpilot</span>
                </div>
              </div>

              {/* Form fields */}
              <div className="space-y-3">
                <button className="flex items-center justify-between w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Vehicle category</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="flex items-center justify-between w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Validity period</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="flex items-center justify-between w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Start date</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <div className="flex items-center justify-end mt-6 gap-4">
                <button className="flex items-center gap-3 bg-foreground text-background rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity">
                  <span className="text-sm font-semibold">Add to cart</span>
                  <span className="bg-accent rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-accent-foreground" />
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-end mt-3 gap-2 text-muted-foreground text-xs">
                <Mail className="w-3 h-3" />
                <span>Immediate delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <div className="max-w-4xl mx-auto px-6 pt-48 md:pt-40 pb-16">
          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <p className="text-lg font-semibold leading-relaxed">{data.heroDescription}</p>
            <h2 className="text-3xl md:text-4xl font-serif">{data.heroTitle}</h2>
          </div>

          {/* Toll Roads */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-4">Toll roads in {data.name}</h2>
            <p className="text-muted-foreground mb-6">{data.tollRoadsIntro}</p>
            <ul className="space-y-2">
              {data.tollRoadsList.map((road, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{road}</span>
                </li>
              ))}
            </ul>
            {data.tollFreeIntro && (
              <>
                <h3 className="text-xl font-semibold mt-8 mb-3">{data.tollFreeIntro}</h3>
                <ul className="space-y-2">
                  {data.tollFreeList?.map((road, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-muted-foreground mt-1">•</span>
                      <span>{road}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          {/* Vehicle Classes */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-4">Vehicle classes</h2>
            <p className="text-muted-foreground mb-6">{data.vehicleClassesIntro}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.vehicleClasses.map((vc, i) => (
                <div key={i} className="bg-muted rounded-xl p-4 text-center">
                  <p className="text-sm font-medium">{vc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Validity Periods */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-4">Validity periods</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.validityPeriods.map((vp, i) => (
                <div key={i} className="border border-border rounded-xl p-4">
                  <p className="font-semibold text-sm">{vp.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{vp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Price Tables */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-6">Vignette prices 2026</h2>
            <div className="space-y-8">
              {data.priceTables.map((table, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold mb-3">{table.category}</h3>
                  <div className="border border-border rounded-xl overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted">
                          <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Validity period</th>
                          {table.rows[0]?.localPrice && (
                            <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Local</th>
                          )}
                          <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">EUR</th>
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, j) => (
                          <tr key={j} className="border-t border-border">
                            <td className="px-4 py-3 text-sm">{row.period}</td>
                            {row.localPrice && (
                              <td className="px-4 py-3 text-sm text-right text-muted-foreground">{row.localPrice}</td>
                            )}
                            <td className="px-4 py-3 text-sm text-right font-semibold">{row.eurPrice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">{data.priceNote}</p>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-foreground rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-background/70 text-xs">E-vignette</p>
                <p className="text-background text-xl font-bold">{data.name}</p>
              </div>
              <button className="flex items-center gap-3 bg-background text-foreground rounded-full pl-6 pr-2 py-2">
                <span className="text-sm font-semibold">Buy now</span>
                <span className="bg-accent rounded-full p-2">
                  <ArrowRight className="w-4 h-4 text-accent-foreground" />
                </span>
              </button>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <details key={i} className="group border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="text-sm font-medium pr-4">{faq.question}</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Neighbouring countries */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-4">Vignettes in neighbouring countries</h2>
            <p className="text-muted-foreground mb-6">{data.neighbourIntro}</p>
            <div className="flex flex-wrap gap-3">
              {allCountries.map((c) => (
                <Link
                  key={c.slug}
                  to={`/${c.slug}`}
                  className="flex items-center gap-2 border border-border rounded-full px-4 py-2 hover:bg-muted transition-colors"
                >
                  <img src={c.flag} alt={c.name} className="w-5 h-4 rounded-sm object-cover" />
                  <span className="text-sm font-medium">{c.name}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VignettePage;
