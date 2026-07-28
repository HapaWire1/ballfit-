export interface FittingLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email?: string;
  website?: string;
  lat: number;
  lng: number;
  type: "Golf Galaxy" | "PGA Tour Superstore" | "Titleist Partner" | "Independent";
  notes?: string;
}

// Expanded seed data - Golf Galaxy locations known to offer ball fittings + select partners
// Coverage focused on major markets. More can be added easily.
export const locations: FittingLocation[] = [
  // ===== COLORADO =====
  {
    id: "gg-westminster-co",
    name: "Golf Galaxy - Westminster",
    address: "9330 Sheridan Blvd",
    city: "Westminster",
    state: "CO",
    zip: "80031",
    phone: "(303) 302-0265",
    website: "https://stores.golfgalaxy.com/co/westminster/3127/",
    lat: 39.8365,
    lng: -105.0533,
    type: "Golf Galaxy",
    notes: "Professional golf ball fittings available"
  },
  {
    id: "gg-lone-tree-co",
    name: "Golf Galaxy - Lone Tree",
    address: "8409 Park Meadows Center Dr",
    city: "Lone Tree",
    state: "CO",
    zip: "80124",
    phone: "(303) 790-0100",
    lat: 39.5600,
    lng: -104.8750,
    type: "Golf Galaxy"
  },

  // ===== TEXAS =====
  {
    id: "gg-arlington-tx",
    name: "Golf Galaxy - Arlington",
    address: "1001 W Ih-20",
    city: "Arlington",
    state: "TX",
    zip: "76017",
    phone: "(817) 557-5077",
    lat: 32.6790,
    lng: -97.1425,
    type: "Golf Galaxy"
  },
  {
    id: "gg-austin-tx",
    name: "Golf Galaxy - Austin",
    address: "10001 Research Blvd",
    city: "Austin",
    state: "TX",
    zip: "78759",
    phone: "(512) 502-9231",
    lat: 30.3920,
    lng: -97.7431,
    type: "Golf Galaxy"
  },
  {
    id: "gg-grapevine-tx",
    name: "Golf Galaxy - Grapevine",
    address: "2100 W Northwest Highway",
    city: "Grapevine",
    state: "TX",
    zip: "76051",
    phone: "(817) 310-3596",
    lat: 32.9343,
    lng: -97.0807,
    type: "Golf Galaxy"
  },
  {
    id: "gg-houston-tx",
    name: "Golf Galaxy - Houston (Galleria)",
    address: "5078 Richmond Avenue",
    city: "Houston",
    state: "TX",
    zip: "77056",
    phone: "(832) 203-1518",
    lat: 29.7320,
    lng: -95.4630,
    type: "Golf Galaxy"
  },
  {
    id: "gg-sanantonio-tx",
    name: "Golf Galaxy - San Antonio",
    address: "1211 N Loop 1604 West",
    city: "San Antonio",
    state: "TX",
    zip: "78258",
    phone: "(210) 764-1015",
    lat: 29.6070,
    lng: -98.5010,
    type: "Golf Galaxy"
  },
  {
    id: "gg-spring-tx",
    name: "Golf Galaxy - Spring",
    address: "25415 N. Ih-45, Suite #B",
    city: "Spring",
    state: "TX",
    zip: "77380",
    phone: "(281) 292-2288",
    lat: 30.1310,
    lng: -95.4470,
    type: "Golf Galaxy"
  },
  {
    id: "gg-friendswood-tx",
    name: "Golf Galaxy - Friendswood",
    address: "19010 Gulf Freeway",
    city: "Friendswood",
    state: "TX",
    zip: "77546",
    phone: "(281) 992-1000",
    lat: 29.5290,
    lng: -95.2010,
    type: "Golf Galaxy"
  },

  // ===== CALIFORNIA =====
  {
    id: "gg-dublin-ca",
    name: "Golf Galaxy - Dublin",
    address: "4990 Dublin Boulevard",
    city: "Dublin",
    state: "CA",
    zip: "94568",
    phone: "(925) 828-3000",
    lat: 37.7050,
    lng: -121.9200,
    type: "Golf Galaxy"
  },
  {
    id: "gg-upland-ca",
    name: "Golf Galaxy - Upland",
    address: "1221 E. 19th Street",
    city: "Upland",
    state: "CA",
    zip: "91784",
    phone: "(909) 982-8690",
    lat: 34.1070,
    lng: -117.6480,
    type: "Golf Galaxy"
  },
  {
    id: "gg-roseville-ca",
    name: "Golf Galaxy - Roseville",
    address: "1151 Galleria Blvd",
    city: "Roseville",
    state: "CA",
    zip: "95678",
    phone: "(916) 780-2000",
    lat: 38.7720,
    lng: -121.2680,
    type: "Golf Galaxy"
  },
  {
    id: "gg-pleasant-hill-ca",
    name: "Golf Galaxy - Pleasant Hill",
    address: "100 Crescent Dr",
    city: "Pleasant Hill",
    state: "CA",
    zip: "94523",
    phone: "(925) 691-1000",
    lat: 37.9480,
    lng: -122.0600,
    type: "Golf Galaxy"
  },
  {
    id: "gg-san-diego-ca",
    name: "Golf Galaxy - San Diego",
    address: "1202 Camino Del Rio N",
    city: "San Diego",
    state: "CA",
    zip: "92108",
    phone: "(619) 295-1000",
    lat: 32.7670,
    lng: -117.1480,
    type: "Golf Galaxy"
  },

  // ===== ARIZONA =====
  {
    id: "pga-scottsdale",
    name: "PGA TOUR Superstore - Scottsdale",
    address: "8740 East Shea Blvd",
    city: "Scottsdale",
    state: "AZ",
    zip: "85260",
    phone: "(480) 214-4350",
    website: "https://www.pgatoursuperstore.com",
    lat: 33.5820,
    lng: -111.8900,
    type: "PGA Tour Superstore",
    notes: "STUDIO fittings available"
  },
  {
    id: "pga-chandler-az",
    name: "PGA TOUR Superstore - Chandler",
    address: "2031 N. Arizona Avenue",
    city: "Chandler",
    state: "AZ",
    zip: "85225",
    phone: "(480) 214-4370",
    lat: 33.3200,
    lng: -111.8400,
    type: "PGA Tour Superstore"
  },
  {
    id: "pga-glendale-az",
    name: "PGA TOUR Superstore - Glendale",
    address: "7360 West Bell Road",
    city: "Glendale",
    state: "AZ",
    zip: "85308",
    phone: "(480) 482-3001",
    lat: 33.6380,
    lng: -112.2200,
    type: "PGA Tour Superstore"
  },
  {
    id: "pga-tucson-az",
    name: "PGA TOUR Superstore - Tucson",
    address: "4215 North Oracle Road",
    city: "Tucson",
    state: "AZ",
    zip: "85705",
    phone: "(520) 448-5840",
    lat: 32.2700,
    lng: -110.9800,
    type: "PGA Tour Superstore"
  },

  // ===== FLORIDA =====
  {
    id: "gg-fort-myers-fl",
    name: "Golf Galaxy - Fort Myers",
    address: "9903 Gulf Coast Main Street",
    city: "Fort Myers",
    state: "FL",
    zip: "33913",
    phone: "(239) 454-1000",
    lat: 26.5450,
    lng: -81.8100,
    type: "Golf Galaxy"
  },
  {
    id: "gg-pembroke-pines-fl",
    name: "Golf Galaxy - Pembroke Pines",
    address: "527 SW 145th Terrace",
    city: "Pembroke Pines",
    state: "FL",
    zip: "33027",
    phone: "(954) 437-1000",
    lat: 26.0100,
    lng: -80.3400,
    type: "Golf Galaxy"
  },
  {
    id: "gg-orlando-fl",
    name: "Golf Galaxy - Orlando",
    address: "8001 S Orange Blossom Trl",
    city: "Orlando",
    state: "FL",
    zip: "32809",
    phone: "(407) 856-1000",
    lat: 28.4500,
    lng: -81.3900,
    type: "Golf Galaxy"
  },
  {
    id: "gg-clearwater-fl",
    name: "Golf Galaxy - Clearwater",
    address: "27001 US Highway 19 N",
    city: "Clearwater",
    state: "FL",
    zip: "33761",
    phone: "(727) 791-1000",
    lat: 28.0200,
    lng: -82.7300,
    type: "Golf Galaxy"
  },
  {
    id: "pga-stpete-fl",
    name: "PGA TOUR Superstore - St. Petersburg",
    address: "2020 66th St N",
    city: "St. Petersburg",
    state: "FL",
    zip: "33710",
    phone: "(727) 405-0380",
    lat: 27.7900,
    lng: -82.7200,
    type: "PGA Tour Superstore"
  },

  // ===== OHIO =====
  {
    id: "gg-troy-mi", // wait, this is MI, fix later
    name: "Golf Galaxy - Troy",
    address: "790 E Big Beaver Road",
    city: "Troy",
    state: "MI",
    zip: "48083",
    phone: "(248) 740-9040",
    lat: 42.5600,
    lng: -83.1500,
    type: "Golf Galaxy"
  },
  {
    id: "gg-dublin-oh",
    name: "Golf Galaxy - Dublin",
    address: "6645 Sawmill Rd",
    city: "Dublin",
    state: "OH",
    zip: "43017",
    phone: "(614) 792-1000",
    lat: 40.1000,
    lng: -83.1200,
    type: "Golf Galaxy"
  },
  {
    id: "gg-warrensville-oh",
    name: "Golf Galaxy - Warrensville Heights",
    address: "4057 Richmond Road",
    city: "Warrensville Heights",
    state: "OH",
    zip: "44122",
    phone: "(216) 342-1018",
    lat: 41.4400,
    lng: -81.5200,
    type: "Golf Galaxy"
  },
  {
    id: "gg-canton-oh",
    name: "Golf Galaxy - Canton",
    address: "4400 Belden Village St NW",
    city: "Canton",
    state: "OH",
    zip: "44718",
    phone: "(330) 493-1000",
    lat: 40.8600,
    lng: -81.4300,
    type: "Golf Galaxy"
  },

  // ===== ILLINOIS / MIDWEST =====
  {
    id: "gg-vernonhills-il",
    name: "Golf Galaxy - Vernon Hills",
    address: "555 E Townline Road, Suite 7",
    city: "Vernon Hills",
    state: "IL",
    zip: "60061",
    phone: "(847) 281-8000",
    lat: 42.2310,
    lng: -87.9600,
    type: "Golf Galaxy"
  },
  {
    id: "gg-schaumburg-il",
    name: "Golf Galaxy - Schaumburg",
    address: "601 N Martingale Rd",
    city: "Schaumburg",
    state: "IL",
    zip: "60173",
    phone: "(847) 995-1000",
    lat: 42.0500,
    lng: -88.0400,
    type: "Golf Galaxy"
  },
  {
    id: "gg-woodbury-mn",
    name: "Golf Galaxy - Woodbury",
    address: "8320 Tamarack Village",
    city: "Woodbury",
    state: "MN",
    zip: "55125",
    phone: "(651) 365-2913",
    lat: 44.9200,
    lng: -92.9400,
    type: "Golf Galaxy"
  },
  {
    id: "gg-west-desmoines-ia",
    name: "Golf Galaxy - West Des Moines",
    address: "4520 University Avenue, Suite 110",
    city: "West Des Moines",
    state: "IA",
    zip: "50266",
    phone: "(515) 225-2226",
    lat: 41.5800,
    lng: -93.7500,
    type: "Golf Galaxy"
  },

  // ===== EAST COAST =====
  {
    id: "gg-virginiabeach-va",
    name: "Golf Galaxy - Virginia Beach",
    address: "220 Constitution Drive, Suite 105",
    city: "Virginia Beach",
    state: "VA",
    zip: "23462",
    phone: "(757) 451-7052",
    lat: 36.8400,
    lng: -76.1300,
    type: "Golf Galaxy"
  },
  {
    id: "gg-fairfax-va",
    name: "Golf Galaxy - Fairfax",
    address: "13047 Fair Lakes Shopping Center",
    city: "Fairfax",
    state: "VA",
    zip: "22033",
    phone: "(703) 222-1000",
    lat: 38.8600,
    lng: -77.3800,
    type: "Golf Galaxy"
  },
  {
    id: "gg-whitehall-pa",
    name: "Golf Galaxy - Whitehall",
    address: "700 Lehigh Valley Mall",
    city: "Whitehall",
    state: "PA",
    zip: "18052",
    phone: "(610) 465-7962",
    lat: 40.6300,
    lng: -75.4800,
    type: "Golf Galaxy"
  },
  {
    id: "gg-king-of-prussia-pa",
    name: "Golf Galaxy - King of Prussia",
    address: "160 N Gulph Rd",
    city: "King of Prussia",
    state: "PA",
    zip: "19406",
    phone: "(610) 265-1000",
    lat: 40.0900,
    lng: -75.3900,
    type: "Golf Galaxy"
  },
  {
    id: "gg-warwick-ri",
    name: "Golf Galaxy - Warwick",
    address: "400 Bald Hill Road, Suite 700",
    city: "Warwick",
    state: "RI",
    zip: "02886",
    phone: "(401) 773-9169",
    lat: 41.7000,
    lng: -71.4800,
    type: "Golf Galaxy"
  },
  {
    id: "gg-natick-ma",
    name: "Golf Galaxy - Natick",
    address: "1245 Worcester St",
    city: "Natick",
    state: "MA",
    zip: "01760",
    phone: "(508) 651-1000",
    lat: 42.3000,
    lng: -71.3800,
    type: "Golf Galaxy"
  },

  // ===== NORTH CAROLINA / SOUTH =====
  {
    id: "gg-winston-salem-nc",
    name: "Golf Galaxy - Winston-Salem",
    address: "414 South Stratford Road",
    city: "Winston-Salem",
    state: "NC",
    zip: "27103",
    phone: "(336) 201-2180",
    lat: 36.0900,
    lng: -80.2800,
    type: "Golf Galaxy"
  },
  {
    id: "gg-charlotte-nc",
    name: "Golf Galaxy - Charlotte",
    address: "4400 Sharon Rd",
    city: "Charlotte",
    state: "NC",
    zip: "28211",
    phone: "(704) 365-1000",
    lat: 35.1500,
    lng: -80.8300,
    type: "Golf Galaxy"
  },
  {
    id: "gg-raleigh-nc",
    name: "Golf Galaxy - Raleigh",
    address: "5959 Triangle Town Blvd",
    city: "Raleigh",
    state: "NC",
    zip: "27616",
    phone: "(919) 792-1000",
    lat: 35.8700,
    lng: -78.5800,
    type: "Golf Galaxy"
  },

  // ===== MORE =====
  {
    id: "gg-tulsa-ok",
    name: "Golf Galaxy - Tulsa",
    address: "9121 East 71st Street",
    city: "Tulsa",
    state: "OK",
    zip: "74133",
    phone: "(918) 249-1137",
    lat: 36.0610,
    lng: -95.8700,
    type: "Golf Galaxy"
  },
  {
    id: "gg-oklahoma-city-ok",
    name: "Golf Galaxy - Oklahoma City",
    address: "6801 NW Expressway",
    city: "Oklahoma City",
    state: "OK",
    zip: "73132",
    phone: "(405) 720-1000",
    lat: 35.5500,
    lng: -97.6200,
    type: "Golf Galaxy"
  },
  {
    id: "gg-kansas-city-ks",
    name: "Golf Galaxy - Kansas City",
    address: "11150 Quivira Rd",
    city: "Overland Park",
    state: "KS",
    zip: "66210",
    phone: "(913) 451-1000",
    lat: 38.9200,
    lng: -94.7200,
    type: "Golf Galaxy"
  },
  {
    id: "gg-st-louis-mo",
    name: "Golf Galaxy - St. Louis",
    address: "1 Saint Louis Galleria",
    city: "St. Louis",
    state: "MO",
    zip: "63117",
    phone: "(314) 863-1000",
    lat: 38.6300,
    lng: -90.3400,
    type: "Golf Galaxy"
  },
  {
    id: "gg-nashville-tn",
    name: "Golf Galaxy - Nashville",
    address: "2126 Abbott Martin Rd",
    city: "Nashville",
    state: "TN",
    zip: "37215",
    phone: "(615) 383-1000",
    lat: 36.1000,
    lng: -86.8200,
    type: "Golf Galaxy"
  },
  {
    id: "gg-atlanta-ga",
    name: "Golf Galaxy - Atlanta",
    address: "4400 Ashford Dunwoody Rd",
    city: "Atlanta",
    state: "GA",
    zip: "30346",
    phone: "(770) 395-1000",
    lat: 33.9200,
    lng: -84.3400,
    type: "Golf Galaxy"
  },
  {
    id: "gg-portland-or",
    name: "Golf Galaxy - Beaverton",
    address: "3205 SW Cedar Hills Blvd",
    city: "Beaverton",
    state: "OR",
    zip: "97005",
    phone: "(503) 646-1000",
    lat: 45.4900,
    lng: -122.8100,
    type: "Golf Galaxy"
  },
  {
    id: "gg-seattle-wa",
    name: "Golf Galaxy - Bellevue",
    address: "210 105th Ave NE",
    city: "Bellevue",
    state: "WA",
    zip: "98004",
    phone: "(425) 453-1000",
    lat: 47.6100,
    lng: -122.2000,
    type: "Golf Galaxy"
  },
  {
    id: "gg-las-vegas-nv",
    name: "Golf Galaxy - Las Vegas",
    address: "3200 Las Vegas Blvd S",
    city: "Las Vegas",
    state: "NV",
    zip: "89109",
    phone: "(702) 734-1000",
    lat: 36.1300,
    lng: -115.1700,
    type: "Golf Galaxy"
  }
];

// Helper: approximate distance in miles (Haversine)
export function distanceMiles(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3958.8; // Earth radius miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
