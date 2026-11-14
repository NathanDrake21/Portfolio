import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `${profile.shortName} | ${profile.role}`,
  description:
    "Frontend developer in Doha, Qatar, building real-time dashboards, admin platforms and CMS websites with React and Next.js.",
  openGraph: {
    title: `${profile.shortName} | ${profile.role}`,
    description:
      "Frontend developer in Doha, Qatar, building real-time dashboards, admin platforms and CMS websites with React and Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
