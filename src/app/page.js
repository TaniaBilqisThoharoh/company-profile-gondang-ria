// "use client" menandakan bahwa file ini dijalankan di client side (browser pengguna)
"use client";

// Ini adalah daftar import yang dibutuhkan untuk halaman ini
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import axios from "axios";
import { baseApi, baseUrl } from "./context/ApiUrl";
import WahanaSec from "./components/beranda/WahanaSec";
import FasilitasSec from "./components/beranda/FasilitasSec";
import BottomSec from "./components/beranda/BottomSec";
import { useAppContext } from "./context/AppWrapper";
import Spinner from "./components/Spinner";

// Halaman Beranda
export default function Home() {
  // Memanggil context dari useAppContext() untuk mengendalikan state/kondisi loading
  const { isLoading, hideLoading, isFetching, showFetching, hideFetching } =
    useAppContext();

  // Ini mendeklarasikan useState hooks untuk menyimpan gambar preview dari server
  const [previewsFromServer, setPreviewsFromServer] = useState();

  // Fungsi untuk mengambil data
  /* Fungsi biasa dieksekusi secara berurutan, mengembalikan nilai secara langsung,
  sementara async function menggunakan kata kunci `async`, memungkinkan operasi-asinkron tanpa menunggu selesai,
  mengembalikan promise, dan menggunakan `await` untuk menangani operasi-asinkron secara bersih. */

  /* Function ambildata berfungsi untuk mengambil data beranda berupa gambar hero */
  const ambilData = async () => {
    /* ini memanggil function showfetching dari useappcontext, fungsinya adalah untuk memberi tahu website bahwa
    ketika ambil data dari server maka statenya adalah loading */
    showFetching();
    // Ini mendeklarasikan variabel url dengan value endpoint API beranda
    const url = `${baseApi}/beranda`;

    /* fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(heroData => {
      setPreviewsFromServer(heroData.hero)
      console.log('User Data:', heroData);
    })
    .catch(error => {
      window.alert(error);
      console.error('Error:', error);
    }); */

    // Memanggil axios dengan method GET
    await axios
      .get(url)
      .then(function (response) {
        // Memanggil setPreviewsFromServer() untuk memasukkan nilai yang didapat dari response
        setPreviewsFromServer(response.data.hero);
        // Kenapa harus response.data.hero? Karena parameter response tipenya adalah object,
        // sehingga untuk mengambil value yang diinginkan kita harus menggunakan tanda titik (.)
      })
      .catch(function (error) {
        // Jika terjadi error maka fungsi ini dipanggil
        // Ini memanggil fungsi alert dan menampilkan pesan error dari parameter error
        console.log(error)
        window.alert(error);
      });
    hideFetching();
  };

  useEffect(() => {
    // Fungsi di bawah ini menunda waktu eksekusi percabangan if yang ada di dalamnya selama 1 detik/1000 milidetik
    isFetching === false &&
      previewsFromServer &&
      setTimeout(() => {
        // Fungsi ini digunakan untuk mengubah kondisi loading menjadi false dan menyembunyikan indikator loading
        hideLoading();
      }, "2000");
  }, [previewsFromServer, isLoading, isFetching]);

  /* Ini merupakan React Hook menangani efek samping (side effects) dalam komponen fungsional.
  Efek samping adalah aksi-aksi yang terjadi di luar render normal komponen, seperti berlangganan data, berlangganan kejadian (events), atau melakukan operasi yang membutuhkan waktu. */
  useEffect(() => {
    // Mengeksekusi fungsi ambilData() saat komponen pertama kali dimuat
    ambilData();
  }, []);

  return (
    <main className="bg-white flex w-100% min-h-screen flex-col items-center justify-between">
      {/* Dibawah ini merupakan ternary operation yang memeriksa keadaan (state) apakah sedang loading atau tidak */}
      {isLoading ? (
        // Jika benar (sedang loading) maka mengembalikan component Spinner
        <Spinner />
      ) : (
        //Jika salah (tidak sedang loading) maka mengembalikan ternary operation di bawah ini
        <>
          {/* Ternary operation ini memeriksa keadaan (state) apakah data previews sudah diambil atau belum */}
          {previewsFromServer ? (
            // Jika sudah maka mengembalikan tag img ini
            <img
              className="max-w-screen h-[52vw]"
              src={`${baseUrl}/images/${previewsFromServer}`}
              alt="Gondang Ria Photo"
            />
          ) : (
            // Jika belum maka mengembalikan tag div dan component BarLoader ini
            <div className="min-h-[88.7vh] w-full grid place-items-center">
              <BarLoader color="#2D719F" height={5} width={500} />
            </div>
          )}

          {/* Ini memanggil component WahanaSec (Wahana Section) */}
          <WahanaSec />
          {/* Ini memanggil component FasilitasSec (Fasilitas Section) */}
          <FasilitasSec />
          {/* Ini memanggil component BottomSec (Bottom Section) */}
          <BottomSec />
        </>
      )}
    </main>
  );
}
