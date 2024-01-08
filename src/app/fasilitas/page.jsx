"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import FasilitasCard from "../components/FasilitasCard";
import Spinner from "../components/Spinner";
import { useAppContext } from "../context/AppWrapper";

export default function Fasilitas() {
  const { isLoading, hideLoading, isFetching, showFetching, hideFetching } = useAppContext();
  const [dataFromServer, setDataFromServer] = useState();

  /* Function ambildata berfungsi untuk mengambil data id, nama, gambar, deskripsi fasilitas */
  const ambilData = async () => {
    showFetching()
    const url = "https://newapi.gondangria.com/api/fasilitas";

    fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(fasilitasData => {
      setDataFromServer(fasilitasData);
    })
    .catch(error => {
      window.alert(error);
      console.error('Error:', error);
    });

    /* await axios
      .get(url)
      .then(function (response) {
        setDataFromServer(response.data);
      })
      .catch(function (error) {
        window.alert(error.message);
      }); */
      hideFetching()
  };

  useEffect(() => {
    // Fungsi di bawah ini menunda waktu eksekusi percabangan if yang ada di dalamnya selama 1 detik/1000 milidetik
    isFetching === false &&
      dataFromServer &&
      setTimeout(() => {
        // Fungsi ini digunakan untuk mengubah kondisi loading menjadi false dan menyembunyikan indikator loading
        hideLoading();
      }, "2000");
  }, [dataFromServer, isLoading, isFetching]);

  useEffect(() => {
    ambilData();
  }, []);
  
  return (
    <main className="flex bg-white min-h-[800px] w-screen h-full pb-[9vw] flex-col items-center gap-[50px] md:gap-[100px]">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center inline-flex">
            <h1 className="text-ble-900 text-2xl md:text-5xl font-bold">
              Fasilitas
            </h1>
          </div>
          <ul
            className={`${
              dataFromServer && "grid"
            } w-full md:w-[90%] place-items-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3`}
          >
            {dataFromServer ? (
              dataFromServer.map((item) => {
                if (item.id === 8) {
                  return null;
                } else {
                  return (
                    <li key={item.id}>
                      <FasilitasCard
                        id={item.id}
                        name={item.nama}
                        image={item.gambar}
                        description={item.deskripsi}
                      />
                    </li>
                  );
                }
              })
            ) : (
              <Spinner />
            )}
          </ul>
        </>
      )}
    </main>
  );
}
