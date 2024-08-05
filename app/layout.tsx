import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import AuthProvider from "@/Utils/AuthProvider/AuthProvider";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ReduxProv from "@/app/components/ReduxProv";
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bravo",
  description: "منصة تعليمية للاطفال في الكويت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RBHX09XHXK"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RBHX09XHXK');
 `}
        </Script>
      </head>
      <body className="">
        <AuthProvider>
          <ReduxProv>
            <Navbar />
            {children}
            <Toaster position="bottom-right" />
            <Footer />
          </ReduxProv>
        </AuthProvider>
      </body>
    </html>
  );
}
