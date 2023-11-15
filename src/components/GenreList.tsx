import { Fragment } from "react"
import { Genre } from "@/lib/schema"
import useGenres from "@/hooks/useGenres"
import GenreListSkeleton from "./GenreListSkeleton"
import getCroppedImageUrl from "@/services/image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
}

export default function GenreList({ onSelectGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres()
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]

  return (
    <Fragment>
      {error && (
        <p className='p-4 text-red-500 text-xs font-regular'>{error}</p>
      )}

      <ul className='p-4 space-y-4 sm:space-y-2'>
        {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}

        {genres.map((genre) => (
          <li key={genre.id}>
            <button
              onClick={() => onSelectGenre(genre)}
              className='flex items-center gap-4 sm:gap-2 group'
            >
              <img
                className='h-12 w-12 sm:h-8 sm:w-8 rounded-md object-cover object-center'
                src={getCroppedImageUrl(genre.image_background)}
                alt={`Cover image for the ${genre.name} genre`}
              />
              <span className='text-xl sm:text-sm text-gray-500 font-medium group-hover:text-orange-500 group-hover:underline'>
                {genre.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}
