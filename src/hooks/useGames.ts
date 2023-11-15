import useData from "./useData"
import { Game, Genre } from "@/lib/schema"

export default function useGames(selectedGenre: Genre | null) {
  return useData<Game>("/games", { params: { genres: selectedGenre?.slug } }, [selectedGenre?.slug])
}
