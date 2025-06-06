import HeaderNavigation from "@/components/HeaderNavigation";
import FooterComponent from "@/components/FooterComponent";
import ContactInfo from "@/components/ConactInfo";

import "./globals.css";
import { ConsentCookieProvider } from "@/context/ConsentCookieContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Lemke Gebäudereinigung",
    template: "%s | Lemke Gebäudereinigung",
  },
  description: "Gebäudereinigungsservice von Lemke",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="text-white min-h-screen min-w-screen">
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black p-2 rounded"
        >
          Zum Inhalt springen
        </a>
        <ConsentCookieProvider>
          <ContactInfo />
          <HeaderNavigation />
          <div id="main-content">{children}</div>
          <FooterComponent />
        </ConsentCookieProvider>
      </body>
    </html>
  );
}
