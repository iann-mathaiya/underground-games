import useData from "./useData"
import { Game } from "@/lib/schema"

export default function useGames() {
  return useData<Game>('/games')
}
