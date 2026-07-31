"use client";

import { Phone, MapPin, ExternalLink } from "lucide-react";
import type { FittingLocation } from "@/data/locations";

interface Props {
  location: FittingLocation;
  distance?: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function LocationCard({ location, distance, isSelected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg border transition-all cursor-pointer ${
        isSelected
          ? "border-teal-600 bg-teal-50/60 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-[15px] text-gray-900 leading-snug">
            {location.name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 font-medium tracking-wide uppercase">
            {location.type}
          </p>
        </div>
        {distance !== undefined && (
          <span className="text-xs font-semibold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded whitespace-nowrap">
            {distance.toFixed(1)} mi
          </span>
        )}
      </div>

      <div className="mt-3 space-y-2 text-[13px] text-gray-600">
        <div className="flex items-start gap-2">
          <MapPin className="w-3.5 h-3.5 mt-0.5 text-gray-400 shrink-0" />
          <span className="leading-relaxed">
            {location.address}<br />
            {location.city}, {location.state} {location.zip}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <a
            href={`tel:${location.phone}`}
            className="text-teal-700 font-medium hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {location.phone}
          </a>
        </div>

        {location.website && (
          <div className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <a
              href={location.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:underline text-xs font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              Store details
            </a>
          </div>
        )}
      </div>

      {location.notes && (
        <p className="mt-2.5 text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-2">
          {location.notes}
        </p>
      )}
    </div>
  );
}
