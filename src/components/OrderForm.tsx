import { useState } from "react";
import { ArrowRight, ChevronDown, Star, Mail, Car, Calendar, Clock } from "lucide-react";
import { Calendar as CalendarWidget } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { CountryData } from "@/data/countries";

interface OrderFormProps {
  data: CountryData;
}

const OrderForm = ({ data }: OrderFormProps) => {
  const [vehicleCategory, setVehicleCategory] = useState<string | null>(null);
  const [validityPeriod, setValidityPeriod] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [validityOpen, setValidityOpen] = useState(false);

  // Calculate price based on selections
  const getPrice = (): string | null => {
    if (!vehicleCategory || !validityPeriod) return null;
    const table = data.priceTables.find(t => t.category === vehicleCategory);
    if (!table) return null;
    const row = table.rows.find(r => r.period.toLowerCase() === validityPeriod?.toLowerCase());
    return row?.eurPrice ?? null;
  };

  const price = getPrice();

  // Show Start date + price only after vehicle & validity are selected
  const showStartDate = vehicleCategory && validityPeriod;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground text-sm">Enter details</p>
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium text-foreground">4.6</span>
          <span className="text-muted-foreground">Trustpilot</span>
        </div>
      </div>

      <div className="space-y-3">
        {/* Vehicle category dropdown */}
        <div className="relative">
          <button
            onClick={() => { setVehicleOpen(!vehicleOpen); setValidityOpen(false); }}
            className="flex items-center justify-between w-full border border-border rounded-xl px-4 py-3 text-left hover:border-foreground/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-muted-foreground" />
              <div>
                {vehicleCategory ? (
                  <>
                    <span className="text-xs text-muted-foreground block leading-none mb-0.5">Vehicle category</span>
                    <span className="text-sm text-foreground">{vehicleCategory}</span>
                  </>
                ) : (
                  <span className="text-sm text-muted-foreground">Vehicle category</span>
                )}
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${vehicleOpen ? 'rotate-180' : ''}`} />
          </button>
          {vehicleOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-orange-400 rounded-xl z-50 overflow-hidden shadow-lg">
              {data.vehicleClasses.map((vc) => (
                <button
                  key={vc}
                  onClick={() => { setVehicleCategory(vc); setVehicleOpen(false); setValidityPeriod(null); }}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-colors ${vc === vehicleCategory ? 'bg-muted' : ''}`}
                >
                  <Car className="w-4 h-4 text-muted-foreground" />
                  <span>{vc}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Validity period dropdown */}
        <div className="relative">
          <button
            onClick={() => { setValidityOpen(!validityOpen); setVehicleOpen(false); }}
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
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${validityOpen ? 'rotate-180' : ''}`} />
          </button>
          {validityOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-orange-400 rounded-xl z-50 overflow-hidden shadow-lg">
              {(vehicleCategory
                ? data.priceTables.find(t => t.category === vehicleCategory)?.rows ?? []
                : data.priceTables[0]?.rows ?? []
              ).map((row) => (
                <button
                  key={row.period}
                  onClick={() => { setValidityPeriod(row.period); setValidityOpen(false); }}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-colors ${row.period === validityPeriod ? 'bg-muted' : ''}`}
                >
                  {row.period}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Start date - only shown after vehicle & validity selected */}
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
            <PopoverContent className="w-auto p-0 border-orange-400" align="start">
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
      </div>

      <div className="flex items-center justify-end mt-6 gap-4">
        {price && <span className="text-lg font-bold text-foreground">{price}</span>}
        <button className="flex items-center gap-3 bg-foreground text-background rounded-full pl-6 pr-2 py-2 hover:opacity-90 transition-opacity">
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
