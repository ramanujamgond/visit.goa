import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./home.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "@/redux/provider";
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
      <body className={`${inter.className} flex flex-col`}>
        <div className="overflow-x-hidden">
          <div
            className={`${styles.main_wrapper} bg-[linear-gradient(180deg,_#FFF_0%,_#F5F5F5_40%,_#E5E5E5_100%)]`}
            // className={`${styles.main_wrapper}`}
          >
            <ReduxProvider>
              <Navbar />
              {children}
              <Footer />
            </ReduxProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
