export interface Genre {
  id: number
  name: string
  slug: string
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
  metacritic: number
  background_image: string
  parent_platforms: { platform: Platform }[]
}
