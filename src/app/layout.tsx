import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BallFit — Find Golf Ball Fittings Near You",
  description: "ZIP code search + map for USA golf ball fitting locations. Golf Galaxy, PGA Tour Superstore, Titleist partners and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="bg-[#f8f9fa] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
