"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import FormUbahPW from "../components/FormUbahPW";

export default function UbahPassword() {
  const emailUser = sessionStorage.getItem("email")
  const router = useRouter();

  const passBaruHandler = async (formData) => {
    const pass = formData.get("password");
    const confPass = formData.get("confPassword");

    if (pass === confPass) {
      //append data to formData
      formData.append("email", emailUser)
      formData.append("password", pass);
    } else  {
      window.alert("Password dan konfirmasi password tidak sama")
    }
    //send data to server
    await axios
      .post(`http://127.0.0.1:8000/api/password/change_password`, formData)
      .then((response) => {
        window.alert(response.data.message);
        sessionStorage.removeItem("email")
        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
      })
      .catch((error) => {
        window.alert(error.response.data.message);
      });
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
        <FormUbahPW passBaruHandler={passBaruHandler} />
      </div>
    </main>
  );
}
