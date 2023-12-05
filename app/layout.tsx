import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/font";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
