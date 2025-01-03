import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Script from "next/script";

import "slick-carousel/slick/slick.css";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import AuthProvider from "@/Utils/AuthProvider/AuthProvider";
import Navbar from "@/app/UiComponents/Navbar/Navbar";
import Footer from "@/app/UiComponents/Footer/Footer";

import { Toaster } from "react-hot-toast";
// import ReduxProv from "@/app/components/ReduxProv";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Falcon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ECPV4FREM6"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ECPV4FREM6');
  `}
        </Script>
      </head>
      <body className="">
        <AuthProvider>
          {/* <ReduxProv> */}
          <Navbar />
          {children}
          <Toaster position="bottom-right" />
          <Footer />
          {/* </ReduxProv> */}
        </AuthProvider>
      </body>
    </html>
  );
}
