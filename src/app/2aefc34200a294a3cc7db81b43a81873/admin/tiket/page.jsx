"use client";

import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

export default function Tiket() {
  const [image, setImage] = useState();
  const [imagePreviews, setImagePreviews] = useState();
  const [previewsFromServer, setPreviewsFromServer] = useState();
  const router = useRouter();

  // reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        if (state.fileList.length > 0) {
          state.fileList.shift();
        }
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  // destructuring state and dispatch, initializing fileList to empty array
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  data.fileList.map((item) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreviews(reader.result);
      setImage(item);
    };

    if (item) {
      reader.readAsDataURL(item);
    }
  });

  //hook useEffect
  useEffect(async () => {
    //check token
    if (!Cookies.get("token")) {
      //redirect page dashboard
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
    } else {
      const config = {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      };
      const url =
        "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda";

      await axios
        .get(url, config)
        .then(function (response) {
          setPreviewsFromServer(response.data.hero);
        })
        .catch(function (error) {
          window.alert(error.data.message);
        });
    }
  }, []);

  // multile image upload
  const tiketUpload = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("hero", image);

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    let uploadUrl =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/store";

    const url1 =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda";

    await axios
      .get(url1, config)
      .then(function (response) {
        // handle success
        uploadUrl = `http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/update`;

        axios
          .post(uploadUrl, formData, config)
          .then((result) => {
            window.alert(`${result.data.message}`);
          })
          .catch((err) => {
            window.alert(`${err.data.message}`);
          });
      })
      .catch(function (error) {
        // handle error
        uploadUrl =
          "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/store";

        axios
          .post(uploadUrl, formData, config)
          .then((result) => {
            window.alert(`${result.data.message}`);
          })
          .catch((err) => {
            window.alert(`${err.data.message}`);
          });
      });
  };

  const customClass = "w-full";

  return (
    <main id="admin-page" className="relative h-screen w-screen">
      <div className="absolute upload left-1/2 -translate-x-1/2 w-[95vw] md:w-[62vw] md:left-[35vw] md:translate-x-0 top-1/2 -translate-y-1/2 flex flex-col border-[3px] border-white rounded-[25px] py-[10px] px-[10px] gap-[15px] md:py-[20px] md:px-[20px] md:gap-[25px]">
        <form
          encType="multipart/form-data"
          onSubmit={tiketUpload}
          className="flex flex-col justify-between gap-[35px] lg:gap-[50px]"
        >
          <div className="relative grid gap-[15px] md:gap-[30px] w-full rounded-[15px]">
            <h3 className="text-lg md:text-3xl text-ble-950 font-normal">
              Harga Tiket Saat Ini
            </h3>
            <h2 className="text-xl md:text-4xl text-ble-950 font-bold">
              Rp. 15.000
            </h2>
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
                className="resize-none w-full border-y-2 border-r-2 border-white bg-transparent bg-gradient-to-r from-white p-[10px] rounded-r-[10px]"
                id="editHarga"
                name="editHarga"
              />
            </div>
            <button
              className={`rounded-[10px] self-end justify-self-end bg-ble-600 text-ble-50 text-base max-w-[140px] max-h-[50px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px]`}
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
