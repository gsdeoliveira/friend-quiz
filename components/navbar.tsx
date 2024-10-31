'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { useState } from 'react'

import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { FaRegUser } from 'react-icons/fa'

export const Navbar = () => {
  const logged = false

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <nav className="flex items-center justify-between bg-zinc-900 px-5 md:px-10 lg:px-20 py-5">
      <div>
        <Image src="/logo.svg" alt="Logo" width={70} height={70} />
      </div>
      
      <div className="text-white hidden md:block">
        <ul className="flex space-x-4 text-lg">
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

      <div className='md:hidden'>
        {!menuIsOpen && (
          <RxHamburgerMenu size={24} color='white' onClick={() => setMenuIsOpen((prev) => !prev)} />
        )}
      </div>

      <div className={`fixed top-0 bottom-0 right-0 w-full z-10 bg-zinc-950
        transform transition-transform duration-300 ease-in-out ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col p-5 w-full h-full'>
          <div className='self-end' onClick={() => setMenuIsOpen(false)}>
            <IoClose size={30} color='white' />
          </div>
          <div className='text-white w-full h-full flex flex-col'>
            <div className='flex items-center justify-center flex-1'>
              <ul className="space-y-4 text-center text-4xl">
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

            <div className='flex gap-3 w-full'>
              <Button className='flex-1 text-lg font-semibold py-6'>Registrar</Button>
              <Button variant={'secondary'} className='flex-1 text-lg font-semibold py-6'>Entrar</Button>
            </div>
          </div>
        </div>
    </div>

      <div className='hidden md:block'>
        <Button variant={`${logged ? 'default' : 'secondary'}`}  className="text-lg font-semibold px-10 py-5">
          {logged && (
            <>
              <FaRegUser className='flex-1 text-lg font-semibold py-5'/>
              <span className='text-lg font-semibold'>Gabriel</span>
            </>
          )}

          {!logged && (
            <Link href={''}>Entrar</Link>
          )}

        </Button>
      </div>
    </nav>
  )
}
