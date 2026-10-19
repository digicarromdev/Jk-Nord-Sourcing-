export type Language = 'fi' | 'en';

export interface CleaningServiceItem {
  id: string;
  iconName: string;
  badge: { fi: string; en: string };
  title: { fi: string; en: string };
  shortDesc: { fi: string; en: string };
  highlights: { fi: string[]; en: string[] };
  startingPrice: string;
  priceAfterDeduction: string;
}

export interface CityCoverage {
  city: string;
  region: string;
  status: 'launching_first' | 'launching_soon';
  postalCodes: string[];
}

export const CITIES_DATA: CityCoverage[] = [
  { city: 'Helsinki', region: 'Pääkaupunkiseutu', status: 'launching_first', postalCodes: ['00100', '00120', '00140', '00150', '00180', '00200', '00210', '00250', '00500', '00530', '00550', '00610', '00700', '00900'] },
  { city: 'Espoo', region: 'Pääkaupunkiseutu', status: 'launching_first', postalCodes: ['02100', '02150', '02200', '02230', '02270', '02320', '02600', '02700', '02750'] },
  { city: 'Vantaa', region: 'Pääkaupunkiseutu', status: 'launching_first', postalCodes: ['01300', '01370', '01400', '01510', '01600', '01620'] },
  { city: 'Kauniainen', region: 'Pääkaupunkiseutu', status: 'launching_first', postalCodes: ['02700'] },
  { city: 'Kirkkonummi', region: 'Uusimaa', status: 'launching_first', postalCodes: ['02400', '02430'] },
  { city: 'Tampere', region: 'Pirkanmaa', status: 'launching_soon', postalCodes: ['33100', '33200', '33500'] },
  { city: 'Turku', region: 'Varsinais-Suomi', status: 'launching_soon', postalCodes: ['20100', '20500', '20700'] },
];

