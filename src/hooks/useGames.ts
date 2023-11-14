import { useEffect, useState } from "react"
import apiClient from "@/services/api-client"

interface Game {
  id: number
  name: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

export default function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message))
  }, [])
  
  return { games, error }
}
