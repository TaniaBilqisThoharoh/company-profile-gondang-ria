import Link from "next/link";

export default function WahanaSec() {
  return (
    <section className="z-20 bg-ble-100 w-screen flex justify-center align-center py-24 px-36">
      <div
        id="wahana_card_bg"
      >
        <div
          id="wahana_card"
          className="flex gap-48 py-14 px-36 rounded-[20px]"
        >
          <div className="grid place-items-center w-[21.875rem]">
            {/* GANTI GAMBAR SESUAI DENGAN DATABASE */}
            <img
              className="object-cover w-[21.875rem] h-[21.875rem] rounded-full aspect-square"
              src="../../../../Images/Wahana.jpeg"
              alt="Wahana Photo"
            />
          </div>
          <div className="grid place-items-center">
            <div className="flex flex-col justify-around w-[25rem] h-[333px]">
              <h3 className="text-ble-600 font-extrabold text-5xl">
                Seru Tanpa Batas di Gondang Ria!
              </h3>
              <p className="text-base font-normal w-96">
                Datang ke Gondang Ria dan nikmati beragam wahana air yang
                menegangkan dan menyegarkan. Dari seluncuran cepat hingga kolam
                renang yang menenangkan, kesenangan ada di setiap sudut!
              </p>
              <Link href="/wahana" className="max-w-[300px] border-[3.5px] border-ble-600 rounded-[10px] text-ble-600 font-semibold text-lg py-2 px-8">
                EXPLORE GONDANG RIA!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
