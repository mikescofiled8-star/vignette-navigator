import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Mail, User, Globe, Building, MapPin, CreditCard, Calendar, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguageCurrency } from "@/contexts/LanguageCurrencyContext";
import { CardBrandLogos, detectCardBrand, formatCardNumber } from "@/components/CardBrandIcons";

interface OrderData {
  country: string;
  vehicleCategory: string;
  validityPeriod: string;
  startDate: string;
  endDate: string;
  price: string;
  registrationCountry: string;
  registrationCode: string;
  licensePlate: string;
}

const COUNTRIES = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Czech Republic", "Denmark",
  "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
  "Italy", "Latvia", "Lithuania", "Luxembourg", "Moldova", "Netherlands",
  "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
  "Spain", "Sweden", "Switzerland", "Turkey", "United Kingdom",
];

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = (location.state as OrderData) || null;
  const { t, formatPrice } = useLanguageCurrency();

  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<"personal" | "business">("personal");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [billingCountryOpen, setBillingCountryOpen] = useState(false);
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t("checkout.noOrder")}</h1>
          <p className="text-muted-foreground mb-6">{t("checkout.noOrderDesc")}</p>
          <button onClick={() => navigate("/")} className="bg-foreground text-background rounded-full px-6 py-3 text-sm font-semibold">
            {t("checkout.goHome")}
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const displayPrice = formatPrice(orderData.price);
  // Step 1 = info (+ billing if business), Step 2 = payment
  const totalSteps = 2;

  const validateAndNext = () => {
    if (!email || !confirmEmail) {
      setEmailError(t("checkout.emailRequired") || "Email is required");
      return;
    }
    if (email !== confirmEmail) {
      setEmailError(t("checkout.emailMismatch") || "Email addresses do not match");
      return;
    }
    setEmailError("");
    setStep(2);
  };

  const inputClass = "flex items-center gap-3 w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors bg-card overflow-hidden";
  const inputFieldClass = "w-full min-w-0 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        {/* Order summary bar */}
        <div className="bg-card rounded-2xl shadow-md p-4 mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-foreground">
            <span className="font-semibold">{orderData.country}</span>
            <span className="text-muted-foreground">·</span>
            <span>{orderData.vehicleCategory}</span>
            <span className="text-muted-foreground">·</span>
            <span>{orderData.validityPeriod}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-lg">{orderData.registrationCode} {orderData.licensePlate}</span>
            <span className="font-bold text-foreground text-lg">{displayPrice}</span>
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < step ? "bg-accent" : "bg-border"}`} />
          ))}
        </div>

        {/* Step 1: Checkout information */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">{t("checkout.info")}</h2>
              <p className="text-sm text-muted-foreground mt-1">{t("checkout.emailNote")}</p>
            </div>

            <div className="flex rounded-xl overflow-hidden border border-border">
              <button
                onClick={() => setAccountType("personal")}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${accountType === "personal" ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:bg-muted/50"}`}
              >
                {t("checkout.personal")}
              </button>
              <button
                onClick={() => setAccountType("business")}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${accountType === "business" ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:bg-muted/50"}`}
              >
                {t("checkout.business")}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={`${inputClass} ${emailError ? "border-destructive" : ""}`}>
                <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  {email && <span className="text-xs text-muted-foreground block leading-none mb-0.5">{t("checkout.email")}</span>}
                  <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(""); }} placeholder={t("checkout.email")} className={inputFieldClass} />
                </div>
              </div>
              <div className={`${inputClass} ${emailError ? "border-destructive" : ""}`}>
                <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  {confirmEmail && <span className="text-xs text-muted-foreground block leading-none mb-0.5">{t("checkout.confirmEmail")}</span>}
                  <input type="email" value={confirmEmail} onChange={(e) => { setConfirmEmail(e.target.value); setEmailError(""); }} placeholder={t("checkout.confirmEmail")} className={inputFieldClass} />
                </div>
              </div>
            </div>
            {emailError && (
              <p className="text-sm text-destructive font-medium -mt-3">{emailError}</p>
            )}

            {/* Business billing address - same step */}
            {accountType === "business" && (
              <>
                <p className="text-sm font-medium text-muted-foreground">{t("checkout.billingAddress")}</p>

                <div className={inputClass}>
                  <Building className="w-5 h-5 text-muted-foreground shrink-0" />
                  <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder={t("checkout.companyName")} className={inputFieldClass} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className={inputClass}>
                    <User className="w-5 h-5 text-muted-foreground shrink-0" />
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={t("checkout.firstName")} className={inputFieldClass} />
                  </div>
                  <div className={inputClass}>
                    <User className="w-5 h-5 text-muted-foreground shrink-0" />
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={t("checkout.lastName")} className={inputFieldClass} />
                  </div>
                </div>

                <div className="relative">
                  <button onClick={() => setBillingCountryOpen((p) => !p)} className={`${inputClass} justify-between`}>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-muted-foreground shrink-0" />
                      <span className={`text-sm ${billingCountry ? "text-foreground" : "text-muted-foreground"}`}>
                        {billingCountry || t("checkout.country")}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                  </button>
                  {billingCountryOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-card border border-border rounded-xl z-50 max-h-60 overflow-y-auto shadow-lg">
                      {COUNTRIES.map((c) => (
                        <button key={c} onClick={() => { setBillingCountry(c); setBillingCountryOpen(false); }} className={`block w-full text-left px-4 py-3 text-sm hover:bg-muted/50 ${billingCountry === c ? "bg-muted" : ""}`}>
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className={inputClass}>
                    <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                    <input value={city} onChange={(e) => setCity(e.target.value)} placeholder={t("checkout.city")} className={inputFieldClass} />
                  </div>
                  <div className={inputClass}>
                    <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                    <input value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder={t("checkout.postcode")} className={inputFieldClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className={inputClass}>
                    <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                    <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder={t("checkout.streetName")} className={inputFieldClass} />
                  </div>
                  <div className={inputClass}>
                    <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                    <input value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} placeholder={t("checkout.houseNumber")} className={inputFieldClass} />
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-center pt-4">
              <button onClick={validateAndNext} className="flex items-center gap-3 bg-foreground text-background rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity">
                <span className="text-sm font-semibold">{t("checkout.nextStep")}</span>
                <span className="bg-accent rounded-full p-2">
                  <ArrowRight className="w-4 h-4 text-accent-foreground" />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">{t("checkout.payment")}</h2>
              <p className="text-sm text-muted-foreground mt-1">{t("checkout.paymentNote")}</p>
            </div>

            <div className={inputClass}>
              <CreditCard className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="flex-1">
                <span className="text-xs text-muted-foreground block leading-none mb-0.5">{t("checkout.paymentMethod")}</span>
                <span className="text-sm text-foreground">{t("checkout.creditCard")}</span>
              </div>
            </div>

            <div className={inputClass}>
              <User className="w-5 h-5 text-muted-foreground shrink-0" />
              <input value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} placeholder={t("checkout.cardholderName")} className={inputFieldClass} />
            </div>

            <div>
              <div className={inputClass}>
                <CreditCard className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={cardNumber} onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} placeholder={t("checkout.cardNumber")} className={inputFieldClass} maxLength={19} />
              </div>
              <CardBrandLogos brand={detectCardBrand(cardNumber)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={inputClass}>
                <Calendar className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder={t("checkout.expiryDate")} className={inputFieldClass} maxLength={5} />
              </div>
              <div className={inputClass}>
                <Lock className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder={t("checkout.cvv")} className={inputFieldClass} maxLength={4} type="password" />
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="mt-1 accent-accent w-4 h-4" />
              <span className="text-xs text-muted-foreground leading-relaxed">{t("checkout.termsText")}</span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={acceptNewsletter} onChange={(e) => setAcceptNewsletter(e.target.checked)} className="mt-1 accent-accent w-4 h-4" />
              <span className="text-xs text-muted-foreground leading-relaxed">{t("checkout.newsletterText")}</span>
            </label>

            <div className="border-t border-border pt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xl font-bold text-foreground">{t("checkout.total")}: {displayPrice}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("checkout.inclVat")}</p>
                </div>
                <button className="flex items-center gap-3 bg-foreground text-background rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity">
                  <span className="text-sm font-semibold">{t("checkout.payNow")}</span>
                  <span className="bg-accent rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-accent-foreground" />
                  </span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                {t("checkout.termsAccept")} <a href="#" className="underline text-foreground">{t("checkout.termsLink")}</a> {t("checkout.andThoseOf")} <a href="#" className="underline text-foreground">SFDI</a>.
              </p>
            </div>

            <div className="flex justify-start">
              <button onClick={() => setStep(1)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                {t("checkout.back")}
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
