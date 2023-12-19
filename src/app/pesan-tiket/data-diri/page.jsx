"use client";

import axios from "axios";
import { DatePicker } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/AppWrapper";
import Spinner from "@/app/components/Spinner";

export default function DataDiri() {
  const { isLoading, hideLoading } = useAppContext();
  const [jumlahTiket, setJumlahTiket] = useState();
  const [subtotal, setSubtotal] = useState();

  const router = useRouter();

  const disabledDate = (current) => {
    let date = new Date();
    const jam = new Date().getHours();

    if (jam < 8 || jam > 17) {
      date.setDate(date.getDate());
      return current <= date || new Date(current).getDay() === 5;
    } else {
      date.setDate(date.getDate() - 1);
      return current < date || new Date(current).getDay() === 5;
    }
  };

  const kirimEmail = async (order_id) => {
    const urlKirimTiket = `https://newapi.gondangria.com/send-mail-ticket/${
      order_id && order_id
    }`;

    await fetch(urlKirimTiket, { mode: "no-cors" });
  };

  const cobaBayar = (token, order_id) => {
    snap.pay(token, {
      // Optional
      onSuccess: function (result) {
        /* KIRIM TIKET LEWAT EMAIL */
        kirimEmail(order_id);

        sessionStorage && sessionStorage.removeItem("jumlah_tiket");
        sessionStorage && sessionStorage.removeItem("subtotal");
        window.alert("Status pembayara: Berhasil");
        router.push("/pesan-tiket");
      },
      onPending: function (result) {
        window.alert("Status pembayara: Pending");
      },
      onError: function (result) {
        window.alert("Status pembayara: Error");
      },
    });
  };

  const storeDataDiri = async (formData, order_id) => {
    formData.append("order_id", order_id);
    const urlPengunjung = "https://newapi.gondangria.com/api/pengunjung";
    await axios
      .post(urlPengunjung, formData)
      .then((response) => {
        /* respon jika sukses */
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  const dataUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    const nama = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const tgl = e.target[3].value;

    console.log(nama, email, phone, tgl)

    formData.append("nama", nama);
    formData.append("email", email);
    formData.append("jumlah_tiket", jumlahTiket);
    formData.append("subtotal", subtotal);
    formData.append("no_telepon", phone);
    formData.append("tanggal", tgl);

    const urlMidtrans = "https://newapi.gondangria.com/api/checkout-midtrans";

    await axios
      .post(urlMidtrans, formData)
      .then(function (response) {
        storeDataDiri(formData, response.data.orderId);
        cobaBayar(response.data.token, response.data.orderId);
      })
      .catch(function (error) {
        window.alert("Mohon maaf, telah terjadi kesalahan jaringan");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      if (jumlahTiket != undefined) {
        hideLoading()
      }
    }, "2000")
  }, [jumlahTiket, isLoading])

  useEffect(() => {
    setJumlahTiket(sessionStorage && sessionStorage.getItem("jumlah_tiket"));
    setSubtotal(sessionStorage && sessionStorage.getItem("subtotal"));
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    const myMidtransClientKey = "SB-Mid-client-ue4OhOdT44EWgk4W";
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <main
      id="pesan-tiket-page"
      className="flex bg-white w-screen flex-col items-center gap-10 pb-10"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center inline-flex">
            <h1 className="text-ble-900 text-2xl md:text-5xl font-bold">
              Data Diri
            </h1>
          </div>
          <form
            onSubmit={dataUpload}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-[41px] gap-x-[50px] w-[95vw] md:w-[70vw] bg-[#D7E8F4] backdrop-blur-[21px] bg-opacity-[50%] pt-[60px] pb-[35px] px-[50px] rounded-[20px] border-[3px] border-white"
          >
            <div className="rounded-2xl bg-gradient-to-tr from-ble-600 from-25% via-ble-500 via-70% to-ble-300 text-ble-50 shadow-xl p-4">
              <p className="text-base">Jumlah tiket Anda:</p>
              <h3 className="text-4xl font-bold">{jumlahTiket}</h3>
            </div>
            <div className="rounded-2xl bg-gradient-to-tr from-ble-600 from-25% via-ble-500 via-70% to-ble-300 text-ble-50 shadow-xl p-4">
              <p className="text-base">Subtotal:</p>
              <h3 className="text-2xl font-bold">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(subtotal)}
              </h3>
            </div>
            <div className="grid gap-y-5">
              <label
                className="font-bold text-ble-900 text-base md:text-xl"
                htmlFor="name"
              >
                Nama Lengkap
              </label>
              <input
                className="px-3 outline-ble-100 text-ble-900 text-base md:text-xl w-full h-[50px] rounded-[10px]"
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
                className="px-3 outline-ble-100 text-ble-900 text-base md:text-xl w-full h-[50px] rounded-[10px]"
                type="email"
                name="email"
                required
              ></input>
            </div>
            <div className="grid gap-y-5">
              <label
                className="font-bold text-ble-900 text-base md:text-xl"
                htmlFor="phone"
              >
                No. Telepon
              </label>
              <input
                className="px-3 outline-ble-100 text-ble-900 text-base md:text-xl w-full h-[50px] rounded-[10px]"
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
              <DatePicker
                name="tanggal"
                format="YYYY-MM-DD"
                disabledDate={disabledDate}
                className="border-none rounded-[10px] h-[50px]"
              />
            </div>
            <button
              type="submit"
              className="grid place-items-center col-span-1 md:col-span-2 place-self-center bg-ble-400 hover:bg-ble-500 active:bg-ble-600 text-ble-50 h-[63px] font-bold text-base md:text-2xl rounded-[10px] w-full"
            >
              SELESAI
            </button>
          </form>
        </>
      )}
    </main>
  );
}
