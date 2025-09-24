import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { ReactQueryProvider } from "@/providers/react-query-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotspot 24/7 - Nigerian Food Delivery",
  description:
    "Fresh Nigerian cuisine delivered fast in Lekki. 24/7 service with authentic flavors from the heart of Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <ReactQueryProvider>
        {children}
        </ReactQueryProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
