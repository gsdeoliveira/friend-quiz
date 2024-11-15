import { cardsMock } from '@/mock/data'
import { SingleCard } from './singleCard'

export const Cards = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl md:text-4xl font-bold text-zinc-100">
        Escolha um quiz para continuar
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
        {cardsMock.map((card) => (
          <SingleCard key={card.firstName} {...card} />
        ))}
      </div>
    </div>
  )
}
