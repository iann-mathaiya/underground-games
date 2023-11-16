import { Fragment } from "react"
import GameCard from "./GameCard"
import useGames from "@/hooks/useGames"
import { GameQuery } from "@/lib/schema"
import GameCardSkeleton from "./GameCardSkeleton"

interface Props {
  gameQuery: GameQuery
}

export default function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <Fragment>
      {error && <p className='text-red-500 text-base font-medium'>{error}</p>}

      <ul className='list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {games.length === 0 && (
          <div className=' col-span-4 flex flex-col items-center justify-center gap-4'>
            <img
              className='w-40 h-40 object-cover object-center'
              src='/src/assets/old-school-game-console.webp'
              alt='Old Game Console'
            />
            <p className='text-lg lg:text-base text-slate-500 font-normal'>
              No games available
            </p>
            <button
              className='py-1.5 px-3 text-sm text-orange-500 border border-orange-500 bg-orange-50 hover:bg-orange-500 hover:text-white rounded-lg'
              onClick={() => location.reload()}
            >
              {" "}
              Reload Page
            </button>
          </div>
        )}

        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </Fragment>
  )
}
