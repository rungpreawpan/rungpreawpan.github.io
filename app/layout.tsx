import type { Metadata } from "next";
import "./globals.css";

const title = "Preawpan Siriphalangkanont — Mobile Developer";
const description =
  "Mobile Developer เชี่ยวชาญ Flutter — สร้างแอประดับองค์กร 14+ โปรเจกต์ ตั้งแต่ CRM, fleet management ไปจนถึงงานวิจัยตีพิมพ์ด้านแอปนำทางเพื่อผู้พิการทางสายตา";

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
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
