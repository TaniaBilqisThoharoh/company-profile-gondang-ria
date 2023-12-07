export default function Ticket({ harga }) {

  return (
    <div className="relative before:content-[''] before:absolute before:top-[-14.5px] before:right-[108px] before:sm:right-[151px] before:w-[29px] before:h-[29px] before:rounded-full before:bg-white after:content-[''] after:absolute after:bottom-[-14.5px] after:sm:right-[151px] after:right-[108px] after:w-[29px] after:h-[29px] after:rounded-full after:bg-gradient-to-b after:from-[#F5F9FC] after:to-transparent after:from-50% after:to-50% max-w-[46.875rem] bg-ble-600 w-[95vw] h-[50vw] max-h-[18.75rem] rounded-[25px] flex justify-end items-center">
      <div className="grid grid-cols-2 grid-rows-2 max-w-[33.375rem] max-h-[15.625rem] border-[3px] mx-[25px] border-ble-200 rounded-[20px] place-items-center">
        <img
          className="w-[280px] max-h-[245px] row-span-2"
          src="../../../Bg-tiket.png"
          alt=""
        />
        <h3 className="font-bold text-base sm:text-[2rem] leading-7 md:leading-10 text-center text-ble-50">
          GONDANG RIA WATERPARK
        </h3>
        {harga ? (
          <h3 className="font-bold text-lg sm:text-[2.5rem] text-ble-50 text-center">
            Rp {harga}*
          </h3>
        ) : (
          <div className="grid place-items-center z-30 w-full min-h-screen h-full">
            <div
              role="status"
              className="grid place-items-center w-[8vw] h-[8vw] md:w-[4vw] md:h-[4vw]"
            >
              <svg
                aria-hidden="true"
                className="inline w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] text-gray-200 animate-spin dark:text-gray-600 fill-ble-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div className="">
        <svg
          className="hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="234"
          viewBox="0 0 4 234"
          fill="none"
        >
          <path
            d="M2 2L2 232"
            stroke="#398EC7"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="16 16"
          />
        </svg>
        <svg
          className="block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="150"
          viewBox="0 0 4 234"
          fill="none"
        >
          <path
            d="M2 2L2 232"
            stroke="#398EC7"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="16 16"
          />
        </svg>
      </div>
      <div className="flex flex-col pt-3 mx-[25px] w-[40vw] h-[38vw] max-w-[115px] max-h-[250px] border-[3px] border-ble-200 rounded-[20px] text-center item-center justify-center">
        <p className="leading-[2rem] tracking-tighter font-bold text-2xl md:text-[3rem] text-ble-50 -rotate-90">
          T
        </p>
        <p className="leading-[2rem] tracking-tighter font-bold text-2xl md:text-[3rem] text-ble-50 -rotate-90">
          E
        </p>
        <p className="leading-[2rem] tracking-tighter font-bold text-2xl md:text-[3rem] text-ble-50 -rotate-90">
          K
        </p>
        <p className="leading-[2rem] tracking-[-5rem] font-bold text-2xl md:text-[3rem] text-ble-50 -rotate-90">
          I
        </p>
        <p className="leading-[2rem] tracking-[-5rem] font-bold text-2xl md:text-[3rem] text-ble-50 -rotate-90">
          T
        </p>
      </div>
    </div>
  );
}
