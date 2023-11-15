import useData from "./useData"
import { Genre } from "@/lib/schema"

export default function useGenres() {
  return useData<Genre>('/genres')
}
