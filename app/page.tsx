import { Cards } from '@/components/cards'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-5 md:px-10 lg:px-20 py-10">
        <Cards />
      </main>
    </>
  )
}
