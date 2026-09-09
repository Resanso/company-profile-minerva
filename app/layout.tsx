import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { generateMetadata, getOrganizationSchema } from "@/lib/seo";

/**
 * Barlow carries the display voice of the system: 300 for headlines,
 * 500 for subheads, 600 for eyebrows and actions.
 */
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = generateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en" className={barlow.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
