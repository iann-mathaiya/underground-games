import useGenres from "@/hooks/useGenres"
import getCroppedImageUrl from "@/services/image-url"

export default function GenreList() {
  const { data: genres } = useGenres()

  return (
    <ul className='p-4 space-y-4 sm:space-y-2'>
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
