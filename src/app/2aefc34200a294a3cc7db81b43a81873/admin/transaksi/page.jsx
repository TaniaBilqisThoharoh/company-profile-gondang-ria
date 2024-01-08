"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";

export default function Transaksi() {
  const router = useRouter();

  /* Function cekcookies berfungsi untuk mengecek token ontentikasi admin di cookies apakah ada atau tidak ada */
  const cekCookies = async () => {
    if (!Cookies.get("token")) {
      //redirect to login page
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
    }
  };

  useEffect(() => {
    cekCookies();
  }, [])
    
  return (
    <main id="admin-page" className="flex bg-white h-screen w-screen flex-col items-center gap-[7rem]">
      <div className="z-20 w-[90vw] h-[60vh] flex place-items-center align-middle relative">
        
      </div>
    </main>
  );
}