export const SERVICES_PREVIEW: CleaningServiceItem[] = [
  {
    id: 'home',
    iconName: 'Sparkles',
    badge: { fi: 'Suosituin', en: 'Most Popular' },
    title: { fi: 'Säännöllinen Kotisiivous', en: 'Regular Home Cleaning' },
    shortDesc: {
      fi: 'Raikas, pölytön ja huoleton koti joka viikko tai joka toinen viikko. Aina tuttu luottosiivooja.',
      en: 'A fresh, dust-free home every week or bi-weekly. Always the same dedicated, background-checked cleaner.'
    },
    highlights: {
      fi: [
        'Kaikkien pintojen pölytys ja tahrojen poisto',
        'Kylpyhuoneen, WC:n ja saunan perusteellinen pesu',
        'Keittiön tasot, tiskiallas ja kodinkoneiden etupinnat',
        'Lattioiden imurointi ja nihkeämoppaus',
        'Ekologiset Joutsenmerkki-pesuaineet mukana'
      ],
      en: [
        'Dusting all reachable surfaces and touchpoints',
        'Deep sanitization of bathrooms, WC, and sauna',
        'Kitchen countertops, sink, and exterior appliances',
        'Thorough vacuuming and damp microfiber mopping',
        'Nordic Swan certified eco-detergents included'
      ]
    },
    startingPrice: '48 € / h',
    priceAfterDeduction: '19,20 € / h'
  },
  {
    id: 'moving',
    iconName: 'Truck',
    badge: { fi: 'Takuulla läpi', en: '100% Deposit Guarantee' },
    title: { fi: 'Muuttosiivous & Loppusiivous', en: 'Move-in & Move-out Cleaning' },
    shortDesc: {
      fi: 'Perusteellinen muuttosiivous takuulla. Varmistaa vuokravakuuden palautuksen ja uuden kodin puhtauden.',
      en: 'Comprehensive move cleaning designed to meet strict Finnish rental inspection standards.'
    },
    highlights: {
      fi: [
        'Uunin, lieden ja liesituulettimen rasvanpoisto',
        'Jääkaapin ja pakastimen perusteellinen puhdistus',
        'Kylpyhuoneen kalkinpoisto ja lattiakaivon tyhjennys',
        'Kaappien sisä- ja ulkopintojen pyyhintä',
        'Ikkunoiden pesu valinnaisena lisäpalveluna'
      ],
      en: [
        'Degreasing oven, stovetop, and exhaust filter',
        'Interior & exterior cleaning of fridge and freezer',
        'Limescale removal and floor drain disinfection',
        'Deep wipe-down inside all empty cabinets & wardrobes',
        'Window cleaning available as quick add-on'
      ]
    },
    startingPrice: '52 € / h',
    priceAfterDeduction: '20,80 € / h'
  },
  {
    id: 'office',
    iconName: 'Building2',
    badge: { fi: 'B2B & Toimistot', en: 'B2B Workspaces' },
    title: { fi: 'Toimisto- ja Yrityssiivous', en: 'Commercial & Office Cleaning' },
    shortDesc: {
      fi: 'Edustavat, terveelliset ja viihtyisät toimitilat yrityksille Pääkaupunkiseudulla. Räätälöidyt vuorot.',
      en: 'Impeccable, hygienic, and productive workspaces for Finnish companies. Flexible morning or evening schedules.'
    },
    highlights: {
      fi: [
        'Työpisteiden ja neuvotteluhuoneiden siisteyden ylläpito',
        'Keittiö- ja taukotilojen desinfiointi & astianpesukoneet',
        'Saniteettitilojen tehopuhdistus ja saippuoiden täydennys',
        'Lajittelupisteiden ja roskakorien säännöllinen tyhjennys',
        'Avainturva ja ehdoton vaitiolositoumus'
      ],
      en: [
        'Workstation hygiene, conference room sanitization',
        'Kitchenette disinfection & dishwasher cycles',
        'Restroom sanitation & consumables restocking',
        'Waste separation & recycling management',
        'Strict NDA, certified security protocols & keys custody'
      ]
    },
    startingPrice: 'Pyydä tarjous',
    priceAfterDeduction: 'Täysi ALV-vähennys'
  },
  {
    id: 'deep',
    iconName: 'ShieldCheck',
    badge: { fi: 'Kausihoito', en: 'Seasonal Special' },
    title: { fi: 'Suursiivous & Ikkunanpesu', en: 'Deep Clean & Window Washing' },
    shortDesc: {
      fi: 'Kodin täydellinen kirkastus: ikkunat, parvekelasit, saunan lauteiden pesu ja kalkkisaumat.',
      en: 'Total rejuvenation for your home: crystal-clear windows, glazed balcony glass, and sauna wood care.'
    },
    highlights: {
      fi: [
        'Ikkunoiden pesu sisä-, väli- ja ulkopinnoilta',
        'Parvekelasitusten ja sälekaihtimien puhdistus',
        'Saunan lauteiden ja paneelien pesu luonnonmukaisin ainein',
        'Kalkkisaumojen ja laattojen tehopuhdistus',
        'Mattojen ja tekstiilien tehoimurointi'
      ],
      en: [
        'Multi-pane window wash (interior, gap & exterior)',
        'Glazed balcony glass & venetian blind detailing',
        'Sauna wood care with organic pine oil solutions',
        'High-pressure tile & grout descaling',
        'Allergy HEPA filtration deep carpet extraction'
      ]
    },
    startingPrice: '50 € / h',
    priceAfterDeduction: '20,00 € / h'
  }
];

