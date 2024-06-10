import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./home.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BharatStay | Discover the wonders of BharatStay with us",
  description:
    "Plan your dream vacation with our AI-enabled travel companion and experience the best of India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.main_wrapper}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
