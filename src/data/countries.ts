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
    factors?: string[];
    details: string;
    link?: { text: string; url: string };
  };
  bridgeSection?: {
    title: string;
    intro: string;
    bridges: { name: string; description: string; link?: { text: string; url: string } }[];
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
    numberedSections: [
      { number: "01.", title: "Toll in Czech Republic", description: "In the Czech Republic, tolls are paid with a digital vignette. Your license plate is registered electronically, so you can drive without stickers or toll stops." },
      { number: "02.", title: "Register the Czech e-vignette online", description: "You can quickly get your Czech e-vignette online at Tollvignettes.eu with a credit card, PayPal, or other secure payment method. Once complete, your license plate is instantly added to the national toll system and you'll receive an email confirmation, making your trip on Czech motorways fast, easy, and fully compliant." },
    ],
    tollRoadsIntro: "Toll payments in the Czech Republic are managed through the digital vignette system. All tolled motorways are marked with D, and a valid e-vignette linked to your licence plate is mandatory before entering these routes. Your license plate is automatically registered in the national electronic toll database, ensuring compliance without stickers or toll booths.",
    tollRoadsDetailedIntro: "Some motorways are also marked with E, showing that they are part of the wider European road network.",
    tollRoadsList: [
      "D0 (E50, E65) between Prague city ring road.",
      "D1 (E65, E462, E50, E55, E59) between Prague and Ostrava via Brno.",
      "D2 (E65) between Brno and the Slovak border (towards Bratislava).",
      "D3 (E55) between Prague and the Austrian border (towards Linz).",
      "D4 between Prague and Nová Hospoda (near Písek).",
      "D5 (E50) between Prague and the German border (towards Nuremberg).",
      "D6 (E48, E49) between Prague and Cheb (towards Germany).",
      "D7 between Prague and Chomutov (towards Germany).",
      "D8 (E55) between Prague and the German border (towards Dresden).",
      "D10 (E65) between Prague and Turnov (towards Liberec).",
      "D11 (E67) between Prague and Hradec Králové.",
      "D35 (E442, E462) between Mohelnice and Lipník nad Bečvou, and between Opatovice nad Labem and Časy.",
      "D46 (E462) between Vyškov and Olomouc.",
      "D48 (E462) between Bělotín and Český Těšín (towards Poland).",
      "D52 (E461) between Brno and Pohořelice.",
      "D55 between Hulín and Otrokovice, and around Staré Město.",
      "D56 between Ostrava and Frýdek-Místek.",
    ],
    tollFreeIntro: "Toll-free motorway sections in the Czech Republic",
    tollFreeList: [
      "D0 between Prague city ring road (partially toll-free).",
      "D1 between Prague and Brno (exits 182–210).",
      "D1 between Brno and Ostrava to the Polish border (exit 354).",
      "D3 between Veselí nad Lužnicí Nord and Bošilec (exits 104–109).",
      "D5 between Pilsen and Prague (exits 89–67).",
      "D6 between Cheb and Karlovy Vary (exits 162–131).",
      "D7 between Chomutov and Louny (exits 18–78).",
      "D11 between Sedlice and Kukleny (exits 84–90).",
      "D35 between Sedlice and Opatovice (exits 126–129).",
      "D35 between Mohelnice and Olomouc (exits 261–276).",
      "D46 between Hněvotín and Olomouc, Slavonín (exits 37–39).",
      "D48 between Frýdek-Místek and Dobrá (exits 47–54).",
      "D52 around Pohořelice (exits 23–26).",
      "D55 around Otrokovice (exits 30–32).",
    ],
    vehicleClassesIntro: "All passenger vehicles up to 3,500 kg with four wheels are required to purchase a valid Czech Republic digital vignette to drive on tolled motorways. Motorcycles, trikes, and trailers are exempt from this toll obligation and can use the roads without a vignette.\n\nThe price of the Czech vignette depends on the emission category of your vehicle. Cleaner vehicles with lower emissions may qualify for reduced rates, while standard fuel vehicles pay the standard vignette price.",
    vehicleClasses: ["Standard fuel", "Natural gas (CNG/LNG)", "Biomethane (bio-CNG)", "Plug-in hybrid (≤50 g/km CO₂)"],
    vehicleClassDetails: [
      { name: "Standard fuel", description: "This category applies to vehicles powered by petrol, diesel or LPG, as well as hybrid vehicles with CO₂ emissions above 50 g/km. Most conventional passenger cars fall within this classification for the Czech e-vignette." },
      { name: "Natural gas", description: "This category covers vehicles that run on natural gas, including compressed natural gas (CNG) and liquefied natural gas (LNG). The vehicle must be registered as CNG or LNG-powered." },
      { name: "Biomethane", description: "This category is intended for vehicles powered by biomethane (bio-CNG). It applies only to vehicles that are officially registered as biomethane-powered." },
      { name: "Plug-in hybrid", description: "This category applies to plug-in hybrid vehicles with certified CO₂ emissions of up to 50 g/km. Only vehicles meeting this emission threshold fall within this classification." },
    ],
    validityPeriodsIntro: "Digital vignettes in the Czech Republic are available with different validity periods, allowing every driver to choose the option that best fits their travel plans.",
    validityPeriods: [
      { name: "1-day vignette", description: "Best for a one-day visit or transit through the Czech Republic." },
      { name: "10-day vignette", description: "Ideal for short trips or holidays." },
      { name: "30-day vignette", description: "Suited for longer stays or frequent visits." },
      { name: "Annual vignette (1 year)", description: "The most cost-effective option for regular drivers." },
    ],
    priceIntro: "The cost of a Czech Republic digital vignette depends on the selected validity period and the emission category of your vehicle. Below you can find the vignette prices for 2026:",
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
        category: "Biomethane",
        rows: [
          { period: "1 day", localPrice: "CZK 290.00", eurPrice: "€10.99" },
          { period: "10 days", localPrice: "CZK 390.00", eurPrice: "€15.99" },
          { period: "30 days", localPrice: "CZK 520.00", eurPrice: "€20.99" },
          { period: "1 year", localPrice: "CZK 1,710.00", eurPrice: "€65.99" },
        ],
      },
      {
        category: "Natural gas",
        rows: [
          { period: "1 day", localPrice: "CZK 290.00", eurPrice: "€10.99" },
          { period: "10 days", localPrice: "CZK 390.00", eurPrice: "€15.99" },
          { period: "30 days", localPrice: "CZK 520.00", eurPrice: "€20.99" },
          { period: "1 year", localPrice: "CZK 1,710.00", eurPrice: "€65.99" },
        ],
      },
      {
        category: "Plug-in hybrid (CO₂ max 50 g/km)",
        rows: [
          { period: "1 day", localPrice: "CZK 290.00", eurPrice: "€10.99" },
          { period: "10 days", localPrice: "CZK 390.00", eurPrice: "€15.99" },
          { period: "30 days", localPrice: "CZK 520.00", eurPrice: "€20.99" },
          { period: "1 year", localPrice: "CZK 1,710.00", eurPrice: "€65.99" },
        ],
      },
    ],
    priceNote: "The Czech Republic vignette prices shown above include both the toll fee and the registration fee, combined into one total amount.",
    faqs: [
      { question: "Do I need a vignette to drive in the Czech Republic?", answer: "Yes. All passenger vehicles up to 3,500 kg with four wheels must have a valid digital vignette for Czech motorways and expressways, while motorcycles, trikes, and trailers are exempt. License plates are checked digitally by the Police and Customs Administration using cameras in patrol cars, at control gates, and even at rest stops. If your vehicle is not registered with a valid vignette, you risk fines of up to CZK 20,000, which is far higher than the vignette cost itself." },
      { question: "How can I buy the Czech Republic digital vignette online?", answer: "You can purchase your vignette directly on Tollvignettes.eu. The process is simple: select your validity period (1 day, 10 days, 30 days, or 1 year), enter your license plate number and country of registration, then complete payment with a credit card, PayPal, or another secure method. Once your order is confirmed, your license plate is registered instantly in the national toll database, and you'll receive a confirmation email." },
      { question: "How long is a Czech vignette valid?", answer: "Digital vignettes in the Czech Republic come in four options: 1 day, 10 days, 30 days, or 1 year. The validity starts from the date you choose during purchase. For example, if you buy a 10-day vignette starting on July 1, it will remain valid until July 10." },
      { question: "How are vignettes checked in the Czech Republic?", answer: "There are no toll booths or physical stickers. Instead, the Czech toll system relies on cameras and police patrols. Cameras automatically scan license plates on motorways and cross-check them with the national toll database. If your plate isn't registered with a valid vignette, the system will flag your vehicle, and a fine will be issued." },
      { question: "What happens if I drive without a vignette in the Czech Republic?", answer: "Driving without a valid vignette in the Czech Republic is considered a traffic offence and can lead to heavy fines. Penalties may reach up to CZK 20,000, which is often several times more than the vignette price itself. Checks are frequent and carried out by police patrols and camera systems, especially on major routes and at border crossings." },
      { question: "Do electric cars need a vignette in the Czech Republic?", answer: "Fully electric vehicles are exempt from paying the vignette fee. However, they must still be registered in the toll system so that enforcement cameras recognise them as compliant. If you drive an EV, you won't be charged, but you must complete the free registration before using Czech motorways." },
    ],
    neighbourIntro: "If you are travelling beyond the Czech Republic, keep in mind that most neighboring countries also require a digital vignette to use their motorways. Each country has its own rules and validity options:",
  },
  "vignette-slovakia": {
    name: "Slovakia",
    slug: "vignette-slovakia",
    flag: "/flags/slovakia.svg",
    heroDescription: "Tolls in Slovakia are collected through a digital vignette linked to your license plate.",
    heroTitle: "Get your Slovak vignette instantly online.",
    numberedSections: [
      { number: "01.", title: "Toll in Slovakia", description: "In Slovakia, motorway and expressway tolls are collected through a digital vignette (e-vignette). Instead of a sticker, your license plate is electronically registered in the national toll system. This makes compliance simple: once your vignette is active, your plate is automatically recognised at all checkpoints." },
      { number: "02.", title: "Register your Slovakia vignette online", description: "The easiest option is to buy your Slovak vignette directly at Tollvignettes.eu. Select your vignette type, enter your license plate and country of registration, and pay securely with credit card, PayPal or another method. You'll receive instant confirmation by email, and your vehicle is valid immediately. No queues at petrol stations and no sticker on your windscreen." },
    ],
    tollRoadsIntro: "In Slovakia, motorway tolls apply on two types of roads: motorways D (diaľnica) and expressways R (rýchlostná cesta). These are marked on road signs with a red square containing a white D or R and the route number.",
    tollRoadsDetailedIntro: "A vignette is not required for every kilometre of these roads, but only on specific tolled sections. At the start of each tolled section, you will see a clear road sign indicating the vignette requirement. Many D and R roads are also part of the European route network, and therefore carry an additional green E designation.",
    tollRoadsList: [
      "D1 from Bratislava-Východ to Hričovské Podhradie (junction D1/D3)",
      "D1 from Dubná Skala to Turany",
      "D1 from Ivachnová to Poprad-Západ",
      "D1 from Poprad-Východ to Spišský Štvrtok (temporarily exempt)",
      "D1 from Spišský Štvrtok to Prešov-Západ",
      "D1 from Prešov-Juh to Košice-Sever",
      "D1 from Rozhanovce to Bidovce",
      "D2 from Brodské at the Czech border to Kúty (temporarily exempt)",
      "D2 from Kúty to Stupava",
      "D2 from Bratislava-Jarovce (junction D2/D4) to Čunovo at the Hungarian border",
      "D3 from Čadca, Bukov to Skalité at the Polish border",
      "D4 from Jarovce at the Austrian border to Bratislava-Jarovce (junction D2/D4)",
      "R1 from Trnava to Sládkovičovo",
      "R1 from Sládkovičovo to Dolná Streda (temporarily exempt)",
      "R1 from Dolná Streda to Nitra-Západ",
      "R1 from Nitra-Východ to Hronská Breznica",
      "R1 from Hronská Dúbrava to Banská Bystrica-Kremnička",
      "R2 from Lovčica-Trubín to Žiar nad Hronom",
      "R2 from Zvolen-centrum Budča (junction R1/R2) to Zvolen-Pustý hrad",
      "R2 from Zvolen-východ to Kriváň",
      "R2 from Mýtna to Lovinobaňa, Tomášovce",
      "R3 from Martin (junction D1/R3) to Martin-Sever",
      "R4 from Košice-Šebastovce to Milhosť at the Hungarian border",
      "R6 from Púchov to Beluša-Sever",
      "R7 from Bratislava-Juh (junction D4/R7) to Holice",
    ],
    vehicleClassesIntro: "In Slovakia, the motorway vignette is required for most vehicles using motorways and expressways. The obligation applies to all motor vehicles and trailers up to 3,500 kg gross vehicle weight (GVW). Each vehicle type has its own rules: cars, vans and motorhomes need a vignette, and if you are towing a trailer or caravan, that also requires its own separate vignette.",
    vehicleClasses: ["Passenger car", "Goods vehicle / Motorhome", "Trailer / Caravan"],
    vehicleClassDetails: [
      { name: "Passenger car", description: "This category applies to passenger cars with a maximum permissible weight of up to 3.5 t. Most privately used vehicles fall within this classification under the Slovak e-vignette system." },
      { name: "Goods vehicle / Motorhome", description: "This category covers light commercial vehicles and motorhomes with a maximum permissible weight of up to 3.5 t. It applies to vehicles intended for transporting goods or used as camper vehicles." },
      { name: "Trailer / Caravan", description: "This category applies to caravans and trailers towed by a vehicle. A separate e-vignette is required for the trailer or caravan, regardless of the total weight of the vehicle combination." },
    ],
    validityPeriodsIntro: "Digital vignettes in Slovakia are available with several validity options, so you can choose the one that best fits your travel plans.",
    validityPeriods: [
      { name: "1-day vignette", description: "Perfect for single-day trips." },
      { name: "10-day vignette", description: "Ideal for short holidays or transit." },
      { name: "30-day vignette", description: "Flexible choice for longer stays." },
      { name: "Annual vignette (1 year)", description: "Best for frequent or regular driving." },
    ],
    priceIntro: "The Slovak motorway vignette has a fixed price for each validity period (1-day, 10-day, 30-day or annual). Prices are the same for all vehicles up to 3,500 kg GVW, including cars, vans, motorhomes and trailers.",
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
    priceNote: "All prices shown include both the toll fee and the registration fee, combined into one total amount.",
    lorrySection: {
      title: "Toll regulations for lorries in Slovakia",
      intro: "If you are driving a lorry, truck, bus or motorhome over 3,500 kg GVW, the standard Slovakia vignette does not apply. Instead, these heavy vehicles fall under the Slovak electronic truck toll system (e-toll), which charges drivers based on actual road usage.",
      factors: [
        "Distance traveled on tolled sections",
        "Number of axles on the vehicle (and trailers if attached)",
        "Road category (motorways, expressways, or selected national roads)",
        "Emission class and CO₂ category of the vehicle, as required by EU legislation",
      ],
      details: "Since July 2025, the Slovak toll system has included a multi-component structure where the CO₂ emission class directly affects toll rates. Low-emission trucks pay less, while older, higher-polluting vehicles face higher charges.\n\nAll vehicles over 3,500 kg must be equipped with an On-Board Unit (OBU) to use Slovak tolled roads legally. The OBU uses GPS and GSM to track movement on tolled roads, records kilometers driven, road type and axle configuration, automatically calculates and transmits the toll fee, and must be updated if the number of axles changes.",
      link: { text: "More information", url: "https://www.emyto.sk/en" },
    },
    faqs: [
      { question: "What happens if I drive without a valid vignette in Slovakia?", answer: "Driving on tolled sections without a vignette is a serious traffic offence. Cameras and patrols check your license plate against the database, and if no vignette is linked, you can be fined on the spot. The fine is usually several times higher than the vignette price, and you will still need to buy a valid vignette afterwards." },
      { question: "Do I need a vignette if I only drive a short distance on a Slovak motorway?", answer: "Yes. Even if you only use a motorway or expressway for a few kilometres, a vignette is required as soon as you enter a tolled section. Signs along the road clearly indicate when a vignette is mandatory. To avoid mistakes, always buy one before your journey." },
      { question: "Are electric or hybrid cars exempt from paying the Slovak vignette?", answer: "No. In Slovakia, all vehicles up to 3,500 kg are subject to the vignette obligation, regardless of whether they run on petrol, diesel, electricity or gas. Electric vehicles and hybrids pay the same fee as conventional cars." },
      { question: "Where can I buy the Slovak vignette?", answer: "You can buy it in several ways: online at Tollvignettes.eu (fastest and most secure), at vending machines on borders, petrol stations, or selected shops. Buying online gives instant activation and avoids queues." },
      { question: "Can I buy a Slovak vignette at the border?", answer: "Yes, but it's not always convenient. Border petrol stations and vending machines sell vignettes, but queues are common and not every outlet accepts international cards. Buying online at Tollvignettes.eu is easier: your plate is activated instantly, and you avoid last-minute stress." },
      { question: "Do trailers need a separate vignette in Slovakia?", answer: "Yes. If you are towing a trailer or caravan weighing up to 3,500 kg GVW, you must buy a separate vignette for it. This is in addition to the vignette for the towing vehicle itself. Both license plates must be correctly entered into the system when purchasing." },
    ],
    neighbourIntro: "If your journey doesn't stop at the Slovak border, it's important to know that many of Slovakia's neighbouring countries also operate a vignette system for their motorways and expressways:",
  },
  "vignette-romania": {
    name: "Romania",
    slug: "vignette-romania",
    flag: "/flags/romania.svg",
    heroDescription: "In Romania, tolls are collected through a digital vignette (rovinieta) linked to your license plate.",
    heroTitle: "Register your Romania vignette quickly and securely online.",
    numberedSections: [
      { number: "01.", title: "Toll in Romania", description: "In Romania, the use of national and European roads is subject to a mandatory digital vignette (rovinieta). This electronic toll applies to all vehicles, from passenger cars and vans to trucks and buses, and is used to finance the maintenance of the national road network." },
      { number: "02.", title: "Register online", description: "You can easily register your Romania vignette online at Tollvignettes.eu before entering the country. Select your vehicle type, choose the validity period, and enter your license plate details exactly as shown on your registration papers. Once confirmed, your vignette is activated immediately, and you'll receive a confirmation email as proof of registration." },
    ],
    tollRoadsIntro: "In Romania, a valid motorway vignette (rovinieta) is required for driving on all motorways and national roads, regardless of the distance travelled. The vignette serves as a mandatory road tax for all vehicles using the public road network managed by the Romanian National Road Infrastructure Company (CNAIR). Only local roads within municipalities are exempt from this requirement.",
    tollRoadsDetailedIntro: "The vignette system was introduced to help finance the maintenance, modernization, and expansion of Romania's road network, one of the most extensive in Eastern Europe. Toll regulations apply across all main categories of roads: motorways (A), expressways (DEx), and national roads (DN).",
    tollRoadsList: [
      "A0 circles Bucharest and links to all main inbound routes. The southern section is open, while the northern part is still under construction.",
      "A1 runs from Bucharest through Pitești, Sibiu, Deva, Timișoara and Arad to Nădlac on the Hungarian border.",
      "A2 connects Bucharest with Constanța on the Black Sea coast. Fully operational and one of Romania's busiest routes during summer.",
      "A3 leads from Bucharest and Ploiești north through Brașov, Cluj-Napoca and Oradea to Borș on the Hungarian border.",
      "A4 bypasses Constanța, easing coastal traffic and linking the port area with the A2 motorway.",
      "A7 known as the 'Moldova Motorway,' connects Ploiești, Buzău, Bacău and Suceava to Siret near the Ukrainian border.",
      "A10 connects Sebeș, Alba Iulia and Turda, linking the A1 and A3. It is fully operational.",
      "DEx12 Oltenia Expressway runs from Pitești through Slatina to Craiova. Fully operational since July 2025.",
      "All DN national roads also require a valid vignette.",
    ],
    tollFreeIntro: "Toll-free sections in Romania",
    tollFreeList: [
      "Parts of national roads (DN) that pass through towns or cities, between the official 'entry' and 'exit' signs of the municipality.",
      "Local roads managed by city or county authorities (communal or municipal routes).",
    ],
    vehicleClassesIntro: "In Romania, digital toll fees are determined by the official vehicle classification system. Each vehicle class is defined by its maximum permissible mass (GVW) and the number of axles. All motor vehicles with at least four wheels are required to register a valid Romania vignette (rovinieta) before driving on national or motorway roads. Motorbikes, trikes, and trailers are exempt from this requirement.",
    vehicleClasses: ["Passenger car", "Van (≤ 3.5 t)", "Truck (3.5 – 7.5 t)", "Truck (7.5 – 12 t)", "Truck (≥ 12 t) (up to 3 axles)", "Truck (≥ 12 t) (4+ axles)", "Bus (9–23 seats)", "Bus (> 23 seats)"],
    vehicleClassDetails: [
      { name: "Passenger car", description: "This category applies to passenger cars with a maximum permissible weight of up to 3.5 t, used for private or business purposes." },
      { name: "Van (≤ 3.5 t)", description: "This category covers vans and light commercial vehicles with a maximum permissible weight of up to 3.5 t." },
      { name: "Truck (3.5 – 7.5 t)", description: "This category applies to trucks with a maximum permissible weight between 3.5 t and 7.5 t." },
      { name: "Truck (7.5 – 12 t)", description: "This category covers trucks with a maximum permissible weight between 7.5 t and 12 t." },
      { name: "Truck (≥ 12 t) (up to 3 axles)", description: "This category applies to trucks with a maximum permissible weight of 12 t or more and up to 3 axles." },
      { name: "Truck (≥ 12 t) (4 or more axles)", description: "This category covers trucks with a maximum permissible weight of 12 t or more and 4 or more axles." },
      { name: "Bus (9–23 seats)", description: "This category applies to buses with a seating capacity between 9 and 23 seats, including the driver." },
      { name: "Bus (> 23 seats)", description: "This category covers buses with more than 23 seats, including the driver." },
    ],
    validityPeriodsIntro: "In Romania, every digital vignette (rovinieta) is issued for a fixed validity period. Drivers can choose the duration that best matches the length of their stay or travel route.",
    validityPeriods: [
      { name: "1 day", description: "Ideal for a single-day trip or quick transit through Romania." },
      { name: "7 days", description: "Great for short visits, weekend getaways, or business trips." },
      { name: "10 days", description: "Perfect for a week-long holiday or short round trip." },
      { name: "30 days", description: "Suited for longer stays, family holidays, or extended travel." },
      { name: "60 days", description: "Convenient for travellers spending several weeks on the road." },
      { name: "12 months", description: "The best choice for regular drivers and frequent visitors." },
    ],
    priceIntro: "Vignette prices in Romania vary depending on the vehicle type and the chosen validity period. The cost reflects how long the vignette is active and the weight category of the vehicle.",
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
      {
        category: "Truck (3.5 – 7.5 t)",
        rows: [
          { period: "1 day", eurPrice: "€14.99" },
          { period: "7 days", eurPrice: "€27.99" },
          { period: "30 days", eurPrice: "€49.99" },
          { period: "12 months", eurPrice: "€399.99" },
        ],
      },
      {
        category: "Truck (7.5 – 12 t)",
        rows: [
          { period: "1 day", eurPrice: "€19.99" },
          { period: "7 days", eurPrice: "€42.99" },
          { period: "30 days", eurPrice: "€78.99" },
          { period: "12 months", eurPrice: "€714.99" },
        ],
      },
      {
        category: "Truck (≥ 12 t) (up to 3 axles)",
        rows: [
          { period: "1 day", eurPrice: "€24.99" },
          { period: "7 days", eurPrice: "€52.99" },
          { period: "30 days", eurPrice: "€97.99" },
          { period: "12 months", eurPrice: "€904.99" },
        ],
      },
      {
        category: "Truck (≥ 12 t) (4 or more axles)",
        rows: [
          { period: "1 day", eurPrice: "€36.99" },
          { period: "7 days", eurPrice: "€80.99" },
          { period: "30 days", eurPrice: "€154.99" },
          { period: "12 months", eurPrice: "€1,599.99" },
        ],
      },
      {
        category: "Bus (9 – 23 seats)",
        rows: [
          { period: "1 day", eurPrice: "€14.99" },
          { period: "7 days", eurPrice: "€27.99" },
          { period: "30 days", eurPrice: "€49.99" },
          { period: "12 months", eurPrice: "€399.99" },
        ],
      },
      {
        category: "Bus (> 23 seats)",
        rows: [
          { period: "1 day", eurPrice: "€19.99" },
          { period: "7 days", eurPrice: "€42.99" },
          { period: "30 days", eurPrice: "€78.99" },
          { period: "12 months", eurPrice: "€714.99" },
        ],
      },
    ],
    priceNote: "The prices shown represent the total amount, combining the official toll fee and the registration fee.",
    bridgeSection: {
      title: "Bridge tolls in Romania",
      intro: "While most toll payments in Romania are covered by the digital vignette (rovinieta), several major bridges across the Danube River require a separate bridge toll. These tolls are not included in the vignette and must be paid individually.",
      bridges: [
        { name: "Calafat – Vidin Bridge", description: "Located on routes DN56 and E79, this bridge forms an international connection between Calafat (Romania) and Vidin (Bulgaria). The toll must be paid before entering the bridge.", link: { text: "More information", url: "https://vidincalafatbridge.bg/en" } },
        { name: "Giurgiu – Ruse Bridge", description: "Found on DN5, E70, and E85, this bridge links Giurgiu in southern Romania with Ruse in northern Bulgaria. Known as the 'Friendship Bridge,' it is a vital part of the international route between Bucharest and Sofia.", link: { text: "More information", url: "https://www.taxapod.com/taxa-pod-giurgiu-ruse-podul-prieteniei-dn5-e85-e70/" } },
        { name: "Fetești – Cernavodă Bridge", description: "Part of the A2 motorway and E81 route, this bridge connects Fetești and Cernavodă across the Danube. It is the main link between Bucharest and the Black Sea coast.", link: { text: "More information", url: "https://www.e-rovinieta.ro/en/taxa-pod-fetesti" } },
        { name: "Giurgeni – Vadu Oii Bridge", description: "Located on DN2A and E60, this bridge connects Giurgeni (Ialomița County) with Vadu Oii (Constanța County). It is an essential crossing for traffic between central Romania and the eastern coast.", link: { text: "More information", url: "https://www.taxapod.com/taxa-pod-giurgeni-vadu-oii-dn2a-e60/" } },
      ],
    },
    faqs: [
      { question: "Do I need a Romania vignette to drive on all roads?", answer: "Yes. A valid Romania vignette (rovinieta) is required for all motorways (A roads), expressways (DEx) and national roads (DN routes). Local streets and roads within city limits are toll-free. Make sure your vignette is valid before entering a national road, automatic cameras monitor vehicles and issue fines for missing registrations." },
      { question: "Can I buy a Romania vignette after entering the country?", answer: "Yes, you can buy the rovinieta after crossing the border, but you must do so before driving on any national road (DN), expressway (DEx) or motorway (A). The system registers your license plate, and non-compliance can trigger fines. It's safest to register before entering Romania to avoid penalties." },
      { question: "What vehicle information do I need to register the vignette?", answer: "You need your license plate number, vehicle classification (based on GVW / axles / number of seats), and for longer vignettes (30, 60, 12 months) the chassis / VIN number may also be required." },
      { question: "Is the Romania vignette transferable between vehicles?", answer: "No. The rovinieta is tied to a specific licence plate number and vehicle identity. You cannot transfer or reuse a vignette for another vehicle." },
      { question: "Does the vignette cover toll bridges and ferries?", answer: "No. Some bridge crossings and ferries, especially over the Danube, are not included in the standard vignette. You must pay these bridge tolls separately, e.g. at Calafat–Vidin, Giurgiu–Ruse, Fetești–Cernavodă, Giurgeni–Vadu Oii." },
      { question: "What are the fines for driving without a valid Romania vignette?", answer: "Fines begin from about €50 for cars and increase substantially for heavy vehicles, depending on vehicle class and road type. Multiple checks or repeated non-payment can lead to multiple fines." },
      { question: "How can I register the Romania vignette online?", answer: "You can quickly register your Romania vignette (rovinieta) online through Tollvignettes.eu. The process only takes a few minutes: enter your license plate number, choose your validity period, and complete your secure payment online. Your vignette will be activated automatically, and you'll receive instant confirmation by email." },
    ],
    neighbourIntro: "If your journey continues beyond Romania, keep in mind that most neighbouring countries also require a digital vignette to use their motorways and national roads:",
  },
  "vignette-bulgaria": {
    name: "Bulgaria",
    slug: "vignette-bulgaria",
    flag: "/flags/bulgaria.svg",
    heroDescription: "Tolls in Bulgaria are collected through an e-vignette, also known as an electronic vignette.",
    heroTitle: "The Bulgaria vignette can be easily purchased online.",
    numberedSections: [
      { number: "01.", title: "Toll in Bulgaria", description: "Toll payments in Bulgaria are handled through e-vignettes, which are linked to your vehicle's license plate." },
      { number: "02.", title: "Purchase online", description: "You can easily purchase an e-vignette online at Tollvignettes.eu using credit card, PayPal, or another payment method. After completing your purchase, you'll receive a confirmation email, ensuring a quick and hassle-free experience for traveling on Bulgaria's motorways." },
    ],
    tollRoadsIntro: "In Bulgaria, tolls are charged for motorways and republican roads. Motorways are marked with an 'A,' while republican roads are categorized into three classes: I, II, and III.",
    tollRoadsDetailedIntro: "Class I roads may also be labeled with an 'E', indicating they are part of the European road network that spans multiple countries. A valid vignette is required for the majority of the road network.",
    tollRoadsList: [
      "A-1 (Sofia – Burgas)",
      "A-2 (Sofia – Varna)",
      "A-3 (Sofia – Greece)",
      "A-4 (Plovdiv – Turkey)",
      "A-5 (Varna – Burgas)",
      "A-6 (Serbia – Sofia)",
      "I-1 (E-79)",
      "I-2 (E-70)",
      "I-3 (E-83)",
      "I-4 (E-772)",
      "I-5 (E-85)",
      "I-6 (E-871 and E-773)",
      "I-7",
      "I-8 (E-80 and E-85)",
      "I-9 (E-87)",
    ],
    vehicleClassesIntro: "All vehicles with at least 4 wheels are required to purchase a vignette. Motorbikes, trikes and trailers are therefore exempt from the vignette requirement.\n\nCheck your vehicle registration certificate under 'Maximum permissible mass' to determine your category.",
    vehicleClasses: ["Passenger car", "Goods vehicle / Motorhome", "Trailer / Caravan"],
    vehicleClassDetails: [
      { name: "Passenger car", description: "For passenger vehicles up to 3.5 t. This includes most privately used cars travelling on the Bulgarian motorway network." },
      { name: "Goods vehicle / Motorhome", description: "For vans, light commercial vehicles and motorhomes up to 3.5 t. If your vehicle is registered for goods transport or as a camper within this weight limit, this is the correct category." },
      { name: "Trailer / Caravan", description: "For trailers or caravans attached to a towing vehicle. When the total permissible weight of the vehicle combination exceeds 3.5 t, a separate vignette for the trailer is required in Bulgaria." },
    ],
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
    priceNote: "The above prices are a combination of the toll fee and the registration fee, presented as one total amount.",
    lorrySection: {
      title: "Toll regulations for lorries",
      intro: "In Bulgaria, lorries are subject to a route-based toll system rather than a flat-rate fee. The toll is calculated based on kilometers driven, permissible total weight, number of axles, road type, and environmental class.",
      details: "Driving without a valid e-vignette can lead to hefty fines. Don't take the risk, secure the right vignette for your category before hitting the road.",
      link: { text: "More information", url: "https://tollpass.bg/en/routepass/wizard" },
    },
    faqs: [
      { question: "How long are you allowed to drive in Bulgaria without a vignette?", answer: "In Bulgaria, driving on toll roads without a valid vignette is not permitted, and there is no grace period for driving without one. If you are caught driving without a valid vignette, you can be fined immediately." },
      { question: "How is the vignette obligation checked?", answer: "The obligation to have a valid vignette is monitored using: around 300 stationary cameras operating 24/7 on toll roads, 105 patrol vehicles with cameras used by toll control teams, and the National Customs Agency checks compliance at border crossings." },
      { question: "Can I transfer my Bulgarian vignette?", answer: "No, Bulgarian vignettes are not transferable between vehicles. The Bulgarian toll system strictly links the vignette to the vehicle's registration number at the time of purchase, ensuring it is valid exclusively for that specific vehicle." },
      { question: "Can I postpone the start of validity after purchase?", answer: "Unfortunately, it is not possible to postpone the start of validity after purchasing a vignette. Once the purchase is completed, the selected validity period is fixed and cannot be adjusted." },
      { question: "Which vehicles are exempt from a Bulgarian vignette?", answer: "People with disabilities (officially certified under Bulgarian regulations), agricultural and forestry vehicles (tractors, tractor trailers, and self-propelled machinery), and government and emergency services vehicles are exempt." },
    ],
    neighbourIntro: "The following neighbouring countries of Bulgaria also have compulsory tolls to finance and maintain their motorways:",
  },
  "vignette-hungary": {
    name: "Hungary",
    slug: "vignette-hungary",
    flag: "/flags/hungary.svg",
    heroDescription: "Vignette & Visa B.V. is an official sales partner of the National Mobile Payment Plc. for the sale of Hungarian e-vignettes.",
    heroTitle: "The easiest way to buy your official Hungary vignette online.",
    numberedSections: [
      { number: "01.", title: "Toll in Hungary", description: "Hungary uses a digital vignette system (e-matrica) to collect motorway tolls. Instead of a physical sticker, the Hungary vignette is linked directly to your vehicle's license plate, allowing seamless travel on all toll motorways and expressways. Vehicles are monitored by automatic license plate recognition cameras, so having a valid vignette before entering the motorway is essential to avoid fines." },
      { number: "02.", title: "Purchase the Hungary vignette online", description: "The fastest and safest way to buy the Hungary vignette online is through Tollvignettes.eu, an official sales partner of the National Mobile Payment Plc. Simply enter your license plate number, select your validity period, and pay securely by card, PayPal or another method. Your digital vignette is instantly linked to your license plate, and you will receive an email confirmation as proof of validity. There is no sticker required." },
    ],
    tollRoadsIntro: "Hungary has one of the most developed motorway networks in Central Europe, and most long-distance routes are subject to tolls. To use these roads legally, all drivers must register a digital vignette, which is electronically linked to the vehicle's license plate.",
    tollRoadsDetailedIntro: "The toll system applies to motorways (M roads) and several expressways, which connect Budapest with every region of the country and with neighbouring nations such as Austria, Slovakia, Romania, Serbia and Croatia.",
    tollRoadsList: [],
    tollRoadsRegional: [
      { region: "Pest", roads: ["M0 between M1–M0 junction and M0–11-es út junction", "M1 between Budapest city border and Bicske junction", "M2 between M2–M0 junction and Vác north junction", "M3 between Budapest, Szentmihályi út junction and Hatvan junction", "M31 between Nagytarcsai junction and M3–M31 junction", "M4 between Budapest Liszt Ferenc Nemzetközi Repülőtér junction and Jászberény / Szolnok north junction", "M44 between M44 / Kecskemét north junction and Szentkirályi junction", "M5 between Budapest, Szentlőrinci út junction and Lajosmizse junction", "M51 between M51–M0 junction and M51–M5 junction", "M6 between Budapest, Barackos út junction and Ráckeresztúr junction", "M7 between Budapest city border and Martonvásár junction"] },
      { region: "Bács-Kiskun", roads: ["M5 between Örkény junction and Kistelek junction", "M44 between M44 / Kecskemét north junction and Tiszaug / Tiszakürt junction"] },
      { region: "Baranya", roads: ["M6 between Bátaszék junction and M6–M60 junction", "M60 between M60–M6 junction and Pécs nyugat junction"] },
      { region: "Békés", roads: ["M44 between Szolnok/ Martfű/ Kunszentmárton junction and Békéscsaba-Gyula/ Debrecen-Szeged junction"] },
      { region: "Borsod-Abaúj-Zemplén", roads: ["M3 between Füzesabony junction and Polgár junction", "M30 between M3–M30 junction and Tornyosnémeti, country border"] },
      { region: "Csongrád-Csanád", roads: ["M5 between Kiskunfélegyháza south junction and Röszke, country border", "M43 between Szeged north junction and Csanádpalota, country border"] },
      { region: "Fejér", roads: ["M1 between Herceghalom junction and Tatabánya-Óváros junction", "M6 between Százhalombatta north junction and Paks north junction", "M7 between Pusztazámor junction and Balatonvilágos junction"] },
      { region: "Győr-Moson-Sopron", roads: ["M1 between Bábolna junction and Hegyeshalom, country border", "M15 between M15–M1 junction and Rajka, country border", "M19 between M1–M19 junction and Győr centrum junction", "M85 between Győr-nyugat junction and Sopron, country border", "M86 between Répcelak junction and Csorna észak junction"] },
      { region: "Hajdú-Bihar", roads: ["M3 between Hejőkürt junction and Nyíregyháza nyugat junction", "M4 between M4–M35 junction and Nagykereki, country border", "M35 between M35–M3 junction and M35–M4 junction"] },
      { region: "Heves", roads: ["M25 between M25–M3 junction and Eger", "M3 between Bag junction and Mezőkövesd junction"] },
      { region: "Jász-Nagykun-Szolnok", roads: ["M4 between Abony east / Szolnok west junction and Törökszentmiklós west / Szajol junction", "M44 between Lakitelek / Tiszakécske junction and Szarvas / Szentes junction"] },
      { region: "Komárom-Esztergom", roads: ["M1 between Szárliget junction and Győr-Ipari Park", "M19 between M1–M19 junction and Győrszentiván junction"] },
      { region: "Somogy", roads: ["M7 between Balatonvilágos junction and Zalakomár junction", "M76 between Hollád junction and Keszthely-Fenékpuszta junction"] },
      { region: "Szabolcs-Szatmár-Bereg", roads: ["M3 between Hajdúnánás junction and Vásárosnamény junction"] },
      { region: "Tolna", roads: ["M6 between Dunaújváros south junction and Pécsvárad junction"] },
      { region: "Vas", roads: ["M86 between Szombathely junction and Beled junction"] },
      { region: "Veszprém", roads: ["M7 between Polgárdi junction and Siófok east junction"] },
      { region: "Zala", roads: ["M7 between Sávoly junction and Letenye, country border", "M70 between M70–M7 junction and Tornyiszentmiklós, country border", "M76 between Balatonszentgyörgy / Balatonberény junction and Keszthely-Fenékpuszta junction"] },
    ],
    tollRoadsLegalNote: "To legally use Hungary's motorways and expressways, your digital vignette must be valid before you enter a toll section. There are no toll booths on these roads, so you cannot pay on the spot. Instead, license plate recognition cameras automatically check every vehicle and issue fines if no active vignette is found.",
    vehicleClassesIntro: "In Hungary, the e-vignette is required for all motor vehicles up to 3,500 kg, but the type of vehicle determines which vignette category you need. Passenger cars, motorhomes, vans, trailers and buses do not all pay the same fee, each belongs to a different toll class.",
    vehicleClasses: ["Passenger car (≤ 7 seats)", "Passenger car (8 or 9 seats)", "Goods vehicle / Motorhome", "Motorcycle", "Caravan / Trailer"],
    vehicleClassDetails: [
      { name: "Passenger car (≤ 7 seats)", description: "This category corresponds to toll class D1. It applies to passenger cars with up to 7 seats and a maximum permissible weight of up to 3.5 t. Most privately used cars fall within this Hungarian e-vignette category." },
      { name: "Passenger car (8 or 9 seats)", description: "This category falls under toll class D2. It includes passenger cars with 8 or 9 seats and a maximum permissible weight of up to 3.5 t." },
      { name: "Goods vehicle / Motorhome", description: "Goods vehicles and motorhomes with a maximum permissible weight of up to 3.5 t are classified under D2. This includes light commercial vehicles and camper vehicles within the 3.5 t limit." },
      { name: "Motorcycle", description: "Motorcycles are classified under toll category D1M. This category applies exclusively to two-wheeled motor vehicles registered as motorcycles." },
      { name: "Caravan / Trailer", description: "Trailers and caravans are classified under toll category U. A separate e-vignette is required when the trailer or caravan is attached to a D2 vehicle." },
    ],
    validityPeriodsIntro: "The Hungary e-vignette is available for several validity periods, allowing drivers to choose the option that best matches the length of their trip.",
    validityPeriods: [
      { name: "1-day vignette", description: "Ideal for short transit or day trips." },
      { name: "10-day vignette", description: "Perfect for holidays or short stays." },
      { name: "Monthly vignette", description: "Great for regular visitors." },
      { name: "Annual vignette", description: "Best value for frequent travellers." },
    ],
    priceIntro: "When you buy your Hungary vignette online through Tollvignettes.eu, you pay according to the official Hungarian e-vignette prices set in HUF (Hungarian Forint) by the national toll authority.",
    exchangeRate: "Ft 100 = 0.4202 EUR",
    exchangeDate: "Friday 20 February 2026",
    priceTables: [
      { category: "Motorcycle", rows: [{ period: "1 day", localPrice: "HUF 2,770.00", eurPrice: "€11.64" }, { period: "10 days", localPrice: "HUF 3,450.00", eurPrice: "€14.50" }, { period: "1 month", localPrice: "HUF 5,590.00", eurPrice: "€23.49" }] },
      { category: "Passenger car (≤ 7 seats)", rows: [{ period: "1 day", localPrice: "HUF 5,550.00", eurPrice: "€23.32" }, { period: "10 days", localPrice: "HUF 6,900.00", eurPrice: "€28.99" }, { period: "1 month", localPrice: "HUF 11,170.00", eurPrice: "€46.93" }, { period: "2026", localPrice: "HUF 61,760.00", eurPrice: "€259.51" }] },
      { category: "Passenger car (8 or 9 seats)", rows: [{ period: "1 day", localPrice: "HUF 7,890.00", eurPrice: "€33.15" }, { period: "10 days", localPrice: "HUF 10,040.00", eurPrice: "€42.19" }, { period: "1 month", localPrice: "HUF 15,820.00", eurPrice: "€66.47" }, { period: "2026", localPrice: "HUF 87,650.00", eurPrice: "€368.31" }] },
      { category: "Caravan / Trailer", rows: [{ period: "1 day", localPrice: "HUF 5,550.00", eurPrice: "€23.32" }, { period: "10 days", localPrice: "HUF 6,900.00", eurPrice: "€28.99" }, { period: "1 month", localPrice: "HUF 11,170.00", eurPrice: "€46.93" }, { period: "2026", localPrice: "HUF 61,760.00", eurPrice: "€259.51" }] },
    ],
    priceNote: "Prices based on official HUF rates. EUR conversions are approximate.",
    lorrySection: {
      title: "Toll regulations for lorries",
      intro: "In Hungary, all vehicles over 3,500 kg are subject to a distance-based toll system called HU-GO. This system applies to lorries, buses, and heavy goods vehicles travelling on motorways, expressways and main roads.",
      factors: ["Vehicle category (number of axles: J2, J3, J4, J5)", "Road type (motorway, expressway, or main road)", "Emission class (EURO rating)", "Total distance travelled"],
      details: "Toll payments are managed through the HU-GO electronic toll system, operated by the National Toll Payment Services Plc. Registered users can install an On-Board Unit (OBU) that automatically records their journeys and deducts tolls from a prepaid account.\n\nFrom 1 February 2025, route tickets are valid for 120 minutes from the moment of purchase. Missing this window or driving without a valid HU-GO registration can result in heavy fines, often exceeding 280,000 HUF.",
      link: { text: "More information", url: "https://toll-charge.hu/en/" },
    },
    faqs: [
      { question: "Do I need a vignette in Hungary?", answer: "Yes. All passenger cars, motorcycles and light vehicles up to 3,500 kg require a valid Hungary vignette (e-matrica) to use the country's motorways and expressways. Vehicles above 3,500 kg use the HU-GO system instead." },
      { question: "Which roads require a vignette in Hungary?", answer: "Vignettes are mandatory on all motorways and expressways marked with M, such as M1, M3, M5, M6 and M7. Enforcement is camera-based, so there are no toll booths." },
      { question: "How can I buy the Hungary vignette online?", answer: "Simply enter your license plate, choose the validity period, select your vehicle category, and pay securely by card or PayPal. Your Hungarian e-vignette is activated instantly and sent by email." },
      { question: "Is the Hungarian vignette linked to the license plate?", answer: "Yes. The digital vignette is fully electronic and registered to your vehicle's license plate. There is no physical sticker." },
      { question: "Do I need a vignette for my trailer or caravan?", answer: "If you drive a D2 vehicle (minibus or large car) with a trailer up to 3,500 kg, you need an additional U-category vignette for the trailer. For D1 vehicles (cars up to 7 seats), the trailer is already included." },
      { question: "What are the fines for driving without a valid Hungary vignette?", answer: "You risk a fine of up to 60,000 HUF for passenger cars. However, if you purchase a valid vignette within 60 minutes after entering the motorway, the penalty is waived (grace period)." },
      { question: "Can I buy a Hungary vignette at the border or petrol stations?", answer: "Yes, but petrol stations are often busy and time-consuming. Paying your toll online is much faster, safer, and available 24/7." },
      { question: "Can I change or cancel my Hungarian vignette?", answer: "Once activated, a Hungary vignette cannot be cancelled, changed or refunded. If you made a mistake, contact the National Toll Payment Services Plc. immediately." },
      { question: "Do lorries and heavy vehicles need a vignette?", answer: "No. Lorries and buses over 3,500 kg use the HU-GO electronic toll system, a distance-based charging method." },
    ],
    neighbourIntro: "Several neighbouring countries of Hungary also require a vignette or toll payment for using their motorways and expressways:",
  },
  "vignette-slovenia": {
    name: "Slovenia",
    slug: "vignette-slovenia",
    flag: "/flags/slovenia.svg",
    heroDescription: "In Slovenia, motorway tolls are collected through a digital vignette that is linked to your license plate.",
    heroTitle: "Buy and register your Slovenia e-vignette online.",
    numberedSections: [
      { number: "01.", title: "Toll in Slovenia", description: "Toll payments in Slovenia are collected through a digital vignette (e-vignette). Instead of a sticker, your license plate is registered electronically in the national toll system, which makes travelling on Slovenian highways easier and faster." },
      { number: "02.", title: "Register your Slovenia e-vignette online", description: "You can quickly buy and register your Slovenia e-vignette at Tollvignettes.eu using a credit card, PayPal, or another secure payment method. Once your registration is complete, your license plate is activated in the system and you'll receive a confirmation email." },
    ],
    tollRoadsIntro: "In Slovenia, tolls are mandatory on all motorways (avtoceste A) and expressways (hitre ceste H). A valid digital vignette (e-vignette) is required for these roads.",
    tollRoadsDetailedIntro: "Some motorways are also part of the European road network and carry an E designation in addition to their Slovenian code.",
    tollRoadsList: [
      "A1 (E57, E59, E70) between Šentilj, Maribor, Celje, Ljubljana, Postojna and Koper.",
      "A2 (E61, E70) between Karawanks Tunnel (separate toll), Kranj, Ljubljana, Novo mesto, Brežice and Obrežje.",
      "A3 (E61, E70) between Divača and Fernetiči.",
      "A4 (E59) between Slivnica, Hajdina, Draženci and Gruškovje.",
      "A5 (E653) between Dragučova A1, Beltinci, Murska Sobota and Pince.",
      "H3 between A1 and A2 on the Ljubljana ring road.",
      "H4 between Razdrto A1, Nanos, Ajdovščina and Vrtojba.",
      "H5 between Škofije, Dekani, Koper H6 and Dragonja.",
      "H6 between Koper H5 and Lucija.",
      "H7 between Črni dol A5 and Dolga vas.",
    ],
    tollFreeIntro: "Toll-free sections and exceptions",
    tollFreeList: [
      "H2 between Maribor West and Tezno.",
      "H6 between Koper and Lucija.",
      "A2 between Jesenice and Vrba.",
      "Karawanks Tunnel (A2) – not covered by the vignette system, separate toll fee required.",
    ],
    vehicleClassesIntro: "In Slovenia, toll fees are determined by the official vehicle classification system. This classification depends on the maximum permissible mass of your vehicle and the height above the front axle.",
    vehicleClasses: ["Passenger car", "Goods vehicle / Motorhome (< 1.3 m)", "Goods vehicle / Motorhome (≥ 1.3 m)", "Motorcycle"],
    vehicleClassDetails: [
      { name: "Passenger car", description: "Passenger cars up to 3.5 t belong to this category. This is the standard class for most privately used vehicles." },
      { name: "Goods vehicle / Motorhome (< 1.3 m)", description: "Vans and motorhomes up to 3.5 t are placed in this category if the height at the front axle is below 1.3 m." },
      { name: "Goods vehicle / Motorhome (≥ 1.3 m)", description: "Vehicles up to 3.5 t with a front axle height of 1.3 m or higher fall into this category. This typically applies to higher vans and larger motorhomes." },
      { name: "Motorcycle", description: "Motorcycles are classified separately. The axle height rule does not apply to motorcycles." },
    ],
    validityPeriodsIntro: "Digital vignettes in Slovenia are available for different validity periods, so every traveller can choose the option that best fits their journey.",
    validityPeriods: [
      { name: "1-week vignette", description: "Best for short holidays and trips." },
      { name: "1-month vignette", description: "Ideal for longer vacations or visits." },
      { name: "6-month vignette (motorcycles only)", description: "Special option for frequent riders." },
      { name: "1-year vignette", description: "Most cost-effective for regular drivers." },
    ],
    priceTables: [
      { category: "Passenger car", rows: [{ period: "1 week", eurPrice: "€24.99" }, { period: "1 month", eurPrice: "€42.99" }, { period: "1 year", eurPrice: "€132.99" }] },
      { category: "Goods vehicle / Motorhome (≥ 1.3 m height at the front axle)", rows: [{ period: "1 week", eurPrice: "€42.99" }, { period: "1 month", eurPrice: "€74.99" }, { period: "1 year", eurPrice: "€249.99" }] },
      { category: "Motorcycle", rows: [{ period: "1 week", eurPrice: "€14.99" }, { period: "6 months", eurPrice: "€42.99" }, { period: "1 year", eurPrice: "€73.99" }] },
    ],
    priceNote: "The Slovenia vignette prices shown above represent the full cost, combining the toll fee and the registration fee into one final amount.",
    lorrySection: {
      title: "Toll regulations for lorries",
      intro: "In Slovenia, all vehicles with a maximum permissible weight over 3,500 kg are not covered by the vignette system. Instead, they are subject to a distance-based electronic toll system.",
      factors: ["Kilometres driven on Slovenian motorways and expressways", "Maximum permissible weight of the vehicle", "Number of axles", "Road category being used", "Environmental classification (EURO emission class)"],
      details: "To comply with Slovenian regulations, all heavy vehicles over 3,500 kg must be registered in the DarsGo electronic tolling system. A DarsGo onboard unit is installed in the vehicle, which automatically calculates tolls based on distance travelled and vehicle specifications.",
      link: { text: "DarsGo", url: "https://www.darsgo.si/portal/en/home" },
    },
    faqs: [
      { question: "Do I need a vignette to drive in Slovenia?", answer: "Yes. All vehicles up to 3,500 kg must have a valid Slovenia digital vignette to use motorways and expressways. Motorcycles also require a vignette, though at a lower price. Vehicles over 3,500 kg fall under the separate DarsGo toll system." },
      { question: "How can I buy the Slovenia vignette online?", answer: "You can buy the Slovenia e-vignette online at Tollvignettes.eu. Simply select the validity period, enter your license plate number, and pay securely. Once registered, your license plate is instantly added to the national toll system." },
      { question: "How long is a Slovenia vignette valid?", answer: "Slovenian vignettes are available for different periods: 1 week, 1 month, 6 months (motorcycles only), or 1 year. The validity starts from the date you select during purchase." },
      { question: "How are vignettes checked in Slovenia?", answer: "There are no toll booths or stickers. Instead, automatic cameras and mobile police patrols scan licence plates and check them against the electronic toll database." },
      { question: "What happens if I drive without a vignette in Slovenia?", answer: "Driving on motorways without a valid vignette is a traffic offence and can result in a fine of EUR 300. Checks are frequent." },
      { question: "Do electric cars need a vignette in Slovenia?", answer: "Yes. Unlike in some countries, electric vehicles are not exempt in Slovenia. All passenger vehicles under 3,500 kg must purchase a vignette." },
      { question: "Where can I pay for the Slovenia vignette?", answer: "The easiest option is online at Tollvignettes.eu. Vignettes are also available at border crossings and petrol stations, but purchasing online guarantees instant registration." },
    ],
    neighbourIntro: "If your trip continues beyond Slovenia, remember that most neighbouring countries have their own vignette systems:",
  },
  "vignette-switzerland": {
    name: "Switzerland",
    slug: "vignette-switzerland",
    flag: "/flags/switzerland.svg",
    heroDescription: "Tolls in Switzerland are collected through an e-vignette, also known as an electronic vignette.",
    heroTitle: "The Swiss vignette can be easily purchased online",
    numberedSections: [
      { number: "01.", title: "Toll in Switzerland", description: "Toll payments in Switzerland are handled through e-vignettes, which are linked to your vehicle's license plate." },
      { number: "02.", title: "Purchase online", description: "You can easily purchase an e-vignette online at Tollvignettes.eu using credit card, PayPal, or another payment method. After completing your purchase, you'll receive a confirmation email, ensuring a quick and hassle-free experience for traveling on Switzerland's motorways." },
    ],
    tollRoadsIntro: "In Switzerland, all national motorways and expressways require a valid vignette. These roads are marked with green and white signs. The specific road number is displayed on a red hexagonal sign with a white border and a white number.",
    tollRoadsDetailedIntro: "Motorways and expressways are identified by an 'A'. Additionally, some of these roads are labeled with an 'E', indicating that they are part of the broader European road network. Extra toll charges apply for the Great St. Bernard Tunnel and Munt la Schera Tunnel.",
    tollRoadsList: [
      "All national motorways and expressways marked with 'A'",
      "European road network sections marked with 'E'",
      "Extra toll: Great St. Bernard Tunnel",
      "Extra toll: Munt la Schera Tunnel",
    ],
    tollFreeIntro: "Exceptions where you can drive without a vignette",
    tollFreeList: [
      "Basel St. Louis motorway",
      "Rheinfelden motorway",
      "Kreuzlingen motorway (first exit only)",
    ],
    vehicleClassesIntro: "In Switzerland, the vignette is mandatory for all vehicles up to 3,500 kg, including motorcycles. Additionally, the vignette is also required for trailers up to 3,500 kg. The purchase price of the vignette is the same for all categories.",
    vehicleClasses: ["Passenger car", "Goods vehicle / Motorhome", "Motorcycle", "Trailer / Caravan"],
    vehicleClassDetails: [
      { name: "Passenger car", description: "Passenger cars with a maximum permissible weight of up to 3.5 t require a Swiss vignette. This applies to standard private vehicles using Swiss motorways and national roads." },
      { name: "Goods vehicle / Motorhome", description: "This category applies to goods vehicles and motorhomes with a maximum permissible weight of up to 3.5 t. It covers vans, light commercial vehicles and camper vehicles." },
      { name: "Motorcycle", description: "Motorcycles require their own Swiss vignette. This applies to all registered two-wheeled motor vehicles using the motorway network." },
      { name: "Trailer / Caravan", description: "Trailers and caravans must have a separate Swiss vignette. When towing a trailer, both the towing vehicle and the trailer require their own valid vignette." },
    ],
    validityPeriodsIntro: "In Switzerland, only a 1-year vignette is available. The annual vignette is valid for 14 months, from December 1 of the previous year until January 31 of the following year. For example, the 2026 vignette is valid from December 1, 2025, until January 31, 2027.",
    validityPeriods: [
      { name: "Annual vignette (14 months)", description: "Valid from December 1 of previous year to January 31 of following year." },
    ],
    priceTables: [
      { category: "Passenger car", rows: [{ period: "2025", localPrice: "CHF 52.00", eurPrice: "€54.99" }] },
      { category: "Caravan / Trailer", rows: [{ period: "2025", localPrice: "CHF 52.00", eurPrice: "€54.99" }] },
      { category: "Motorcycle", rows: [{ period: "2025", localPrice: "CHF 52.00", eurPrice: "€54.99" }] },
    ],
    priceNote: "The above prices are a combination of the toll fee and the registration fee, presented as one total amount.",
    lorrySection: {
      title: "Toll regulations for lorries",
      intro: "Vehicles exceeding 3,500 kg are categorized into two types: LSVA and PSVA vehicles.",
      details: "LSVA (Performance-related Heavy Vehicle Charge) is mandatory for trucks and other vehicles over 3,500 kg primarily used for transporting goods. The charge is calculated based on weight, emission class, and kilometers driven.\n\nPSVA (Lump-sum Heavy Vehicle Charge) applies to vehicles such as heavy passenger cars, campervans, buses, and tractors weighing over 3,500 kg. For these vehicles, a fixed fee is charged depending on the vehicle type and duration of use.\n\nBoth charges apply to the entire road network, including national and regional roads.",
    },
    faqs: [
      { question: "How long can you drive in Switzerland without a vignette?", answer: "In Switzerland, driving on toll roads without a valid vignette is not allowed. The vignette is mandatory from the moment you enter a toll road. If you do not have a valid vignette, you risk a fine." },
      { question: "How is the vignette obligation checked?", answer: "When purchasing the vignette, the vehicle's license plate is registered. The validity of the vignette is checked at border crossings, through police inspections, and via cameras along the toll roads." },
      { question: "Can I transfer my Switzerland vignette?", answer: "No, Swiss vignettes are not transferable between vehicles. If you sell your car or change your license plates, the vignette cannot be transferred to another vehicle." },
      { question: "Which vehicles are exempt from a Switzerland vignette?", answer: "Military vehicles, emergency services (police, border guards, fire departments, ambulances), disaster relief vehicles, international organizations, dealer plates (weekdays only), and vehicles with humanitarian exemptions." },
      { question: "Can I postpone the start of validity after purchase?", answer: "No. The annual vignette always follows a fixed validity period: from December 1 of the preceding year until January 31 of the following year." },
    ],
    neighbourIntro: "The following neighbouring countries of Switzerland also have compulsory tolls to finance and maintain their motorways:",
  },
  "vignette-moldova": {
    name: "Moldova",
    slug: "vignette-moldova",
    flag: "/flags/moldova.svg",
    heroDescription: "Tolls in Moldova are collected through an e-vignette, also known as an electronic vignette.",
    heroTitle: "The Moldova vignette can be easily purchased online",
    numberedSections: [
      { number: "01.", title: "Toll in Moldova", description: "Toll payments in Moldova are handled through e-vignettes, which are linked to your vehicle's license plate." },
      { number: "02.", title: "Purchase online", description: "You can easily purchase an e-vignette online at Tollvignettes.eu using credit card, PayPal, or another payment method. After completing your purchase, you'll receive a confirmation email, ensuring a quick and hassle-free experience for traveling on Moldova's motorways." },
    ],
    tollRoadsIntro: "In Moldova, the road network is divided into three main categories: expressways M, which connect major cities and borders; republican roads R, which link regional centers and towns; and regional roads G, which provide access to local areas.",
    tollRoadsDetailedIntro: "In all of Moldova, a valid e-vignette is mandatory for travel, with no exceptions. This requirement applies to all road types, including expressways M, republican roads R, and regional roads G.",
    tollRoadsList: [
      "All expressways (M)",
      "All republican roads (R)",
      "All regional roads (G)",
      "No exceptions – vignette required everywhere",
    ],
    vehicleClassesIntro: "In Moldova, toll fees are based on vehicle classification. To determine your category, check your vehicle registration certificate for the 'Maximum permissible mass'.",
    vehicleClasses: ["Motor vehicle (≤ 3,500 kg)", "Minibus (9–24 seats)", "Bus (25+ seats)", "Light truck / goods vehicle (≤ 3,500 kg)"],
    vehicleClassDetails: [
      { name: "Motor vehicle (≤ 3,500 kg)", description: "Passenger cars, SUVs and light vans with a maximum gross vehicle weight of up to 3,500 kg must have a valid Moldova vignette. The vignette covers both the vehicle and any attached trailer." },
      { name: "Minibus (9–24 seats)", description: "Minibuses designed to carry between 9 and 24 passengers must purchase a vignette for use on Moldovan roads. This applies to both private transport and commercial shuttle operations." },
      { name: "Bus (25+ seats)", description: "Buses with 25 or more seats, including intercity coaches and tour buses, are also required to have a valid vignette." },
      { name: "Light truck / goods vehicle (≤ 3,500 kg)", description: "Light commercial vehicles and delivery trucks up to 3,500 kg total gross weight must obtain a vignette before entering Moldova." },
    ],
    validityPeriods: [
      { name: "1 day", description: "Ideal for short trips. Only available for buses and trucks." },
      { name: "7 days", description: "Perfect for short getaways. Applies to all vehicles." },
      { name: "15 days", description: "Perfect for short getaways. Only available for motor vehicles < 3500 kg." },
      { name: "30 days", description: "Ideal for a month-long journey. Applies to all vehicles." },
      { name: "90 days", description: "Best for long-term travelers. Applies to all vehicles." },
    ],
    priceTables: [
      { category: "Car", rows: [{ period: "7 days", eurPrice: "€12.99" }, { period: "15 days", eurPrice: "€16.99" }, { period: "30 days", eurPrice: "€26.99" }, { period: "90 days", eurPrice: "€56.99" }] },
      { category: "Bus 9 - 24 seats", rows: [{ period: "1 day", eurPrice: "€12.99" }, { period: "7 days", eurPrice: "€32.99" }, { period: "30 days", eurPrice: "€59.99" }, { period: "90 days", eurPrice: "€131.99" }, { period: "12 months", eurPrice: "€494.99" }] },
      { category: "Bus > 25 seats", rows: [{ period: "1 day", eurPrice: "€14.99" }, { period: "7 days", eurPrice: "€36.99" }, { period: "30 days", eurPrice: "€67.99" }, { period: "90 days", eurPrice: "€151.99" }, { period: "12 months", eurPrice: "€574.99" }] },
      { category: "Truck / Tractor < 3.5 t", rows: [{ period: "1 day", eurPrice: "€12.99" }, { period: "7 days", eurPrice: "€29.99" }, { period: "30 days", eurPrice: "€51.99" }, { period: "90 days", eurPrice: "€111.99" }, { period: "12 months", eurPrice: "€414.99" }] },
    ],
    priceNote: "The above prices are a combination of the toll fee and the registration fee, presented as one total amount.",
    faqs: [
      { question: "How long are you allowed to drive in Moldova without a vignette?", answer: "In Moldova, driving on toll roads without a valid vignette is not allowed. The vignette is mandatory from the moment you enter a toll road. If you do not have a valid vignette, you risk a fine." },
      { question: "How is the vignette obligation checked?", answer: "Upon entering or leaving Moldova, customs officials check whether the vehicle has a valid vignette. If not, the vehicle may not leave the country until both the vignette and the imposed fine have been paid." },
      { question: "Can I transfer my Moldovan vignette?", answer: "No, Moldovan vignettes are not transferable between vehicles. The Moldovan toll system strictly links the vignette to the vehicle at the time of purchase." },
      { question: "Which vehicles are exempt from a Moldova vignette?", answer: "Moldovan-registered vehicles, vehicles brought into Moldova under specific customs regulations, vehicles authorized for international road transport with an exemption, and diplomatic missions and consulates vehicles." },
      { question: "Can I postpone the start of validity after purchase?", answer: "Unfortunately, it is not possible to postpone the start of validity after purchasing a vignette. Once the purchase is completed, the selected validity period is fixed and cannot be adjusted." },
    ],
    neighbourIntro: "The following neighbouring countries of Moldova also have compulsory tolls to finance and maintain their motorways:",
  },
};
