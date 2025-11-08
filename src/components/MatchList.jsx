import { CalendarDays, MapPin } from 'lucide-react'

const matches = [
  { id: 1, home: 'Boca Juniors', away: 'River Plate', date: '2025-11-15 17:00', venue: 'La Bombonera, Buenos Aires' },
  { id: 2, home: 'Racing Club', away: 'Independiente', date: '2025-11-22 18:30', venue: 'El Cilindro, Avellaneda' },
  { id: 3, home: 'Rosario Central', away: 'Newell’s', date: '2025-11-29 16:00', venue: 'Gigante de Arroyito, Rosario' },
]

function MatchCard({ match }) {
  return (
    <div className="p-5 rounded-xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{match.home} <span className="text-blue-600">vs</span> {match.away}</h3>
        <span className="inline-flex items-center gap-1 text-sm text-blue-700 font-medium"><CalendarDays className="w-4 h-4" /> {match.date}</span>
      </div>
      <div className="mt-2 flex items-center gap-2 text-gray-600 text-sm">
        <MapPin className="w-4 h-4" /> {match.venue}
      </div>
    </div>
  )
}

function MatchList() {
  return (
    <section id="partidos" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Próximos partidos</h2>
        <a href="#" className="text-sm text-blue-700 hover:text-blue-800 font-medium">Ver calendario completo</a>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {matches.map(m => <MatchCard key={m.id} match={m} />)}
      </div>
    </section>
  )
}

export default MatchList
