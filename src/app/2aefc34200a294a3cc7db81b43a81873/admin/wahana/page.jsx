"use client";

import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import Cookies from "js-cookie";
import axios from "axios";
import DropZone from "../components/DropZone";

export default function Wahana() {
  const [image, setImage] = useState();
  const [descInput, setDescInput] = useState("");
  const [imagePreviews, setImagePreviews] = useState();
  const [nameFromServer, setNameFromServer] = useState();
  const [previewsFromServer, setPreviewsFromServer] = useState();
  const [descFromServer, setDescFromServer] = useState();
  const charLimit = 150
  const [charCounter, setCharCounter] = useState();
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

  /* Function ambildata berfungsi untuk mengambil data gambar dan deskripsi wahana */
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
        "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana"; */
      const url =
        "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana";

      await axios
        .get(url, config)
        .then(function (response) {
          response.data.map((item) => {
            setNameFromServer(item.nama);
            setPreviewsFromServer(item.gambar);
            setDescFromServer(item.deskripsi);
            setCharCounter(charLimit - item.deskripsi.length)
          });
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

  /* Function dataupload berfungsi untuk mengupload data gambar dan deskripsi wahana */
  const dataUpload = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("nama", nameFromServer);
    formData.append("gambar", image ? image : null);
    formData.append("deskripsi", e.target[1].value);

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    /* let uploadUrl =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana/store"; */
    let uploadUrl =
      "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana/store";

    /* const url1 =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana"; */
    const url1 =
      "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana";

    await axios
      .get(url1, config)
      .then(function (response) {
        const idWahana = response.data[0].id
        // handle success
        /* uploadUrl = `http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana/update/${idWahana}`; */
        uploadUrl = `https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana/update/${idWahana}`;

        axios
          .post(uploadUrl, formData, config)
          .then((result) => {
            window.alert(`${result.data.message}`);
            window.location.reload()
          })
          .catch((err) => {
            window.alert(`${err}`);
          });
      })
      .catch(function (error) {
        // handle error
        /* uploadUrl =
          "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana/store"; */
        uploadUrl =
          "https://newapi.gondangria.com/api/2aefc34200a294a3cc7db81b43a81873/admin/wahana/store";

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

  /* Function oncharchange berfungsi untuk mendeteksi jumlah karakter  */
  const onCharChange = (e) => {
    e.preventDefault();
    setDescInput(e.target.value);
    setCharCounter(charLimit - e.target.value.length)
  };

  const customClass = "w-full h-[50vh]";

  return (
    <main id="admin-page" className="relative h-screen w-screen">
      <div
        className={`${
          previewsFromServer
            ? "border-[3px] border-white"
            : "bg-transparent border-0"
        } absolute upload left-1/2 -translate-x-1/2 w-[95vw] md:w-[62vw] md:left-[35vw] md:translate-x-0 top-1/2 -translate-y-[45%] flex flex-col rounded-[25px] py-[10px] px-[10px] gap-[15px] md:py-[20px] md:px-[20px] md:gap-[25px]`}
      >
        {previewsFromServer ? (
          <form
            encType="multipart/form-data"
            onSubmit={dataUpload}
            className="flex flex-col lg:flex-row justify-between gap-[15px] lg:gap-[25px]"
          >
            <div className="relative w-full lg:w-[45%] rounded-[15px] overflow-hidden">
              {previewsFromServer && (
                <div className="absolute w-full top-1/2 -translate-y-1/2">
                  <img
                    priority
                    className={`${
                      imagePreviews ? "hidden" : "block"
                    } object-cover object-center h-full rounded-[15px]`}
                    src={`https://newapi.gondangria.com/images/${previewsFromServer}`}
                    alt={`Preview`}
                  />
                  <img
                    className={`${
                      !imagePreviews ? "hidden" : "block"
                    } object-cover object-center rounded-[15px]`}
                    src={imagePreviews}
                    alt={`Preview`}
                  />
                </div>
              )}
              <DropZone
                data={data}
                dispatch={dispatch}
                imagePreviews={imagePreviews}
                previewsFromServer={previewsFromServer}
                customClass={customClass}
              />
            </div>
            <div className="flex flex-col gap-[10px] lg:gap-[30px] justify-between w-full lg:w-[55%]">
              {/* ===========================EDIT DESKRIPSI================================================================================= */}
              <label
                htmlFor="editDesk"
                className="text-lg lg:text-4xl font-bold text-ble-950"
              >
                Edit Deskripsi
              </label>

              <textarea
              maxLength={charLimit}
                onChange={onCharChange}
                className="resize-none text-ble-950 text-base h-full border-2 border-white bg-white bg-opacity-70 p-[10px] rounded-[10px]"
                id="editDesk"
                name="editDesk"
                defaultValue={descFromServer}
              ></textarea>
              <p className={`${charCounter <= 10 ? "text-red-500" : "text-ble-950"}`}>{charCounter}/150</p>
              {/* ============================================================================================================================== */}
              {/* ============================================================SIMPAN============================================================ */}
              <button
                className={`rounded-[10px] self-end justify-self-end bg-ble-600 text-ble-50 text-base max-w-[140px] max-h-[50px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px] hover:bg-ble-500 active:bg-ble-600 active:scale-95 transition-all`}
                type="submit"
              >
                Simpan
              </button>
              {/* =============================================================================================================================== */}
            </div>
          </form>
        ) : (
          <div className="w-full flex justify-center">
            <BarLoader color="#2D719F" height={5} width={500} />
          </div>
        )}
      </div>
    </main>
  );
}
