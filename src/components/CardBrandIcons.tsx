import { cn } from "@/lib/utils";

export type CardBrand = "visa" | "mastercard" | "amex" | null;

export const detectCardBrand = (number: string): CardBrand => {
  const digits = number.replace(/\s/g, "");
  if (/^4/.test(digits)) return "visa";
  if (/^5[1-5]/.test(digits) || /^2[2-7]/.test(digits)) return "mastercard";
  if (/^3[47]/.test(digits)) return "amex";
  return null;
};

export const formatCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  // Amex: 4-6-5, others: 4-4-4-4
  if (/^3[47]/.test(digits)) {
    const parts = [digits.slice(0, 4), digits.slice(4, 10), digits.slice(10, 15)];
    return parts.filter(Boolean).join(" ");
  }
  const parts = [digits.slice(0, 4), digits.slice(4, 8), digits.slice(8, 12), digits.slice(12, 16)];
  return parts.filter(Boolean).join(" ");
};

const VisaIcon = ({ className = "h-6", active = false }: { className?: string; active?: boolean }) => (
  <svg viewBox="0 0 780 500" className={cn(className, "transition-opacity duration-200", active ? "opacity-100" : "opacity-30")} xmlns="http://www.w3.org/2000/svg">
    <rect width="780" height="500" rx="40" fill="#1A1F71" />
    <path d="M293.2 348.7l33.4-195.8h53.4l-33.4 195.8h-53.4zm224.1-191c-10.6-4-27.2-8.3-47.9-8.3-52.8 0-90 26.6-90.2 64.6-.3 28.1 26.5 43.8 46.8 53.2 20.8 9.6 27.8 15.8 27.7 24.4-.1 13.2-16.6 19.2-32 19.2-21.4 0-32.7-3-50.3-10.2l-6.9-3.1-7.5 43.8c12.5 5.5 35.6 10.2 59.6 10.5 56.2 0 92.7-26.3 93.1-66.8.2-22.3-14-39.2-44.8-53.2-18.6-9.1-30-15.1-29.9-24.3 0-8.1 9.6-16.8 30.4-16.8 17.4-.3 30 3.5 39.8 7.5l4.8 2.2 7.3-42.7zm138.3-4.8h-41.3c-12.8 0-22.4 3.5-28 16.3l-79.4 179.5h56.2s9.2-24.2 11.3-29.5h68.6c1.6 6.9 6.5 29.5 6.5 29.5h49.7l-43.6-195.8zm-65.8 126.4c4.4-11.3 21.4-54.8 21.4-54.8-.3.5 4.4-11.4 7.1-18.8l3.6 17s10.3 47 12.5 56.6h-44.6zM327.1 152.9l-52.5 133.5-5.6-27.2c-9.7-31.2-39.9-65-73.7-81.9l47.9 171.4h56.6l84.2-195.8h-56.9z" fill="#fff"/>
    <path d="M221.5 152.9h-86.2l-.7 3.8c67.1 16.2 111.5 55.4 129.9 102.5l-18.7-90c-3.2-12.3-12.8-15.9-24.3-16.3z" fill="#F9A533"/>
  </svg>
);

const MastercardIcon = ({ className = "h-6", active = false }: { className?: string; active?: boolean }) => (
  <svg viewBox="0 0 780 500" className={cn(className, "transition-opacity duration-200", active ? "opacity-100" : "opacity-30")} xmlns="http://www.w3.org/2000/svg">
    <rect width="780" height="500" rx="40" fill="#1A1A2E" />
    <circle cx="310" cy="250" r="150" fill="#EB001B" />
    <circle cx="470" cy="250" r="150" fill="#F79E1B" />
    <path d="M390 130.7c-38.1 30-62.5 76.3-62.5 128.3s24.4 98.3 62.5 128.3c38.1-30 62.5-76.3 62.5-128.3s-24.4-98.3-62.5-128.3z" fill="#FF5F00" />
  </svg>
);

const AmexIcon = ({ className = "h-6", active = false }: { className?: string; active?: boolean }) => (
  <svg viewBox="0 0 780 500" className={cn(className, "transition-opacity duration-200", active ? "opacity-100" : "opacity-30")} xmlns="http://www.w3.org/2000/svg">
    <rect width="780" height="500" rx="40" fill="#2E77BC" />
    <path d="M0 0h780v500H0z" fill="#2E77BC" rx="40" />
    <text x="390" y="280" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="120" fill="#fff" letterSpacing="8">AMEX</text>
    <path d="M40 200h700v8H40zm0 92h700v8H40z" fill="rgba(255,255,255,0.3)" />
  </svg>
);

export const CardBrandLogos = ({ brand }: { brand?: CardBrand }) => {
  const noSelection = !brand;
  return (
    <div className="flex items-center gap-2 mt-2 px-1">
      <VisaIcon className="h-7 w-auto rounded" active={noSelection || brand === "visa"} />
      <MastercardIcon className="h-7 w-auto rounded" active={noSelection || brand === "mastercard"} />
      <AmexIcon className="h-7 w-auto rounded" active={noSelection || brand === "amex"} />
    </div>
  );
};
