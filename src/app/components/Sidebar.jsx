"use client";

import adminLogo from "../../../public/logo/logoGR.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { Popover, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { useAppContext } from "../context/AppWrapper";

const baseAdminURL = "/2aefc34200a294a3cc7db81b43a81873/admin";
const adminPathTransaksi = `${baseAdminURL}/transaksi`;
const adminPathLogin = `${baseAdminURL}/login`;
const adminPathLupaPassword = `${baseAdminURL}/lupa-password`;
const adminPathValidasi = `${baseAdminURL}/validasi`;
const adminPathUbahPassword = `${baseAdminURL}/ubah-password`;
const adminPathBeranda = `${baseAdminURL}/beranda`;
const adminPathWahana = `${baseAdminURL}/wahana`;
const adminPathFasilitas = `${baseAdminURL}/fasilitas`;
const adminPathTiket = `${baseAdminURL}/tiket`;

const solutions = [
  {
    name: "Beranda",
    href: adminPathBeranda,
  },
  {
    name: "Wahana",
    href: adminPathWahana,
  },
  {
    name: "Fasilitas",
    href: adminPathFasilitas,
  },
  {
    name: "Tiket",
    href: adminPathTiket,
  },
];

export default function Sidebar() {
  const { isLoading, showLoading, hideLoading } = useAppContext();
  const router = useRouter();
  const pathName = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [activeBtn, setActiveBtn] = useState();

  const logOutHandler = async () => {
    let formData = new FormData();
    formData.append("token", Cookies.get("token"));

    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    };

    await axios
      .post(`http://127.0.0.1:8000/api/logout`, formData, config)
      .then((response) => {
        window.alert(response.data.message);

        Cookies.remove("token");

        router.push("/2aefc34200a294a3cc7db81b43a81873/admin/login");
      })
      .catch((error) => {
        //assign error to state "validation"
        window.alert(error);
      });
  };

  return (
    <nav
      className={`${
        pathName.includes(adminPathLogin) ||
        pathName.includes(adminPathLupaPassword) ||
        pathName.includes(adminPathValidasi) ||
        pathName.includes(adminPathUbahPassword)
          ? "hidden"
          : "block"
      } h-auto md:h-[660px] sidebar z-50 w-full md:max-w-[390px] md:w-[30vw] bg-white fixed left-0 top-0 md:left-[2vw] md:top-[5vh] shadow-md md:shadow-none md:border-[3px] md:border-white md:border-opacity-80 rounded-b-[10px] md:rounded-[15px]`}
    >
      <div className="justify-between gap-[50px] flex-col py-0 px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between pt-0 md:pt-[30px]">
            <div className="flex flex-row gap-3 md:gap-[30px] md:flex-col items-center">
              <Image
                src={adminLogo}
                alt="Picture of the author"
                className="my-4 md:m-0 p-0 object-cover aspect-square w-10 md:w-16"
              />
              <h3 className="md:text-2xl text-base text-center">
                Admin Gondang Ria
              </h3>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-grn-950"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-grn-950"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className={`mb-[30px] flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex-col justify-center space-y-5 md:flex">
              <li
                onClick={() => setActiveBtn("transaksi")}
                className={`${
                  activeBtn === "transaksi"
                    ? "bg-gradient-to-r from-ble-100 from-30% to-ble-300 to-70% text-ble-700"
                    : "bg-transparent text-ble-950"
                } group rounded-[10px] p-[4px] font-semibold`}
              >
                <div
                  className={`${
                    activeBtn === "transaksi"
                      ? "bg-ble-admin"
                      : "bg-transparent"
                  } rounded-[6px]`}
                >
                  <Link
                    href={adminPathTransaksi}
                    className="max-w-[364px] md:text-[2vw] text-base gap-[20px] py-[10px] flex pl-[10px] pr-20 items-center transition duration-150 ease-in-out group-hover:text-ble-500 font-thin"
                  >
                    <RiMoneyDollarCircleLine className="stroke-0 w-[20px] md:w-[40px] h-[20px] md:h-[40px] aspect-square" />
                    Transaksi
                  </Link>
                </div>
              </li>
              <li
                className={`${
                  activeBtn === "kelola-konten"
                    ? "bg-gradient-to-r from-ble-100 from-30% to-ble-300 to-70% text-ble-700"
                    : "bg-transparent text-ble-950"
                } group rounded-[10px] p-[4px] w-full !mt-0`}
              >
                <Popover
                  className={`${
                    activeBtn === "kelola-konten"
                      ? "bg-ble-admin"
                      : "bg-transparent"
                  } rounded-[6px]`}
                >
                  {({ open }) => (
                    <>
                      <Popover.Button
                        onClick={() => setActiveBtn("kelola-konten")}
                        className={`
                ${open ? "" : "text-opacity-90"}
                group flex items-center gap-[20px] ${
                  pathName.includes(adminPathTransaksi)
                    ? "bg-transparent"
                    : "bg-ble-admin"
                } outline-none w-full rounded-[6px] px-3 py-[10px] md:text-[2vw] text-base font-thin transition duration-150 ease-in-out group-hover:text-ble-500`}
                      >
                        <TbEdit className="w-[20px] md:w-[40px] h-[20px] md:h-[40px] aspect-square" />
                        <span className="whitespace-nowrap">Kelola Konten</span>
                        <BsChevronRight
                          className={`${
                            open ? "rotate-90" : "rotate-0 text-opacity-70"
                          }
                   stroke-1 ml-auto transition-transform duration-150 ease-in-out w-[15px] md:w-[25px] h-[15px] md:h-[25px] aspect-square`}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className=" px-4 sm:px-0">
                          <div className="overflow-hidden rounded-lg">
                            <div className="relative grid gap-8 bg-transparent p-7">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={`${
                                    pathName.includes(item.href)
                                      ? "bg-ble-50 translate-x-4"
                                      : ""
                                  } -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:translate-x-4 mr-7`}
                                >
                                  <div className="ml-4">
                                    <p className="md:text-[1.6vw] text-sm font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </li>
              <li className="!mt-0 grid place-items-start">
                <button
                  onClick={logOutHandler}
                  className="md:text-[2vw] text-red-600 gap-[20px] py-[10px] px-[20px] bg-transparent border-none text-base flex justify-center items-center font-normal"
                >
                  <LuLogOut className="w-[20px] md:w-[3vw] h-[20px] md:h-[3vw] aspect-square" />
                  Keluar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
