import HeroHeader from './components/HeroHeader'
import MatchList from './components/MatchList'
import Poll from './components/Poll'
import NewsFeed from './components/NewsFeed'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroHeader />
      <main>
        <MatchList />
        <Poll />
        <NewsFeed />
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Hecho por y para hinchas en Argentina 🇦🇷</p>
          <nav className="flex items-center gap-4">
            <a href="#encuesta" className="hover:text-gray-900">Encuesta</a>
            <a href="#partidos" className="hover:text-gray-900">Partidos</a>
            <a href="#" className="hover:text-gray-900">Noticias</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
