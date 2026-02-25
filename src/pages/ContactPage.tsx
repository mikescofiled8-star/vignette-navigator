import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguageCurrency } from "@/contexts/LanguageCurrencyContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactPage = () => {
  const { t } = useLanguageCurrency();

  const faqs = [
    { q: t("contact.faq1.q"), a: t("contact.faq1.a") },
    { q: t("contact.faq2.q"), a: t("contact.faq2.a") },
    { q: t("contact.faq3.q"), a: t("contact.faq3.a") },
    { q: t("contact.faq4.q"), a: t("contact.faq4.a") },
    { q: t("contact.faq5.q"), a: t("contact.faq5.a") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            {t("contact.heroTitle")}
          </h1>
        </section>

        {/* Contact Info */}
        <section className="px-6 md:px-12 pb-16">
          <div className="bg-secondary/50 rounded-2xl px-8 md:px-16 py-12 md:py-20 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-8">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="space-y-6 border-t border-border pt-8">
              <a
                href="mailto:support@tollvignettes.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-base"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span>support@tollvignettes.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-base">
                <MessageCircle className="w-5 h-5" />
                <span>{t("contact.liveChat")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {t("contact.faqTitle")}
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-sm md:text-base font-medium py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
