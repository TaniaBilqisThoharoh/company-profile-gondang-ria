"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Ticket from "../components/Ticket";
import Link from "next/link";
import { useAppContext } from "../context/AppWrapper";
import Spinner from "../components/Spinner";
import { baseApi } from "../context/ApiUrl";

export default function PesanTiket() {
  const {
    isLoading,
    showLoading,
    hideLoading,
    isFetching,
    showFetching,
    hideFetching,
  } = useAppContext();
  const [counter, setCounter] = useState(1);
  const [subtotal, setSubtotal] = useState();
  const [disabled, setDisabled] = useState(false);
  const [dataFromServer, setDataFromServer] = useState();

  /* Function ambildata berfungsi untuk mengambil data harga tiket */
  const ambilData = async () => {
    showFetching();
    const url = `${baseApi}/harga_tiket`;

    /* fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((tiketData) => {
        tiketData.data.map((item) => {
          setDataFromServer(parseInt(item.harga_tiket));
          setSubtotal(
            new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(counter * parseInt(item.harga_tiket))
          );
        });
      })
      .catch((error) => {
        window.alert(error);
        console.error("Error:", error);
      }); */

    await axios
      .get(url)
      .then(function (response) {
        setDataFromServer(parseInt(response.data.data[0].harga_tiket));
        setSubtotal(
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(counter * parseInt(response.data.data[0].harga_tiket))
        );
      })
      .catch(function (error) {
        window.alert(error);
      });
    hideFetching();
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

  useEffect(() => {
    setSubtotal(
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(counter * (dataFromServer && dataFromServer))
    );

    if (counter === 1 || counter <= 1) {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [counter]);

  const beliHandler = () => {
    sessionStorage.setItem("jumlah_tiket", counter && counter);
    sessionStorage.setItem("subtotal", counter * dataFromServer);
    showLoading();
  };

  return (
    <main
      id="pesan-tiket-page"
      className="flex bg-white min-h-[800px] w-screen flex-col items-center gap-[3rem]"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center inline-flex">
            <h1 className="text-ble-900 text-2xl md:text-5xl font-bold">
              Pesan Tiket
            </h1>
          </div>
          <Ticket harga={dataFromServer} />
          <div className="w-[80vw] max-w-[593px] py-5 mb-20 bg-white bg-opacity-[5%] rounded-[20px] border-[3px] border-ble-200 backdrop-blur-[21px] flex flex-col gap-[40px] justify-center items-center">
            <div className="custom-number-input h-10 w-[80%] items-center flex gap-[20px] mt-2">
              <label
                htmlFor="custom-input-number"
                className="w-full text-ble-900 text-base md:text-2xl font-bold"
              >
                Jumlah tiket
              </label>
              <div className="flex flex-row h-[58px] w-[50%] rounded-lg relative bg-transparent">
                <button
                  onClick={() => setCounter((prevState) => prevState - 1)}
                  disabled={disabled}
                  className="border-[2px] border-black bg-ble-100 text-black hover:text-gray-700 hover:bg-ble-300 h-full w-[56.5px] rounded-l-[15px] cursor-pointer outline-none"
                >
                  <span className="m-auto text-lg md:text-3xl font-normal">
                    −
                  </span>
                </button>
                <input
                  type="text"
                  className="border-y-[2px] border-black focus:outline-none text-center w-[40%] max-w-[78px] bg-white font-semibold text-lg md:text-3xl hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                  name="custom-input-number"
                  value={counter}
                ></input>
                <button
                  onClick={() => setCounter((prevState) => prevState + 1)}
                  className="bg-ble-100 border-[2px] border-black text-black hover:text-gray-700 hover:bg-ble-300 h-full w-[56.5px] rounded-r-[15px] cursor-pointer"
                >
                  <span className="m-auto text-lg md:text-3xl font-normal">
                    +
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-between text-ble-900 gap-6 md:gap-0 text-right w-[80%] items-center">
              <h3 className="text-ble-900 text-base md:text-2xl font-bold">
                Subtotal
              </h3>
              <div>
                <h3 className="text-ble-900 text-lg md:text-3xl font-bold">
                  {subtotal}
                </h3>
                <p className="text-xs md:text-base">
                  *Harga dapat berubah sewaktu-waktu
                </p>
              </div>
            </div>
            <Link
              href={`/pesan-tiket/data-diri`}
              onClick={beliHandler}
              className="grid place-items-center bg-ble-400 hover:bg-ble-500 active:bg-ble-600 text-ble-50 h-[63px] font-bold text-base md:text-2xl rounded-[10px] w-[90%]"
            >
              BELI SEKARANG
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
