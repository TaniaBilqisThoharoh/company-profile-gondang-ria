import Link from "next/link";
import { useAppContext } from "../context/AppWrapper";

export default function FasCardComp({ id, image, name, desc }) {
  const { showLoading } = useAppContext();
  return (
    <div className="w-full lg:w-[40vw] lg:h-[50vw] lg:max-w-[300px] lg:max-h-[581px] bg-ble-50 p-4 lg:p-0 lg:bg-transparent rounded-[20px] flex-row lg:flex-col justify-around lg:justify-center items-center gap-[3vw] inline-flex">
      <img
        className="w-[20vw] h-[20vw] lg:w-[26vw] lg:h-[26vw] max-w-[300px] max-h-[300px] rounded-[500px] aspect-square"
        src={`https://newapi.gondangria.com/images/${image}`}
        alt=""
      />
      <div className="w-full h-full gap-4 md:gap-0 md:h-[20vw] max-w-[300px] max-h-[211px] flex flex-col justify-around lg:justify-between text-center">
        <h4 className="left-[81px] top-0 text-ble-600 text-base md:text-xl font-bold">
          {name}
        </h4>
        <p className="w-full max-w-[375px] left-0 top-[57px] text-ble-900 text-xs md:text-sm font-normal">
          {desc}
        </p>
        <Link
          onClick={() => showLoading()}
          as={`/fasilitas/detail-fasilitas/${id}`}
          href={`/fasilitas/detail-fasilitas/id`}
          className="hidden lg:block max-w-[151px] bg-ble-600 rounded-[10px] text-ble-50 font-semibold text-sm md:text-base lg:text-lg py-2 px-8 ml-auto mr-auto hover:bg-ble-700 active:bg-ble-500 transition-all"
        >
          PELAJARI
        </Link>
      </div>
      <Link
        onClick={() => showLoading()}
        as={`/fasilitas/detail-fasilitas/${id}`}
        href={`/fasilitas/detail-fasilitas/id`}
        className="lg:hidden block max-w-[151px] bg-ble-600 rounded-[10px] text-ble-50 font-semibold text-xs md:text-base lg:text-lg py-2 px-4 lg:px-8 hover:bg-ble-700 active:bg-ble-500 transition-all"
      >
        PELAJARI
      </Link>
    </div>
  );
}
