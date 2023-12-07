"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";

export default function WahanaSec() {
  const [previewsFromServer, setPreviewsFromServer] = useState();

  const ambilData = async () => {
    const url = "http://127.0.0.1:8000/api/wahana";

    await axios
      .get(url)
      .then(function (response) {
        response.data.map((item) => setPreviewsFromServer(item.gambar));
      })
      .catch(function (error) {
        window.alert(error);
      });
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <section className="z-20 bg-ble-100 w-screen flex justify-center align-center py-32 px-36">
      <div id="wahana_card_bg">
        <div
          id="wahana_card"
          className="flex flex-col md:flex-row gap-[5vw] lg:gap-[12.7vw] justify-end pb-4 md:pb-0 md:justify-center items-center w-[86vw] h-[40vw] md:h-[32.5vw] rounded-[20px] max-w-[1230px] max-h-[500px] md:max-h-[462px]"
        >
          <div className="absolute md:static -top-[15vw] grid place-items-center w-[25vw] max-w-[21.875rem]">
            {previewsFromServer ? (
              <img
                className="object-cover w-[25vw] h-[25vw] max-w-[21.875rem] max-h-[21.875rem] rounded-full aspect-square"
                src={`http://127.0.0.1:8000/images/${previewsFromServer}`}
                alt="Wahana Photo"
              />
            ) : (
              <div className="w-[25vw] h-[25vw] max-w-[21.875rem] max-h-[21.875rem] rounded-full aspect-square bg-ble-100 animate-pulse"></div>
            )}
          </div>
          <div className="grid place-items-center">
            <div className="flex flex-col justify-between md:justify-around w-full md:items-start items-center md:text-left md:w-[45vw] lg:w-[37vw] h-[27vw] md:h-[30vw] max-w-[50rem] md:max-w-[40rem] lg:max-w-[25rem] max-h-[400px] md:max-h-[333px]">
              <h3 className="text-ble-600 font-bold md:font-extrabold text-xl md:text-3xl lg:text-5xl">
                Seru Tanpa Batas di Gondang Ria!
              </h3>
              <p className="text-xs md:text-base font-normal w-[80vw] md:w-[43vw] lg:w-[37vw] max-w-[40rem] md:max-w-[30rem] lg:max-w-[24rem]">
                Datang ke Gondang Ria dan nikmati beragam wahana air yang
                menegangkan dan menyegarkan. Dari seluncuran cepat hingga kolam
                renang yang menenangkan, kesenangan ada di setiap sudut!
              </p>
              <Link
                href="/wahana"
                className="max-w-[300px] border-[2px] md:border-[3.5px] border-ble-600 rounded-[10px] text-ble-600 font-semibold text-sm md:text-lg py-1 px-4 md:py-2 md:px-8 hover:bg-ble-600 hover:text-ble-50 active:bg-ble-500 active:border-ble-500 transition-all"
              >
                EXPLORE GONDANG RIA!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
