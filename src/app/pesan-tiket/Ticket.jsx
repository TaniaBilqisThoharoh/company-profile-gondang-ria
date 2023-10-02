export default function Ticket() {
    return (
        <div className="relative before:content-[''] before:absolute before:top-[-14.5px] before:right-[151px] before:w-[29px] before:h-[29px] before:rounded-full before:bg-white after:content-[''] after:absolute after:bottom-[-14.5px] after:right-[151px] after:w-[29px] after:h-[29px] after:rounded-full after:bg-gradient-to-b after:from-[#F5F9FC] after:to-transparent after:from-50% after:to-50% max-w-[46.875rem] bg-ble-600 h-[18.75rem] rounded-[25px] flex justify-end items-center">
        <div className="grid grid-cols-2 grid-rows-2 max-w-[33.375rem] max-h-[15.625rem] border-[3px] mx-[25px] border-ble-200 rounded-[20px]">
          <img
            className="w-[280px] h-[245px] row-span-2"
            src="../../../Bg-tiket.png"
            alt=""
          />
          <h3 className="font-bold text-[2rem] text-center pt-5 pr-7 text-ble-50">
            GONDANG RIA WATERPARK
          </h3>
          {/* HARGA TIKET DISESUAIKAN DENGAN DATABASE */}
          <h3 className="font-bold text-[2.5rem] text-ble-50 pt-5 pr-7 text-center">
            Rp. 15.000
          </h3>
        </div>
        <div className="">
          <svg
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
        </div>
        <div className="flex flex-col pt-3 mx-[25px] min-w-[115px] min-h-[250px] border-[3px] border-ble-200 rounded-[20px] text-center item-center justify-center">
          <p className="leading-[2rem] tracking-tighter font-bold text-[3rem] text-ble-50 -rotate-90">T</p>
          <p className="leading-[2rem] tracking-tighter font-bold text-[3rem] text-ble-50 -rotate-90">E</p>
          <p className="leading-[2rem] tracking-tighter font-bold text-[3rem] text-ble-50 -rotate-90">K</p>
          <p className="leading-[2rem] tracking-[-5rem] font-bold text-[3rem] text-ble-50 -rotate-90">I</p>
          <p className="leading-[2rem] tracking-[-5rem] font-bold text-[3rem] text-ble-50 -rotate-90">T</p>
        </div>
      </div>
    )
}