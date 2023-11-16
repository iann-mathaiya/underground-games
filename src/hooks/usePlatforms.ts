import useData from "./useData"
import { Platform } from "@/lib/schema"

export default function usePlatforms() {
  return useData<Platform>('/platforms/lists/parents')
}