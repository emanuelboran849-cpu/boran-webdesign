import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boran Webdesign | Premium Websites für lokale Unternehmen",
  description:
    "Boran Webdesign erstellt hochwertige Websites für lokale Unternehmen in Deutschland – klar, modern und anfrageorientiert.",
  metadataBase: new URL("https://www.boran-webdesign.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Boran Webdesign",
    description:
      "Premium Websites für lokale Unternehmen in Deutschland.",
    url: "https://www.boran-webdesign.de",
    siteName: "Boran Webdesign",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
