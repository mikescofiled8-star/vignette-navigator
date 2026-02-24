import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Star, Mail, Car, Calendar, Clock, Globe } from "lucide-react";
import { Calendar as CalendarWidget } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays, addMonths, addYears } from "date-fns";
import { cn } from "@/lib/utils";
import type { CountryData } from "@/data/countries";

interface OrderFormProps {
  data: CountryData;
}

const REGISTRATION_COUNTRIES = [
  { name: "Austria", code: "A" },
  { name: "Belgium", code: "B" },
  { name: "Bulgaria", code: "BG" },
  { name: "Croatia", code: "HR" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Estonia", code: "EST" },
  { name: "Finland", code: "FIN" },
  { name: "France", code: "F" },
  { name: "Germany", code: "D" },
  { name: "Greece", code: "GR" },
  { name: "Hungary", code: "H" },
  { name: "Ireland", code: "IRL" },
  { name: "Italy", code: "I" },
  { name: "Latvia", code: "LV" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "L" },
  { name: "Moldova", code: "MD" },
  { name: "Netherlands", code: "NL" },
  { name: "Norway", code: "N" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "P" },
  { name: "Romania", code: "RO" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SLO" },
  { name: "Spain", code: "E" },
  { name: "Sweden", code: "S" },
  { name: "Switzerland", code: "CH" },
  { name: "Turkey", code: "TR" },
  { name: "United Kingdom", code: "GB" },
];

function computeEndDate(startDate: Date, period: string): Date {
  const p = period.toLowerCase();
  if (p.includes("1 day")) return addDays(startDate, 1);
  if (p.includes("10 day")) return addDays(startDate, 10);
  if (p.includes("30 day")) return addDays(startDate, 30);
  if (p.includes("1 year") || p.includes("annual")) return addYears(startDate, 1);
  if (p.includes("1 month")) return addMonths(startDate, 1);
  if (p.includes("7 day")) return addDays(startDate, 7);
  if (p.includes("90 day")) return addDays(startDate, 90);
  return addDays(startDate, 30);
}

const OrderForm = ({ data }: OrderFormProps) => {
  const navigate = useNavigate();
  const [selectedVehicleIndex, setSelectedVehicleIndex] = useState<number | null>(null);
  const [validityPeriod, setValidityPeriod] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [validityOpen, setValidityOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<typeof REGISTRATION_COUNTRIES[0] | null>(null);
  const [licensePlate, setLicensePlate] = useState("");

  const activeVehicleIndex = selectedVehicleIndex ?? 0;

  const activePriceTable = useMemo(() => {
    return data.priceTables[activeVehicleIndex] ?? data.priceTables[0];
  }, [data.priceTables, activeVehicleIndex]);

  const validityOptions = activePriceTable?.rows ?? [];

  const price = useMemo(() => {
    if (!validityPeriod || !activePriceTable) return null;
    const selectedRow = activePriceTable.rows.find(
      (row) => row.period.toLowerCase() === validityPeriod.toLowerCase(),
    );
    return selectedRow?.eurPrice ?? null;
  }, [activePriceTable, validityPeriod]);

  const selectedVehicleLabel =
    selectedVehicleIndex !== null
      ? data.vehicleClasses[selectedVehicleIndex] ?? data.priceTables[selectedVehicleIndex]?.category
      : null;

  const showStartDate = Boolean(selectedVehicleLabel && validityPeriod);
  const showExtras = Boolean(startDate && validityPeriod && selectedVehicleLabel);

  const endDate = useMemo(() => {
    if (!startDate || !validityPeriod) return null;
    return computeEndDate(startDate, validityPeriod);
  }, [startDate, validityPeriod]);

  const closeAllDropdowns = () => {
    setVehicleOpen(false);
    setValidityOpen(false);
    setCountryOpen(false);
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 relative z-40">
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground text-sm">Enter details</p>
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium text-foreground">4.6</span>
          <span className="text-muted-foreground">Trustpilot</span>
        </div>
      </div>

      <div className="space-y-3">
        {/* Vehicle category */}
        <div className="relative z-30">
          <button
            onClick={() => {
              closeAllDropdowns();
              setVehicleOpen((prev) => !prev);
            }}
            className="flex items-center justify-between w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-muted-foreground" />
              <div>
                {selectedVehicleLabel ? (
                  <>
                    <span className="text-xs text-muted-foreground block leading-none mb-0.5">Vehicle category</span>
                    <span className="text-sm text-foreground">{selectedVehicleLabel}</span>
                  </>
                ) : (
                  <span className="text-sm text-muted-foreground">Vehicle category</span>
                )}
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${vehicleOpen ? "rotate-180" : ""}`} />
          </button>

          {vehicleOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-card border border-border rounded-xl z-50 overflow-hidden shadow-lg">
              {data.vehicleClasses.map((vehicleClass, index) => (
                <button
                  key={vehicleClass}
                  onClick={() => {
                    setSelectedVehicleIndex(index);
                    setVehicleOpen(false);
                    setValidityPeriod(null);
                    setStartDate(undefined);
                  }}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-colors ${selectedVehicleIndex === index ? "bg-muted" : ""}`}
                >
                  <Car className="w-4 h-4 text-muted-foreground" />
                  <span>{vehicleClass}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Validity period */}
        <div className="relative z-20">
          <button
            onClick={() => {
              closeAllDropdowns();
              setValidityOpen((prev) => !prev);
            }}
            className="flex items-center justify-between w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                {validityPeriod ? (
                  <>
                    <span className="text-xs text-muted-foreground block leading-none mb-0.5">Validity period</span>
                    <span className="text-sm text-foreground">{validityPeriod}</span>
                  </>
                ) : (
                  <span className="text-sm text-muted-foreground">Validity period</span>
                )}
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${validityOpen ? "rotate-180" : ""}`} />
          </button>

          {validityOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-card border border-border rounded-xl z-50 overflow-hidden shadow-lg">
              {validityOptions.map((row) => (
                <button
                  key={row.period}
                  onClick={() => {
                    setValidityPeriod(row.period);
                    setValidityOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-colors ${row.period === validityPeriod ? "bg-muted" : ""}`}
                >
                  {row.period}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Start date */}
        {showStartDate && (
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center justify-between w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    {startDate ? (
                      <>
                        <span className="text-xs text-muted-foreground block leading-none mb-0.5">Start date</span>
                        <span className="text-sm text-foreground">{format(startDate, "PPP")}</span>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground">Start date</span>
                    )}
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarWidget
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                disabled={(date) => date < new Date()}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        )}

        {/* Validity period display (after date selected) */}
        {showExtras && startDate && endDate && (
          <div className="border border-border rounded-xl px-4 py-3 bg-muted/30">
            <span className="text-xs text-muted-foreground block leading-none mb-1">Validity period</span>
            <span className="text-sm text-foreground">
              From <strong>{format(startDate, "dd/MM/yyyy")}, 00:00</strong> up to and including <strong>{format(endDate, "dd/MM/yyyy")}, 23:59</strong>
            </span>
          </div>
        )}

        {/* Country of vehicle registration */}
        {showExtras && (
          <div className="relative z-10">
            <button
              onClick={() => {
                closeAllDropdowns();
                setCountryOpen((prev) => !prev);
              }}
              className="flex items-center justify-between w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <div>
                  {selectedCountry ? (
                    <>
                      <span className="text-xs text-muted-foreground block leading-none mb-0.5">Country of vehicle registration</span>
                      <span className="text-sm text-foreground">{selectedCountry.name}</span>
                    </>
                  ) : (
                    <span className="text-sm text-muted-foreground">Country of vehicle registration</span>
                  )}
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${countryOpen ? "rotate-180" : ""}`} />
            </button>

            {countryOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-card border border-border rounded-xl z-50 overflow-hidden shadow-lg max-h-60 overflow-y-auto">
                {REGISTRATION_COUNTRIES.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setSelectedCountry(country);
                      setCountryOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-colors ${selectedCountry?.code === country.code ? "bg-muted" : ""}`}
                  >
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span>{country.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* License plate input */}
        {showExtras && selectedCountry && (
          <div>
            <p className="text-sm font-medium text-foreground mb-2">Enter your license plate</p>
            <div className="flex items-stretch border-2 border-primary rounded-xl overflow-hidden">
              <div className="flex items-center justify-center bg-primary text-primary-foreground px-3 text-sm font-bold min-w-[48px]">
                {selectedCountry.code}
              </div>
              <input
                type="text"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                placeholder="Enter plate number"
                className="flex-1 px-4 py-3 text-sm bg-card text-foreground outline-none placeholder:text-muted-foreground"
                maxLength={15}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-end justify-end mt-6 gap-4">
        {price && (
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="text-2xl font-semibold text-foreground">{price}</p>
          </div>
        )}
        <button
          onClick={() => {
            if (!price || !selectedVehicleLabel || !validityPeriod || !startDate || !endDate || !selectedCountry || !licensePlate) return;
            navigate("/checkout", {
              state: {
                country: data.name,
                vehicleCategory: selectedVehicleLabel,
                validityPeriod,
                startDate: format(startDate, "dd/MM/yyyy"),
                endDate: format(endDate, "dd/MM/yyyy"),
                price,
                registrationCountry: selectedCountry.name,
                registrationCode: selectedCountry.code,
                licensePlate,
              },
            });
          }}
          className="flex items-center gap-3 bg-foreground text-background rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity"
        >
          <span className="text-sm font-semibold">Add to cart</span>
          <span className="bg-accent rounded-full p-2">
            <ArrowRight className="w-4 h-4 text-accent-foreground" />
          </span>
        </button>
      </div>
      <div className="flex items-center justify-end mt-3 gap-2 text-muted-foreground text-xs">
        <Mail className="w-3 h-3" />
        <span>Immediate delivery</span>
      </div>
    </div>
  );
};

export default OrderForm;
