import useGenres from "@/hooks/useGenres"
import getCroppedImageUrl from "@/services/image-url"
import GenreListSkeleton from "./GenreListSkeleton"

export default function GenreList() {
  const { data: genres, isLoading, error } = useGenres()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

  return (
    <ul className='p-4 space-y-4 sm:space-y-2'>
      {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}

      {genres.map((genre) => (
        <li key={genre.id} className='flex items-center gap-4 sm:gap-2'>
          <div>
            <img
              className='h-12 w-12 sm:h-8 sm:w-8 rounded-md'
              src={getCroppedImageUrl(genre.image_background)}
              alt={`Cover image for the ${genre.name} genre`}
            />
          </div>
          <h2 className='text-xl sm:text-sm text-gray-500 font-medium'>
            {genre.name}
          </h2>
        </li>
      ))}
    </ul>
  )
}
