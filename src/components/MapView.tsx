"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import type { FittingLocation } from "@/data/locations";

// Fix default marker icons in Next.js / webpack
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
  locations: FittingLocation[];
  selectedId?: string | null;
  center?: [number, number];
  zoom?: number;
  onSelect?: (id: string) => void;
}

export default function MapView({ locations, selectedId, center = [39.8283, -98.5795], zoom = 4, onSelect }: Props) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center,
      zoom,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update markers when locations or selection change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], {
        title: loc.name,
      });

      const popupContent = `
        <div style="padding: 12px; font-family: system-ui, sans-serif;">
          <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px;">${loc.name}</div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">${loc.type}</div>
          <div style="font-size: 13px; color: #374151;">
            ${loc.address}<br/>
            ${loc.city}, ${loc.state} ${loc.zip}
          </div>
          <div style="margin-top: 8px; font-size: 13px;">
            <a href="tel:${loc.phone}" style="color: #059669; text-decoration: none;">${loc.phone}</a>
          </div>
          ${loc.website ? `<div style="margin-top: 4px;"><a href="${loc.website}" target="_blank" style="color: #059669; font-size: 12px;">View store</a></div>` : ""}
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on("click", () => {
        if (onSelect) onSelect(loc.id);
      });

      if (selectedId === loc.id) {
        marker.openPopup();
      }

      marker.addTo(map);
      markersRef.current.push(marker);
    });

    // Fit bounds if we have locations
    if (locations.length > 0) {
      const group = L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds().pad(0.2), { maxZoom: 12 });
    } else if (center) {
      map.setView(center, zoom);
    }
  }, [locations, selectedId, onSelect]);

  // Fly to new center when search changes
  useEffect(() => {
    if (mapRef.current && center) {
      mapRef.current.setView(center, zoom || 10, { animate: true });
    }
  }, [center, zoom]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] rounded-xl overflow-hidden border border-gray-200 shadow-sm"
    />
  );
}
