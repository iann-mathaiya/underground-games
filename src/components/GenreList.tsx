import useGames from "@/hooks/useGenres"

export default function GenreList() {
  const { genres } = useGames()

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}
