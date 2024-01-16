"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import FormUbahPW from "../components/FormUbahPW";
import { useEffect, useState } from "react";
import { baseApi } from "@/app/context/ApiUrl";

export default function UbahPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailUser, setEmailUser] = useState()
  const router = useRouter();

  useEffect(() => {
    setEmailUser(sessionStorage && sessionStorage.getItem("email"))
  }, [])

  /* Function passbaruhandler berfungsi untuk menangani password baru yang diinputkan oleh admin */
  const passBaruHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData()
    const pass = e.target[1].value;
    const confPass = e.target[3].value;

    if (pass === confPass) {
      //append data to formData
      formData.append("email", emailUser)
      formData.append("password", pass);
    } else  {
      window.alert("Password dan konfirmasi password tidak sama")
    }
    //send data to server
    await axios
      .post(`${baseApi}/password/change_password`, formData)
      .then((response) => {
        window.alert(response.data.message);
        (sessionStorage && sessionStorage.removeItem("email"))
        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
      })
      .catch((error) => {
        window.alert(error);
      });
      setIsLoading(false)
  };

  return (
    <main
      id="login-page"
      className="flex w-screen h-screen justify-center items-center"
    >
      <div
        id="login-admin"
        className="rounded-[20px] border-[3px] border-white border-opacity-90 py-8 px-12 bg-white opacity-100 flex items-center justify-center w-[95vw] md:w-[70vw] lg:w-[50vw]"
      >
        <FormUbahPW passBaruHandler={passBaruHandler} isLoading={isLoading} />
      </div>
    </main>
  );
}
