export default function FormValidasi({ cekTokenHandler }) {
    return  (
        <form
          onSubmit={cekTokenHandler}
          className="flex flex-col gap-[30px] w-full md:gap-[50px] md:w-[60%]"
        >
          <div className="flex flex-col items-center gap-[40px] w-full">
            <h3 className="text-ble-950 text-xl md:text-4xl font-black">
              Verifikasi Token
            </h3>
            <p>
              Silakan masukkan kode verifikasi yang telah dikirim melalui email
              untuk memverifikasi identitas Anda
            </p>
          </div>
          <div className="grid">
            <div>
              <label
                htmlFor="token"
                className="text-login_fontClr font-normal text-base md:text-2xl text-opacity-80"
              >
                Token verifikasi
              </label>
              <input
                required
                type="number"
                name="token"
                onWheel={(e) => e.target.blur()}
                className="remove-arrow w-full text-grn-950 font-normal text-2xl border-b-2 border-grn-950 p-[10px] outline-ble-300 rounded-[10px]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-ble-400 text-base font-normal text-ble-50 rounded-[10px] py-[5px] px-[15px] md:text-xl md:py-[10px] md:px-[25px] place-self-center hover:bg-ble-500 active:bg-ble-600 active:scale-95 transition-all"
          >
            Konfirmasi
          </button>
        </form>
    )
}