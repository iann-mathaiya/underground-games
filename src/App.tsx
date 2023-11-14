import GameGrid from "./components/GameGrid"
import RootLayout from "./components/RootLayout"

export default function App() {
  return (
    <main>
      <RootLayout>
        <GameGrid />
      </RootLayout>
    </main>
  )
}
