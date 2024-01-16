"use client";

import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import DropZone from "../../components/DropZone";
import { baseApi } from "@/app/context/ApiUrl";

export default function TambahFasilitas() {
  const [image, setImage] = useState();
  const [imagePreviews, setImagePreviews] = useState();
  const [descInput, setDescInput] = useState("");
  const charLimit = 150
  const [charCounter, setCharCounter] = useState(charLimit);
  const router = useRouter();

  // Function reducer berfungsi untuk menangani perubahan state
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

  /* Function cekcookies berfungsi untuk mengecek token ontentikasi admin di cookies apakah ada atau tidak ada */
  const cekCookies = async () => {
    if (!Cookies.get("token")) {
      //redirect to login page
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
    }
  };

  useEffect(() => {
    cekCookies();
  }, []);

  /* Function batalhandler berfungsi untuk membatalkan proses tambah fasilitas */
  const batalHandler = () => {
    try {
      window.history.back();
    } catch {
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas");
    }
  };

/* Function dataupload yang berfungsi untuk mengupload data gambar, nama, deskripsi fasilitas */
  const dataUpload = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("nama", e.target[1].value);
    formData.append("gambar", image);
    formData.append("deskripsi", e.target[2].value);

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    let uploadUrl = `${baseApi}/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas/store`;

    await axios
      .post(uploadUrl, formData, config)
      .then((result) => {
        window.alert(`${result.data.message}`);
        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas");
      })
      .catch((err) => {
        window.alert(`${err}`);
      });
  };

  /* Function oncharchange mendeteksi jumlah karakter */
  const onCharChange = (e) => {
    e.preventDefault();
    setDescInput(e.target.value);
    setCharCounter(charLimit - e.target.value.length)
  };

  const customClass = "w-full h-[40vh] md:h-[50vh]";

  return (
    <main id="admin-page" className="relative h-screen w-screen">
      <div className="absolute upload left-1/2 -translate-x-1/2 w-[95vw] md:w-[62vw] md:left-[35vw] md:translate-x-0 top-1/2 -translate-y-[45%] flex flex-col border-[3px] border-white rounded-[25px] py-[10px] px-[10px] gap-[15px] md:py-[20px] md:px-[20px] md:gap-[25px]">
        <form
          encType="multipart/form-data"
          onSubmit={dataUpload}
          className="flex flex-col lg:flex-row justify-between gap-[15px] lg:gap-[25px]"
        >
          <div className="relative w-full lg:w-[45%] rounded-[15px] overflow-hidden">
            <div className="absolute w-full top-1/2 -translate-y-1/2">
              <img
                className={`${
                  !imagePreviews ? "hidden" : "block"
                } object-cover object-center rounded-[15px]`}
                src={imagePreviews}
                alt={`Preview`}
              />
            </div>
            <DropZone
              data={data}
              dispatch={dispatch}
              imagePreviews={imagePreviews}
              customClass={customClass}
            />
          </div>
          <div className="flex flex-col gap-[10px] lg:gap-[30px] justify-between w-full lg:w-[55%]">
            {/* ===============================================EDIT NAMA========================================================================== */}
            <div className="flex flex-col w-full gap-[10px]">
              <label
                className="text-base lg:text-3xl font-bold text-ble-950"
                htmlFor="editNama"
              >
                Edit Nama
              </label>
              <input
                required
                className="text-base text-ble-950 placeholder:text-opacity-20 h-full border-2 border-white bg-white bg-opacity-70 p-[10px] rounded-[10px]"
                type="text"
                id="editNama"
                name="editNama"
                placeholder={"Nama fasilitas"}
              />
            </div>
            {/* ================================================================================================================================== */}
            {/* ===========================================================EDIT DESKRIPSI========================================================== */}
            <div className="flex flex-col w-full gap-[10px]">
              <label
                htmlFor="editDesk"
                className="text-base lg:text-3xl font-bold text-ble-950"
              >
                Edit Deskripsi
              </label>
              <textarea
                required
                maxLength={charLimit}
                onChange={onCharChange}
                className="resize-none text-ble-950 placeholder:text-opacity-20 text-base h-full border-2 border-white bg-white bg-opacity-70 p-[10px] rounded-[10px]"
                id="editDesk"
                name="editDesk"
                placeholder={"Deskripsi fasilitas"}
              ></textarea>
              <p className={`${charCounter <= 10 ? "text-red-500" : "text-ble-950"}`}>{charCounter}/150</p>
            </div>
            {/* ========================================================================================================================================= */}
            <div className="self-end justify-self-end flex gap-4">
            {/* =======================================================BATAL============================================================================= */}
              <button
                onClick={batalHandler}
                className={`rounded-[10px] bg-ble-950 text-red-50 hover:bg-ble-800 active:bg-ble-700 active:scale-95 text-base max-w-[140px] max-h-[50px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px] transition-all`}
                type="button"
              >
                Batal
              </button>
              {/* ========================================================================================================================================= */}
              {/* =======================================================SIMPAN============================================================================ */}
              <button
                className={`rounded-[10px] hover:bg-ble-500 active:bg-ble-600 active:scale-95 transition-all self-end justify-self-end bg-ble-600 text-ble-50 text-base max-w-[140px] max-h-[50px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px]`}
                type="submit"
              >
                Simpan
              </button>
              {/* ========================================================================================================================================== */}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
