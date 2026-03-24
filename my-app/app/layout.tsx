import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Xavortree",
  description: "test for company profile",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontPoppins.className} antialiased`}>{children}</body>
    </html>
  );
}
