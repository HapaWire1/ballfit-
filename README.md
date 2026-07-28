# BallFit

Simple USA map + ZIP search for golf ball fitting locations.

## MVP Scope
- ZIP code search with radius
- Interactive map (Leaflet + OpenStreetMap)
- Result cards with address, phone, website
- Seeded with real Golf Galaxy locations + select PGA Tour Superstore / partners that offer ball fittings

## Run locally
```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy
Push to GitHub → connect to Vercel → instant `*.vercel.app` URL. No custom domain required.

## Notes
- Geocoding currently uses a small hardcoded ZIP center lookup for the seeded locations + major metros. Expand with Mapbox/Nominatim later.
- Data is intentionally limited for the first ship. Expand coverage after validation.
