import { Fragment } from "react"
import useGames from "@/hooks/useGames"

export default function GameGrid() {
  const { games, error } = useGames()

  return (
    <Fragment>
      {error && <p className='text-red-500 text-base font-medium'>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </Fragment>
  )
}
