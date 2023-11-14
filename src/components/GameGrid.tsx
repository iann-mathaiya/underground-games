import apiClient from "@/services/api-client"
import { Fragment, useEffect, useState } from "react"

interface Game {
  id: number
  name: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message))
  }, [])

  return (
    <Fragment>
      {error && <p className="text-red-500 text-base font-medium">{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </Fragment>
  )
}
