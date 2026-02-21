import { ChevronDown, ShoppingBag } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = ["English", "Deutsch", "Français", "Română", "Česky", "Magyar", "Slovensky", "Slovenščina", "Български"];
const currencies = ["EUR", "USD", "GBP", "CHF", "CZK", "HUF", "RON", "BGN"];

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [selectedCurr, setSelectedCurr] = useState("EUR");
  const langRef = useRef<HTMLDivElement>(null);
  const currRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (currRef.current && !currRef.current.contains(e.target as Node)) setCurrOpen(false);
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
            {selectedLang} <ChevronDown className="w-3 h-3" />
          </button>
          {langOpen && (
            <div className="absolute right-0 top-full mt-1 bg-foreground border border-background/20 rounded-md py-1 z-50 min-w-[120px]">
              {languages.map(l => (
                <button key={l} onClick={() => { setSelectedLang(l); setLangOpen(false); }} className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-background/10 ${l === selectedLang ? 'text-background' : 'text-background/70'}`}>{l}</button>
              ))}
            </div>
          )}
        </div>
        <div ref={currRef} className="relative">
          <button onClick={() => { setCurrOpen(!currOpen); setLangOpen(false); }} className="flex items-center gap-1 hover:text-background transition-colors">
            {selectedCurr} <ChevronDown className="w-3 h-3" />
          </button>
          {currOpen && (
            <div className="absolute right-0 top-full mt-1 bg-foreground border border-background/20 rounded-md py-1 z-50 min-w-[80px]">
              {currencies.map(c => (
                <button key={c} onClick={() => { setSelectedCurr(c); setCurrOpen(false); }} className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-background/10 ${c === selectedCurr ? 'text-background' : 'text-background/70'}`}>{c}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main nav */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            <span className="text-primary">toll</span>vignettes.
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            E-vignettes <ChevronDown className="w-3 h-3" />
          </button>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <ShoppingBag className="w-5 h-5 text-foreground" />
        </button>
      </header>
    </>
  );
};

export default Header;
