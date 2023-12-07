"use client";

import { DatePicker } from "antd";
import { useEffect } from "react";
/* import { midtransClient } './midtrans-client-nodejs/index.js'; */

export default function DataDiri() {
  const jumlahTiket = sessionStorage.getItem("jumlah_tiket")
  const subtotal = sessionStorage.getItem("subtotal")
  const disabledDate = (current) => {
    let date = new Date();

    date.setDate(date.getDate() - 1);
    return current < date || new Date(current).getDay() === 5;
  };

  const dataUpload = (formData) => {
    const dataHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
    const nama = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const tgl = formData.get("tanggal")
    const hari = new Date()
  
    const hariBerangkat = dataHari.filter((item, index) => hari.getDay(tgl) === index)

    formData.append("nama", nama)
    formData.append("email", email)
    formData.append("no_telepon", phone)
    formData.append("tanggal", hariBerangkat[0])

  };

  const snapToken = '8a537595-228b-4187-87b5-64abce59f9ae';
  let snap = new midtransClient.Snap({
    isProduction : false,
    serverKey : 'SB-Mid-server-WhCkOGXvIKSEMKIEzklyKqBB',
    clientKey : 'SB-Mid-client-ue4OhOdT44EWgk4W'
});

/*   useEffect(() => {
    snap.pay(snapToken, {
      // Optional
      onSuccess: function(result){
        // You may add your own js here, this is just example
        document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
      },
      // Optional
      onPending: function(result){
        // You may add your own js here, this is just example
         document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
      },
      // Optional
      onError: function(result){
        // You may add your own js here, this is just example
         document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
      }
    });
  }, [snap]) */

  return (
    <main
      id="pesan-tiket-page"
      className="flex bg-white w-screen flex-col items-center gap-10 pb-10"
    >
      <div id="result-json"></div>
      <div className="z-10 w-full h-[20vw] max-h-[140px] pl-[50px] md:pl-[150px] bg-title-grey justify-start items-center inline-flex">
        <h1 className="text-ble-900 text-2xl md:text-5xl font-bold">
          Data Diri
        </h1>
      </div>
      <form
        action={dataUpload}
        className="grid grid-cols-1 md:grid-cols-2 gap-y-[41px] gap-x-[50px] w-[95vw] md:w-[70vw] bg-[#D7E8F4] backdrop-blur-[21px] bg-opacity-[50%] pt-[60px] pb-[35px] px-[50px] rounded-[20px] border-[3px] border-white"
      >
        <div className="rounded-2xl bg-gradient-to-tr from-ble-600 from-25% via-ble-500 via-70% to-ble-300 text-ble-50 shadow-xl p-4">
          <p className="text-base">
            Jumlah tiket Anda:
          </p>
          <h3 className="text-4xl font-bold">{jumlahTiket}</h3>
        </div>
        <div className="rounded-2xl bg-gradient-to-tr from-ble-600 from-25% via-ble-500 via-70% to-ble-300 text-ble-50 shadow-xl p-4">
          <p className="text-base">
            Subtotal:
          </p>
          <h3 className="text-2xl font-bold">{subtotal}</h3>
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
            format="DD-MM-YYYY"
            disabledDate={disabledDate}
            className="border-none rounded-[10px] h-[50px]"
          />
          {/* <label className="font-bold text-ble-900 text-base md:text-xl" htmlFor="tanggal">
            Tanggal
          </label>
          <input
            className="px-3 text-ble-900 text-base md:text-xl w-full h-[50px] rounded-[10px]"
            type="date"
            name="tanggal"
            required
          ></input> */}
        </div>
        <button
          /* href={`/pesan-tiket`} */
          type="submit"
          className="grid place-items-center col-span-1 md:col-span-2 place-self-center bg-ble-400 hover:bg-ble-500 active:bg-ble-600 text-ble-50 h-[63px] font-bold text-base md:text-2xl rounded-[10px] w-full"
        >
          SELESAI
        </button>
      </form>
    </main>
  );
}
