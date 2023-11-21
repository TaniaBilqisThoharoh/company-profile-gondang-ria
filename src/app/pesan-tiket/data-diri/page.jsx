import Link from "next/link";
import { DatePicker } from "rsuite";

import isBefore from "date-fns/isBefore";

export default function DataDiri() {
  console.log(isBefore(new Date(), new Date()));

  return (
    <main
      id="pesan-tiket-page"
      className="flex bg-white w-screen flex-col items-center gap-10 pb-10"
    >
      <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center inline-flex">
        <h1 className="text-ble-900 text-2xl md:text-5xl font-bold">
          Data Diri
        </h1>
      </div>
      <form
        action=""
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-y-[41px] gap-x-[50px] w-[95vw] md:w-[70vw] bg-[#D7E8F4] backdrop-blur-[21px] bg-opacity-[50%] pt-[60px] pb-[35px] px-[50px] rounded-[20px] border-[3px] border-white"
      >
        <div className="grid  gap-y-5">
          <label
            className="font-bold text-ble-900 text-base md:text-xl"
            htmlFor="name"
          >
            Nama Lengkap
          </label>
          <input
            className="px-3 text-ble-900 text-base md:text-xl w-full h-[50px] rounded-[10px]"
            type="text"
            name="name"
            required
          ></input>
        </div>
        <div className="grid  gap-y-5">
          <label
            className="font-bold text-ble-900 text-base md:text-xl"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="px-3 text-ble-900 text-base md:text-xl w-full h-[50px] rounded-[10px]"
            type="email"
            name="email"
            required
          ></input>
        </div>
        <div className="grid  gap-y-5">
          <label
            className="font-bold text-ble-900 text-base md:text-xl"
            htmlFor="phone"
          >
            No. Telepon
          </label>
          <input
            className="px-3 text-ble-900 text-base md:text-xl w-full h-[50px] rounded-[10px]"
            type="tel"
            name="phone"
            required
          ></input>
        </div>
        <div className="grid  gap-y-5">
          <label
            className="font-bold text-ble-900 text-base md:text-xl"
            htmlFor="tanggal"
          >
            Tanggal
          </label>
          <DatePicker />
          {/* <label className="font-bold text-ble-900 text-base md:text-xl" htmlFor="tanggal">
            Tanggal
          </label>
          <input
            className="px-3 text-ble-900 text-base md:text-xl w-full h-[50px] rounded-[10px]"
            type="date"
            name="tanggal"
            required
          ></input> */}
        </div>
        <Link
          href={`/pesan-tiket`}
          type="submit"
          className="grid place-items-center row-start-5 md:row-start-3 col-span-1 md:col-span-2 place-self-center bg-ble-400 hover:bg-ble-500 active:bg-ble-600 text-ble-50 h-[63px] font-bold text-base md:text-2xl rounded-[10px] w-full"
        >
          SELESAI
        </Link>
      </form>
    </main>
  );
}
