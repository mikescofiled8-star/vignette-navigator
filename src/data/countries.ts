export interface PriceTable {
  category: string;
  rows: { period: string; localPrice?: string; eurPrice: string }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TollRoadRegion {
  region: string;
  roads: string[];
}

export interface NumberedSection {
  number: string;
  title: string;
  description: string;
}

export interface VehicleClassDetail {
  name: string;
  description: string;
}

export interface CountryData {
  name: string;
  slug: string;
  flag: string;
  heroDescription: string;
  heroTitle: string;
  numberedSections?: NumberedSection[];
  tollRoadsIntro: string;
  tollRoadsDetailedIntro?: string;
  tollRoadsList: string[];
  tollRoadsRegional?: TollRoadRegion[];
  tollRoadsLegalNote?: string;
  tollFreeIntro?: string;
  tollFreeList?: string[];
  vehicleClassesIntro: string;
  vehicleClasses: string[];
  vehicleClassDetails?: VehicleClassDetail[];
  validityPeriodsIntro?: string;
  validityPeriods: { name: string; description: string }[];
  priceIntro?: string;
  exchangeRate?: string;
  exchangeDate?: string;
  priceTables: PriceTable[];
  priceNote: string;
  lorrySection?: {
    title: string;
    intro: string;
    factors: string[];
    details: string;
    link?: { text: string; url: string };
  };
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
    numberedSections: [
      {
        number: "01.",
        title: "Toll in Hungary",
        description: "Hungary uses a digital vignette system (e-matrica) to collect motorway tolls. Instead of a physical sticker, the Hungary vignette is linked directly to your vehicle's license plate, allowing seamless travel on all toll motorways and expressways. Vehicles are monitored by automatic license plate recognition cameras, so having a valid vignette before entering the motorway is essential to avoid fines.",
      },
      {
        number: "02.",
        title: "Purchase the Hungary vignette online",
        description: "The fastest and safest way to buy the Hungary vignette online is through Tollvignettes.eu, an official sales partner of the National Mobile Payment Plc. Simply enter your license plate number, select your validity period, and pay securely by card, PayPal or another method. Your digital vignette is instantly linked to your license plate, and you will receive an email confirmation as proof of validity. There is no sticker required.",
      },
    ],
    tollRoadsIntro: "Hungary has one of the most developed motorway networks in Central Europe, and most long-distance routes are subject to tolls. To use these roads legally, all drivers must register a digital vignette, which is electronically linked to the vehicle's license plate. There is no physical sticker, and toll enforcement is carried out by automatic camera systems that scan license plates and verify vignette validity in real time.",
    tollRoadsDetailedIntro: "The toll system applies to motorways (M roads) and several expressways, which connect Budapest with every region of the country and with neighbouring nations such as Austria, Slovakia, Romania, Serbia and Croatia. These routes are essential for holiday travel, business journeys and international transit, so having the correct vignette before entering a tolled section is crucial to avoid fines.",
    tollRoadsList: [],
    tollRoadsRegional: [
      { region: "Pest", roads: [
        "M0 between M1–M0 junction and M0–11-es út junction",
        "M1 between Budapest city border and Bicske junction",
        "M2 between M2–M0 junction and Vác north junction",
        "M3 between Budapest, Szentmihályi út junction and Hatvan junction",
        "M31 between Nagytarcsai junction and M3–M31 junction",
        "M4 between Budapest Liszt Ferenc Nemzetközi Repülőtér junction and Jászberény / Szolnok north junction",
        "M44 between M44 / Kecskemét north junction and Szentkirályi junction",
        "M5 between Budapest, Szentlőrinci út junction and Lajosmizse junction",
        "M51 between M51–M0 junction and M51–M5 junction",
        "M6 between Budapest, Barackos út junction and Ráckeresztúr junction",
        "M7 between Budapest city border and Martonvásár junction",
      ]},
      { region: "Bács-Kiskun", roads: [
        "M5 between Örkény junction and Kistelek junction",
        "M44 between M44 / Kecskemét north junction and Tiszaug / Tiszakürt junction",
      ]},
      { region: "Baranya", roads: [
        "M6 between Bátaszék junction and M6–M60 junction",
        "M60 between M60–M6 junction and Pécs nyugat junction",
      ]},
      { region: "Békés", roads: [
        "M44 between Szolnok/ Martfű/ Kunszentmárton junction and Békéscsaba-Gyula/ Debrecen-Szeged junction",
      ]},
      { region: "Borsod-Abaúj-Zemplén", roads: [
        "M3 between Füzesabony junction and Polgár junction",
        "M30 between M3–M30 junction and Tornyosnémeti, country border",
      ]},
      { region: "Csongrád-Csanád", roads: [
        "M5 between Kiskunfélegyháza south junction and Röszke, country border",
        "M43 between Szeged north junction and Csanádpalota, country border",
      ]},
      { region: "Fejér", roads: [
        "M1 between Herceghalom junction and Tatabánya-Óváros junction",
        "M6 between Százhalombatta north junction and Paks north junction",
        "M7 between Pusztazámor junction and Balatonvilágos junction",
      ]},
      { region: "Győr-Moson-Sopron", roads: [
        "M1 between Bábolna junction and Hegyeshalom, country border",
        "M15 between M15–M1 junction and Rajka, country border",
        "M19 between M1–M19 junction and Győr centrum junction",
        "M85 between Győr-nyugat junction and Sopron, country border",
        "M86 between Répcelak junction and Csorna észak junction",
      ]},
      { region: "Hajdú-Bihar", roads: [
        "M3 between Hejőkürt junction and Nyíregyháza nyugat junction",
        "M4 between M4–M35 junction and Nagykereki, country border",
        "M35 between M35–M3 junction and M35–M4 junction",
      ]},
      { region: "Heves", roads: [
        "M25 between M25–M3 junction and Eger",
        "M3 between Bag junction and Mezőkövesd junction",
      ]},
      { region: "Jász-Nagykun-Szolnok", roads: [
        "M4 between Abony east / Szolnok west junction and Törökszentmiklós west / Szajol junction",
        "M44 between Lakitelek / Tiszakécske junction and Szarvas / Szentes junction",
      ]},
      { region: "Komárom-Esztergom", roads: [
        "M1 between Szárliget junction and Győr-Ipari Park",
        "M19 between M1–M19 junction and Győrszentiván junction",
      ]},
      { region: "Somogy", roads: [
        "M7 between Balatonvilágos junction and Zalakomár junction",
        "M76 between Hollád junction and Keszthely-Fenékpuszta junction",
      ]},
      { region: "Szabolcs-Szatmár-Bereg", roads: [
        "M3 between Hajdúnánás junction and Vásárosnamény junction",
      ]},
      { region: "Tolna", roads: [
        "M6 between Dunaújváros south junction and Pécsvárad junction",
      ]},
      { region: "Vas", roads: [
        "M86 between Szombathely junction and Beled junction",
      ]},
      { region: "Veszprém", roads: [
        "M7 between Polgárdi junction and Siófok east junction",
      ]},
      { region: "Zala", roads: [
        "M7 between Sávoly junction and Letenye, country border",
        "M70 between M70–M7 junction and Tornyiszentmiklós, country border",
        "M76 between Balatonszentgyörgy / Balatonberény junction and Keszthely-Fenékpuszta junction",
      ]},
    ],
    tollRoadsLegalNote: "To legally use Hungary's motorways and expressways, your digital vignette must be valid before you enter a toll section. There are no toll booths on these roads, so you cannot pay on the spot. Instead, license plate recognition cameras automatically check every vehicle and issue fines if no active vignette is found.",
    vehicleClassesIntro: "In Hungary, the e-vignette is required for all motor vehicles up to 3,500 kg, but the type of vehicle determines which vignette category you need. Passenger cars, motorhomes, vans, trailers and buses do not all pay the same fee, each belongs to a different toll class. This means two vehicles under 3,500 kg may still require different vignette types.",
    vehicleClasses: ["Passenger car (≤ 7 seats)", "Passenger car (8 or 9 seats)", "Goods vehicle / Motorhome", "Motorcycle", "Caravan / Trailer"],
    vehicleClassDetails: [
      { name: "Passenger car (≤ 7 seats)", description: "This category corresponds to toll class D1. It applies to passenger cars with up to 7 seats and a maximum permissible weight of up to 3.5 t. Most privately used cars fall within this Hungarian e-vignette category." },
      { name: "Passenger car (8 or 9 seats)", description: "This category falls under toll class D2. It includes passenger cars with 8 or 9 seats and a maximum permissible weight of up to 3.5 t." },
      { name: "Goods vehicle / Motorhome", description: "Goods vehicles and motorhomes with a maximum permissible weight of up to 3.5 t are classified under D2. This includes light commercial vehicles and camper vehicles within the 3.5 t limit." },
      { name: "Motorcycle", description: "Motorcycles are classified under toll category D1M. This category applies exclusively to two-wheeled motor vehicles registered as motorcycles." },
      { name: "Caravan / Trailer", description: "Trailers and caravans are classified under toll category U. A separate e-vignette is required when the trailer or caravan is attached to a D2 vehicle, such as a passenger car with 8 or 9 seats or a goods vehicle / motorhome with a maximum permissible weight of up to 3.5 t." },
    ],
    validityPeriodsIntro: "The Hungary e-vignette is available for several validity periods, allowing drivers to choose the option that best matches the length of their trip. Whether you are just passing through, taking a short holiday or using Hungarian motorways regularly, there is a vignette that fits your travel needs. All validity periods start from your selected date and the vignette is linked to your license plate electronically.",
    validityPeriods: [
      { name: "1-day vignette", description: "Ideal for short transit or day trips." },
      { name: "10-day vignette", description: "Perfect for holidays or short stays." },
      { name: "Monthly vignette", description: "Great for regular visitors." },
      { name: "Annual vignette", description: "Best value for frequent travellers." },
    ],
    priceIntro: "When you buy your Hungary vignette online through Tollvignettes.eu, you pay according to the official Hungarian e-vignette prices set in HUF (Hungarian Forint) by the national toll authority. Tollvignettes.eu applies these official rates transparently, while allowing you to purchase your vignette in another preferred currency.",
    exchangeRate: "Ft 100 = 0.4202 EUR",
    exchangeDate: "Friday 20 February 2026",
    priceTables: [
      {
        category: "Motorcycle",
        rows: [
          { period: "1 day", localPrice: "HUF 2,770.00", eurPrice: "€11.64" },
          { period: "10 days", localPrice: "HUF 3,450.00", eurPrice: "€14.50" },
          { period: "1 month", localPrice: "HUF 5,590.00", eurPrice: "€23.49" },
        ],
      },
      {
        category: "Passenger car (≤ 7 seats)",
        rows: [
          { period: "1 day", localPrice: "HUF 5,550.00", eurPrice: "€23.32" },
          { period: "10 days", localPrice: "HUF 6,900.00", eurPrice: "€28.99" },
          { period: "1 month", localPrice: "HUF 11,170.00", eurPrice: "€46.93" },
          { period: "2026", localPrice: "HUF 61,760.00", eurPrice: "€259.51" },
        ],
      },
      {
        category: "Passenger car (8 or 9 seats)",
        rows: [
          { period: "1 day", localPrice: "HUF 7,890.00", eurPrice: "€33.15" },
          { period: "10 days", localPrice: "HUF 10,040.00", eurPrice: "€42.19" },
          { period: "1 month", localPrice: "HUF 15,820.00", eurPrice: "€66.47" },
          { period: "2026", localPrice: "HUF 87,650.00", eurPrice: "€368.31" },
        ],
      },
      {
        category: "Caravan / Trailer",
        rows: [
          { period: "1 day", localPrice: "HUF 5,550.00", eurPrice: "€23.32" },
          { period: "10 days", localPrice: "HUF 6,900.00", eurPrice: "€28.99" },
          { period: "1 month", localPrice: "HUF 11,170.00", eurPrice: "€46.93" },
          { period: "2026", localPrice: "HUF 61,760.00", eurPrice: "€259.51" },
        ],
      },
    ],
    priceNote: "Prices based on official HUF rates. EUR conversions are approximate.",
    lorrySection: {
      title: "Toll regulations for lorries",
      intro: "In Hungary, all vehicles over 3,500 kg are subject to a distance-based toll system called HU-GO. This system applies to lorries, buses, and heavy goods vehicles travelling on motorways, expressways and main roads. Unlike passenger cars, these vehicles do not use the e-vignette, but must register and pay tolls according to the distance travelled.",
      factors: [
        "Vehicle category (number of axles: J2, J3, J4, J5)",
        "Road type (motorway, expressway, or main road)",
        "Emission class (EURO rating)",
        "Total distance travelled",
      ],
      details: "Toll payments are managed through the HU-GO electronic toll system, operated by the National Toll Payment Services Plc. Registered users can install an On-Board Unit (OBU) that automatically records their journeys and deducts tolls from a prepaid account. Occasional users can choose a route ticket, purchased before starting their trip, valid for a specific route and vehicle.\n\nFrom 1 February 2025, route tickets are valid for 120 minutes from the moment of purchase. Missing this window or driving without a valid HU-GO registration can result in heavy fines, often exceeding 280,000 HUF depending on the violation.\n\nEnforcement is fully automated through camera surveillance, mobile control units, and roadside checks. Each vehicle's license plate is cross-checked in real time to ensure compliance with the Hungarian toll regulations.",
      link: { text: "More information", url: "https://toll-charge.hu/en/" },
    },
    faqs: [
      { question: "Do I need a vignette in Hungary?", answer: "Yes. All passenger cars, motorcycles and light vehicles up to 3,500 kg require a valid Hungary vignette (e-matrica) to use the country's motorways and expressways. Without one, your trip will be considered unauthorised road use, which can lead to fines. Vehicles above 3,500 kg use the HU-GO system instead." },
      { question: "Which roads require a vignette in Hungary?", answer: "Vignettes are mandatory on all motorways and expressways marked with M, such as M1, M3, M5, M6 and M7. These connect Hungary with Austria, Slovakia, Romania, Croatia and Serbia. Enforcement is camera-based, so there are no toll booths." },
      { question: "How can I buy the Hungary vignette online?", answer: "The fastest and safest way to buy your Hungary vignette online is through an official sales platform, like Tollvignettes.eu. Simply enter your license plate, choose the validity period, select your vehicle category, and pay securely by card or PayPal. Your Hungarian e-vignette is activated instantly and sent by email." },
      { question: "Is the Hungarian vignette linked to the license plate?", answer: "Yes. The digital vignette is fully electronic and registered to your vehicle's license plate. There is no physical sticker. Cameras automatically verify license plates to ensure compliance across all toll roads in Hungary." },
      { question: "Do I need a vignette for my trailer or caravan?", answer: "If you drive a D2 vehicle (minibus or large car) with a trailer up to 3,500 kg, you need an additional U-category vignette for the trailer. For D1 vehicles (cars up to 7 seats), the trailer is already included in the main vignette." },
      { question: "What are the fines for driving without a valid Hungary vignette?", answer: "If you drive on a toll road in Hungary without a valid Hungary vignette, you risk a fine of up to 60,000 HUF for passenger cars and higher amounts for larger vehicles. However, if you purchase a valid vignette within 60 minutes after entering the motorway, the penalty is waived. This is known as the official grace period." },
      { question: "Can I buy a Hungary vignette at the border or petrol stations?", answer: "Yes, you can pay the Hungarian digital toll at most petrol stations, border crossings and official sales outlets. However, petrol stations are often busy and time-consuming. Paying your toll online through an official sales platform (e.g. Tollvignettes.eu) is much faster, safer, and available 24/7." },
      { question: "Can I change or cancel my Hungarian vignette?", answer: "Once activated, a Hungary vignette cannot be cancelled, changed or refunded. If you made a mistake (e.g. wrong plate or start date), contact the National Toll Payment Services Plc. immediately. They may correct errors before activation." },
      { question: "Do lorries and heavy vehicles need a vignette?", answer: "No. Lorries and buses over 3,500 kg use the HU-GO electronic toll system, a distance-based charging method. The toll depends on distance, vehicle type, number of axles and emission class. These vehicles must register and pay via HU-GO.hu." },
    ],
    neighbourIntro: "Several neighbouring countries of Hungary also require a vignette or toll payment for using their motorways and expressways. Each country has its own toll system to finance and maintain road infrastructure, so make sure you have the correct vignette or toll registration before crossing the border:",
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
