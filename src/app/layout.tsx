"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import { TipService } from "@/services/tipService";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NumberUtils } from "@/utils";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const getTips = async () => {
      const result = await TipService.getTips();
      setInterval(() => {
        if (!result) return;
        toast(
          result[Math.floor(NumberUtils.getRandomNumber(0, result.length - 1))]
            .detail
        );
      }, 1000 * 60 * 2);
    };
    getTips();
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar
            closeOnClick
            pauseOnHover
            theme="dark"
            limit={1}
          />
        </Providers>
      </body>
    </html>
  );
}
