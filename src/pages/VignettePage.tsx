import { useParams, Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";
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
            <OrderForm data={data} />
          </div>
        </section>

        {/* Content sections */}
        <div className="max-w-4xl mx-auto px-6 pt-48 md:pt-40 pb-16">
          {/* Hero description & title */}
          <div className="mb-12">
            <p className="text-lg font-semibold leading-relaxed mb-4">{data.heroDescription}</p>
            <h2 className="text-3xl md:text-4xl font-serif">{data.heroTitle}</h2>
          </div>

          {/* Numbered Sections */}
          {data.numberedSections && data.numberedSections.length > 0 && (
            <div className="space-y-10 mb-16">
              {data.numberedSections.map((section, i) => (
                <div key={i}>
                  <span className="text-muted-foreground text-sm">{section.number}</span>
                  <h3 className="text-2xl font-serif mt-1 mb-3">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Toll Roads */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-4">Toll roads in {data.name}</h2>
            <p className="text-muted-foreground mb-4">{data.tollRoadsIntro}</p>
            {data.tollRoadsDetailedIntro && (
              <p className="text-muted-foreground mb-6">{data.tollRoadsDetailedIntro}</p>
            )}

            {/* Regional toll roads */}
            {data.tollRoadsRegional && data.tollRoadsRegional.length > 0 ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif mt-8 mb-4">Hungarian motorways and expressways requiring a vignette</h3>
                <p className="text-muted-foreground mb-6">The following road sections are subject to toll and require a valid Hungary vignette (e-matrica):</p>
                {data.tollRoadsRegional.map((region, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-bold mb-2">{region.region}</h4>
                    <ul className="space-y-1.5 mb-4">
                      {region.roads.map((road, j) => {
                        const match = road.match(/^(M\d+[A-Za-z]*)\s/);
                        return (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            {match ? (
                              <>
                                <span className="inline-flex items-center justify-center bg-blue-600 text-white text-xs font-bold rounded px-1.5 py-0.5 shrink-0 mt-0.5">{match[1]}</span>
                                <span>{road.substring(match[0].length)}</span>
                              </>
                            ) : (
                              <>
                                <span className="text-muted-foreground mt-1">•</span>
                                <span>{road}</span>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                {data.tollRoadsLegalNote && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3">Using toll roads legally in {data.name}</h3>
                    <p className="text-muted-foreground">{data.tollRoadsLegalNote}</p>
                  </div>
                )}
              </div>
            ) : (
              <>
                <ul className="space-y-2">
                  {data.tollRoadsList.map((road, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-muted-foreground mt-1">•</span>
                      <span>{road}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

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

          {/* CTA mid-page */}
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

          {/* Vehicle Classes */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-4">Vehicle classes for {data.name} vignettes</h2>
            <p className="text-muted-foreground mb-6">{data.vehicleClassesIntro}</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {data.vehicleClasses.map((vc, i) => (
                <div key={i} className="bg-muted rounded-xl p-4 text-center">
                  <p className="text-sm font-medium">{vc}</p>
                </div>
              ))}
            </div>
            {data.vehicleClassDetails && data.vehicleClassDetails.length > 0 && (
              <div className="space-y-4">
                {data.vehicleClassDetails.map((vc, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-sm mb-1">{vc.name}</h4>
                    <p className="text-sm text-muted-foreground">{vc.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Validity Periods */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif mb-4">Validity periods</h2>
            {data.validityPeriodsIntro && (
              <p className="text-muted-foreground mb-6">{data.validityPeriodsIntro}</p>
            )}
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
            <h2 className="text-3xl font-serif mb-4">{data.name} vignette prices 2026</h2>
            {data.priceIntro && (
              <p className="text-muted-foreground mb-6">{data.priceIntro}</p>
            )}
            {data.exchangeRate && (
              <div className="bg-muted rounded-xl p-4 mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold">{data.exchangeRate}</span>
                {data.exchangeDate && (
                  <span className="text-xs text-muted-foreground">Last update: {data.exchangeDate}</span>
                )}
              </div>
            )}
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

          {/* Lorry Section */}
          {data.lorrySection && (
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-4">{data.lorrySection.title}</h2>
              <p className="text-muted-foreground mb-4">{data.lorrySection.intro}</p>
              {data.lorrySection.factors && data.lorrySection.factors.length > 0 && (
                <>
                  <p className="text-sm font-medium mb-2">The toll is calculated based on:</p>
                  <ul className="space-y-2 mb-6">
                    {data.lorrySection.factors.map((factor, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {data.lorrySection.details.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
              ))}
              {data.lorrySection.link && (
                <a href={data.lorrySection.link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline">
                  {data.lorrySection.link.text}
                </a>
              )}
            </section>
          )}

          {/* Bridge Section (Romania) */}
          {data.bridgeSection && (
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-4">{data.bridgeSection.title}</h2>
              <p className="text-muted-foreground mb-6">{data.bridgeSection.intro}</p>
              <div className="space-y-6">
                {data.bridgeSection.bridges.map((bridge, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold mb-2">{bridge.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{bridge.description}</p>
                    {bridge.link && (
                      <a href={bridge.link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline">
                        {bridge.link.text}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

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

          {/* CTA bottom */}
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
