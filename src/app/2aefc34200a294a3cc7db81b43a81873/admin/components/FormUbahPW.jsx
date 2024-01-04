import { useState } from "react";
import PeekBtn from "./PeekBtn";
import Spinner from "@/app/components/Spinner";

export default function FormUbahPW({ passBaruHandler, isLoading }) {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isConfPasswordHidden, setConfPasswordHidden] = useState(true);

  const customClass = "fill-ble-400 w-12 h-6";
  const hClass = "h-full";

  return (
    <form
      onSubmit={passBaruHandler}
      className="flex flex-col gap-[30px] w-full md:gap-[50px] md:w-[60%]"
    >
      <div className="flex flex-col items-center gap-[40px] w-full">
        <h3 className="text-ble-950 text-xl md:text-4xl font-black">
          Buat password baru
        </h3>
        <p>
          Harap masukkan password baru Anda! Pastikan password yang dimasukkan
          sama!
        </p>
        <p></p>
      </div>
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
              /* onInput={(e) => setPassword(e.target.value)} */
              className="w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-ble-300 rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="grid">
        <div>
          <label
            htmlFor="confPassword"
            className="text-login_fontClr font-normal text-base md:text-2xl text-opacity-80"
          >
            Konfirmasi Password
          </label>
          <div className="relative w-full mt-2">
            <PeekBtn
              isPasswordHidden={isConfPasswordHidden}
              setPasswordHidden={setConfPasswordHidden}
            />
            <input
              required
              type={isConfPasswordHidden ? "password" : "text"}
              name="confPassword"
              /* onInput={(e) => setConfPassword(e.target.value)} */
              className="w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-ble-300 rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-ble-400 text-base font-normal text-ble-50 rounded-[10px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px] place-self-center hover:bg-ble-500 active:bg-ble-600 active:scale-95 transition-all"
      >
        {isLoading ? <Spinner customClass={customClass} hClass={hClass} /> : "Konfirmasi"}
      </button>
    </form>
  );
}
