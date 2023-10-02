import Link from "next/link";

export default function DataDiri() {
  return (
    <main
      id="pesan-tiket-page"
      className="flex bg-white min-h-[800px] w-screen flex-col items-center gap-[1rem]"
    >
      <div className="z-10 w-full h-[140px] pl-[150px] py-10 bg-title-grey justify-start items-center inline-flex">
        <h1 className="text-ble-900 text-5xl font-bold">Data Diri</h1>
      </div>
      <form
        action=""
        className="grid grid-cols-2 grid-rows-4 gap-y-[41px] gap-x-[100px] bg-[#D7E8F4] backdrop-blur-[21px] bg-opacity-[50%] pt-[60px] pb-[35px] px-[100px] rounded-[20px] border-[3px] border-white"
      >
        <div className="grid w-[350px] gap-y-5">
          <label className="font-bold text-ble-900 text-xl" htmlFor="name">
            Nama Lengkap
          </label>
          <input
            className="px-3 text-ble-900 text-xl h-[50px] rounded-[10px]"
            type="text"
            name="name"
            required
          ></input>
        </div>
        <div className="grid w-[350px] gap-y-5 col-span-2">
          <label className="font-bold text-ble-900 text-xl" htmlFor="email">
            Email
          </label>
          <input
            className="px-3 text-ble-900 text-xl h-[50px] rounded-[10px]"
            type="email"
            name="email"
            required
          ></input>
        </div>
        <div className="grid w-[350px] gap-y-5">
          <label className="font-bold text-ble-900 text-xl" htmlFor="phone">
            No. Telepon
          </label>
          <input
            className="px-3 text-ble-900 text-xl h-[50px] rounded-[10px]"
            type="tel"
            name="phone"
            required
          ></input>
        </div>
        <div className="grid w-[350px] gap-y-5 row-start-1 col-start-2">
          <label className="font-bold text-ble-900 text-xl" htmlFor="tanggal">
            Tanggal
          </label>
          <input
            className="px-3 text-ble-900 text-xl h-[50px] rounded-[10px]"
            type="date"
            name="tanggal"
            required
          ></input>
        </div>
        <Link
          href={`/pesan-tiket`}
          type="submit"
          className="grid place-items-center row-start-4 col-span-2 place-self-center bg-ble-400 hover:bg-ble-500 text-ble-50 h-[63px] font-bold text-2xl rounded-[10px] w-[90%]"
        >
          SELESAI
        </Link>
      </form>
    </main>
  );
}
