import Link from "next/link";

export default function FasilitasCard({ id, name, image }) {
    return (
        <div className="fasilitas-card-admin border-2 border-white rounded-[15px] bg-black overflow-hidden group">
          <Link as={`/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas/edit-fasilitas/${id}`} href={`/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas/edit-fasilitas/id`}>
            
              <img
                className="object-cover w-full h-[170px] group-hover:opacity-80 transition-all"
                src={`http://127.0.0.1:8000/images/${image}`}
                alt={name}
              />
            
            <div className="h-[65px] bg-ble-50 flex justify-center items-center w-full py-[5px] group-hover:opacity-80 transition-all">
              <h3 className="text-ble-600 font-bold text-base xl:text-xl">
                {name}
              </h3>
            </div>
          </Link>
        </div>
    )
}