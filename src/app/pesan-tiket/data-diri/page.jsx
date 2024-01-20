"use client";

import Link from "next/link";
import axios from "axios";
import { DatePicker } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/AppWrapper";
import { FaChevronLeft } from "react-icons/fa6";
import Spinner from "@/app/components/Spinner";
import { baseApi, baseUrl } from "@/app/context/ApiUrl";

export default function DataDiri() {
  const { isLoading, hideLoading, showLoading, isFetching, showFetching, hideFetching } =
    useAppContext();
  const [jumlahTiket, setJumlahTiket] = useState();
  const [subtotal, setSubtotal] = useState();

  const router = useRouter();

  /* Function disabledate berfungsi untuk menonaktifkan tanggal sesudah tanggal hari ini dan 
  pada hari jumat serta menonaktifkan hari ini jika melewati jam operasional yaitu pukul 17.00 sore */
  const disabledDate = (current) => {
    let date = new Date();
    const jam = new Date().getHours();

    if (jam < 8 || jam > 16) {
      date.setDate(date.getDate());
      return current <= date || new Date(current).getDay() === 5;
    } else {
      date.setDate(date.getDate() - 1);
      return current < date || new Date(current).getDay() === 5;
    }
  };

  /* Function kirimemail berfungsi untuk mengirim tiket melalui email */
  const kirimEmail = async (order_id) => {
    const urlKirimTiket = `${baseUrl}/send-mail-ticket/${
      order_id && order_id
    }`;

    await fetch(urlKirimTiket, { mode: "no-cors" });
  };

  /* Function cobabayar berfungsi untuk memanggil fungsi pay dari midtrans untuk melakukan transaksi */
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

  /* Function strodatadiri berfungsi untuk menyimpan data diri pengunjung di database */
  const storeDataDiri = async (formData, order_id) => {
    formData.append("order_id", order_id);
    const urlPengunjung = `${baseApi}/pengunjung`;
    await axios
      .post(urlPengunjung, formData)
      .then((response) => {
        /* respon jika sukses */
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  /* Function dataupload berfungsi untuk membuat token pembayaran dari midtrans dengan cara mengupload data diri, 
  jumlah tiket, dan subtotal untuk menguplaod ke database */
  const dataUpload = async (e) => {
    e.preventDefault();
    showFetching();
    const formData = new FormData();
    const nama = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const tgl = e.target[3].value;

    formData.append("nama", nama);
    formData.append("email", email);
    formData.append("jumlah_tiket", jumlahTiket);
    formData.append("subtotal", subtotal);
    formData.append("no_telepon", phone);
    formData.append("tanggal", tgl);

    const urlMidtrans = `${baseApi}/checkout-midtrans`;

    /* fetch(urlMidtrans, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(newUserData => {
        
        console.log('New User Data:', newUserData);
      })
      .catch(error => {
        console.error('Error:', error);
      }); */

      
      /* Midtrans */
    await axios
      .post(urlMidtrans, formData)
      .then(function (response) {
        storeDataDiri(formData, response.data.orderId);
        cobaBayar(response.data.token, response.data.orderId);
      })
      .catch(function (error) {
        window.alert("Mohon maaf, telah terjadi kesalahan jaringan");
      });
    hideFetching();
  };

  useEffect(() => {
    // Fungsi di bawah ini menunda waktu eksekusi percabangan if yang ada di dalamnya selama 1 detik/1000 milidetik
    isFetching === false &&
      jumlahTiket &&
      setTimeout(() => {
        // Fungsi ini digunakan untuk mengubah kondisi loading menjadi false dan menyembunyikan indikator loading
        hideLoading();
      }, "2000");
  }, [jumlahTiket, isLoading, isFetching]);

  useEffect(() => {
    setJumlahTiket(sessionStorage && sessionStorage.getItem("jumlah_tiket"));
    setSubtotal(sessionStorage && sessionStorage.getItem("subtotal"));
    const midtransScriptUrl = "https://app.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    const myMidtransClientKey = "Mid-client-8yTL-HtfpZCJz2sZ";
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
          <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center gap-2 md:gap-4 inline-flex">
            <Link href={"/pesan-tiket"} onClick={() => showLoading()}>
              <FaChevronLeft className="w-5 h-5 md:w-9 md:h-9 fill-ble-950 text-ble-950" />
            </Link>
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
