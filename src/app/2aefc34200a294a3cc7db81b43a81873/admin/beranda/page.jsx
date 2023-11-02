"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import DropZone from "../components/DropZone";

export default function Beranda() {
  const [image, setImage] = useState();
  const [imagePreviews, setImagePreviews] = useState();
  const [validation, setValidation] = useState([]);
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
    };

    if (item) {
      reader.readAsDataURL(item);
    }
  });

  //hook useEffect
  useEffect(() => {
    //send data to server
    /* await axios
      .get(`http://127.0.0.1:8000/api/beranda`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error.response.data.error);
      }); */

    //check token
    if (!Cookies.get("token")) {
      //redirect page dashboard
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
    }
  }, []);

  // multile image upload
  const imageUpload = async (e) => {
    e.preventDefault();
    

    const dataImg = data.fileList.map((item) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreviews(reader.result);
        setImage(reader.result);
        console.log(e.target[0].value)
      };
  
      if (item) {
        reader.readAsDataURL(item);
      }
    });

    let formData = new FormData();
    formData.append("hero", dataImg);
    formData.append("wahana_id", 1);
    formData.append("fasilitas_id", 2);

    const url =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/beranda/store";

    const config = {
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    };

    await axios
      .post(
        url,
        formData,
        config
        /* , {
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`,
        }
    } */
      )
      .then((result) => {
        window.alert(`${result} Gambar hero berhasil diubah`);
        console.log("Result", result);
      })
      .catch((err) => {
        window.alert(`${err} Terjadi kesalahan, mohon coba lagi`);
        /* console.log("Error: ", err); */
      });
  };

  return (
    <main id="admin-page" className="relative h-screen w-screen">
      <div className="absolute upload left-1/2 -translate-x-1/2 md:left-[35vw] md:translate-x-0 top-1/2 -translate-y-1/2 flex flex-col border-[3px] border-white rounded-[25px] py-[10px] px-[25px] gap-[15px] md:py-[20px] md:px-[50px] md:gap-[25px] ">
        <h2 className="text-lg md:text-4xl font-bold text-ble-950 py-1">
          Ubah Gambar Hero
        </h2>
        <form onSubmit={imageUpload} className="grid gap-[15px] md:gap-[25px]">
          <div className="w-full relative rounded-[15px] overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 grid place-items-center">
              {imagePreviews ? (
                <img
                  className="object-cover object-center rounded-[15px]"
                  src={imagePreviews}
                  alt={`Preview`}
                />
              ) : null}
            </div>
            <DropZone
              data={data}
              dispatch={dispatch}
              imagePreviews={imagePreviews}
            />
          </div>
          <button
            className={`rounded-[10px] justify-self-end bg-ble-600 text-ble-50 text-base max-w-[140px] max-h-[50px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px]`}
            type="submit"
          >
            Simpan
          </button>
        </form>
      </div>
    </main>
  );
}
