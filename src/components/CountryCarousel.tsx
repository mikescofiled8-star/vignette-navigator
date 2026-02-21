import { useRef, useState, useCallback } from "react";
import { ArrowRight, Grid2X2, LayoutList, Map, Rows3 } from "lucide-react";

import czechRepublic from "@/assets/countries/czech-republic.webp";
import slovakia from "@/assets/countries/slovakia.webp";
import romania from "@/assets/countries/romania.webp";
import bulgaria from "@/assets/countries/bulgaria.webp";
import hungary from "@/assets/countries/hungary.webp";
import slovenia from "@/assets/countries/slovenia.webp";
import switzerland from "@/assets/countries/switzerland.webp";
import moldova from "@/assets/countries/moldova.webp";

const countries = [
  { name: "Czech Republic", slug: "czech-republic", image: czechRepublic, flag: "/flags/czech-republic.svg" },
  { name: "Slovakia", slug: "slovakia", image: slovakia, flag: "/flags/slovakia.svg" },
  { name: "Romania", slug: "romania", image: romania, flag: "/flags/romania.svg" },
  { name: "Bulgaria", slug: "bulgaria", image: bulgaria, flag: "/flags/bulgaria.svg" },
  { name: "Hungary", slug: "hungary", image: hungary, flag: "/flags/hungary.svg" },
  { name: "Slovenia", slug: "slovenia", image: slovenia, flag: "/flags/slovenia.svg" },
  { name: "Switzerland", slug: "switzerland", image: switzerland, flag: "/flags/switzerland.svg" },
  { name: "Moldova", slug: "moldova", image: moldova, flag: "/flags/moldova.svg" },
];

const viewIcons = [
  { icon: Grid2X2, label: "Grid" },
  { icon: Rows3, label: "Rows" },
  { icon: LayoutList, label: "List" },
  { icon: Map, label: "Map" },
];

const CountryCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section className="pt-6 pb-16">
      <div className="flex items-start gap-4">
        {/* Left sidebar icons */}
        <div className="hidden md:flex flex-col items-center gap-1 pl-6 md:pl-12 pt-2">
          <div className="border border-border rounded-full p-2 flex flex-col gap-1">
            {viewIcons.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveView(i)}
                className={`p-2 rounded-full transition-colors ${
                  activeView === i ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
                title={item.label}
              >
                <item.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className={`flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide flex-1 pr-6 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {countries.map((country) => (
            <div
              key={country.slug}
              className="relative flex-shrink-0 w-[260px] md:w-[300px] h-[380px] md:h-[420px] rounded-2xl overflow-hidden snap-start group"
            >
              <img
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />

              {/* Country info */}
              <div className="absolute top-5 left-5">
                <p className="text-xs font-medium text-primary-foreground/80">E-vignettes</p>
                <div className="flex items-center gap-2 mt-1">
                  <img src={country.flag} alt={`${country.name} flag`} className="w-5 h-4 rounded-sm object-cover" />
                  <h3 className="text-xl font-bold text-primary-foreground">{country.name}</h3>
                </div>
              </div>

              {/* Buy now button */}
              <div className="absolute bottom-5 left-5 right-5">
                <button className="flex items-center justify-between w-full bg-primary-foreground rounded-full pl-6 pr-2 py-2 hover:shadow-lg transition-shadow">
                  <span className="text-sm font-semibold text-foreground">Buy now</span>
                  <span className="bg-accent rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-accent-foreground" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCarousel;
