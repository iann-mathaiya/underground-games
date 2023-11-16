import useData from "./useData"
import { Game, GameQuery } from "@/lib/schema"

export default function useGames(gameQuery: GameQuery) {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  )
}
