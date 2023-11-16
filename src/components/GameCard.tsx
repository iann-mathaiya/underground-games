import { Game } from "@/lib/schema"
import CriticScore from "./CriticScore"
import PlatformIconList from "./PlatformIconList"
import getCroppedImageUrl from "@/services/image-url"
import Emoji from "./Emoji"

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  return (
    <li className='p-1 group bg-slate-50 border border-slate-200 rounded-xl'>
      <div className='overflow-hidden rounded-lg'>
        <img
          className='aspect-video object-cover object-center rounded-lg transition ease-in-out group-hover:scale-110 duration-500 delay-150'
          src={getCroppedImageUrl(game.background_image)}
          alt={`${game.name} cover image`}
        />
      </div>

      <div className='p-2 space-y-4'>
        <div className="flex items-start justify-between">
          <h2 className='text-lg lg:text-base text-gray-800 font-medium'>
            {game.name}
          </h2>

          <Emoji rating={game.rating_top} />
        </div>

        <div className='flex items-center justify-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </li>
  )
}
