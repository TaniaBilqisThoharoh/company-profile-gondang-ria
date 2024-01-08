import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "@/app/context/AppWrapper";

export default function FasilitasSec() {
  const { showLoading } = useAppContext();
  const [dataFromServer, setDataFromServer] = useState();

  const ambilData = async () => {
    const url = "https://newapi.gondangria.com/api/fasilitas";

    await axios
      .get(url)
      .then(function (response) {
        response.data.map((item) => item.id === 8 && setDataFromServer(item));
      })
      .catch(function (error) {
        window.alert(error.message);
      });
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <section className="relative w-screen flex justify-center align-center py-10 px-0 md:px-20">
      <div
        id="fasilitas_card"
        className="flex flex-col-reverse gap-[2vw] justify-center items-center rounded-[1.875rem] bg-ble-50 p-3 w-[80vw] sm:h-full h-[100vw] md:w-full md:p-0 md:bg-transparent md:gap-[10.5vw] md:flex-row"
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col justify-between items-center text-center md:text-left md:items-start md:w-[35vw] max-w-[540px] h-[50vw] sm:h-[38.5vw] max-h-[1000px] sm:max-h-[350px]">
            <h3 className="text-ble-600 font-bold md:font-extrabold text-xl md:text-3xl lg:text-5xl w-full max-w-[333px]">
              Fasilitas di Gondang Ria
            </h3>
            <p className="text-xs md:text-base text-ble-900 font-normal w-full">
              Di Gondang Ria, setiap fasilitas kami hadirkan untuk memaksimalkan
              keceriaan Anda. Dari seluncuran menegangkan hingga kolam renang
              yang menenangkan, kami janjikan kenangan yang akan selalu Anda
              ingat.
            </p>
            <Link
              onClick={() => showLoading()}
              href="/fasilitas"
              className="max-w-[151px] bg-ble-600 rounded-[10px] text-ble-50 font-semibold text-xs sm:text-base md:text-lg px-5 py-2 sm:px-8 hover:bg-ble-700 active:bg-ble-500 transition-all"
            >
              PELAJARI
            </Link>
          </div>
        </div>
        <div className="grid place-items-center w-[40vw] max-w-[35.0135rem]">
          {dataFromServer ? (
            <img
              className="object-cover w-[40vw] h-[40vw] max-h-[10rem] max-w-[10rem] md:max-h-[20rem] md:max-w-[20rem] lg:max-h-[28rem] lg:max-w-[28rem] xl:max-h-[35.0135rem] xl:max-w-[35.0135rem] rounded-full aspect-square"
              src={`https://newapi.gondangria.com/images/${dataFromServer.gambar}`}
              alt={`${dataFromServer.name} Photo`}
            />
          ) : (
            <div className="w-[40vw] h-[40vw] max-h-[10rem] max-w-[10rem] md:max-h-[20rem] md:max-w-[20rem] lg:max-h-[28rem] lg:max-w-[28rem] xl:max-h-[35.0135rem] xl:max-w-[35.0135rem] rounded-full aspect-square bg-ble-100 animate-pulse"></div>
          )}
        </div>
      </div>
      <div className="absolute mx-auto md:right-0 top-0 w-full md:w-[57vw] h-[46vw] overflow-hidden">
        <div
          id="main-bg-ble-400"
          className="absolute w-[50vw] h-[50vw] md:w-[90%] md:h-[90%] -right-0 md:-right-[14.7%] -top-[11.4%]"
        />
        <div
          id="bg-ble-200"
          className="absolute w-[40vw] h-[40vw] md:w-[75%] md:h-[75%] left-0 md:right-[33%] -top-[13.5%]"
        />
        <div
          id="bg-ble-50"
          className="absolute w-[80vw] md:w-[50vw] h-full md:h-[50%] max-w-[18.75rem] max-h-[50rem] md:max-h-[18.75rem] right-1/2 translate-x-1/2 top-[45%] md:top-[29%] hidden lg:block lg:translate-x-0 lg:right-[45.3%] lg:top-[42.1%]"
        />
      </div>
    </section>
  );
}
