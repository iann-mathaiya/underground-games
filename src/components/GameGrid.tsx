import { Fragment } from "react"
import GameCard from "./GameCard"
import useGames from "@/hooks/useGames"
import GameCardSkeleton from "./GameCardSkeleton"
import { Genre, Platform } from "@/lib/schema"

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}

export default function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <Fragment>
      {error && <p className='text-red-500 text-base font-medium'>{error}</p>}

      <ul className='list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </Fragment>
  )
}
