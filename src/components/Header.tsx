import { ChevronDown, ShoppingBag } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguageCurrency } from "@/contexts/LanguageCurrencyContext";
import { LANG_LABELS, type LangCode } from "@/i18n/translations";

const languages: { code: LangCode; label: string }[] = Object.entries(LANG_LABELS).map(([code, label]) => ({ code: code as LangCode, label }));
const currencies = ["EUR", "USD", "GBP", "CHF", "CZK", "HUF", "RON", "BGN"];

const countryLinks = [
  { name: "Czech Republic", slug: "vignette-czechia", flag: "/flags/czech-republic.svg" },
  { name: "Slovakia", slug: "vignette-slovakia", flag: "/flags/slovakia.svg" },
  { name: "Romania", slug: "vignette-romania", flag: "/flags/romania.svg" },
  { name: "Bulgaria", slug: "vignette-bulgaria", flag: "/flags/bulgaria.svg" },
  { name: "Hungary", slug: "vignette-hungary", flag: "/flags/hungary.svg" },
  { name: "Slovenia", slug: "vignette-slovenia", flag: "/flags/slovenia.svg" },
  { name: "Switzerland", slug: "vignette-switzerland", flag: "/flags/switzerland.svg" },
  { name: "Moldova", slug: "vignette-moldova", flag: "/flags/moldova.svg" },
];

const Header = () => {
  const { language, currency, setLanguage, setCurrency, t, langLabel } = useLanguageCurrency();
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const [vignetteOpen, setVignetteOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const currRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (currRef.current && !currRef.current.contains(e.target as Node)) setCurrOpen(false);
      if (vignetteRef.current && !vignetteRef.current.contains(e.target as Node)) setVignetteOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-foreground flex items-center justify-end gap-4 px-6 py-2 text-sm text-background/70">
        <div ref={langRef} className="relative">
          <button onClick={() => { setLangOpen(!langOpen); setCurrOpen(false); }} className="flex items-center gap-1 hover:text-background transition-colors">
            {langLabel} <ChevronDown className="w-3 h-3" />
          </button>
          {langOpen && (
            <div className="absolute right-0 top-full mt-1 bg-foreground border border-background/20 rounded-md py-1 z-50 min-w-[120px]">
              {languages.map(l => (
                <button key={l.code} onClick={() => { setLanguage(l.code); setLangOpen(false); }} className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-background/10 ${l.code === language ? 'text-background' : 'text-background/70'}`}>{l.label}</button>
              ))}
            </div>
          )}
        </div>
        <div ref={currRef} className="relative">
          <button onClick={() => { setCurrOpen(!currOpen); setLangOpen(false); }} className="flex items-center gap-1 hover:text-background transition-colors">
            {currency} <ChevronDown className="w-3 h-3" />
          </button>
          {currOpen && (
            <div className="absolute right-0 top-full mt-1 bg-foreground border border-background/20 rounded-md py-1 z-50 min-w-[80px]">
              {currencies.map(c => (
                <button key={c} onClick={() => { setCurrency(c); setCurrOpen(false); }} className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-background/10 ${c === currency ? 'text-background' : 'text-background/70'}`}>{c}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main nav */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-background">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            <span className="text-primary">toll</span>vignettes.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <div ref={vignetteRef} className="relative">
            <button
              onClick={() => setVignetteOpen(!vignetteOpen)}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              {t("nav.evignettes")} <ChevronDown className={`w-3 h-3 transition-transform ${vignetteOpen ? 'rotate-180' : ''}`} />
            </button>
            {vignetteOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-background border border-border rounded-lg shadow-lg py-2 z-50 min-w-[600px]">
                <div className="grid grid-cols-3 gap-x-8 gap-y-1 px-6 py-3">
                  {countryLinks.map(c => (
                    <Link
                      key={c.slug}
                      to={`/${c.slug}`}
                      onClick={() => setVignetteOpen(false)}
                      className="flex items-center gap-2.5 py-2 hover:text-primary transition-colors text-sm"
                    >
                      <img src={c.flag} alt={c.name} className="w-5 h-3.5 rounded-sm object-cover" />
                      <span>{c.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#contact" className="hover:text-primary transition-colors">{t("nav.contact")}</a>
        </nav>

        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <ShoppingBag className="w-5 h-5 text-foreground" />
        </button>
      </header>
    </>
  );
};

export default Header;
