"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Search, MapPin, Loader2 } from "lucide-react";
import { locations, distanceMiles, type FittingLocation } from "@/data/locations";
import LocationCard from "@/components/LocationCard";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[320px] rounded-lg bg-gray-100 flex items-center justify-center">
      <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
    </div>
  ),
});

const ZIP_CENTERS: Record<string, [number, number]> = {
  "80031": [39.8365, -105.0533],
  "80124": [39.5600, -104.8750],
  "76017": [32.6790, -97.1425],
  "78759": [30.3920, -97.7431],
  "76051": [32.9343, -97.0807],
  "77056": [29.7320, -95.4630],
  "78258": [29.6070, -98.5010],
  "77380": [30.1310, -95.4470],
  "77546": [29.5290, -95.2010],
  "94568": [37.7050, -121.9200],
  "91784": [34.1070, -117.6480],
  "95678": [38.7720, -121.2680],
  "94523": [37.9480, -122.0600],
  "92108": [32.7670, -117.1480],
  "85260": [33.5820, -111.8900],
  "85225": [33.3200, -111.8400],
  "85308": [33.6380, -112.2200],
  "85705": [32.2700, -110.9800],
  "33913": [26.5450, -81.8100],
  "33027": [26.0100, -80.3400],
  "32809": [28.4500, -81.3900],
  "33761": [28.0200, -82.7300],
  "33710": [27.7900, -82.7200],
  "48083": [42.5600, -83.1500],
  "43017": [40.1000, -83.1200],
  "44122": [41.4400, -81.5200],
  "44718": [40.8600, -81.4300],
  "60061": [42.2310, -87.9600],
  "60173": [42.0500, -88.0400],
  "55125": [44.9200, -92.9400],
  "50266": [41.5800, -93.7500],
  "23462": [36.8400, -76.1300],
  "22033": [38.8600, -77.3800],
  "18052": [40.6300, -75.4800],
  "19406": [40.0900, -75.3900],
  "02886": [41.7000, -71.4800],
  "01760": [42.3000, -71.3800],
  "27103": [36.0900, -80.2800],
  "28211": [35.1500, -80.8300],
  "27616": [35.8700, -78.5800],
  "74133": [36.0610, -95.8700],
  "73132": [35.5500, -97.6200],
  "66210": [38.9200, -94.7200],
  "63117": [38.6300, -90.3400],
  "37215": [36.1000, -86.8200],
  "30346": [33.9200, -84.3400],
  "97005": [45.4900, -122.8100],
  "98004": [47.6100, -122.2000],
  "89109": [36.1300, -115.1700],
  "98101": [47.6062, -122.3321],
  "10001": [40.7506, -73.9971],
  "90210": [34.0901, -118.4065],
  "33101": [25.7617, -80.1918],
  "60601": [41.8857, -87.6229],
  "75201": [32.7872, -96.7987],
  "85001": [33.4484, -112.0740],
  "30301": [33.7490, -84.3880],
  "19101": [39.9526, -75.1652],
  "02101": [42.3601, -71.0589],
  "80202": [39.7500, -104.9900],
  "94102": [37.7800, -122.4200],
  "20001": [38.9100, -77.0200],

  "59101": [45.7800, -108.5000], // Billings MT
  "39211": [32.3500, -90.1500], // Jackson MS
  "59801": [46.8700, -114.0000], // Missoula MT
  "82601": [42.8500, -106.3200], // Casper WY
  "59401": [47.5000, -111.3000], // Great Falls MT
  "37919": [35.9200, -84.0400], // Knoxville TN
  "33607": [27.9600, -82.5200], // Tampa FL
  "55305": [44.9700, -93.4300], // Minnetonka MN
  "14564": [43.0000, -77.4300], // Victor NY
  "13790": [42.1200, -75.9700], // Johnson City NY
};

