import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="px-6 md:px-12 py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-sans font-light text-foreground mb-8">
        Register your vignette now and hit the road{" "}
        <span className="font-serif italic">worry-free!</span>
      </h2>
      <button className="inline-flex items-center gap-3 bg-foreground text-background rounded-full pl-8 pr-3 py-3 text-sm font-semibold hover:opacity-90 transition-opacity">
        Register now
        <span className="bg-accent rounded-full p-2">
          <ArrowRight className="w-4 h-4 text-accent-foreground" />
        </span>
      </button>
    </section>
  );
};

export default CTASection;
