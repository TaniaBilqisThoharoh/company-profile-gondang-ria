import Link from "next/link";

export default function FasilitasSec() {
  return (
    <section className="relative w-screen flex justify-center align-center py-10 px-20">
        <div
          id="fasilitas_card"
          className=" flex gap-40"
        >
          <div className="grid place-items-center">
            <div className="flex flex-col justify-around px-7 py-1 w-[540px] h-[350px]">
              <h3 className="text-ble-600 font-extrabold text-5xl w-[333px]">
                Fasilitas di Gondang Ria
              </h3>
              <p className="text-base font-normal w-[510px]">
                Di Gondang Ria, setiap fasilitas kami hadirkan untuk
                memaksimalkan keceriaan Anda. Dari seluncuran menegangkan hingga
                kolam renang yang menenangkan, kami janjikan kenangan yang akan
                selalu Anda ingat.
              </p>
              <Link href="/fasilitas" className="max-w-[151px] bg-ble-600 rounded-[10px] text-ble-50 font-semibold text-lg py-2 px-8">
              PELAJARI
              </Link>
            </div>
          </div>
          <div className="grid place-items-center w-[35.0135rem]">
            {/* GANTI GAMBAR SESUAI DENGAN DATABASE */}
            <img
              className="object-cover w-[35.0135rem] h-[35.0135rem] rounded-full aspect-square"
              src="../../../../Images/Gazebo.jpeg"
              alt="Gazebo Photo"
            />
          </div>
        </div>
        <div id="main-bg-ble-400" className="absolute -right-32 -top-20" />
        <div id="bg-ble-200" className="absolute right-72 -top-24" />
        <div id="bg-ble-50" className="absolute right-[24.7rem] top-[18.5rem]" />
    </section>
  );
}
