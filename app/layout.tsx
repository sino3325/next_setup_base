import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/font";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "",
  description: "",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
