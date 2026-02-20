import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a digital vignette?",
    a: "A digital vignette is an electronic toll pass that replaces the traditional paper sticker. Instead of placing a sticker on your windshield, your vehicle's license plate is registered online in the official toll system.",
  },
  {
    q: "Do I need a vignette to drive in Europe?",
    a: "Yes, several countries in Europe require a vignette for highway use, such as Hungary, Slovakia, Switzerland, Slovenia, Czech Republic, Romania, Bulgaria, and Moldova. Without one, you risk receiving fines.",
  },
  {
    q: "How do I register a digital vignette online?",
    a: "Simply choose your country, enter your vehicle details, and complete the payment. Your vignette will be sent instantly by email, and your license plate will be registered in the official toll system.",
  },
  {
    q: "How long is a vignette valid?",
    a: "Vignettes are typically valid for a specific period (e.g. 1 day, 7 days, 30 days, or 1 year), depending on the country and the option you select during purchase.",
  },
  {
    q: "What happens if I drive without a vignette?",
    a: "Driving without a valid vignette can result in costly fines, which are often much higher than the vignette itself. By registering your vignette in advance online, you avoid penalties.",
  },
  {
    q: "Can I buy a vignette online with a credit card?",
    a: "Yes, you can securely purchase your digital vignette online using all major credit cards. The process is quick and safe, and your vignette confirmation is delivered instantly by email.",
  },
];

const FAQSection = () => {
  return (
    <section className="px-6 md:px-12 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-sans font-light text-foreground text-center mb-12">
        Frequently asked questions about <span className="font-serif italic">vignettes</span>
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
