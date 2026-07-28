"use client";

import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
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
      className={`p-4 rounded-xl border transition-all cursor-pointer ${
        isSelected
          ? "border-emerald-500 bg-emerald-50 shadow-md"
          : "border-gray-200 bg-white hover:border-emerald-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
            {location.name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {location.type}
          </p>
        </div>
        {distance !== undefined && (
          <span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full whitespace-nowrap">
            {distance.toFixed(1)} mi
          </span>
        )}
      </div>

      <div className="mt-3 space-y-1.5 text-sm text-gray-600">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" />
          <span>
            {location.address}<br />
            {location.city}, {location.state} {location.zip}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-400 shrink-0" />
          <a
            href={`tel:${location.phone}`}
            className="text-emerald-700 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {location.phone}
          </a>
        </div>

        {location.email && (
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
            <a
              href={`mailto:${location.email}`}
              className="text-emerald-700 hover:underline truncate"
              onClick={(e) => e.stopPropagation()}
            >
              {location.email}
            </a>
          </div>
        )}

        {location.website && (
          <div className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-gray-400 shrink-0" />
            <a
              href={location.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:underline text-xs"
              onClick={(e) => e.stopPropagation()}
            >
              View store / book
            </a>
          </div>
        )}
      </div>

      {location.notes && (
        <p className="mt-2 text-xs text-gray-500 italic">{location.notes}</p>
      )}
    </div>
  );
}
