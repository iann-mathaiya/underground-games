import Main from "./components/Main"
import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <html className='h-full bg-gray-100 dark:bg-slate-800'>
      <body className='h-full'>
        <main>
          <NavBar />
          <Sidebar />
          <Main />
        </main>
      </body>
    </html>
  )
}

export default App
