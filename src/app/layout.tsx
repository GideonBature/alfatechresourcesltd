import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { asset, company } from "@/lib/site";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = { themeColor: "#0b1f4a" };

export const metadata: Metadata = {
  title: `${company.name} | Office, IT & Security Solutions`,
  description:
    "Alfatech Resources Ltd supplies office furniture, stationery, computers, printers, CCTV & security systems, power backup and electronics to government, corporate and institutional clients across Nigeria.",
  keywords: ["Alfatech Resources", "office supplies Nigeria", "CCTV installation Abuja", "computers and printers", "stationery supply", "inverters and solar", "general supply Nigeria"],
  icons: {
    icon: [
      { url: asset("/favicon.ico"), sizes: "any" },
      { url: asset("/favicon.png"), type: "image/png" },
    ],
    apple: asset("/apple-touch-icon.png"),
  },
  openGraph: {
    title: company.name,
    description: "One-stop supplier of office, IT and security solutions across Nigeria.",
    type: "website",
    images: [asset("/icon-512.png")],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