export default function Home() {
  const [zip, setZip] = useState("");
  const [radius, setRadius] = useState(50);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);
  const [center, setCenter] = useState<[number, number]>([39.8283, -98.5795]);
  const [zoom, setZoom] = useState(4);

  const results = useMemo(() => {
    if (!searched || !zip.trim()) return [];

    const cleanZip = zip.trim().slice(0, 5);
    const coords = ZIP_CENTERS[cleanZip];

    // If we have a center for this ZIP, filter by distance
    if (coords) {
      const [lat, lng] = coords;
      return locations
        .map((loc) => ({
          ...loc,
          distance: distanceMiles(lat, lng, loc.lat, loc.lng),
        }))
        .filter((loc) => loc.distance <= radius)
        .sort((a, b) => a.distance - b.distance);
    }

    // Unknown ZIP – still show all locations sorted by name so the tool never feels empty
    // (better UX than a dead end while coverage grows)
    return locations
      .map((loc) => ({ ...loc, distance: 0 }))
      .slice(0, 12);
  }, [zip, radius, searched]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = zip.trim().slice(0, 5);
    if (clean.length < 5) return;

    setSearched(true);
    setSelectedId(null);

    const coords = ZIP_CENTERS[clean];
    if (coords) {
      setCenter(coords);
      setZoom(9);
    } else {
      setCenter([39.8283, -98.5795]);
      setZoom(4);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      {/* Header – clean, content-first */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-teal-700 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-[17px] font-bold text-gray-900 leading-none tracking-tight">
                BallFit
              </h1>
              <p className="text-[11px] text-gray-500 mt-0.5 tracking-wide">
                Golf ball fittings · USA
              </p>
            </div>
          </div>
          <p className="hidden sm:block text-[11px] text-gray-400 font-medium">
            Early MVP · Golf Galaxy + partners
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-5">
        {/* Search */}
        <form onSubmit={handleSearch} className="mb-5">
          <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  placeholder="Enter ZIP code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                  className="w-full pl-9 pr-3 py-2.5 rounded-md border border-gray-200 bg-white text-[15px] focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
              </div>
              <select
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="px-3 py-2.5 rounded-md border border-gray-200 bg-white text-[14px] text-gray-700 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
              >
                <option value={25}>25 miles</option>
                <option value={50}>50 miles</option>
                <option value={100}>100 miles</option>
                <option value={200}>200 miles</option>
              </select>
              <button
                type="submit"
                className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-[14px] font-semibold rounded-md transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {/* Results + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 h-[calc(100vh-200px)] min-h-[460px]">
          {/* List */}
          <div className="lg:col-span-2 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-2.5 px-0.5">
              <h2 className="text-[13px] font-semibold text-gray-700 uppercase tracking-wide">
                {searched
                  ? results.length > 0
                    ? `${results.length} location${results.length === 1 ? "" : "s"}`
                    : "No results"
                  : "Locations"}
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 pr-0.5">
              {!searched && (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                  <p className="text-[14px] text-gray-600 font-medium">
                    Search by ZIP to find ball fittings near you
                  </p>
                  <p className="mt-1.5 text-[12px] text-gray-400 leading-relaxed">
                    Currently seeded with Golf Galaxy and select partners known to offer fittings.
                  </p>
                </div>
              )}

              {searched && results.length === 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                  <p className="text-[14px] text-gray-600">
                    No fittings found within {radius} miles of {zip}.
                  </p>
                  <p className="mt-1.5 text-[12px] text-gray-400">
                    Try a larger radius or another ZIP. Coverage is growing.
                  </p>
                </div>
              )}

              {results.map((loc) => (
                <LocationCard
                  key={loc.id}
                  location={loc}
                  distance={loc.distance}
                  isSelected={selectedId === loc.id}
                  onClick={() => setSelectedId(loc.id)}
                />
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 h-full min-h-[300px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <MapView
              locations={results.length > 0 ? results : locations}
              selectedId={selectedId}
              center={center}
              zoom={zoom}
              onSelect={setSelectedId}
            />
          </div>
        </div>

        {/* Footer */}
        <p className="mt-5 text-center text-[11px] text-gray-400">
          BallFit MVP · Locations known to offer golf ball fittings ·{" "}
          <span className="text-gray-500">Submit a location coming soon</span>
        </p>
      </main>
    </div>
  );
}
