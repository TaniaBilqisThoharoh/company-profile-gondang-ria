"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //define state validation
  const [validation, setValidation] = useState([]);

  //hook useEffect
  useEffect(() => {
    //check token
    if (Cookies.get("token")) {
      //redirect page dashboard
      router.push("/2aefc34200a294a3cc7db81b43a81873/admin/transaksi");
    }
  }, []);

  //function "loginHanlder"
  const loginHandler = async (e) => {
    e.preventDefault();

    const exp = new Date(new Date().getTime() + 1 * 60 * 1000);
    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append("email", email);
    formData.append("password", password);

    //send data to server
    await axios
      .post(`http://127.0.0.1:8000/api/login`, formData)
      .then((response) => {
        //set token on cookies
        Cookies.set("token", response.data.access_token/* , {expires: exp} */);

        //redirect to dashboard
        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/transaksi");
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error);
      });
  };

  return (
    <main
      id="login-page"
      className="flex w-screen h-screen justify-center items-center"
    >
      <div
        id="login-admin"
        className="rounded-[20px] border-[3px] border-white border-opacity-90 py-8 px-12 bg-white opacity-100 flex items-center justify-center w-[95vw] md:w-[50vw]"
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
          <div className="grid h-[86px]">
            <label
              htmlFor="username"
              className="text-login_fontClr font-normal text-base md:text-2xl text-opacity-80"
            >
              Username
            </label>
            <input
              type="email"
              name="username"
              onInput={(e) => setEmail(e.target.value)}
              className="w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-ble-300 rounded-[10px]"
            />
          </div>
          <div className="grid">
            <label
              htmlFor="password"
              className="text-login_fontClr font-normal text-base md:text-2xl text-opacity-80"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onInput={(e) => setPassword(e.target.value)}
              className="w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-ble-300 rounded-[10px]"
            />
            <Link
              href={`/2aefc34200a294a3cc7db81b43a81873/admin/login`}
              className="text-xs md:text-base font-normal text-login_fontClr place-self-end mt-[10px] md:mt-[30px]"
            >
              Lupa Password
            </Link>
          </div>
          <button
            type="submit"
            className="max-w-[153px] bg-ble-400 text-base md:text-2xl font-normal text-ble-50 rounded-[10px] px-[30px] py-[7px] md:px-[50px] md:py-[15px] place-self-center hover:bg-ble-500 active:bg-ble-600 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

/* <section className="modal absolute top-0 bg-bg-blur-clr backdrop-blur bg-opacity-40 w-full flex justify-center">
      <div className="rounded-[20px] mb-auto py-8 px-12 bg-white opacity-100 flex flex-col gap-[70px] items-center justify-center w-[75%]">
        <div className="flex justify-end w-full">
          <h3 className="text-grn-950 text-[2.5rem] px-10 py-4 rounded-[10px] mx-auto font-bold">
            Masuk
          </h3>
          <button onClick={modal_login} className="px-[2px]">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2433 13L25.3214 3.9219C25.7522 3.49181 25.9946 2.90819 25.9951 2.29942C25.9956 1.69065 25.7543 1.1066 25.3242 0.675758C24.8942 0.244913 24.3105 0.00256513 23.7018 0.00202751C23.093 0.00148988 22.5089 0.242807 22.0781 0.672891L13 9.751L3.9219 0.672891C3.49105 0.242046 2.9067 0 2.29739 0C1.68809 0 1.10374 0.242046 0.672891 0.672891C0.242046 1.10374 0 1.68809 0 2.29739C0 2.9067 0.242046 3.49105 0.672891 3.9219L9.751 13L0.672891 22.0781C0.242046 22.5089 0 23.0933 0 23.7026C0 24.3119 0.242046 24.8963 0.672891 25.3271C1.10374 25.758 1.68809 26 2.29739 26C2.9067 26 3.49105 25.758 3.9219 25.3271L13 16.249L22.0781 25.3271C22.5089 25.758 23.0933 26 23.7026 26C24.3119 26 24.8963 25.758 25.3271 25.3271C25.758 24.8963 26 24.3119 26 23.7026C26 23.0933 25.758 22.5089 25.3271 22.0781L16.2433 13Z"
                fill="#05150F"
              />
            </svg>
          </button>
        </div>
        <form className="flex flex-col gap-[70px] w-[50%]">
          <div className="grid h-[86px]">
            <label htmlFor="email" className="text-footer_fontClr font-normal text-2xl text-opacity-80">Email</label>
            <input type="email" name="email" className="w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-none" />
          </div>
          <div className="grid">
            <label htmlFor="password" className="text-footer_fontClr font-normal text-2xl text-opacity-80">Password</label>
            <input type="password" name="password" className="w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-none" />
            <Link href={`/`} className="text-base font-normal text-footer_fontClr place-self-end mt-[30px]">
              Lupa Password
            </Link>
          </div>
          <button type="submit" className="max-w-[176px] bg-footer_fontClr text-2xl font-normal text-grn-50 rounded-[15px] px-[50px] py-[15px] place-self-center">Masuk</button>
        </form>
        <p className="text-grn-950 font-normal text-2xl mb-[70px]">Belum punya akun? <button onClick={onRegister} className="buat-akun ml-[30px]">Buat di sini</button></p>
      </div>
    </section> */
