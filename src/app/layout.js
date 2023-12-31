"use client"

import "./globals.css";
import Navbar from "./components/Navbar";
import { Noto_Sans_Display } from "next/font/google";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import { AppWrapper } from "./context/AppWrapper";
import { Analytics } from '@vercel/analytics/react';

/* export const metadata = {
  title: "Gondang Ria",
  description: "Generated by create next app",
}; */

const NotoSans = Noto_Sans_Display({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const adminPath = "/2aefc34200a294a3cc7db81b43a81873/admin";

  
  return (
    <AppWrapper>
      <html lang="en">
        <body className={`${NotoSans.className} overflow-x-hidden`}>
          {pathName.includes(adminPath) ? <Sidebar /> : <Navbar />}
          {children}
          <Analytics />
        </body>
      </html>
    </AppWrapper>
  );
}
