import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/font";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <ThemeRegistry>
        <body className={inter.className}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
