"use client";

import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import axios from "axios";
import WahanaSec from "./components/beranda/WahanaSec";
import FasilitasSec from "./components/beranda/FasilitasSec";
import BottomSec from "./components/beranda/BottomSec";
import { useAppContext } from "./context/AppWrapper";
import Spinner from "./components/Spinner";

export default function Home() {
  const { isLoading, hideLoading } = useAppContext();
  const [previewsFromServer, setPreviewsFromServer] = useState();

  const ambilData = async () => {
    const url = "http://127.0.0.1:8000/api/beranda";

    await axios
      .get(url)
      .then(function (response) {
        setPreviewsFromServer(response.data.hero);
      })
      .catch(function (error) {
        window.alert(error);
      });
      hideLoading();
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <main className="bg-white flex w-100% min-h-screen flex-col items-center justify-between">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {previewsFromServer ? (
            <img
              className="max-w-screen h-[52vw]"
              src={`http://127.0.0.1:8000/images/${previewsFromServer}`}
              alt="Gondang Ria Photo"
            />
          ) : (
            <div className="min-h-[88.7vh] w-full grid place-items-center">
              <BarLoader color="#2D719F" height={5} width={500} />
            </div>
          )}

          <WahanaSec />
          <FasilitasSec />
          <BottomSec />
        </>
      )}
    </main>
  );
}
