export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  id: number
  name: string
  rating: number
  rating_top: number
  metacritic: number
  background_image: string
  parent_platforms: { platform: Platform }[]
}

export interface GameQuery {
  sortOrder: string
  searchText: string
  genre: Genre | null
  platform: Platform | null
}