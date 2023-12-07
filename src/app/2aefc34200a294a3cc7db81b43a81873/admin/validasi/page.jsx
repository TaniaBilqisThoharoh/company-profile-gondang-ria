"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import FormValidasi from "../components/FormValidasi";

export default function Validasi() {
  const emailUser = sessionStorage.getItem("email")
  const router = useRouter();

  const cekTokenHandler = async (formData) => {
    const token = formData.get("token");

    //append data to formData
    formData.append("email", emailUser);
    formData.append("token", token);

    //send data to server
    await axios
      .post(`http://127.0.0.1:8000/api/password/validasi`, formData)
      .then((response) => {
        window.alert(response.data.message);
        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/ubah-password");
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
        <FormValidasi cekTokenHandler={cekTokenHandler} />
      </div>
    </main>
  );
}
