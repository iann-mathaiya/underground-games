import { GameQuery } from "@/lib/schema"

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`

  return (
    <h1 className='text-2xl font-semibold text-gray-900 capitalize'>
      {heading}
    </h1>
  )
}
