import type { Metadata } from "next";
import "./globals.css";

const title = "Preawpan Siriphalangkanont — Mobile Developer";
const description =
  "Mobile Developer specializing in Flutter, with 14+ enterprise apps shipped across CRM, fleet management, logistics, workforce tools, and published accessibility research.";

export const metadata: Metadata = {
  metadataBase: new URL("https://preawpan.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Preawpan Siriphalangkanont",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
