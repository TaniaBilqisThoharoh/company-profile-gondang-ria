export default function InfoBox({ title, desc }) {
  let classStyle = "";
  switch (title) {
    case "Lokasi":
      classStyle = "left-[5%] top-[10%] max-w-[280px] lg:max-w-[429.83px]";
      break;
    case "Email":
      classStyle = "left-[15%] bottom-[18%] max-w-[233.9px]";
      break;
    case "Telepon":
      classStyle = "right-[15%] lg:right-[25%] bottom-[8%] max-w-[183.79px]";
      break;
    case "Sosial Media":
      classStyle = "right-[5%] bottom-[43%] max-w-[192px]";
      break;
    default:
      break;
  }

  return (
    <div
      className={`info-box grid md:absolute ${classStyle} rounded-t-[15px] rounded-b-[20px] overflow-hidden`}
    >
      <h2 className="font-bold bg-white text-ble-600 text-base lg:text-xl py-[10px] px-[20px]">
        {title}
      </h2>
      <div className="relative bg-gradient-to-br from-white from-10% to-ble-500 grid place-items-center overflow-hidden">
        {title === "Sosial Media" && (
          <div className="absolute z-0 bg-ble-100 m-[1px] rounded-b-[19px]">
            <p
              className={`${
                title === "Sosial Media" && "flex gap-[30px]"
              } hubungi-kami font-normal bg-transparent text-ble-700 text-lg p-[20px] blur-[21px]`}
            >
              {desc}
            </p>
          </div>
        )}
        <div className={`z-10 bg-ble-100 m-[1px] rounded-b-[19px] ${title === "Sosial Media" ? "bg-opacity-10" : "bg-opacity-90"} bg-blur-[21px]`}>
          <p
            className={`${
              title === "Sosial Media" && "flex gap-[30px]"
            } hubungi-kami font-normal bg-transparent text-ble-700 ${title === "Email" ? "hover:text-ble-500 active:text-ble-300 px-[3px] py-[20px]" : "p-[20px]"} text-sm lg:text-lg`}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
