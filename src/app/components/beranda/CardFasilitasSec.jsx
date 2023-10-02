import FasCardComp from "../FasCardComp";

export default function CardFasilitasSec() {
  return (
    <section className="w-screen flex flex-col justify-center align-center py-10 px-20">
        <h2 className=" font-bold text-[4rem] text-ble-600 text-center">Jadikan Liburan Anda Mengesankan di Gondang Ria!</h2>
        <section className="flex justify-between w-full">
          <FasCardComp />
          <FasCardComp />
          <FasCardComp />
        </section>
    </section>
  );
}
