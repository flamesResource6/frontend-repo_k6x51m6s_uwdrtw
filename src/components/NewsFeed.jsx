import { useEffect, useState } from 'react'
import { Newspaper } from 'lucide-react'

const demoNews = [
  {
    id: 1,
    title: 'La Selección vuelve a jugar en Buenos Aires',
    excerpt: 'Amistoso confirmado en el Monumental con entradas a la venta desde el viernes.',
    tag: 'Selección',
  },
  {
    id: 2,
    title: 'Boca y River se preparan para el superclásico',
    excerpt: 'Ambos equipos llegan en gran nivel para una nueva edición del partido más esperado.',
    tag: 'Liga Profesional',
  },
  {
    id: 3,
    title: 'Nuevas promesas en el Sub-20',
    excerpt: 'Juveniles destacados llaman la atención de clubes europeos.',
    tag: 'Juveniles',
  },
]

function NewsCard({ item }) {
  return (
    <article className="p-5 rounded-xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md transition">
      <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">{item.tag}</div>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
      <p className="mt-1 text-gray-600 text-sm">{item.excerpt}</p>
      <a href="#" className="mt-3 inline-block text-sm font-medium text-blue-700 hover:text-blue-800">Leer más →</a>
    </article>
  )
}

function NewsFeed() {
  const [news, setNews] = useState(demoNews)

  useEffect(() => {
    // In a real app, fetch from backend here
    setNews(demoNews)
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-blue-700">
          <Newspaper className="w-5 h-5" />
          <h2 className="text-2xl font-bold text-gray-900">Últimas noticias</h2>
        </div>
        <a href="#" className="text-sm text-blue-700 hover:text-blue-800 font-medium">Ver todas</a>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {news.map(n => <NewsCard key={n.id} item={n} />)}
      </div>
    </section>
  )
}

export default NewsFeed
