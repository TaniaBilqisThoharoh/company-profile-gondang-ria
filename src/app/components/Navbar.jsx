"use client";

import logo from "../../../public/logo/logo.png";
import { useState } from "react";
import { useParams } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const params = useParams()
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="z-50 w-full bg-white sticky top-0 shadow">
      <div className="justify-between py-0 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3">
            <Image
              src={logo}
              width={60}
              height={60}
              alt="Picture of the author"
              className="p-0"
            />
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-grn-950"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-grn-950"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
              <li className="text-ble-700 font-semibold active:underline active:underline-offset-2">
                {/* LINK BERANDA */}
                <Link
                  href="/"
                  className="flex justify-center items-center hover:text-ble-500 active:underline active:underline-offset-2"
                >
                  Beranda
                </Link>
              </li>
              <li className="text-ble-700 font-semibold">
                {/* LINK WAHANA */}
                <Link
                  href="/wahana"
                  className="flex justify-center items-center hover:text-ble-500 active:underline active:underline-offset-2"
                >
                  Wahana
                </Link>
              </li>
              <li className="text-ble-700 font-semibold">
                {/* LINK FASILITAS */}
                <Link
                  href="/fasilitas"
                  className="flex justify-center items-center hover:text-ble-500 active:underline active:underline-offset-2"
                >
                  Fasilitas
                </Link>
              </li>
              <li className="text-ble-700 font-semibold">
                {/* LINK PESAN TIKET */}
                <Link
                  href="/pesan-tiket"
                  className="flex justify-center items-center hover:text-ble-500 active:underline active:underline-offset-2"
                >
                  Pesan Tiket
                </Link>
              </li>
              <li className="text-ble-700 font-semibold">
                {/* LINK HUBUNGI KAMI */}
                <Link
                  href="/hubungi-kami"
                  className="flex justify-center items-center hover:text-ble-500 active:underline active:underline-offset-2"
                >
                  Hubungi Kami
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
