import Link from "next/link";
import Spinner from "@/app/components/Spinner";

export default function FormLupaPW({ cekEmailHandler, isLoading }) {
  const customClass = "fill-ble-400 w-12 h-6";
  const hClass = "h-full";
  return (
    <form
      onSubmit={cekEmailHandler}
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
            required
            type="email"
            name="email"
            className="w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-ble-300 rounded-[10px]"
          />
        </div>
      </div>
      <div className="justify-between flex gap-4">
        <Link
          href={`/2aefc34200a294a3cc7db81b43a81873/admin/login`}
          className={`rounded-[10px] bg-ble-950 text-red-50 hover:bg-ble-800 active:bg-ble-700 active:scale-95 text-base max-w-[140px] max-h-[50px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px] transition-all`}
        >
          Batal
        </Link>
        <button
          type="submit"
          className="bg-ble-400 text-base font-normal text-ble-50 rounded-[10px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px] place-self-center hover:bg-ble-500 active:bg-ble-600 active:scale-95 transition-all"
        >
          {isLoading ? <Spinner customClass={customClass} hClass={hClass} /> : "Konfirmasi"}
        </button>
      </div>
    </form>
  );
}
