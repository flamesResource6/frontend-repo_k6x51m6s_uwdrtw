import { useState } from 'react'
import { ThumbsUp, MessageCircle } from 'lucide-react'

const options = [
  { id: 'messi', label: 'Lionel Messi' },
  { id: 'dimaria', label: 'Ángel Di María' },
  { id: 'martinez', label: 'Lautaro Martínez' },
  { id: 'dibu', label: 'Dibu Martínez' },
]

function Poll() {
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (selected) setSubmitted(true)
  }

  return (
    <section id="encuesta" className="bg-gradient-to-br from-sky-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-4 text-blue-700 font-semibold">
          <MessageCircle className="w-5 h-5" />
          <span>Encuesta de la hinchada</span>
        </div>
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
          <h2 className="text-2xl font-bold text-gray-900">¿Quién fue la figura del último partido?</h2>
          <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-3">
            {options.map(opt => (
              <label key={opt.id} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${selected === opt.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <span className="text-gray-800 font-medium">{opt.label}</span>
                <input type="radio" name="vote" value={opt.id} checked={selected === opt.id} onChange={() => setSelected(opt.id)} className="accent-blue-600" />
              </label>
            ))}
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl">
              <ThumbsUp className="w-5 h-5" /> Votar
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-700 font-medium">¡Gracias por votar! Pronto verás los resultados.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Poll