export const TRUST_PILLARS = [
  {
    iconName: 'ReceiptPercent',
    title: { fi: 'Kotitalousvähennys -60%', en: '60% Tax Credit in Finland' },
    desc: {
      fi: 'Saat 60% siivoustyön osuudesta takaisin verotuksessasi (jopa 3 500 € / hlö tai 7 000 € / pariskunta). Annamme valmiin Verohallinto-raportin.',
      en: 'Deduct 60% of all labor costs on your Finnish tax return (up to €3,500/person or €7,000/couple). We send auto-prepared Vero tax receipts.'
    }
  },
  {
    iconName: 'Shield',
    title: { fi: '1 000 000 € Vastuuvakuutus', en: '€1,000,000 Liability Cover' },
    desc: {
      fi: 'Täysi turva ja mielenrauha. Kaikki työntekijämme ja toimintamme ovat kattavasti vakuutettuja.',
      en: 'Complete peace of mind. Every single cleaning specialist and your property are backed by comprehensive Finnish insurance.'
    }
  },
  {
    iconName: 'Leaf',
    title: { fi: '100% Joutsenmerkki -pesuaineet', en: 'Nordic Swan Eco-Detergents' },
    desc: {
      fi: 'Käytämme vain ympäristömerkittyjä, myrkyttömiä ja hajusteettomia aineita, jotka ovat turvallisia lapsille ja lemmikeille.',
      en: 'We use non-toxic, hypoallergenic, Nordic Swan certified biodegradable products safe for toddlers, cats, and dogs.'
    }
  },
  {
    iconName: 'UserCheck',
    title: { fi: 'Aina Sama Luottosiivooja', en: 'Same Dedicated Cleaner' },
    desc: {
      fi: 'Tunnemme kotisi toiveet. Säännöllisellä sopimuksella kotonasi käy aina sama perehdytetty ja luotettava ammattilainen.',
      en: 'Consistency matters. For regular subscriptions, your home is cared for by the same familiar, background-vetted specialist.'
    }
  },
  {
    iconName: 'CheckCircle2',
    title: { fi: '100% Tyytyväisyystakuu', en: '100% Satisfaction Guarantee' },
    desc: {
      fi: 'Jos jokin kohta ei vastaa odotuksiasi, tulemme korjaamaan sen maksutta 24 tunnin sisällä ilman kyselyitä.',
      en: 'If any spot does not meet our high standards, we return within 24 hours to reclean it at zero cost. No hassle.'
    }
  },
  {
    iconName: 'KeyRound',
    title: { fi: 'Sertifioitu Avainturva', en: 'Certified Key Custody' },
    desc: {
      fi: 'Digitaalinen avainkuittaus ja lukitut avainsäilöt. Voit nauttia vapaa-ajastasi ja palata aina puhtaaseen kotiin.',
      en: 'Digital key logging, barcode serialization, and insured key vault management so you return to a pristine home without waiting.'
    }
  }
];

export const FAQ_ITEMS = [
  {
    q: {
      fi: 'Miten 60% kotitalousvähennys käytännössä toimii?',
      en: 'How does the 60% Finnish tax deduction (Kotitalousvähennys) work?'
    },
    a: {
      fi: 'Siivouspalveluista voit vähentää 60% työn osuudesta suoraan verotuksessasi (omavastuu 100 €/vuosi). Esimerkiksi 48 € tuntihinnasta maksat vähennyksen jälkeen vain 19,20 €/h! Toimitamme vuoden päätteeksi sinulle selkeän yhteenvedon OmaVeroa varten.',
      en: 'Under Finnish tax regulations, 60% of home cleaning labor can be deducted directly against your tax bill (annual deductible €100). For example, a €48/hr cleaning costs only €19.20/hr net after deduction! We send you a pre-filled tax summary ready for OmaVero.'
    }
  },
  {
    q: {
      fi: 'Täytyykö minun olla kotona siivouksen aikana?',
      en: 'Do I need to be home during the cleaning?'
    },
    a: {
      fi: 'Ei tarvitse! Useimmat asiakkaamme luovuttavat avaimen ja nauttivat vapaa-ajastaan tai työpäivästään. Avainturvamme on täysin vakuutettu ja auditoitu.',
      en: 'Not at all! Most of our clients prefer to be at work or out enjoying free time. We operate a secure, digitally signed key protocol insured up to €1,000,000.'
    }
  },
  {
    q: {
      fi: 'Tuoko siivooja omat pesuvälineet ja aineet mukanaan?',
      en: 'Does the cleaner bring their own supplies and equipment?'
    },
    a: {
      fi: 'Kyllä, tuomme mukanamme ammattitason mikrokuituliinat, ergonomiset välineet sekä ympäristösertifioidut Joutsenmerkki-pesuaineet. Asiakkaan luona käytämme yleensä asiakkaan omaa imuria hygienia- ja allergiaturvallisuuden vuoksi, tai voimme sopia ammattilaisimurin tuomisesta.',
      en: 'Yes! We bring professional-grade microfiber cloths, tools, and eco-certified Nordic Swan cleaning agents. For home hygiene and cross-allergen prevention, we typically use your home vacuum or provide our sanitized HEPA unit upon request.'
    }
  },
  {
    q: {
      fi: 'Mitä erikoisetuja saan liittymällä VIP-odotuslistalle nyt?',
      en: 'What launch perks do I receive by joining the VIP waitlist now?'
    },
    a: {
      fi: 'Liittymällä saat etusijan varauskalenteriimme ennen julkista lanseerausta, 20% alennuksen kolmesta ensimmäisestä siivouskerrastasi sekä ilmaisen 50 € arvoisen ikkunanpesu-lahjakortin!',
      en: 'By joining now, you secure priority slot booking before public opening, 20% off your first 3 cleanings, plus a complimentary €50 window cleaning gift voucher!'
    }
  }
];
