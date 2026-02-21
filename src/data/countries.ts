export interface PriceTable {
  category: string;
  rows: { period: string; localPrice?: string; eurPrice: string }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CountryData {
  name: string;
  slug: string;
  flag: string;
  heroDescription: string;
  heroTitle: string;
  tollRoadsIntro: string;
  tollRoadsList: string[];
  tollFreeIntro?: string;
  tollFreeList?: string[];
  vehicleClassesIntro: string;
  vehicleClasses: string[];
  validityPeriods: { name: string; description: string }[];
  priceTables: PriceTable[];
  priceNote: string;
  faqs: FAQ[];
  neighbourIntro: string;
}

export const countrySlugs = [
  "vignette-czechia",
  "vignette-slovakia",
  "vignette-romania",
  "vignette-bulgaria",
  "vignette-hungary",
  "vignette-slovenia",
  "vignette-switzerland",
  "vignette-moldova",
] as const;

export const countryDataMap: Record<string, CountryData> = {
  "vignette-czechia": {
    name: "Czech Republic",
    slug: "vignette-czechia",
    flag: "/flags/czech-republic.svg",
    heroDescription: "Driving on Czech highways requires a digital vignette. Register your license plate immediately in the national toll system.",
    heroTitle: "Get the Czech e-vignette online.",
    tollRoadsIntro: "Toll payments in the Czech Republic are managed through the digital vignette system. All tolled motorways are marked with D, and a valid e-vignette linked to your licence plate is mandatory before entering these routes.",
    tollRoadsList: [
      "D0 (E50, E65) – Prague city ring road",
      "D1 (E65, E462, E50, E55, E59) – Prague to Ostrava via Brno",
      "D2 (E65) – Brno to Slovak border",
      "D3 (E55) – Prague to Austrian border",
      "D5 (E50) – Prague to German border",
      "D6 (E48, E49) – Prague to Cheb",
      "D7 – Prague to Chomutov",
      "D8 (E55) – Prague to German border",
      "D10 (E65) – Prague to Turnov",
      "D11 (E67) – Prague to Hradec Králové",
      "D35 (E442, E462) – Mohelnice to Lipník nad Bečvou",
      "D46 (E462) – Vyškov to Olomouc",
      "D48 (E462) – Bělotín to Český Těšín",
      "D52 (E461) – Brno to Pohořelice",
      "D55 – Hulín to Otrokovice",
      "D56 – Ostrava to Frýdek-Místek",
    ],
    tollFreeIntro: "Certain motorway stretches in the Czech Republic are toll-free:",
    tollFreeList: [
      "D0 – Prague city ring road (partially toll-free)",
      "D1 – Between exits 182–210 and exit 354",
      "D3 – Veselí nad Lužnicí Nord to Bošilec",
      "D5 – Pilsen to Prague (exits 89–67)",
      "D6 – Cheb to Karlovy Vary",
      "D7 – Chomutov to Louny",
    ],
    vehicleClassesIntro: "All passenger vehicles up to 3,500 kg with four wheels are required to purchase a valid Czech Republic digital vignette. Motorcycles, trikes, and trailers are exempt.",
    vehicleClasses: ["Standard fuel", "Natural gas (CNG/LNG)", "Biomethane (bio-CNG)", "Plug-in hybrid (≤50 g/km CO₂)"],
    validityPeriods: [
      { name: "1-day vignette", description: "Best for a one-day visit or transit." },
      { name: "10-day vignette", description: "Ideal for short trips or holidays." },
      { name: "30-day vignette", description: "Suited for longer stays." },
      { name: "Annual vignette", description: "Most cost-effective for regular drivers." },
    ],
    priceTables: [
      {
        category: "Standard fuel",
        rows: [
          { period: "1 day", localPrice: "CZK 430.00", eurPrice: "€17.99" },
          { period: "10 days", localPrice: "CZK 570.00", eurPrice: "€23.99" },
          { period: "30 days", localPrice: "CZK 750.00", eurPrice: "€30.99" },
          { period: "1 year", localPrice: "CZK 2,970.00", eurPrice: "€124.99" },
        ],
      },
      {
        category: "Natural gas / Biomethane / Plug-in hybrid",
        rows: [
          { period: "1 day", localPrice: "CZK 290.00", eurPrice: "€10.99" },
          { period: "10 days", localPrice: "CZK 390.00", eurPrice: "€15.99" },
          { period: "30 days", localPrice: "CZK 520.00", eurPrice: "€20.99" },
          { period: "1 year", localPrice: "CZK 1,710.00", eurPrice: "€65.99" },
        ],
      },
    ],
    priceNote: "Prices include both the toll fee and registration fee.",
    faqs: [
      { question: "Do I need a vignette to drive in the Czech Republic?", answer: "Yes. All passenger vehicles up to 3,500 kg with four wheels must have a valid digital vignette for Czech motorways. Fines of up to CZK 20,000 apply for non-compliance." },
      { question: "How can I buy the Czech Republic digital vignette online?", answer: "Select your validity period, enter your license plate number and country of registration, then complete payment. Your license plate is registered instantly." },
      { question: "How long is a Czech vignette valid?", answer: "Options are 1 day, 10 days, 30 days, or 1 year. Validity starts from the date you choose during purchase." },
      { question: "How are vignettes checked?", answer: "Cameras automatically scan license plates on motorways and cross-check them with the national toll database." },
      { question: "What happens if I drive without a vignette?", answer: "Penalties may reach up to CZK 20,000. Checks are carried out by police patrols and camera systems." },
      { question: "Do electric cars need a vignette?", answer: "Fully electric vehicles are exempt from the fee but must still be registered in the toll system." },
    ],
    neighbourIntro: "Most neighboring countries also require a digital vignette to use their motorways.",
  },
  "vignette-slovakia": {
    name: "Slovakia",
    slug: "vignette-slovakia",
    flag: "/flags/slovakia.svg",
    heroDescription: "Tolls in Slovakia are collected through a digital vignette linked to your license plate.",
    heroTitle: "Get your Slovak vignette instantly online.",
    tollRoadsIntro: "In Slovakia, motorway tolls apply on motorways D (diaľnica) and expressways R (rýchlostná cesta).",
    tollRoadsList: [
      "D1 – Bratislava-Východ to Hričovské Podhradie, and more sections",
      "D2 – Brodské to Kúty, Bratislava-Jarovce to Čunovo",
      "D3 – Čadca to Skalité (Polish border)",
      "D4 – Jarovce (Austrian border) to Bratislava-Jarovce",
      "R1 – Trnava to Banská Bystrica-Kremnička",
      "R2 – Lovčica-Trubín to Žiar nad Hronom, and more",
      "R3, R4, R6, R7 – Various sections",
    ],
    vehicleClassesIntro: "The vignette is required for most vehicles up to 3,500 kg GVW. Trailers/caravans need a separate vignette.",
    vehicleClasses: ["Passenger car", "Goods vehicle / Motorhome", "Trailer / Caravan"],
    validityPeriods: [
      { name: "1-day vignette", description: "Perfect for single-day trips." },
      { name: "10-day vignette", description: "Ideal for short holidays or transit." },
      { name: "30-day vignette", description: "Flexible choice for longer stays." },
      { name: "Annual vignette", description: "Best for frequent driving." },
    ],
    priceTables: [
      {
        category: "Passenger car",
        rows: [
          { period: "1 day", eurPrice: "€16.99" },
          { period: "10 days", eurPrice: "€21.99" },
          { period: "30 days", eurPrice: "€29.99" },
          { period: "1 year", eurPrice: "€109.99" },
        ],
      },
      {
        category: "Caravan / Trailer",
        rows: [
          { period: "1 day", eurPrice: "€16.99" },
          { period: "10 days", eurPrice: "€21.99" },
          { period: "30 days", eurPrice: "€29.99" },
          { period: "1 year", eurPrice: "€109.99" },
        ],
      },
    ],
    priceNote: "All prices include both the toll fee and registration fee.",
    faqs: [
      { question: "What happens if I drive without a valid vignette?", answer: "Fines are usually several times higher than the vignette price. You will still need to buy a valid vignette afterwards." },
      { question: "Do I need a vignette for a short distance?", answer: "Yes. A vignette is required as soon as you enter a tolled section, even for a few kilometres." },
      { question: "Are electric cars exempt?", answer: "No. All vehicles up to 3,500 kg pay the same fee regardless of fuel type." },
      { question: "Do trailers need a separate vignette?", answer: "Yes. You must buy a separate vignette for trailers or caravans up to 3,500 kg GVW." },
    ],
    neighbourIntro: "Many of Slovakia's neighbouring countries also operate a vignette system.",
  },
  "vignette-romania": {
    name: "Romania",
    slug: "vignette-romania",
    flag: "/flags/romania.svg",
    heroDescription: "In Romania, tolls are collected through a digital vignette (rovinieta) linked to your license plate.",
    heroTitle: "Register your Romania vignette quickly and securely online.",
    tollRoadsIntro: "A valid motorway vignette (rovinieta) is required for driving on all motorways (A), expressways (DEx), and national roads (DN).",
    tollRoadsList: [
      "A0 – Bucharest ring road",
      "A1 – Bucharest to Nădlac (Hungarian border)",
      "A2 – Bucharest to Constanța (Black Sea coast)",
      "A3 – Bucharest to Borș (Hungarian border)",
      "A4 – Constanța bypass",
      "A7 – Moldova Motorway (Ploiești to Siret)",
      "A10 – Sebeș to Turda",
      "All DN national roads",
    ],
    tollFreeIntro: "Toll-free sections include:",
    tollFreeList: [
      "Parts of national roads within towns",
      "Local roads managed by city or county authorities",
    ],
    vehicleClassesIntro: "Digital toll fees are determined by vehicle classification based on maximum permissible mass (GVW) and number of axles.",
    vehicleClasses: ["Passenger car", "Van (≤ 3.5 t)", "Truck (various weights)", "Bus (9–23 seats)", "Bus (> 23 seats)"],
    validityPeriods: [
      { name: "1 day", description: "Ideal for a single-day trip." },
      { name: "7/10 days", description: "Great for short visits." },
      { name: "30 days", description: "Suited for longer stays." },
      { name: "60 days", description: "For extended travel." },
      { name: "12 months", description: "Best for regular drivers." },
    ],
    priceTables: [
      {
        category: "Passenger car",
        rows: [
          { period: "1 day", eurPrice: "€9.99" },
          { period: "10 days", eurPrice: "€14.99" },
          { period: "30 days", eurPrice: "€19.99" },
          { period: "60 days", eurPrice: "€26.99" },
          { period: "12 months", eurPrice: "€64.99" },
        ],
      },
      {
        category: "Van (≤ 3.5 t)",
        rows: [
          { period: "1 day", eurPrice: "€16.99" },
          { period: "10 days", eurPrice: "€22.99" },
          { period: "30 days", eurPrice: "€33.99" },
          { period: "60 days", eurPrice: "€48.99" },
          { period: "12 months", eurPrice: "€133.99" },
        ],
      },
    ],
    priceNote: "Prices represent the total amount, combining toll fee and registration fee.",
    faqs: [
      { question: "Do I need a Romania vignette to drive on all roads?", answer: "Yes. A valid rovinieta is required for all motorways (A), expressways (DEx) and national roads (DN). Local streets are toll-free." },
      { question: "Can I buy after entering the country?", answer: "Yes, but you must do so before driving on any national road, expressway or motorway." },
      { question: "Is the Romania vignette transferable?", answer: "No. The rovinieta is tied to a specific licence plate and cannot be transferred." },
      { question: "Does the vignette cover toll bridges?", answer: "No. Some bridge crossings over the Danube require separate payment." },
      { question: "What are the fines?", answer: "Fines begin from about €50 for cars and increase for heavy vehicles." },
    ],
    neighbourIntro: "Most neighbouring countries also require a digital vignette.",
  },
  "vignette-bulgaria": {
    name: "Bulgaria",
    slug: "vignette-bulgaria",
    flag: "/flags/bulgaria.svg",
    heroDescription: "Tolls in Bulgaria are collected through an e-vignette linked to your license plate.",
    heroTitle: "The Bulgaria vignette can be easily purchased online.",
    tollRoadsIntro: "In Bulgaria, tolls are charged for motorways and republican roads. Motorways are marked with 'A', republican roads are categorized into classes I, II, and III.",
    tollRoadsList: [
      "A-1 (Sofia – Burgas)",
      "A-2 (Sofia – Varna)",
      "A-3 (Sofia – Greece)",
      "A-4 (Plovdiv – Turkey)",
      "A-5 (Varna – Burgas)",
      "A-6 (Serbia – Sofia)",
      "Class I republican roads (I-1 to I-9)",
    ],
    vehicleClassesIntro: "All vehicles with at least 4 wheels are required to purchase a vignette. Motorbikes, trikes and trailers are exempt.",
    vehicleClasses: ["Passenger car", "Goods vehicle / Motorhome", "Trailer / Caravan"],
    validityPeriods: [
      { name: "1 week", description: "Great for short getaways." },
      { name: "1 month", description: "Suited for long vacations." },
      { name: "3 months", description: "Perfect for extended stays." },
      { name: "1 year", description: "Best for frequent travelers." },
    ],
    priceTables: [
      {
        category: "Passenger car",
        rows: [
          { period: "1 week", eurPrice: "€17.99" },
          { period: "1 month", eurPrice: "€26.99" },
          { period: "90 days", eurPrice: "€40.99" },
          { period: "1 year", eurPrice: "€66.99" },
        ],
      },
      {
        category: "Caravan / Trailer",
        rows: [
          { period: "1 week", eurPrice: "€17.99" },
          { period: "1 month", eurPrice: "€26.99" },
          { period: "90 days", eurPrice: "€40.99" },
          { period: "1 year", eurPrice: "€66.99" },
        ],
      },
    ],
    priceNote: "Prices are a combination of the toll fee and registration fee.",
    faqs: [
      { question: "How long can you drive without a vignette?", answer: "There is no grace period. If caught without a valid vignette, you can be fined immediately." },
      { question: "How is the vignette checked?", answer: "Around 300 stationary cameras, 105 patrol vehicles, and border control checks." },
      { question: "Can I transfer my Bulgarian vignette?", answer: "No. Vignettes are not transferable between vehicles." },
      { question: "Can I postpone the start date?", answer: "No. Once purchased, the selected validity period is fixed." },
    ],
    neighbourIntro: "Neighbouring countries of Bulgaria also have compulsory tolls.",
  },
  "vignette-hungary": {
    name: "Hungary",
    slug: "vignette-hungary",
    flag: "/flags/hungary.svg",
    heroDescription: "Vignette & Visa B.V. is an official sales partner of the National Mobile Payment Plc. for the sale of Hungarian e-vignettes.",
    heroTitle: "The easiest way to buy your official Hungary vignette online.",
    tollRoadsIntro: "Hungary has one of the most developed motorway networks in Central Europe. Vignettes are mandatory on all motorways (M roads) and expressways.",
    tollRoadsList: [
      "M0, M1, M2, M3, M4, M5, M6, M7 – Major Budapest connections",
      "M15, M19, M25, M30, M31, M35 – Regional motorways",
      "M43, M44, M51, M60, M70, M76, M85, M86 – Extended network",
    ],
    vehicleClassesIntro: "All motor vehicles up to 3,500 kg require a vignette. Different vehicle types have different toll classes.",
    vehicleClasses: ["Passenger car (≤ 7 seats) – D1", "Passenger car (8-9 seats) – D2", "Goods vehicle / Motorhome – D2", "Motorcycle – D1M", "Caravan / Trailer – U"],
    validityPeriods: [
      { name: "1-day vignette", description: "Ideal for short transit." },
      { name: "10-day vignette", description: "Perfect for holidays." },
      { name: "Monthly vignette", description: "Great for regular visitors." },
      { name: "Annual vignette", description: "Best value for frequent travellers." },
    ],
    priceTables: [
      {
        category: "Passenger car (≤ 7 seats)",
        rows: [
          { period: "1 day", localPrice: "HUF 5,550", eurPrice: "€23.32" },
          { period: "10 days", localPrice: "HUF 6,900", eurPrice: "€28.99" },
          { period: "1 month", localPrice: "HUF 11,170", eurPrice: "€46.93" },
          { period: "2026 annual", localPrice: "HUF 61,760", eurPrice: "€259.51" },
        ],
      },
      {
        category: "Motorcycle",
        rows: [
          { period: "1 day", localPrice: "HUF 2,770", eurPrice: "€11.64" },
          { period: "10 days", localPrice: "HUF 3,450", eurPrice: "€14.50" },
          { period: "1 month", localPrice: "HUF 5,590", eurPrice: "€23.49" },
        ],
      },
      {
        category: "Caravan / Trailer",
        rows: [
          { period: "1 day", localPrice: "HUF 5,550", eurPrice: "€23.32" },
          { period: "10 days", localPrice: "HUF 6,900", eurPrice: "€28.99" },
          { period: "1 month", localPrice: "HUF 11,170", eurPrice: "€46.93" },
          { period: "2026 annual", localPrice: "HUF 61,760", eurPrice: "€259.51" },
        ],
      },
    ],
    priceNote: "Prices based on official HUF rates. EUR conversions are approximate.",
    faqs: [
      { question: "Do I need a vignette in Hungary?", answer: "Yes. All passenger cars, motorcycles and light vehicles up to 3,500 kg require a valid e-matrica for motorways." },
      { question: "Which roads require a vignette?", answer: "All motorways and expressways marked with M (M1, M3, M5, M6, M7 etc.)." },
      { question: "Is the vignette linked to the license plate?", answer: "Yes. It is fully electronic with no physical sticker." },
      { question: "What are the fines?", answer: "Up to 60,000 HUF for passenger cars. A 60-minute grace period applies." },
      { question: "Can I change or cancel my vignette?", answer: "Once activated, a Hungary vignette cannot be cancelled, changed or refunded." },
    ],
    neighbourIntro: "Several neighbouring countries also require a vignette or toll payment.",
  },
  "vignette-slovenia": {
    name: "Slovenia",
    slug: "vignette-slovenia",
    flag: "/flags/slovenia.svg",
    heroDescription: "In Slovenia, motorway tolls are collected through a digital vignette linked to your license plate.",
    heroTitle: "Buy and register your Slovenia e-vignette online.",
    tollRoadsIntro: "In Slovenia, tolls are mandatory on all motorways (A) and expressways (H). A valid digital vignette is required.",
    tollRoadsList: [
      "A1 (E57, E59, E70) – Šentilj to Koper",
      "A2 (E61, E70) – Karawanks to Obrežje",
      "A3 (E61, E70) – Divača to Fernetiči",
      "A4 (E59) – Slivnica to Gruškovje",
      "A5 (E653) – Dragučova to Pince",
      "H3, H4, H5, H6, H7 – Expressways",
    ],
    tollFreeIntro: "Toll-free exceptions:",
    tollFreeList: ["H2 – Maribor West to Tezno", "H6 – Koper to Lucija", "A2 – Jesenice to Vrba", "Karawanks Tunnel (separate toll)"],
    vehicleClassesIntro: "Toll fees depend on maximum permissible mass and height above the front axle.",
    vehicleClasses: ["Passenger car", "Goods vehicle / Motorhome (< 1.3 m)", "Goods vehicle / Motorhome (≥ 1.3 m)", "Motorcycle"],
    validityPeriods: [
      { name: "1-week vignette", description: "Best for short holidays." },
      { name: "1-month vignette", description: "Ideal for longer vacations." },
      { name: "6-month vignette", description: "Motorcycles only." },
      { name: "1-year vignette", description: "Most cost-effective." },
    ],
    priceTables: [
      {
        category: "Passenger car",
        rows: [
          { period: "1 week", eurPrice: "€24.99" },
          { period: "1 month", eurPrice: "€42.99" },
          { period: "1 year", eurPrice: "€132.99" },
        ],
      },
      {
        category: "Goods vehicle / Motorhome (≥ 1.3 m)",
        rows: [
          { period: "1 week", eurPrice: "€42.99" },
          { period: "1 month", eurPrice: "€74.99" },
          { period: "1 year", eurPrice: "€249.99" },
        ],
      },
      {
        category: "Motorcycle",
        rows: [
          { period: "1 week", eurPrice: "€14.99" },
          { period: "6 months", eurPrice: "€42.99" },
          { period: "1 year", eurPrice: "€73.99" },
        ],
      },
    ],
    priceNote: "Prices combine the toll fee and registration fee.",
    faqs: [
      { question: "Do I need a vignette to drive in Slovenia?", answer: "Yes. All vehicles up to 3,500 kg must have a valid digital vignette. Motorcycles also require one." },
      { question: "How are vignettes checked?", answer: "Automatic cameras and mobile police patrols scan licence plates against the toll database." },
      { question: "What happens if I drive without a vignette?", answer: "A fine of EUR 300 may apply. Checks are frequent." },
      { question: "Do electric cars need a vignette?", answer: "Yes. All passenger vehicles under 3,500 kg must purchase a vignette regardless of fuel type." },
    ],
    neighbourIntro: "Most neighbouring countries have their own vignette systems.",
  },
  "vignette-switzerland": {
    name: "Switzerland",
    slug: "vignette-switzerland",
    flag: "/flags/switzerland.svg",
    heroDescription: "Tolls in Switzerland are collected through an e-vignette linked to your license plate.",
    heroTitle: "The Swiss vignette can be easily purchased online.",
    tollRoadsIntro: "In Switzerland, all national motorways and expressways require a valid vignette. Roads are marked with green and white signs.",
    tollRoadsList: [
      "All motorways and expressways marked with 'A'",
      "European road network sections marked with 'E'",
      "Extra toll: Great St. Bernard Tunnel, Munt la Schera Tunnel",
    ],
    tollFreeIntro: "Exceptions where no vignette is needed:",
    tollFreeList: ["Basel St. Louis motorway", "Rheinfelden motorway", "Kreuzlingen motorway (first exit only)"],
    vehicleClassesIntro: "The vignette is mandatory for all vehicles up to 3,500 kg, including motorcycles. Trailers also require their own vignette.",
    vehicleClasses: ["Passenger car", "Goods vehicle / Motorhome", "Motorcycle", "Trailer / Caravan"],
    validityPeriods: [
      { name: "Annual vignette (14 months)", description: "Valid from December 1 of previous year to January 31 of following year." },
    ],
    priceTables: [
      {
        category: "All vehicle types",
        rows: [
          { period: "2025 annual", localPrice: "CHF 52.00", eurPrice: "€54.99" },
        ],
      },
    ],
    priceNote: "Prices include toll fee and registration fee. Same price for all vehicle categories.",
    faqs: [
      { question: "How long is the Swiss vignette valid?", answer: "14 months: from December 1 of the previous year to January 31 of the following year." },
      { question: "Can I transfer my vignette?", answer: "No. Swiss vignettes are not transferable between vehicles." },
      { question: "How is the vignette checked?", answer: "At border crossings, through police inspections, and via cameras along toll roads." },
      { question: "Can I postpone the start date?", answer: "No. The annual vignette always follows a fixed validity period." },
    ],
    neighbourIntro: "Neighbouring countries also have compulsory tolls.",
  },
  "vignette-moldova": {
    name: "Moldova",
    slug: "vignette-moldova",
    flag: "/flags/moldova.svg",
    heroDescription: "Tolls in Moldova are collected through an e-vignette linked to your license plate.",
    heroTitle: "The Moldova vignette can be easily purchased online.",
    tollRoadsIntro: "In all of Moldova, a valid e-vignette is mandatory for travel. This applies to expressways M, republican roads R, and regional roads G.",
    tollRoadsList: [
      "All expressways (M)",
      "All republican roads (R)",
      "All regional roads (G)",
      "No exceptions – vignette required everywhere",
    ],
    vehicleClassesIntro: "Toll fees are based on vehicle classification. Check your registration certificate for maximum permissible mass.",
    vehicleClasses: ["Motor vehicle (≤ 3,500 kg)", "Minibus (9–24 seats)", "Bus (25+ seats)", "Light truck / goods vehicle (≤ 3,500 kg)"],
    validityPeriods: [
      { name: "1 day", description: "Only for buses and trucks." },
      { name: "7 days", description: "For all vehicles." },
      { name: "15 days", description: "Motor vehicles only." },
      { name: "30 days", description: "All vehicles." },
      { name: "90 days", description: "All vehicles." },
    ],
    priceTables: [
      {
        category: "Car",
        rows: [
          { period: "7 days", eurPrice: "€12.99" },
          { period: "15 days", eurPrice: "€16.99" },
          { period: "30 days", eurPrice: "€26.99" },
          { period: "90 days", eurPrice: "€56.99" },
        ],
      },
      {
        category: "Truck / Tractor < 3.5 t",
        rows: [
          { period: "1 day", eurPrice: "€12.99" },
          { period: "7 days", eurPrice: "€29.99" },
          { period: "30 days", eurPrice: "€51.99" },
          { period: "90 days", eurPrice: "€111.99" },
          { period: "12 months", eurPrice: "€414.99" },
        ],
      },
    ],
    priceNote: "Prices include toll fee and registration fee.",
    faqs: [
      { question: "How long can you drive without a vignette?", answer: "Driving on toll roads without a valid vignette is not allowed. Mandatory from the moment you enter." },
      { question: "How is the vignette checked?", answer: "Customs officials check at entry/exit. Without payment, you may not leave the country." },
      { question: "Can I transfer my vignette?", answer: "No. Vignettes are linked to the specific vehicle." },
      { question: "Which vehicles are exempt?", answer: "Moldovan-registered vehicles, diplomatic missions, and internationally exempt vehicles." },
    ],
    neighbourIntro: "Neighbouring countries also have compulsory tolls.",
  },
};
