import type { Metadata } from "next";
import { Rosarivo } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const rosarivo = Rosarivo({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Newburyport Watercolors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rosarivo.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
