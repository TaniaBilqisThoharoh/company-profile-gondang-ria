"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import Cookies from "js-cookie";
import axios from "axios";
import FasilitasCard from "../components/FasilitasCard";
import AddFasCard from "../components/AddFasCard";

export default function Fasilitas() {
  const [dataFromServer, setDataFromServer] = useState();

  const router = useRouter();

  const ambilData = async () => {
    //check token
    if (!Cookies.get("token")) {
      //redirect page dashboard
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
    } else {
      const config = {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      };
      /* const url =
        "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas"; */
      const url =
        "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas";

      await axios
        .get(url, config)
        .then(function (response) {
          setDataFromServer(response.data);
        })
        .catch(function (error) {
          window.alert(error);
        });
    }
  };

  //hook useEffect
  useEffect(() => {
    ambilData();
  }, []);

  return (
    <main id="admin-page" className="relative h-screen w-screen">
      <ul
        className={`absolute upload grid max-h-[75dvh] overflow-y-auto left-1/2 -translate-x-1/2 w-[90vw] md:w-[62vw] md:left-[35vw] md:translate-x-0 top-1/2 -translate-y-1/2 ${
          dataFromServer
            ? "border-[3px] border-white xl:grid-cols-3 lg:grid-cols-2"
            : "bg-transparent border-0 place-items-center grid-cols-1"
        } rounded-[25px] py-[10px] px-[10px] md:py-[20px] md:px-[20px] gap-[25px]`}
      >
        {dataFromServer
          ? dataFromServer.map((item) => {
              if (item.id === 8) {
                return (
                  <>
                    <li key={item.id}>
                      <FasilitasCard
                        id={item.id}
                        name={item.nama}
                        image={item.gambar}
                        description={item.deskripsi}
                      />
                    </li>
                    <li>
                      <AddFasCard />
                    </li>
                  </>
                );
              }
            })
          : null}
        {dataFromServer ? (
          [...dataFromServer].reverse().map((item) => {
            if (item.id != 8) {
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
          <li className="w-full flex justify-center">
            <BarLoader color="#2D719F" height={5} width={500} />
          </li>
        )}
      </ul>
    </main>
  );
}
