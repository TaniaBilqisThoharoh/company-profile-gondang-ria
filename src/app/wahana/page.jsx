import Image from "next/image";
import Link from "next/link";

export default function Wahana() {
  return (
    <main id="wahana-page" className="flex bg-white min-h-[800px] w-screen flex-col items-center gap-[7rem]">
      <div className="z-10 w-full h-[140px] pl-[150px] py-10 bg-title-grey justify-start items-center inline-flex">
        {/* JUDUL DIGANTI SESUAI DATABASE */}
        <h1 className="text-ble-900 text-5xl font-bold">Waterboom</h1>
      </div>
      <div className="z-20 w-[90vw] h-[60vh] flex place-items-center align-middle relative">
        <img
        id="img-detail"
          src="../../../Images/Wahana.jpeg"
          alt=""
          className="z-10 rounded-[25px] aspect-[17/9] w-[65%] absolute"
        />
        <div id="info-detail" className="z-0 absolute w-full right-0 pr-10 flex justify-end place-items-center h-[55vh]">
          <p className="text-ble-900 text-xl font-normal w-[30%] h-fit">
            Kolam renang dan waterboom yang dihadirkan untuk anak-anak 
          </p>
        </div>
      </div>
    </main>
  );
}
