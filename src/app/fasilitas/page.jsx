"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import FasilitasCard from "../components/FasilitasCard";
import Spinner from "../components/Spinner";

export default function Fasilitas() {
  const [dataFromServer, setDataFromServer] = useState();

  const ambilData = async () => {
    const url = "http://127.0.0.1:8000/api/fasilitas";

    await axios
      .get(url)
      .then(function (response) {
        setDataFromServer(response.data);
      })
      .catch(function (error) {
        window.alert(error.message);
      });
  };

  useEffect(() => {
    ambilData();
  }, []);
  return (
    <main className="flex bg-white min-h-[800px] w-screen h-full pb-[9vw] flex-col items-center gap-[50px] md:gap-[100px]">
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
    </main>
  );
}
