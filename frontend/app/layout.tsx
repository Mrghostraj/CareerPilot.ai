import type { Metadata } from "next";
import "./globals.css";
import "./sections.css";

export const metadata: Metadata = {
  title: "CareerPilot AI | Your placement workspace",
  description: "A focused workspace for role-specific placement preparation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
