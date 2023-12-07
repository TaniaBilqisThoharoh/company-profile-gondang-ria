export default function FormLupaPW({ cekEmailHandler }) {
    return (
        <form
          action={cekEmailHandler}
          className="flex flex-col gap-[30px] w-full md:gap-[50px] md:w-[60%]"
        >
          <div className="flex flex-col items-center gap-[40px] w-full">
            <h3 className="text-ble-950 text-xl md:text-4xl font-black">
              Lupa password?
            </h3>
            <p>
              <strong>Tenang</strong>, Anda dapat menggantinya dengan mengikuti
              langkah-langkah yang diberikan!
            </p>
          </div>
          <div className="grid">
            <div>
              <label
                htmlFor="email"
                className="text-login_fontClr font-normal text-base md:text-2xl text-opacity-80"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-ble-300 rounded-[10px]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-ble-400 text-base md:text-2xl font-normal text-ble-50 rounded-[10px] px-[30px] py-[7px] md:px-[50px] md:py-[15px] place-self-center hover:bg-ble-500 active:bg-ble-600 transition-all"
          >
            Konfirmasi
          </button>
        </form>
    )
}