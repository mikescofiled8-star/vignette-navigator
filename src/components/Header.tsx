import { ChevronDown, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-end gap-4 px-6 py-2 text-sm text-muted-foreground">
        <button className="flex items-center gap-1 hover:text-foreground transition-colors">
          English <ChevronDown className="w-3 h-3" />
        </button>
        <button className="flex items-center gap-1 hover:text-foreground transition-colors">
          EUR <ChevronDown className="w-3 h-3" />
        </button>
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
