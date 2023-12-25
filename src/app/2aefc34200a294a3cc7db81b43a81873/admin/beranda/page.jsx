"use client";

import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import Cookies from "js-cookie";
import axios from "axios";
import DropZone from "../components/DropZone";

export default function Beranda() {
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
        "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda"; */
      const url =
        "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda";

      await axios
        .get(url, config)
        .then(function (response) {
          setPreviewsFromServer(response.data.hero);
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

  // multile image upload
  const imageUpload = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("hero", image);

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    let uploadUrl =
      "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/store";
    /* let uploadUrl =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/store"; */

    const url1 =
      "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda";
    /* const url1 =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda"; */

    await axios
      .get(url1, config)
      .then(function (response) {
        // handle success
        uploadUrl = `https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/update`;
        /* uploadUrl = `http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/update`; */

        axios
          .post(uploadUrl, formData, config)
          .then((result) => {
            window.alert(`${result.data.message}`);
          })
          .catch((err) => {
            window.alert(`${err}`);
          });
      })
      .catch(function (error) {
        // handle error
        /* uploadUrl =
          "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/store"; */
        uploadUrl =
          "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/store";

        axios
          .post(uploadUrl, formData, config)
          .then((result) => {
            window.alert(`${result.data.message}`);
          })
          .catch((err) => {
            window.alert(`${err}`);
          });
      });
  };

  const customClass = "w-full h-[50vh]";

  return (
    <main id="admin-page" className="relative h-screen w-screen">
      <div
        className={`${
          previewsFromServer
            ? "border-[3px] border-white"
            : "bg-transparent border-0"
        } absolute upload left-1/2 -translate-x-1/2 w-[95vw] md:w-[62vw] md:left-[35vw] md:translate-x-0 top-1/2 -translate-y-1/2 flex flex-col rounded-[25px] py-[10px] px-[25px] gap-[15px] md:py-[20px] md:px-[50px] md:gap-[25px]`}
      >
        {previewsFromServer ? (
          <>
            <h2 className="text-lg md:text-4xl font-bold text-ble-950 py-1">
              Ubah Gambar Hero
            </h2>
            <form
              encType="multipart/form-data"
              onSubmit={imageUpload}
              className="grid gap-[15px] md:gap-[25px]"
            >
              <div className="relative rounded-[15px] overflow-hidden">
                {previewsFromServer ? (
                  <div className="absolute w-full top-1/2 -translate-y-1/2">
                    <img
                      priority
                      className={`${
                        imagePreviews ? "hidden" : "block"
                      } object-cover min-h-full h-full rounded-[15px]`}
                      src={`https://newapi.gondangria.com/images/${previewsFromServer}`}
                      alt={`Preview`}
                    />
                    <img
                      className={`${
                        !imagePreviews ? "hidden" : "block"
                      } object-cover min-h-full rounded-[15px]`}
                      src={imagePreviews}
                      alt={`Preview`}
                    />
                  </div>
                ) : null}
                <DropZone
                  data={data}
                  dispatch={dispatch}
                  imagePreviews={imagePreviews}
                  previewsFromServer={previewsFromServer}
                  customClass={customClass}
                />
              </div>
              <button
                className={`hover:bg-ble-500 active:bg-ble-600 active:scale-95 transition-all rounded-[10px] justify-self-end bg-ble-600 text-ble-50 text-base max-w-[140px] max-h-[50px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px]`}
                type="submit"
              >
                Simpan
              </button>
            </form>
          </>
        ) : (
          <div className="w-full flex justify-center">
            <BarLoader color="#2D719F" height={5} width={500} />
          </div>
        )}
      </div>
    </main>
  );
}
