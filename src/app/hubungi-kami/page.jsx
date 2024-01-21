"use client";

import Link from "next/link";
import InfoBox from "../components/InfoBox";
import { useAppContext } from "../context/AppWrapper";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

const data = [
  {
    title: "Lokasi",
    desc: "Jalan Raya Mandiraja Banyumas, Kaliwetan, Danaraja, Kecamatan Purwanegara, Kabupaten Banjarnegara, Jawa Tengah",
  },
  {
    title: "Email",
    desc: <Link href="mailto:gondangria23@gmail.com">gondangria23@gmail.com</Link>,
  },
  { title: "Telepon", desc: "+6281229965995" },
  {
    title: "Sosial Media",
    desc: [
      <Link
        key={1}
        href="https://www.facebook.com/gondang.park?mibextid=LQQJ4d"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="30" fill="#337FFF" />
          <path
            d="M37.3401 31.9531L38.195 26.5215H32.929V22.991C32.929 21.5058 33.6642 20.0545 36.0151 20.0545H38.4429V15.4291C37.0291 15.2037 35.6004 15.0817 34.1685 15.0642C29.8343 15.0642 27.0046 17.6697 27.0046 22.3799V26.5215H22.2002V31.9531H27.0046V45.0909H32.929V31.9531H37.3401Z"
            fill="white"
          />
        </svg>
      </Link>,
      <Link
        key={2}
        href="https://instagram.com/gondangriawaterpark?igshid=NzZlODBkYWE4Ng=="
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="60"
            height="60"
            rx="30"
            fill="url(#paint0_linear_221_1502)"
          />
          <path
            d="M25.0068 30.0769C25.0068 27.3132 27.246 25.0721 30.009 25.0721C32.772 25.0721 35.0124 27.3132 35.0124 30.0769C35.0124 32.8407 32.772 35.0818 30.009 35.0818C27.246 35.0818 25.0068 32.8407 25.0068 30.0769ZM22.3021 30.0769C22.3021 34.3347 25.7524 37.7861 30.009 37.7861C34.2656 37.7861 37.7159 34.3347 37.7159 30.0769C37.7159 25.8192 34.2656 22.3678 30.009 22.3678C25.7524 22.3678 22.3021 25.8192 22.3021 30.0769ZM36.22 22.0621C36.2198 22.4184 36.3253 22.7668 36.5231 23.0631C36.7209 23.3595 37.0021 23.5905 37.3311 23.727C37.6602 23.8635 38.0223 23.8993 38.3717 23.8299C38.7211 23.7606 39.0421 23.5891 39.2941 23.3372C39.5461 23.0854 39.7177 22.7644 39.7874 22.415C39.857 22.0655 39.8215 21.7033 39.6853 21.374C39.5491 21.0448 39.3184 20.7633 39.0223 20.5652C38.7262 20.3672 38.378 20.2614 38.0218 20.2612H38.021C37.5436 20.2614 37.0857 20.4512 36.748 20.7889C36.4103 21.1265 36.2204 21.5845 36.22 22.0621ZM23.9454 42.2974C22.482 42.2308 21.6867 41.9869 21.1581 41.781C20.4574 41.5081 19.9574 41.1831 19.4317 40.658C18.9061 40.1329 18.5807 39.6332 18.3091 38.9323C18.103 38.4038 17.8593 37.608 17.7928 36.1442C17.72 34.5617 17.7055 34.0863 17.7055 30.0771C17.7055 26.0678 17.7212 25.5937 17.7928 24.0099C17.8594 22.5461 18.1049 21.7519 18.3091 21.2218C18.5819 20.5209 18.9068 20.0208 19.4317 19.4949C19.9567 18.9691 20.4562 18.6436 21.1581 18.3719C21.6864 18.1658 22.482 17.922 23.9454 17.8555C25.5274 17.7827 26.0027 17.7682 30.009 17.7682C34.0153 17.7682 34.491 17.7839 36.0744 17.8555C37.5378 17.9221 38.3318 18.1678 38.8617 18.3719C39.5624 18.6436 40.0624 18.9698 40.5881 19.4949C41.1137 20.02 41.4379 20.5209 41.7107 21.2218C41.9168 21.7503 42.1605 22.5461 42.227 24.0099C42.2998 25.5937 42.3143 26.0678 42.3143 30.0771C42.3143 34.0863 42.2998 34.5604 42.227 36.1442C42.1604 37.608 41.9155 38.4036 41.7107 38.9323C41.4379 39.6332 41.113 40.1333 40.5881 40.658C40.0631 41.1826 39.5624 41.5081 38.8617 41.781C38.3334 41.9871 37.5378 42.2309 36.0744 42.2974C34.4924 42.3702 34.0171 42.3847 30.009 42.3847C26.0009 42.3847 25.527 42.3702 23.9454 42.2974ZM23.8211 15.1545C22.2233 15.2273 21.1315 15.4807 20.178 15.8519C19.1905 16.2351 18.3546 16.7493 17.5192 17.5836C16.6839 18.4178 16.1712 19.2553 15.788 20.2431C15.417 21.1974 15.1637 22.289 15.0909 23.8872C15.0169 25.488 15 25.9998 15 30.0769C15 34.1541 15.0169 34.6658 15.0909 36.2666C15.1637 37.865 15.417 38.9564 15.788 39.9108C16.1712 40.8979 16.684 41.7364 17.5192 42.5703C18.3545 43.4042 19.1905 43.9177 20.178 44.302C21.1333 44.6731 22.2233 44.9266 23.8211 44.9993C25.4222 45.0721 25.933 45.0903 30.009 45.0903C34.085 45.0903 34.5966 45.0733 36.1969 44.9993C37.7948 44.9266 38.8859 44.6731 39.84 44.302C40.8269 43.9177 41.6634 43.4046 42.4988 42.5703C43.3341 41.736 43.8457 40.8979 44.23 39.9108C44.601 38.9564 44.8555 37.8649 44.9271 36.2666C44.9999 34.6646 45.0168 34.1541 45.0168 30.0769C45.0168 25.9998 44.9999 25.488 44.9271 23.8872C44.8543 22.2889 44.601 21.1968 44.23 20.2431C43.8457 19.2559 43.3328 18.4191 42.4988 17.5836C41.6647 16.748 40.8269 16.2351 39.8412 15.8519C38.8859 15.4807 37.7947 15.2261 36.1981 15.1545C34.5978 15.0817 34.0862 15.0636 30.0102 15.0636C25.9342 15.0636 25.4222 15.0805 23.8211 15.1545Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_221_1502"
              x1="58.8468"
              y1="60"
              x2="-1.1532"
              y2="-1.61503e-06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FBE18A" />
              <stop offset="0.21" stop-color="#FCBB45" />
              <stop offset="0.38" stop-color="#F75274" />
              <stop offset="0.52" stop-color="#D53692" />
              <stop offset="0.74" stop-color="#8F39CE" />
              <stop offset="1" stop-color="#5B4FE9" />
            </linearGradient>
          </defs>
        </svg>
      </Link>,
    ],
  },
];

