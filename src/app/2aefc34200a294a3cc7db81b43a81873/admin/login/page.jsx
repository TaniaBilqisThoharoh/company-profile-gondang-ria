"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import PeekBtn from "../components/PeekBtn";
import Spinner from "@/app/components/Spinner";

export default function Login() {
  const router = useRouter();
  //define state
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //define state validation
  const [validation, setValidation] = useState([]);

  /* Function cekcookies berfungsi untuk mengecek token ontentikasi admin di cookies apakah ada atau tidak ada */
  const cekCookies = async () => {
    if (Cookies.get("token")) {
      //redirect to transaksi page
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/beranda");
    }
  };

  useEffect(() => {
    cekCookies();
  }, []);

  //function "loginHanlder" berfungsi untuk menangani login
  const loginHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append("email", email);
    formData.append("password", password);

    const url = `https://newapi.gondangria.com/api/login`;
    /* const url = "http://127.0.0.1:8000/api/login" */

    //send data to server
    await axios
      .post(url, formData)
      .then((response) => {
        //set token on cookies
        const exp = new Date(
          new Date().getTime() + response.data.expires_in * 100
        );

        Cookies.set("token", response.data.access_token, { expires: exp });

        //redirect to dashboard
        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/beranda");
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error);
      });
    setIsLoading(false);
  };

  const customClass = "fill-ble-400 w-12 h-6";
  const hClass = "h-full";

  return (
    <main
      id="login-page"
      className="flex w-screen h-screen justify-center items-center"
    >
      <div
        id="login-admin"
        className="rounded-[20px] border-[3px] border-white border-opacity-90 py-8 px-12 bg-white opacity-100 flex items-center justify-center w-[95vw] md:w-[70vw] lg:w-[50vw]"
      >
        <form
          onSubmit={loginHandler}
          className="flex flex-col gap-[30px] w-full md:gap-[50px] md:w-[60%]"
        >
          <div className="flex justify-start w-full">
            <h3 className="text-ble-950 text-[2rem] md:text-[4rem] font-black">
              Login
            </h3>
          </div>
          {validation.message && (
            <div className="text-red-500 font-normal text-base md:text-xl">
              {validation.message}
            </div>
          )}
          {/* =============================================== FORM EMAIL =============================================== */}
          <div className="grid h-[86px]">
            <label
              htmlFor="email"
              className="text-login_fontClr font-normal text-base md:text-2xl text-opacity-80"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              onInput={(e) => setEmail(e.target.value)}
              className="w-full text-ble-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-ble-300 rounded-[10px]"
            />
          </div>
          {/* =============================================== AKHIRAN FORM EMAIL =============================================== */}
          {/* =============================================== FORM PASSWORD =============================================== */}
          <div className="grid">
            <div>
              <label
                htmlFor="password"
                className="text-login_fontClr font-normal text-base md:text-2xl text-opacity-80"
              >
                Password
              </label>
              <div className="relative w-full mt-2">
                <PeekBtn
                  isPasswordHidden={isPasswordHidden}
                  setPasswordHidden={setPasswordHidden}
                />
                <input
                  required
                  type={isPasswordHidden ? "password" : "text"}
                  name="password"
                  onInput={(e) => setPassword(e.target.value)}
                  className="w-full text-ble-950 font-normal text-2xl p-[10px] outline-ble-300 rounded-[10px]"
                />
              </div>
            </div>
            {/* =============================================== FORM LINK LUPA PASSWORD =============================================== */}
            <Link
              href={`/2aefc34200a294a3cc7db81b43a81873/admin/lupa-password`}
              className="text-xs md:text-base font-normal text-login_fontClr place-self-end mt-[10px] md:mt-[30px] hover:text-ble-400 active:text-ble-500"
            >
              Lupa Password
            </Link>
            {/* =============================================== AKHIRAN FORM LINK LUPA PASSWORD =============================================== */}
          </div>
          {/* =============================================== AKHIRAN FORM PASSWORD =============================================== */}
          <button
            type="submit"
            className="bg-ble-400 text-base md:text-2xl h-fit font-normal text-ble-50 rounded-[10px] px-[30px] py-[7px] md:px-[50px] md:py-[15px] place-self-center hover:bg-ble-500 active:bg-ble-600 active:scale-95 transition-all"
          >
            {isLoading ? <Spinner customClass={customClass} hClass={hClass} /> : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
