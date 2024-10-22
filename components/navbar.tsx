import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-zinc-900 px-20 py-5">
      <div>
        <Image src="/logo.svg" alt="Logo" width={70} height={70} />
      </div>
      <div className="text-white">
        <ul className="flex space-x-4">
          <li>
            <Link href="/fernando">Fernando</Link>
          </li>
          <li>
            <Link href="/guilherme">Guilherme</Link>
          </li>
          <li>
            <Link href="/carol">Carol</Link>
          </li>
          <li>
            <Link href="/victor">Victor</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button className="text-base">Gabriel</Button>
      </div>
    </nav>
  )
}
