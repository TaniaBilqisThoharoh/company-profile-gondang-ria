"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

export default function Tiket() {
  const [dataFromServer, setDataFromServer] = useState();
  const router = useRouter();

  const ambilData = async () => {
    //check token
    if (!Cookies.get("token")) {
      //redirect to login page
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
    } else {
      const config = {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      };
      /* const url =
        "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/harga_tiket"; */
      const url =
        "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/harga_tiket";

      await axios
        .get(url, config)
        .then(function (response) {
          setDataFromServer(response.data.data[0]);
        })
        .catch(function (error) {
          window.alert(error);
        });
    }
  };

  useEffect(() => {
    ambilData();
  }, []);

  const tiketUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const harga = e.target[0].value;

    formData.append("harga_tiket", harga);

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    /* let uploadUrl = `http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/harga_tiket/${dataFromServer.id}`; */
    let uploadUrl = `https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/harga_tiket/${dataFromServer.id}`;

    await axios
      .post(uploadUrl, formData, config)
      .then((result) => {
        window.alert(`${result.data.message}`);
        window.location.reload();
      })
      .catch((err) => {
        window.alert(`${err}`);
      });
  };

  return (
    <main id="admin-page" className="relative h-screen w-screen">
      <div className="absolute upload left-1/2 -translate-x-1/2 w-[95vw] md:w-[62vw] md:left-[35vw] md:translate-x-0 top-1/2 -translate-y-1/2 flex flex-col border-[3px] border-white rounded-[25px] py-[10px] px-[10px] gap-[15px] md:py-[20px] md:px-[20px] md:gap-[25px]">
        <form
          encType="multipart/form-data"
          onSubmit={tiketUpload}
          className="formTiket flex flex-col justify-between gap-[35px] lg:gap-[50px]"
        >
          <div className="relative grid gap-[15px] md:gap-[30px] w-full rounded-[15px]">
            <h3 className="text-lg md:text-3xl text-ble-950 font-normal">
              Harga Tiket Saat Ini
            </h3>
            {dataFromServer ? (
              <h2 className="text-xl md:text-4xl text-ble-950 font-bold">
                Rp. {dataFromServer.harga_tiket}
              </h2>
            ) : (
              <div className="grid place-items-start z-30 h-full">
                <div
                  role="status"
                  className="grid place-items-center w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw]"
                >
                  <svg
                    aria-hidden="true"
                    className="inline w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] text-gray-200 animate-spin dark:text-gray-600 fill-ble-400"
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
          </div>
          <div className="flex flex-col gap-[10px] lg:gap-[30px] justify-between w-full">
            <label for="editHarga" className="text-lg md:text-3xl text-ble-950">
              Ubah Harga Tiket
            </label>
            <div className="flex w-full">
              <h3 className="leading-10 md:leading-10 font-bold text-base md:text-xl text-ble-50 bg-ble-600 rounded-l-[10px] border-y-2 border-l-2 border-white px-2">
                Rp
              </h3>
              <input
                type="number"
                className="remove-arrow resize-none w-full border-y-2 border-r-2 border-white bg-transparent bg-gradient-to-r from-white p-[10px] rounded-r-[10px]"
                id="editHarga"
                name="editHarga"
                onKeyDown={(e) => {
                  if ([38, 40].indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                  }
                }}
                onWheel={(e) => e.target.blur()}
              />
            </div>
            <button
              className={`rounded-[10px] self-end justify-self-end bg-ble-600 hover:bg-ble-500 active:bg-ble-700 active:scale-95 text-ble-50 text-base max-w-[140px] max-h-[50px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px]`}
              type="submit"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
