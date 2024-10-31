import imageMock from '@/public/profile.webp'
import { SingleCard } from './singleCard'

export const Cards = () => {
  const cardsMock = [
    {
      name: 'Fernando Nogueira',
      tags: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
      color: '#AF3EE9',
      image: imageMock,
    },
    {
      name: 'Guilherme Lopes',
      tags: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
      color: '#3293C0',
      image: imageMock,
    },
    {
      name: 'Ana Carolina',
      tags: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
      color: '#CAAB2D',
      image: imageMock,
    },
    {
      name: 'Victor Geovanne',
      tags: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
      color: '#50A465',
      image: imageMock,
    },
  ]
  return (
    <div className="space-y-10">
      <h1 className="text-3xl md:text-5xl font-bold text-zinc-100">
        Escolha um quiz para continuar
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
        {cardsMock.map((card) => (
          <SingleCard key={card.name} {...card} />
        ))}
      </div>
    </div>
  )
}
