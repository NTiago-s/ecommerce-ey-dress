import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/page-sections/header";
import Footer from "@/page-sections/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Ey-dress",
  description: "Ecommerce Ey-dress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
