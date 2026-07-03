import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boran-webdesign.de"),

  title: {
    default: "Boran Webdesign | Premium Websites für lokale Unternehmen",
    template: "%s | Boran Webdesign",
  },

  description:
    "Boran Webdesign erstellt moderne Premium-Websites für lokale Unternehmen in Deutschland. Klar, hochwertig und anfrageorientiert.",

  keywords: [
    "Webdesign Deutschland",
    "Webdesigner Deutschland",
    "Premium Websites",
    "Website für lokale Unternehmen",
    "Webdesign für lokale Unternehmen",
    "moderne Websites",
    "Unternehmenswebsite",
    "Website erstellen lassen",
    "Boran Webdesign",
  ],

  authors: [{ name: "Boran Webdesign", url: "https://www.boran-webdesign.de" }],
  creator: "Boran Webdesign",
  publisher: "Boran Webdesign",
  applicationName: "Boran Webdesign",
  category: "Webdesign",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
  title: "Boran Webdesign | Premium Websites für lokale Unternehmen",
  description:
    "Moderne Premium-Websites für lokale Unternehmen in Deutschland.",
  url: "https://www.boran-webdesign.de",
  siteName: "Boran Webdesign",
  locale: "de_DE",
  type: "website",
  images: [
    {
      url: "/boran-hero-desktop.png",
      width: 1200,
      height: 630,
      alt: "Boran Webdesign Premium Websites",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Boran Webdesign | Premium Websites für lokale Unternehmen",
  description:
    "Moderne Premium-Websites für lokale Unternehmen in Deutschland.",
  images: ["/boran-hero-desktop.png"],
},

icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
},

manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

