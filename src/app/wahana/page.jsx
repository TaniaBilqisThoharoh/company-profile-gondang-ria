// "use client" menandakan bahwa file ini dijalankan di client side (browser pengguna)
"use client";

// Ini adalah daftar import
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/AppWrapper";
import Spinner from "../components/Spinner";

// Halaman Wahana
export default function Wahana() {
  // Memanggil context dari useAppContext() untuk mengendalikan state/kondisi loading
  const { isLoading, hideLoading } = useAppContext();

  // Ini mendeklarasikan useState hooks untuk menyimpan data dari server
  const [dataFromServer, setDataFromServer] = useState();

  // Fungsi untuk mengambil data
  /* Fungsi biasa dieksekusi secara berurutan, mengembalikan nilai secara langsung,
  sementara async function menggunakan kata kunci `async`, memungkinkan operasi-asinkron tanpa menunggu selesai,
  mengembalikan promise, dan menggunakan `await` untuk menangani operasi-asinkron secara bersih. */
  const ambilData = async () => {
    const url = "http://127.0.0.1:8000/api/wahana";

    await axios
      .get(url)
      .then(function (response) {
        response.data.map((item) => setDataFromServer(item));
      })
      .catch(function (error) {
        window.alert(error.message);
      });
    hideLoading();
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <main
      id="wahana-page"
      className="flex bg-white min-h-[800px] w-screen flex-col items-center gap-[3rem] md:gap-[7rem]"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {dataFromServer ? (
            <>
              <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center inline-flex">
                <h1 className="text-ble-900 text-2xl md:text-5xl font-bold">
                  {dataFromServer.nama}
                </h1>
              </div>
              <div className="z-20 w-[90vw] h-[80vh] md:h-[60vh] flex items-center relative">
                <img
                  id="img-detail"
                  src={`http://127.0.0.1:8000/images/${dataFromServer.gambar}`}
                  alt="Wahana Photo"
                  className="z-10 rounded-[25px] aspect-[17/9] w-[90%] md:w-[65%] absolute right-[50%] translate-x-1/2 top-0 md:left-0 md:translate-x-0 md:top-1/2 md:-translate-y-1/2"
                />

                <div
                  id="info-detail"
                  className="z-0 absolute w-[50%] md:w-full left-1/2 -translate-x-1/2 md:right-0 pr-0 md:pr-[3vw] flex justify-center items-end pb-[5vw] md:justify-end md:items-center md:pb-0 top-0 md:top-1/2 md:-translate-y-1/2 h-[80vw] md:h-[25vw]"
                >
                  <p className="text-ble-900 text-base md:text-xl font-normal w-[80%] md:w-[30%] h-fit">
                    {dataFromServer.deskripsi}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </>
      )}
    </main>
  );
}
