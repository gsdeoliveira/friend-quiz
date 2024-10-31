import { Cards } from '@/components/cards'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-20 py-10">
        <h1 className="text-5xl font-bold text-zinc-100">
          Escolha um quiz para continuar..
        </h1>
        <Cards />
      </main>
    </>
  )
}
