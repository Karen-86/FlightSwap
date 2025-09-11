import type { Metadata } from "next";
import { Urbanist, Jost, Carter_One, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Provider from "../context";
import "../styles/index.css";
import {Footer} from '@/components/index'

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

const carterOne = Carter_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-carter-one",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flight-swap.vercel.app";

export const metadata: Metadata = {
  title: "Cheap Delta & American Airlines Tickets – Up to 40% Off | FlightSwap",
  description:
    "Buy Delta & American Airlines flights up to 40% cheaper using unused vouchers. Sell your soon-to-expire voucher for cash. Safe, fast, WhatsAppsupport",
  icons: {
    icon: [{ rel: "icon", url: "/assets/images/favicon.png" }],
    apple: "/assets/images/favicon.png",
  },
  openGraph: {
    title: "FlightSwap — Save up to 40% on Flights",
    description: "Real tickets. Real savings. Buy with vouchers or sell yours for cash.",
    url: `${siteUrl}`,
    siteName: "FlightSwap",
    images: [`${siteUrl}/assets/images/rest/hero-cover.jpg`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlightSwap — Save up to 40% on Flights",
    description: "Real tickets. Real savings. Buy with vouchers or sell yours for cash.",
    images: [`${siteUrl}/assets/images/rest/hero-cover.jpg`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${urbanist.variable} ${jost.variable} ${carterOne.variable} ${outfit.variable}  antialiased`}>
        <Provider>
          {children}
          <Footer/>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
