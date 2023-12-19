import Link from "next/link";

export default function AddFasCard() {
  return (
    <div className="fasilitas-card-admin rounded-[15px] overflow-hidden group hover:scale-105 active:scale-100 transition-all">
      <Link
        className="grid place-items-center bg-gradient-to-br min-h-[234.09px] h-full from-ble-600 to-ble-50 p-[3px]"
        href={`/2aefc34200a294a3cc7db81b43a81873/admin/fasilitas/tambah-fasilitas`}
      >
        <div className="grid place-items-center bg-ble-50 w-full h-full rounded-[12px]">
          <div className="grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M32.9163 32.9167H44.583C45.3566 32.9167 46.0984 32.6094 46.6454 32.0624C47.1924 31.5154 47.4997 30.7736 47.4997 30C47.4997 29.2265 47.1924 28.4846 46.6454 27.9376C46.0984 27.3906 45.3566 27.0833 44.583 27.0833H32.9163V15.4167C32.9163 14.6431 32.6091 13.9013 32.0621 13.3543C31.5151 12.8073 30.7732 12.5 29.9997 12.5C29.2261 12.5 28.4843 12.8073 27.9373 13.3543C27.3903 13.9013 27.083 14.6431 27.083 15.4167V27.0833H15.4163C14.6428 27.0833 13.9009 27.3906 13.3539 27.9376C12.807 28.4846 12.4997 29.2265 12.4997 30C12.4997 30.7736 12.807 31.5154 13.3539 32.0624C13.9009 32.6094 14.6428 32.9167 15.4163 32.9167H27.083V44.5833C27.083 45.3569 27.3903 46.0988 27.9373 46.6457C28.4843 47.1927 29.2261 47.5 29.9997 47.5C30.7732 47.5 31.5151 47.1927 32.0621 46.6457C32.6091 46.0988 32.9163 45.3569 32.9163 44.5833V32.9167ZM12.4997 0.833344H47.4997C50.5939 0.833344 53.5613 2.06251 55.7493 4.25043C57.9372 6.43836 59.1663 9.40582 59.1663 12.5V47.5C59.1663 50.5942 57.9372 53.5617 55.7493 55.7496C53.5613 57.9375 50.5939 59.1667 47.4997 59.1667H12.4997C9.40548 59.1667 6.43802 57.9375 4.2501 55.7496C2.06217 53.5617 0.833008 50.5942 0.833008 47.5V12.5C0.833008 9.40582 2.06217 6.43836 4.2501 4.25043C6.43802 2.06251 9.40548 0.833344 12.4997 0.833344Z"
                fill="url(#paint0_radial_127_535)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_127_535"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-66 -22) rotate(34.7462) scale(248.271 221.263)"
                >
                  <stop stop-color="#2D719F" />
                  <stop
                    offset="0.799427"
                    stopColor="#F2FAFF"
                    stopOpacity="0.9"
                  />
                </radialGradient>
              </defs>
            </svg>

            <h3 className="text-ble-600 font-normal text-base xl:text-xl">
              Tambah Fasilitas
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
