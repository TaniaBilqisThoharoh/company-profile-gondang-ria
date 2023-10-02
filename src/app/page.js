import WahanaSec from './components/beranda/WahanaSec'
import FasilitasSec from './components/beranda/FasilitasSec'
import BottomSec from './components/beranda/BottomSec'

export default function Home() {
  return (
    <main className="bg-white flex w-100% min-h-screen flex-col items-center justify-between">
      {/* SRC GAMBAR NANTI DIGANTI SESUAI YG ADA DI DATABASE */}
      <img className="max-w-screen" src="../../Images/Hero.jpeg" alt="Gondang Ria Photo" />
      <WahanaSec />
      <FasilitasSec />
      <BottomSec />
    </main>
  )
}
