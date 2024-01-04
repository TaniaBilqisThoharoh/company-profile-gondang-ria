"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import FormValidasi from "../components/FormValidasi";
import { useEffect, useState } from "react";

export default function Validasi() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailUser, setEmailUser] = useState()
  const router = useRouter();

  useEffect(() => {
    setEmailUser(sessionStorage && sessionStorage.getItem("email"))
  }, [])

  const cekTokenHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData()
    const token = e.target[0].value;

    //append data to formData
    formData.append("email", emailUser);
    formData.append("token", token);

    //send data to server
    await axios
      .post(`https://newapi.gondangria.com/api/password/validasi`, formData)
      .then((response) => {
        window.alert(response.data.message);
        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/ubah-password");
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
        <FormValidasi cekTokenHandler={cekTokenHandler} isLoading={isLoading} />
      </div>
    </main>
  );
}
