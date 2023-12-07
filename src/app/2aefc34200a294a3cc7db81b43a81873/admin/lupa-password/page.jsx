"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import FormLupaPW from "../components/FormLupaPW";

export default function LupaPassword() {
  const router = useRouter();

  const cekEmailHandler = async (formData) => {
    const inputEmail = formData.get("email");

    //append data to formData
    formData.append("email", inputEmail);

    //send data to server
    await axios
      .post(`http://127.0.0.1:8000/api/password/forgot_password`, formData)
      .then((response) => {
        sessionStorage.setItem("email", inputEmail)
        window.alert(response.data.message);
        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/validasi");
      })
      .catch((error) => {
        //assign error to state "validation"
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
        <FormLupaPW cekEmailHandler={cekEmailHandler} />
      </div>
    </main>
  );
}
