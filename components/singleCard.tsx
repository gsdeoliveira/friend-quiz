'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { Button } from './ui/button'
import { useToast } from '@/hooks/use-toast'

interface SingleCardProps {
  firstName: string
  secondName: string
  tags: string[]
  color: string
  image: StaticImageData
}

export const SingleCard = (card: SingleCardProps) => {
  const { toast } = useToast()

  return (
    <div className="flex flex-col xl:flex-row bg-zinc-950 h-full rounded-lg">
      <div className="relative w-full h-80 xl:w-2/5 rounded-t-lg xl:rounded-t-none xl:rounded-l-lg">
        <Image
          priority
          placeholder="blur"
          src={card.image}
          alt={card.firstName}
          fill
          className="rounded-t-lg xl:rounded-tr-none xl:rounded-l-lg object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-5 justify-between p-3 sm:p-5 text-zinc-100 w-full h-full">
        <h2 className="font-semibold text-lg md:text-2xl">
          {card.firstName + ' ' + card.secondName}
        </h2>
        <ul className="space-y-2">
          {card.tags.map((tag) => (
            <li key={tag}>
              <div className="flex items-center gap-2">
                <span
                  style={{ backgroundColor: card.color }}
                  className="inline-block w-1 h-5"
                ></span>
                <p>{tag}</p>
              </div>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => {
            toast({
              variant: 'success',
              title: 'Conta criada com sucesso!',
            })
          }}
          style={{ backgroundColor: card.color }}
          className="uppercase p-6 w-full text-md md:text-xl font-semibold hover:brightness-90 transition"
        >
          Começar
        </Button>
      </div>
    </div>
  )
}
