import { Game } from "@/hooks/useGames"

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  return (
    <li className='group bg-slate-50 border border-slate-200 rounded-xl'>
      <div className='overflow-hidden rounded-xl'>
        <img
          className=' rounded-md transition ease-in-out group-hover:scale-110 duration-500 delay-150'
          src={game.background_image}
          alt={`${game.name} cover image`}
        />
      </div>

      <div className="p-2">
        <h2 className='text-lg lg:text-base text-gray-800 font-medium'>{game.name}</h2>
      </div>
    </li>
  )
}
