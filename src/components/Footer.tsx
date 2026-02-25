import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,15%,13%)] text-[hsl(0,0%,85%)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-primary font-bold text-2xl">toll</span>
            <span className="font-bold text-2xl text-white">vignettes.</span>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/company-info" className="hover:text-white transition-colors">Company info</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/terms" className="hover:text-white transition-colors">Terms and conditions</Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link>
              <Link to="/responsible-disclosure" className="hover:text-white transition-colors">Responsible disclosure policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trustpilot bar */}
      <div className="bg-[hsl(220,10%,18%)] px-6 md:px-12 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Star className="h-5 w-5 fill-green-500 text-green-500" />
          <span className="font-semibold text-white">4.6</span>
          <span className="text-[hsl(0,0%,70%)]">Trustpilot</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
