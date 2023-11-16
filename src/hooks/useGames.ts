import useData from "./useData"
import { Game, Genre, Platform } from "@/lib/schema"

export default function useGames(
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  )
}
