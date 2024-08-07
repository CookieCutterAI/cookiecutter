import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CookieCutter",
  description: "Curated recipes on the fly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}



