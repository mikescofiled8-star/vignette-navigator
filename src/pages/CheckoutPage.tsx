import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Mail, User, Globe, Building, MapPin, CreditCard, Calendar, Lock, CheckSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<"personal" | "business">("personal");

  // Step 1
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  // Step 2 (business)
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [billingCountryOpen, setBillingCountryOpen] = useState(false);

  // Step 3
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
          <h1 className="text-2xl font-bold text-foreground mb-4">No order found</h1>
          <p className="text-muted-foreground mb-6">Please go back and add a vignette to your cart first.</p>
          <button onClick={() => navigate("/")} className="bg-foreground text-background rounded-full px-6 py-3 text-sm font-semibold">
            Go to homepage
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const totalSteps = accountType === "business" ? 3 : 2;
  const paymentStep = accountType === "business" ? 3 : 2;

  const nextStep = () => {
    if (step < paymentStep) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const inputClass = "flex items-center gap-3 w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors bg-card";
  const inputFieldClass = "flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground";

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
            <span className="font-bold text-foreground text-lg">{orderData.price}</span>
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {Array.from({ length: paymentStep }).map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < step ? "bg-accent" : "bg-border"}`} />
          ))}
        </div>

        {/* Step 1: Checkout information */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Checkout information</h2>
              <p className="text-sm text-muted-foreground mt-1">Your e-vignette will be sent to this email address.</p>
            </div>

            {/* Personal / Business toggle */}
            <div className="flex rounded-xl overflow-hidden border border-border">
              <button
                onClick={() => setAccountType("personal")}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${accountType === "personal" ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:bg-muted/50"}`}
              >
                Personal
              </button>
              <button
                onClick={() => setAccountType("business")}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${accountType === "business" ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:bg-muted/50"}`}
              >
                Business
              </button>
            </div>

            {/* Email fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={inputClass}>
                <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  {email && <span className="text-xs text-muted-foreground block leading-none mb-0.5">Email address</span>}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className={inputFieldClass}
                  />
                </div>
              </div>
              <div className={inputClass}>
                <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  {confirmEmail && <span className="text-xs text-muted-foreground block leading-none mb-0.5">Confirm email address</span>}
                  <input
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    placeholder="Confirm email address"
                    className={inputFieldClass}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button onClick={nextStep} className="flex items-center gap-3 bg-foreground text-background rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity">
                <span className="text-sm font-semibold">Next step</span>
                <span className="bg-accent rounded-full p-2">
                  <ArrowRight className="w-4 h-4 text-accent-foreground" />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Billing address (only for business) */}
        {step === 2 && accountType === "business" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Checkout information</h2>
              <p className="text-sm text-muted-foreground mt-1">Your e-vignette will be sent to this email address.</p>
            </div>

            {/* Personal / Business toggle (read-only display) */}
            <div className="flex rounded-xl overflow-hidden border border-border">
              <button className="flex-1 py-3 text-sm font-semibold bg-card text-muted-foreground">Personal</button>
              <button className="flex-1 py-3 text-sm font-semibold bg-accent text-accent-foreground">Business</button>
            </div>

            {/* Email display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={inputClass}>
                <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground block leading-none mb-0.5">Email address</span>
                  <span className="text-sm text-foreground">{email}</span>
                </div>
              </div>
              <div className={inputClass}>
                <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground block leading-none mb-0.5">Confirm email address</span>
                  <span className="text-sm text-foreground">{confirmEmail}</span>
                </div>
              </div>
            </div>

            <p className="text-sm font-medium text-muted-foreground">Billing address</p>

            {/* Company name */}
            <div className={inputClass}>
              <Building className="w-5 h-5 text-muted-foreground shrink-0" />
              <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company name" className={inputFieldClass} />
            </div>

            {/* First / Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={inputClass}>
                <User className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" className={inputFieldClass} />
              </div>
              <div className={inputClass}>
                <User className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" className={inputFieldClass} />
              </div>
            </div>

            {/* Country */}
            <div className="relative">
              <button onClick={() => setBillingCountryOpen((p) => !p)} className={`${inputClass} justify-between`}>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground shrink-0" />
                  <span className={`text-sm ${billingCountry ? "text-foreground" : "text-muted-foreground"}`}>
                    {billingCountry || "Country"}
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

            {/* City / Postcode */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={inputClass}>
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className={inputFieldClass} />
              </div>
              <div className={inputClass}>
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Postcode" className={inputFieldClass} />
              </div>
            </div>

            {/* Street / House number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={inputClass}>
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street name" className={inputFieldClass} />
              </div>
              <div className={inputClass}>
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} placeholder="House number" className={inputFieldClass} />
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button onClick={prevStep} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button onClick={nextStep} className="flex items-center gap-3 bg-foreground text-background rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity">
                <span className="text-sm font-semibold">Next step</span>
                <span className="bg-accent rounded-full p-2">
                  <ArrowRight className="w-4 h-4 text-accent-foreground" />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Payment step */}
        {step === paymentStep && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Payment</h2>
              <p className="text-sm text-muted-foreground mt-1">After payment, you will receive your e-vignette immediately by email. Have a safe journey!</p>
            </div>

            {/* Payment method */}
            <div className={inputClass}>
              <CreditCard className="w-5 h-5 text-muted-foreground shrink-0" />
              <div className="flex-1">
                <span className="text-xs text-muted-foreground block leading-none mb-0.5">Payment method</span>
                <span className="text-sm text-foreground">Credit or debit card</span>
              </div>
            </div>

            {/* Cardholder name */}
            <div className={inputClass}>
              <User className="w-5 h-5 text-muted-foreground shrink-0" />
              <input value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} placeholder="Cardholder name" className={inputFieldClass} />
            </div>

            {/* Card number */}
            <div>
              <div className={inputClass}>
                <CreditCard className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card number" className={inputFieldClass} maxLength={19} />
              </div>
              <div className="flex items-center gap-2 mt-2 px-1">
                <span className="text-xs font-bold text-orange-500">VISA</span>
                <span className="text-xs font-bold text-red-500">MC</span>
                <span className="text-xs font-bold text-blue-500">AMEX</span>
              </div>
            </div>

            {/* Expiry / CVV */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={inputClass}>
                <Calendar className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="Expiry date" className={inputFieldClass} maxLength={5} />
              </div>
              <div className={inputClass}>
                <Lock className="w-5 h-5 text-muted-foreground shrink-0" />
                <input value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV" className={inputFieldClass} maxLength={4} type="password" />
              </div>
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="mt-1 accent-accent w-4 h-4" />
              <span className="text-xs text-muted-foreground leading-relaxed">
                I want my e-vignette to be delivered immediately and understand that my right of withdrawal expires once the registration has been completed. I understand that the e-vignette is officially issued by SFDI and that Tollvignettes.eu is an independent registration portal that registers the e-vignette on my behalf.
              </span>
            </label>

            {/* Newsletter checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={acceptNewsletter} onChange={(e) => setAcceptNewsletter(e.target.checked)} className="mt-1 accent-accent w-4 h-4" />
              <span className="text-xs text-muted-foreground leading-relaxed">
                Yes, I want to receive exclusive toll updates and save time and money with the newsletter.
              </span>
            </label>

            {/* Total & Pay */}
            <div className="border-t border-border pt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xl font-bold text-foreground">Total: {orderData.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">incl. registration fee and VAT</p>
                </div>
                <button className="flex items-center gap-3 bg-foreground text-background rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity">
                  <span className="text-sm font-semibold">Pay now</span>
                  <span className="bg-accent rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-accent-foreground" />
                  </span>
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                By proceeding with the payment, you accept our <a href="#" className="underline text-foreground">terms and conditions</a> and those of <a href="#" className="underline text-foreground">SFDI</a>.
              </p>
            </div>

            <div className="flex justify-start">
              <button onClick={prevStep} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back
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
