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

export const locations: FittingLocation[] = [
  { id: "gg-westminster-co", name: "Golf Galaxy - Westminster", address: "9330 Sheridan Blvd", city: "Westminster", state: "CO", zip: "80031", phone: "(303) 302-0265", website: "https://stores.golfgalaxy.com/co/westminster/3127/", lat: 39.8365, lng: -105.0533, type: "Golf Galaxy", notes: "Professional golf ball fittings available" },
  { id: "gg-lone-tree-co", name: "Golf Galaxy - Lone Tree", address: "8409 Park Meadows Center Dr", city: "Lone Tree", state: "CO", zip: "80124", phone: "(303) 790-0100", lat: 39.56, lng: -104.875, type: "Golf Galaxy" },
  { id: "gg-arlington-tx", name: "Golf Galaxy - Arlington", address: "1001 W Ih-20", city: "Arlington", state: "TX", zip: "76017", phone: "(817) 557-5077", lat: 32.679, lng: -97.1425, type: "Golf Galaxy" },
  { id: "gg-austin-tx", name: "Golf Galaxy - Austin", address: "10001 Research Blvd", city: "Austin", state: "TX", zip: "78759", phone: "(512) 502-9231", lat: 30.392, lng: -97.7431, type: "Golf Galaxy" },
  { id: "gg-grapevine-tx", name: "Golf Galaxy - Grapevine", address: "2100 W Northwest Highway", city: "Grapevine", state: "TX", zip: "76051", phone: "(817) 310-3596", lat: 32.9343, lng: -97.0807, type: "Golf Galaxy" },
  { id: "gg-houston-tx", name: "Golf Galaxy - Houston (Galleria)", address: "5078 Richmond Avenue", city: "Houston", state: "TX", zip: "77056", phone: "(832) 203-1518", lat: 29.732, lng: -95.463, type: "Golf Galaxy" },
  { id: "gg-sanantonio-tx", name: "Golf Galaxy - San Antonio", address: "1211 N Loop 1604 West", city: "San Antonio", state: "TX", zip: "78258", phone: "(210) 764-1015", lat: 29.607, lng: -98.501, type: "Golf Galaxy" },
  { id: "gg-spring-tx", name: "Golf Galaxy - Spring", address: "25415 N. Ih-45, Suite #B", city: "Spring", state: "TX", zip: "77380", phone: "(281) 292-2288", lat: 30.131, lng: -95.447, type: "Golf Galaxy" },
  { id: "gg-friendswood-tx", name: "Golf Galaxy - Friendswood", address: "19010 Gulf Freeway", city: "Friendswood", state: "TX", zip: "77546", phone: "(281) 992-1000", lat: 29.529, lng: -95.201, type: "Golf Galaxy" },
  { id: "gg-dublin-ca", name: "Golf Galaxy - Dublin", address: "4990 Dublin Boulevard", city: "Dublin", state: "CA", zip: "94568", phone: "(925) 828-3000", lat: 37.705, lng: -121.92, type: "Golf Galaxy" },
  { id: "gg-upland-ca", name: "Golf Galaxy - Upland", address: "1221 E. 19th Street", city: "Upland", state: "CA", zip: "91784", phone: "(909) 982-8690", lat: 34.107, lng: -117.648, type: "Golf Galaxy" },
  { id: "gg-roseville-ca", name: "Golf Galaxy - Roseville", address: "1151 Galleria Blvd", city: "Roseville", state: "CA", zip: "95678", phone: "(916) 780-2000", lat: 38.772, lng: -121.268, type: "Golf Galaxy" },
  { id: "gg-pleasant-hill-ca", name: "Golf Galaxy - Pleasant Hill", address: "100 Crescent Dr", city: "Pleasant Hill", state: "CA", zip: "94523", phone: "(925) 691-1000", lat: 37.948, lng: -122.06, type: "Golf Galaxy" },
  { id: "gg-san-diego-ca", name: "Golf Galaxy - San Diego", address: "1202 Camino Del Rio N", city: "San Diego", state: "CA", zip: "92108", phone: "(619) 295-1000", lat: 32.767, lng: -117.148, type: "Golf Galaxy" },
  { id: "gg-fort-myers-fl", name: "Golf Galaxy - Fort Myers", address: "9903 Gulf Coast Main Street", city: "Fort Myers", state: "FL", zip: "33913", phone: "(239) 454-1000", lat: 26.545, lng: -81.81, type: "Golf Galaxy" },
  { id: "gg-pembroke-pines-fl", name: "Golf Galaxy - Pembroke Pines", address: "527 SW 145th Terrace", city: "Pembroke Pines", state: "FL", zip: "33027", phone: "(954) 437-1000", lat: 26.01, lng: -80.34, type: "Golf Galaxy" },
  { id: "gg-orlando-fl", name: "Golf Galaxy - Orlando", address: "8001 S Orange Blossom Trl", city: "Orlando", state: "FL", zip: "32809", phone: "(407) 856-1000", lat: 28.45, lng: -81.39, type: "Golf Galaxy" },
  { id: "gg-clearwater-fl", name: "Golf Galaxy - Clearwater", address: "27001 US Highway 19 N", city: "Clearwater", state: "FL", zip: "33761", phone: "(727) 791-1000", lat: 28.02, lng: -82.73, type: "Golf Galaxy" },
  { id: "gg-troy-mi", name: "Golf Galaxy - Troy", address: "790 E Big Beaver Road", city: "Troy", state: "MI", zip: "48083", phone: "(248) 740-9040", lat: 42.56, lng: -83.15, type: "Golf Galaxy" },
  { id: "gg-dublin-oh", name: "Golf Galaxy - Dublin", address: "6645 Sawmill Rd", city: "Dublin", state: "OH", zip: "43017", phone: "(614) 792-1000", lat: 40.1, lng: -83.12, type: "Golf Galaxy" },
  { id: "gg-warrensville-oh", name: "Golf Galaxy - Warrensville Heights", address: "4057 Richmond Road", city: "Warrensville Heights", state: "OH", zip: "44122", phone: "(216) 342-1018", lat: 41.44, lng: -81.52, type: "Golf Galaxy" },
  { id: "gg-canton-oh", name: "Golf Galaxy - Canton", address: "4400 Belden Village St NW", city: "Canton", state: "OH", zip: "44718", phone: "(330) 493-1000", lat: 40.86, lng: -81.43, type: "Golf Galaxy" },
  { id: "gg-vernonhills-il", name: "Golf Galaxy - Vernon Hills", address: "555 E Townline Road, Suite 7", city: "Vernon Hills", state: "IL", zip: "60061", phone: "(847) 281-8000", lat: 42.231, lng: -87.96, type: "Golf Galaxy" },
  { id: "gg-schaumburg-il", name: "Golf Galaxy - Schaumburg", address: "601 N Martingale Rd", city: "Schaumburg", state: "IL", zip: "60173", phone: "(847) 995-1000", lat: 42.05, lng: -88.04, type: "Golf Galaxy" },
  { id: "gg-woodbury-mn", name: "Golf Galaxy - Woodbury", address: "8320 Tamarack Village", city: "Woodbury", state: "MN", zip: "55125", phone: "(651) 365-2913", lat: 44.92, lng: -92.94, type: "Golf Galaxy" },
  { id: "gg-west-desmoines-ia", name: "Golf Galaxy - West Des Moines", address: "4520 University Avenue, Suite 110", city: "West Des Moines", state: "IA", zip: "50266", phone: "(515) 225-2226", lat: 41.58, lng: -93.75, type: "Golf Galaxy" },
  { id: "gg-virginiabeach-va", name: "Golf Galaxy - Virginia Beach", address: "220 Constitution Drive, Suite 105", city: "Virginia Beach", state: "VA", zip: "23462", phone: "(757) 451-7052", lat: 36.84, lng: -76.13, type: "Golf Galaxy" },
  { id: "gg-fairfax-va", name: "Golf Galaxy - Fairfax", address: "13047 Fair Lakes Shopping Center", city: "Fairfax", state: "VA", zip: "22033", phone: "(703) 222-1000", lat: 38.86, lng: -77.38, type: "Golf Galaxy" },
  { id: "gg-whitehall-pa", name: "Golf Galaxy - Whitehall", address: "700 Lehigh Valley Mall", city: "Whitehall", state: "PA", zip: "18052", phone: "(610) 465-7962", lat: 40.63, lng: -75.48, type: "Golf Galaxy" },
  { id: "gg-king-of-prussia-pa", name: "Golf Galaxy - King of Prussia", address: "160 N Gulph Rd", city: "King of Prussia", state: "PA", zip: "19406", phone: "(610) 265-1000", lat: 40.09, lng: -75.39, type: "Golf Galaxy" },
  { id: "gg-warwick-ri", name: "Golf Galaxy - Warwick", address: "400 Bald Hill Road, Suite 700", city: "Warwick", state: "RI", zip: "02886", phone: "(401) 773-9169", lat: 41.7, lng: -71.48, type: "Golf Galaxy" },
  { id: "gg-natick-ma", name: "Golf Galaxy - Natick", address: "1245 Worcester St", city: "Natick", state: "MA", zip: "01760", phone: "(508) 651-1000", lat: 42.3, lng: -71.38, type: "Golf Galaxy" },
  { id: "gg-winston-salem-nc", name: "Golf Galaxy - Winston-Salem", address: "414 South Stratford Road", city: "Winston-Salem", state: "NC", zip: "27103", phone: "(336) 201-2180", lat: 36.09, lng: -80.28, type: "Golf Galaxy" },
  { id: "gg-charlotte-nc", name: "Golf Galaxy - Charlotte", address: "4400 Sharon Rd", city: "Charlotte", state: "NC", zip: "28211", phone: "(704) 365-1000", lat: 35.15, lng: -80.83, type: "Golf Galaxy" },
  { id: "gg-raleigh-nc", name: "Golf Galaxy - Raleigh", address: "5959 Triangle Town Blvd", city: "Raleigh", state: "NC", zip: "27616", phone: "(919) 792-1000", lat: 35.87, lng: -78.58, type: "Golf Galaxy" },
  { id: "gg-tulsa-ok", name: "Golf Galaxy - Tulsa", address: "9121 East 71st Street", city: "Tulsa", state: "OK", zip: "74133", phone: "(918) 249-1137", lat: 36.061, lng: -95.87, type: "Golf Galaxy" },
  { id: "gg-oklahoma-city-ok", name: "Golf Galaxy - Oklahoma City", address: "6801 NW Expressway", city: "Oklahoma City", state: "OK", zip: "73132", phone: "(405) 720-1000", lat: 35.55, lng: -97.62, type: "Golf Galaxy" },
  { id: "gg-kansas-city-ks", name: "Golf Galaxy - Kansas City", address: "11150 Quivira Rd", city: "Overland Park", state: "KS", zip: "66210", phone: "(913) 451-1000", lat: 38.92, lng: -94.72, type: "Golf Galaxy" },
  { id: "gg-st-louis-mo", name: "Golf Galaxy - St. Louis", address: "1 Saint Louis Galleria", city: "St. Louis", state: "MO", zip: "63117", phone: "(314) 863-1000", lat: 38.63, lng: -90.34, type: "Golf Galaxy" },
  { id: "gg-nashville-tn", name: "Golf Galaxy - Nashville", address: "2126 Abbott Martin Rd", city: "Nashville", state: "TN", zip: "37215", phone: "(615) 383-1000", lat: 36.1, lng: -86.82, type: "Golf Galaxy" },
  { id: "gg-atlanta-ga", name: "Golf Galaxy - Atlanta", address: "4400 Ashford Dunwoody Rd", city: "Atlanta", state: "GA", zip: "30346", phone: "(770) 395-1000", lat: 33.92, lng: -84.34, type: "Golf Galaxy" },
  { id: "gg-portland-or", name: "Golf Galaxy - Beaverton", address: "3205 SW Cedar Hills Blvd", city: "Beaverton", state: "OR", zip: "97005", phone: "(503) 646-1000", lat: 45.49, lng: -122.81, type: "Golf Galaxy" },
  { id: "gg-seattle-wa", name: "Golf Galaxy - Bellevue", address: "210 105th Ave NE", city: "Bellevue", state: "WA", zip: "98004", phone: "(425) 453-1000", lat: 47.61, lng: -122.2, type: "Golf Galaxy" },
  { id: "gg-las-vegas-nv", name: "Golf Galaxy - Las Vegas", address: "3200 Las Vegas Blvd S", city: "Las Vegas", state: "NV", zip: "89109", phone: "(702) 734-1000", lat: 36.13, lng: -115.17, type: "Golf Galaxy" },
  { id: "pga-scottsdale", name: "PGA TOUR Superstore - Scottsdale", address: "8740 East Shea Blvd", city: "Scottsdale", state: "AZ", zip: "85260", phone: "(480) 214-4350", website: "https://www.pgatoursuperstore.com", lat: 33.582, lng: -111.89, type: "PGA Tour Superstore", notes: "Titleist ball fittings available" },
  { id: "pga-chandler-az", name: "PGA TOUR Superstore - Chandler", address: "2031 N. Arizona Avenue", city: "Chandler", state: "AZ", zip: "85225", phone: "(480) 214-4370", lat: 33.32, lng: -111.84, type: "PGA Tour Superstore", notes: "Titleist ball fittings available" },
  { id: "pga-glendale-az", name: "PGA TOUR Superstore - Glendale", address: "7360 West Bell Road", city: "Glendale", state: "AZ", zip: "85308", phone: "(480) 482-3001", lat: 33.638, lng: -112.22, type: "PGA Tour Superstore" },
  { id: "pga-tucson-az", name: "PGA TOUR Superstore - Tucson", address: "4215 North Oracle Road", city: "Tucson", state: "AZ", zip: "85705", phone: "(520) 448-5840", lat: 32.27, lng: -110.98, type: "PGA Tour Superstore" },
  { id: "pga-phoenix-az", name: "PGA TOUR Superstore - North Scottsdale", address: "7000 East Mayo Blvd", city: "Phoenix", state: "AZ", zip: "85054", phone: "(602) 777-6380", lat: 33.655, lng: -111.92, type: "PGA Tour Superstore" },
  { id: "pga-stpete-fl", name: "PGA TOUR Superstore - St. Petersburg", address: "2020 66th St N", city: "St. Petersburg", state: "FL", zip: "33710", phone: "(727) 405-0380", lat: 27.79, lng: -82.72, type: "PGA Tour Superstore" },
  { id: "pga-naples-fl", name: "PGA TOUR Superstore - Naples", address: "2135 Tamiami Trail North", city: "Naples", state: "FL", zip: "34102", phone: "(239) 384-6380", lat: 26.17, lng: -81.8, type: "PGA Tour Superstore" },
  { id: "pga-birmingham-al", name: "PGA TOUR Superstore - Birmingham", address: "165-A Inverness Plaza", city: "Birmingham", state: "AL", zip: "35242", phone: "(205) 440-4200", lat: 33.38, lng: -86.73, type: "PGA Tour Superstore" },
  { id: "pga-cupertino-ca", name: "PGA TOUR Superstore - Cupertino", address: "20600 Homestead Road", city: "Cupertino", state: "CA", zip: "95014", phone: "(408) 538-3553", lat: 37.32, lng: -122.03, type: "PGA Tour Superstore" },
  { id: "pga-dublin-ca", name: "PGA TOUR Superstore - Dublin", address: "4990 Dublin Boulevard", city: "Dublin", state: "CA", zip: "94568", phone: "(925) 574-9640", lat: 37.705, lng: -121.92, type: "PGA Tour Superstore" },
  { id: "pga-eastpaloalto-ca", name: "PGA TOUR Superstore - East Palo Alto", address: "1751 East Bayshore Road", city: "East Palo Alto", state: "CA", zip: "94303", phone: "(650) 433-2000", lat: 37.46, lng: -122.13, type: "PGA Tour Superstore" },
  { id: "pga-greenwood-co", name: "PGA TOUR Superstore - Greenwood Village", address: "9451 East Arapahoe Rd", city: "Greenwood Village", state: "CO", zip: "80112", phone: "(720) 266-2400", lat: 39.59, lng: -104.88, type: "PGA Tour Superstore" },
  { id: "pga-paramus-nj", name: "PGA TOUR Superstore - Paramus", address: "295 Route 17 South", city: "Paramus", state: "NJ", zip: "07652", phone: "(201) 649-9170", lat: 40.95, lng: -74.07, type: "PGA Tour Superstore" },
  { id: "pga-plano-tx", name: "PGA TOUR Superstore - Plano", address: "8700 Preston Road", city: "Plano", state: "TX", zip: "75024", phone: "(214) 778-3850", lat: 33.08, lng: -96.8, type: "PGA Tour Superstore" },
  { id: "pga-westbury-ny", name: "PGA TOUR Superstore - Westbury", address: "1254 Corporate Drive", city: "Westbury", state: "NY", zip: "11590", phone: "(516) 824-3000", lat: 40.75, lng: -73.58, type: "PGA Tour Superstore" },
  { id: "pga-novi-mi", name: "PGA TOUR Superstore - Novi", address: "21061 Haggerty Rd", city: "Novi", state: "MI", zip: "48375", phone: "(947) 813-5128", lat: 42.48, lng: -83.48, type: "PGA Tour Superstore" },
  { id: "pga-timonium-md", name: "PGA TOUR Superstore - Timonium", address: "1920 York Rd", city: "Timonium", state: "MD", zip: "21093", phone: "(227) 251-0005", lat: 39.44, lng: -76.63, type: "PGA Tour Superstore" },
  { id: "pga-roswell-ga", name: "PGA TOUR Superstore - Roswell", address: "1100 Old Roswell Rd", city: "Roswell", state: "GA", zip: "30076", phone: "(770) 552-1000", lat: 34.02, lng: -84.34, type: "PGA Tour Superstore" },
  { id: "pga-indianapolis-in", name: "PGA TOUR Superstore - Indianapolis", address: "8601 N River Rd", city: "Indianapolis", state: "IN", zip: "46240", phone: "(317) 815-1000", lat: 39.91, lng: -86.1, type: "PGA Tour Superstore" },
  { id: "pga-minnetonka-mn", name: "PGA TOUR Superstore - Minnetonka", address: "12301 Wayzata Blvd", city: "Minnetonka", state: "MN", zip: "55305", phone: "(952) 473-1000", lat: 44.97, lng: -93.45, type: "PGA Tour Superstore" },
  { id: "pga-orlandpark-il", name: "PGA TOUR Superstore - Orland Park", address: "15100 La Grange Rd", city: "Orland Park", state: "IL", zip: "60462", phone: "(708) 403-1000", lat: 41.62, lng: -87.85, type: "PGA Tour Superstore" },
  { id: "pga-southlake-tx", name: "PGA TOUR Superstore - Southlake", address: "2501 E Southlake Blvd", city: "Southlake", state: "TX", zip: "76092", phone: "(817) 416-1000", lat: 32.95, lng: -97.14, type: "PGA Tour Superstore" },
  { id: "pga-raleigh-nc", name: "PGA TOUR Superstore - Raleigh", address: "6601 Glenwood Ave", city: "Raleigh", state: "NC", zip: "27612", phone: "(919) 787-1000", lat: 35.85, lng: -78.7, type: "PGA Tour Superstore" },
  { id: "pga-okc", name: "PGA TOUR Superstore - Oklahoma City", address: "2301 W Memorial Rd", city: "Oklahoma City", state: "OK", zip: "73134", phone: "(405) 751-1000", lat: 35.61, lng: -97.55, type: "PGA Tour Superstore" },
  { id: "pga-katy-tx", name: "PGA TOUR Superstore - Katy", address: "23501 Cinco Ranch Blvd", city: "Katy", state: "TX", zip: "77494", phone: "(281) 394-1000", lat: 29.75, lng: -95.78, type: "PGA Tour Superstore" },
  { id: "pga-farragut-tn", name: "PGA TOUR Superstore - Farragut", address: "11300 Parkside Dr", city: "Farragut", state: "TN", zip: "37934", phone: "(865) 671-1000", lat: 35.88, lng: -84.17, type: "PGA Tour Superstore" },
  { id: "pga-northbrook-il", name: "PGA TOUR Superstore - Northbrook", address: "1072 Willow Road", city: "Northbrook", state: "IL", zip: "60062", phone: "(847) 480-1000", lat: 42.13, lng: -87.83, type: "PGA Tour Superstore" },
  { id: "hos-knoxville-tn", name: "DICK'S House of Sport - Knoxville", address: "7600 Kingston Pike", city: "Knoxville", state: "TN", zip: "37919", phone: "(865) 291-0168", lat: 35.92, lng: -84.04, type: "Titleist Partner", notes: "Golf ball fittings available" },
  { id: "hos-tampa-fl", name: "DICK'S House of Sport - Tampa", address: "2223 N Westshore Blvd", city: "Tampa", state: "FL", zip: "33607", phone: "(813) 289-1000", lat: 27.96, lng: -82.52, type: "Titleist Partner", notes: "Golf ball fittings available" },
  { id: "hos-minnetonka-mn", name: "DICK'S House of Sport - Minnetonka", address: "12547 Ridgedale Center", city: "Minnetonka", state: "MN", zip: "55305", phone: "(763) 332-4076", lat: 44.97, lng: -93.43, type: "Titleist Partner", notes: "Golf ball fittings available" },
  { id: "hos-victor-ny", name: "DICK'S House of Sport - Victor", address: "200 Eastview Mall", city: "Victor", state: "NY", zip: "14564", phone: "(585) 282-0000", lat: 43.0, lng: -77.43, type: "Titleist Partner", notes: "Golf ball fittings available" },
  { id: "hos-johnsoncity-ny", name: "DICK'S House of Sport - Johnson City", address: "629 Harry L Drive", city: "Johnson City", state: "NY", zip: "13790", phone: "(607) 240-4039", lat: 42.12, lng: -75.97, type: "Titleist Partner" },
  { id: "ind-nevadabobs-ms", name: "Nevada Bob's Golf - Jackson", address: "Jackson area", city: "Jackson", state: "MS", zip: "39211", phone: "(601) 956-1000", lat: 32.35, lng: -90.15, type: "Independent", notes: "Explicitly offers Titleist golf ball fittings" },
  { id: "ind-mitchell-mt", name: "Mitchell Golf - Billings", address: "3007 Montana Ave", city: "Billings", state: "MT", zip: "59101", phone: "(406) 245-8691", lat: 45.78, lng: -108.5, type: "Independent", notes: "Club + ball selection fittings" },
  { id: "ind-golfhq-missoula", name: "Golf Headquarters Missoula", address: "Missoula", city: "Missoula", state: "MT", zip: "59801", phone: "(406) 721-1000", lat: 46.87, lng: -114.0, type: "Independent", notes: "Full fitting services including major brands" },
  { id: "ind-threecrowns-wy", name: "Three Crowns Golf Academy", address: "Casper", city: "Casper", state: "WY", zip: "82601", phone: "(307) 472-1000", lat: 42.85, lng: -106.32, type: "Independent", notes: "TrackMan fittings – confirm ball fitting availability" },
  { id: "ind-beard-mt", name: "Beard Performance Golf", address: "Great Falls", city: "Great Falls", state: "MT", zip: "59401", phone: "(406) 761-1000", lat: 47.5, lng: -111.3, type: "Independent", notes: "PGA professionals, club + performance fitting" }
];

export function distanceMiles(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3958.8;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
