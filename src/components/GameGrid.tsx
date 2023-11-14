import { Fragment } from "react"
import useGames from "@/hooks/useGames"
import GameCard from "./GameCard"

export default function GameGrid() {
  const { games, error } = useGames()

  return (
    <Fragment>
      {error && <p className='text-red-500 text-base font-medium'>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {games.map((game) => (
         <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </Fragment>
  )
}
