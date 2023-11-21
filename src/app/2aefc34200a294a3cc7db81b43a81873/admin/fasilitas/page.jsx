"use client";

import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import Cookies from "js-cookie";
import axios from "axios";
import FasilitasCard from "../components/FasilitasCard";
import AddFasCard from "../components/AddFasCard";

export default function Fasilitas() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [dataFromServer, setDataFromServer] = useState();
  const [imagePreviews, setImagePreviews] = useState();
  const [nameFromServer, setNameFromServer] = useState();
  const [previewsFromServer, setPreviewsFromServer] = useState();
  const [descFromServer, setDescFromServer] = useState();
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
        "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas";

      await axios
        .get(url, config)
        .then(function (response) {
          setDataFromServer(response.data);
        })
        .catch(function (error) {
          window.alert(error.data.message);
        });
    }
  }, []);

  const deskripsiHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const dataUpload = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("nama", name);
    formData.append("gambar", image);
    formData.append("deskripsi", description);

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    let uploadUrl =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas/store";

    const url1 =
      "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas";

    await axios
      .get(url1, config)
      .then(function (response) {
        // handle success
        uploadUrl = `http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas/update`;

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
          "http://127.0.0.1:8000/api/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas/store";

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
    <main
      id="admin-page"
      className="relative h-screen w-screen"
    >
      <ul
        className={`absolute upload grid max-h-[75dvh] overflow-y-auto left-1/2 -translate-x-1/2 w-[90vw] md:w-[62vw] md:left-[35vw] md:translate-x-0 top-1/2 -translate-y-1/2 ${
          dataFromServer
            ? "border-[3px] border-white xl:grid-cols-3 lg:grid-cols-2"
            : "bg-transparent border-0 place-items-center grid-cols-1"
        } rounded-[25px] py-[10px] px-[10px] md:py-[20px] md:px-[20px] gap-[25px]`}
      >
        {dataFromServer ? (
          dataFromServer.map((item) => {
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
          })
        ) : (
          <li className="w-full flex justify-center">
            <BarLoader color="#2D719F" height={5} width={500} />
          </li>
        )}
        {dataFromServer ? (
          <li>
            <AddFasCard />
          </li>
        ) : null}
      </ul>
    </main>
  );
}
