import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./common/header";
import Footer from "./common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mir Neurology",
  description: "Mir Neurology Spine Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
