import type { Metadata } from "next";
import { SUSE } from "next/font/google";
import "./globals.css";
import "./icons.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

const suseSans = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innovante's Digital Marketplace",
  description: "Find local digital products at the best prices",
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suseSans.variable}  antialiased`}>
        <Providers>
          <Header />
          <Toaster position="top-right" />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
