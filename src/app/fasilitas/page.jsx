import Image from "next/image";
import Link from "next/link";

export default function Fasilitas() {
  return (
    <main className="flex bg-white min-h-[800px] w-screen flex-col items-center gap-[100px]">
      <div className="z-10 w-full h-[140px] pl-[150px] py-10 bg-title-grey justify-start items-center inline-flex">
        {/* JUDUL DIGANTI SESUAI DATABASE */}
        <h1 className="text-ble-900 text-5xl font-bold">Fasilitas</h1>
      </div>
      <div className="w-[80%]">
        <div className="fasilitas-card w-[400px] h-[288px] relative rounded-[15px]">
          <Link href={`/fasilitas/detail-fasilitas`}>
            <div>
              <img
                className="absolute top-0 rounded-t-[15px] h-[221px] object-cover"
                src="../../../Images/fasilitas1.jpeg"
                alt=""
              />
              <div className=" content-[''] absolute bottom-[96px] right-0 w-[30px] h-[30px] bg-white"></div>
              <div className="absolute overflow-hidden top-0 rounded-t-[15px] h-[192px] rounded-br-[25px]">
                <img
                  className="object-cover h-[221px]"
                  src="../../../Images/fasilitas1.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="h-[96px] bg-white rounded-b-[15px] rounded-tl-[15px] absolute bottom-0 w-full py-[15px] pl-[20px]">
              <h3 className="text-ble-600 font-bold text-2xl mb-[11px]">
                Kolam Renang Anak
              </h3>
              <p className="text-ble-300 text-base flex items-center gap-[10px]">
                Lihat detail{" "}
                <span>
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z"
                      fill="#88BBDD"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
