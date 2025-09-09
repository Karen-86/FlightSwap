import type { Metadata } from "next";
import { Urbanist, Jost, Carter_One, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Provider from "../context";
import "../styles/index.css";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flightswap.vercel.app";

export const metadata: Metadata = {
  title: "Flight Swap",
  description:
    "Up to 40% Off | Delta & American Airlines | Exclusive discounts powered by unused airline vouchers. Real tickets. Fast support onWhatsApp.",
  icons: {
    icon: [{ rel: "icon", url: "/assets/images/favicon.png" }],
    apple: "/assets/images/favicon.png",
  },
  openGraph: {
    title: "Flight Swap",
    description:
      "Up to 40% Off | Delta & American Airlines | Exclusive discounts powered by unused airline vouchers. Real tickets. Fast support onWhatsApp.",
    url: `${siteUrl}`,
    siteName: "Your Website Name",
    images: [`${siteUrl}/assets/images/og-image.png`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flight Swap",
    description:
      "Up to 40% Off | Delta & American Airlines | Exclusive discounts powered by unused airline vouchers. Real tickets. Fast support onWhatsApp.",
    images: [`${siteUrl}/assets/images/og-image.png`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
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
          <Toaster/>
        </Provider>
      </body>
    </html>
  );
}
