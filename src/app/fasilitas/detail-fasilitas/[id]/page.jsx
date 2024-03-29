"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useAppContext } from "@/app/context/AppWrapper";
import Spinner from "@/app/components/Spinner";
import { baseApi, baseUrl } from "@/app/context/ApiUrl";

export default function DetailFasilitas({ params }) {
  const { isLoading, hideLoading, isFetching, showFetching, hideFetching } = useAppContext();
  const [nameFromServer, setNameFromServer] = useState();
  const [previewsFromServer, setPreviewsFromServer] = useState();
  const [descFromServer, setDescFromServer] = useState();

  /* Function ambildata berfungsi untuk mengambil data id, nama, gambar dan deskripsi detail fasilitas */
  const ambilData = async () => {
    showFetching()
    const url = `${baseApi}/fasilitas`;

    /* fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(detailFasData => {
      detailFasData.filter((item) => {
        if (item.id == params.id) {
          setNameFromServer(item.nama);
          setPreviewsFromServer(item.gambar);
          setDescFromServer(item.deskripsi);
        }
      });
    })
    .catch(error => {
      window.alert(error);
      console.error('Error:', error);
    }); */

    await axios
      .get(url)
      .then(function (response) {
        response.data.filter((item) => {
          if (item.id == params.id) {
            setNameFromServer(item.nama);
            setPreviewsFromServer(item.gambar);
            setDescFromServer(item.deskripsi);
          }
        });
      })
      .catch(function (error) {
        window.alert(error);
      });
      hideFetching()
  };

  useEffect(() => {
    // Fungsi di bawah ini menunda waktu eksekusi percabangan if yang ada di dalamnya selama 1 detik/1000 milidetik
    isFetching === false &&
      previewsFromServer &&
      setTimeout(() => {
        // Fungsi ini digunakan untuk mengubah kondisi loading menjadi false dan menyembunyikan indikator loading
        hideLoading();
      }, "2000");
  }, [previewsFromServer, isLoading, isFetching]);

  //hook useEffect
  useEffect(() => {
    ambilData();
  }, []);

  return (
    <main className="flex bg-white min-h-[800px] w-screen flex-col items-center gap-[100px]">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {previewsFromServer ? (
            <>
              <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center inline-flex">
                <h1 className="text-ble-900 text-2xl md:text-5xl font-bold">
                  {nameFromServer}
                </h1>
              </div>
              <div className="z-20 w-[90vw] h-[80vh] md:h-[60vh] flex items-center relative">
                <img
                  id="img-detail"
                  src={`${baseUrl}/images/${previewsFromServer}`}
                  alt=""
                  className="z-10 rounded-[25px] aspect-[17/9] w-[90%] md:w-[65%] absolute right-[50%] translate-x-1/2 top-0 md:left-0 md:translate-x-0 md:top-1/2 md:-translate-y-1/2"
                />
                <div
                /* Ubah deskripsi fasilitas */
                  id="info-detail"
                  className="z-0 absolute w-[80vw] sm:w-[50vw] md:w-[80vw] left-1/2 -translate-x-1/2 md:right-0 pr-0 md:pr-[1vw] flex justify-center items-end pb-[5vw] md:justify-end md:items-center md:pb-0 top-10 sm:top-14 md:top-1/2 md:-translate-y-1/2 h-[75vw] sm:h-[60vw] md:h-[25vw]"
                >
                  <p className="text-ble-900 text-base lg:text-xl font-normal w-[80%] md:w-[30%] h-fit">
                    {descFromServer}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="grid place-items-center w-full h-screen">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-ble-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
}