/* Parent function untuk menampilkan halaman hubungi kami */
export default function HubungiKami() {
  const { isLoading, hideLoading } = useAppContext();

  useEffect(() => {
    if (data != undefined) {
      setTimeout(() => {
        hideLoading();
      }, "2000");
    }
  }, [data, isLoading]);

  return (
    <main className="flex flex-col bg-ble-50 h-full w-full">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center inline-flex">
            <h1 className="text-ble-900 text-2xl md:text-5xl font-bold">
              Hubungi Kami
            </h1>
          </div>
          <div className="w-screen h-screen grid place-items-center mt-16 md:mt-0">
            <div className="rounded-[25px] bg-gradient-to-br from-ble-100 from-30% to-ble-600">
              <div className="grid place-items-center md:relative m-[3px] py-4 rounded-[22px] bg-ble-50 bg-opacity-100 w-[80vw] md:max-w-[800px] md:w-[60vw] md:max-h-[480px] h-[100vh]">
                {data.map((item, index) => {
                  return (
                    <InfoBox key={index} title={item.title} desc={item.desc} />
                  );
                })}
              </div>
            </div>
          </div>
          {/* GOOGLE MAPS API */}
          <div className="relative w-screen grid place-items-center mt-36 md:mt-14">
            <div className="gmaps absolute bottom-10 z-10 overflow-hidden rounded-[15px]">
              <iframe
                className="w-[85vw] md:w-[75vw] h-[75vh]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1925596066035!2d109.53930781088415!3d-7.443935773320485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6553d3732f68f5%3A0x2dfc876a84b0d3e5!2sGondang%20Ria%20Water%20Park!5e0!3m2!1sid!2sid!4v1699272269313!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="z-0 w-[95vw] md:w-[90vw] h-full">
              <div className="w-full rounded-t-[25px] bg-ble-700 flex gap-[10px] px-[50px] py-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#ED6A5D" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#F5C04F" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#61C654" />
                </svg>
              </div>
              <div className="w-full p-[3px] pb-0 bg-gradient-to-br from-ble-200 from-30% to-ble-700">
                <div className="bg-ble-50 h-[400px]"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
