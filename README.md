This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<main
      id="pesan-tiket-page"
      className="flex bg-white min-h-[800px] w-screen flex-col items-center gap-[7rem]"
    >
      <div className="z-10 w-full h-[140px] pl-[150px] py-10 bg-title-grey justify-start items-center inline-flex">
        <h1 className="text-ble-900 text-5xl font-bold">Pesan Tiket</h1>
      </div>
      <div className="max-w-[46.875rem] bg-ble-600 h-[18.75rem] rounded-[25px] flex items-center">
        <div id="GR-tiket" className="relative border-[3px] border-ble-200 rounded-[20px]">
          <img
            className="absolute -top-2 -left-10 min-w-[280px] h-[250px] row-span-2"
            src="../../../Bg-tiket.png"
            alt=""
          />
          <div className="pl-48 py-5 w-[524px]">
            <h3 className="font-bold text-[2.5rem] text-ble-50 place-self-center text-center">
              GONDANG RIA WATERPARK
            </h3>
            {/* HARGA TIKET DISESUAIKAN DENGAN DATABASE */}
            <h3 className="font-bold text-[3rem] text-ble-50 place-self-top text-center">
              Rp. 15.000
            </h3>
          </div>
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
        <div className="grid place-items-center m-5 border-[3px] border-ble-200 rounded-[20px]">
          <h3 className="font-bold text-[3rem] text-ble-50 place-self-top text-center -rotate-90">
            TIKET
          </h3>
        </div>
      </div>
    </main>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
