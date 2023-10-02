import Link from "next/link";

export default function FasCardComp() {
  return (
    <div className="w-[415px] h-[581px] p-5 rounded-[20px] flex-col justify-center items-center gap-[30px] inline-flex">
      <img
        className="w-[300px] h-[300px] rounded-[500px] aspect-square"
        src="../../Images/WaroengGR.jpeg"
        alt=""
      />
      <div className="w-[375px] h-[211px] flex flex-col justify-between text-center">
        <h4 className="left-[81px] top-0 text-ble-600 text-xl font-bold">
          Waroeng Gondang Ria
        </h4>
        <p className="w-[375px] left-0 top-[57px] text-ble-900 text-sm font-normal">
          Di Waroeng Kolam Gondang Ria, selain renang seru, ada pula santapan
          lezat menanti Anda. Liburan lengkap dengan kelezatan kuliner!
        </p>
        <Link
          href="/fasilitas"
          className="max-w-[151px] bg-ble-600 rounded-[10px] text-ble-50 font-semibold text-lg py-2 px-8 mt-4 ml-auto mr-auto"
        >
          PELAJARI
        </Link>
      </div>
    </div>
  );
}
