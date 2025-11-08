import { Trophy, Users, Flag } from 'lucide-react'

function HeroHeader() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-600 opacity-90" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Flag className="w-7 h-7" />
          <span className="uppercase tracking-widest text-sm font-semibold">La Pasión Albiceleste</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Portal de Hinchas de Argentina
        </h1>
        <p className="mt-4 text-lg sm:text-xl/relaxed max-w-2xl">
          Noticias, partidos, encuestas y una comunidad para vivir el fútbol argentino con toda la pasión.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#encuesta" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-3 rounded-full shadow hover:shadow-md transition">
            <Users className="w-5 h-5" /> Participar en la encuesta
          </a>
          <a href="#partidos" className="inline-flex items-center gap-2 bg-blue-900/20 backdrop-blur text-white font-semibold px-5 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
            <Trophy className="w-5 h-5" /> Ver próximos partidos
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeroHeader
