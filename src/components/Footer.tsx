const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans font-light text-foreground mb-6">
          Why register your vignette online with{" "}
          <span className="font-serif italic">Tollvignettes.eu?</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          When you purchase your vignette through Tollvignettes.eu, you get instant delivery straight
          to your inbox, no queues, no paperwork, and no waiting at petrol stations. Your license
          plate is registered in the official toll system within minutes.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-primary font-bold text-lg">toll</span>
          <span className="font-bold text-lg text-foreground">vignettes.</span>
          <span className="ml-4">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
