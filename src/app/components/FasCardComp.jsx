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
        <p className="w-full line-clamp-2 sm:line-clamp-none max-w-[375px] left-0 top-[57px] text-ble-900 text-xs md:text-sm font-normal">
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
        <svg
          width="16"
          height="14"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z"
            fill="#EBF4F9"
          />
        </svg>
      </Link>
    </div>
  );
}
