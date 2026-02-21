import { useRef, useState, useCallback, useEffect } from "react";
import { ArrowRight, Grid2X2, X } from "lucide-react";

import czechRepublic from "@/assets/countries/czech-republic.webp";
import slovakia from "@/assets/countries/slovakia.webp";
import romania from "@/assets/countries/romania.webp";
import bulgaria from "@/assets/countries/bulgaria.webp";
import hungary from "@/assets/countries/hungary.webp";
import slovenia from "@/assets/countries/slovenia.webp";
import switzerland from "@/assets/countries/switzerland.webp";
import moldova from "@/assets/countries/moldova.webp";

const countries = [
  { name: "Czech Republic", slug: "czech-republic", image: czechRepublic, flag: "/flags/czech-republic.svg", link: "https://tollvignettes.eu/vignette-czechia" },
  { name: "Slovakia", slug: "slovakia", image: slovakia, flag: "/flags/slovakia.svg", link: "https://tollvignettes.eu/vignette-slovakia" },
  { name: "Romania", slug: "romania", image: romania, flag: "/flags/romania.svg", link: "https://tollvignettes.eu/vignette-romania" },
  { name: "Bulgaria", slug: "bulgaria", image: bulgaria, flag: "/flags/bulgaria.svg", link: "https://tollvignettes.eu/vignette-bulgaria" },
  { name: "Hungary", slug: "hungary", image: hungary, flag: "/flags/hungary.svg", link: "https://tollvignettes.eu/vignette-hungary" },
  { name: "Slovenia", slug: "slovenia", image: slovenia, flag: "/flags/slovenia.svg", link: "https://tollvignettes.eu/vignette-slovenia" },
  { name: "Switzerland", slug: "switzerland", image: switzerland, flag: "/flags/switzerland.svg", link: "https://tollvignettes.eu/vignette-switzerland" },
  { name: "Moldova", slug: "moldova", image: moldova, flag: "/flags/moldova.svg", link: "https://tollvignettes.eu/vignette-moldova" },
];

const CountryCard = ({ country }: { country: typeof countries[0] }) => (
  <div className="relative w-full h-full rounded-2xl overflow-hidden group">
    <img
      src={country.image}
      alt={country.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      draggable={false}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
    <div className="absolute top-5 left-5">
      <p className="text-xs font-medium text-primary-foreground/80">E-vignettes</p>
      <div className="flex items-center gap-2 mt-1">
        <img src={country.flag} alt={`${country.name} flag`} className="w-5 h-4 rounded-sm object-cover" draggable={false} />
        <h3 className="text-xl font-bold text-primary-foreground">{country.name}</h3>
      </div>
    </div>
    <div className="absolute bottom-5 left-5 right-5">
      <a
        href={country.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full bg-primary-foreground rounded-full pl-6 pr-2 py-2 hover:shadow-lg transition-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm font-semibold text-foreground">Buy now</span>
        <span className="bg-accent rounded-full p-2">
          <ArrowRight className="w-4 h-4 text-accent-foreground" />
        </span>
      </a>
    </div>
  </div>
);

const CountryCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showGrid, setShowGrid] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const animFrameRef = useRef<number>(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    if (Math.abs(dx) > 3) setHasDragged(true);
    cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft - dx;
      }
    });
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch support
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setStartX(e.touches[0].pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const dx = e.touches[0].pageX - startX;
    scrollRef.current.scrollLeft = scrollLeft - dx;
  }, [startX, scrollLeft]);

  useEffect(() => {
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  return (
    <section className="pt-6 pb-16">
      {/* Grid overlay */}
      {showGrid && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6" onClick={() => setShowGrid(false)}>
          <div className="relative bg-background rounded-3xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowGrid(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {countries.map((country) => (
                <div key={country.slug} className="h-[320px] md:h-[380px]">
                  <CountryCard country={country} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Left sidebar - single grid icon */}
        <div className="hidden md:flex flex-col items-center pl-6 md:pl-12 pt-2">
          <button
            onClick={() => setShowGrid(true)}
            className="border border-border rounded-full p-4 hover:bg-muted transition-colors"
            title="Show all countries"
          >
            <Grid2X2 className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className={`flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide flex-1 pr-6 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: isDragging ? "auto" : "smooth" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {countries.map((country) => (
            <div
              key={country.slug}
              className="relative flex-shrink-0 w-[260px] md:w-[300px] h-[380px] md:h-[420px] snap-start"
            >
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCarousel;
