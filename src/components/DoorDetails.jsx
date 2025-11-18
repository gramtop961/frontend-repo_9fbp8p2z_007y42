import { useParams, Link } from 'react-router-dom'
import Seo from './Seo'

const detailMap = {
  georgian: {
    name: 'Classic Georgian',
    images: [
      'https://images.unsplash.com/photo-1526055577108-8b14f95c1c60?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop'
    ],
    specs: [
      'Timber-look GRP skin with authentic panel detailing',
      'High-density polyurethane foam core for superior insulation',
      'Multi-point locking with anti-snap cylinder',
      'Triple-glazed decorative glass options'
    ]
  },
  modern: {
    name: 'Modern Linear',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1600&auto=format&fit=crop'
    ],
    specs: [
      'Sleek linear glazing with stainless steel hardware',
      'Thermally efficient, draught-free design',
      'Secured by Design compliant locking options',
      'Low-maintenance colour-fast finish'
    ]
  },
  cottage: {
    name: 'Cottage Charm',
    images: [
      'https://images.unsplash.com/photo-1505692794403-34f0b2eb680d?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop'
    ],
    specs: [
      'Vertical plank styling with stable-door feel',
      'Warm edge spacer bars for improved U-values',
      'High security hinges and locks',
      'Optional cottage-style glass units'
    ]
  },
  victorian: {
    name: 'Victorian Grace',
    images: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop'
    ],
    specs: [
      'Decorative mouldings with authentic period look',
      'Insulated core with robust GRP outer skin',
      'PAS 24 security performance',
      'Choice of classic glazing designs'
    ]
  }
}

export default function DoorDetails(){
  const { id } = useParams()
  const d = detailMap[id]
  if(!d) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p>Door style not found. <Link to="/" className="text-emerald-700">Go back</Link></p>
    </div>
  )

  return (
    <div>
      <Seo title={`${d.name} – The Doorway Co`} description={`${d.name} composite door: detailed specifications, images and features.`} />
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {d.images.map((src, i) => (
                <img key={i} src={src} alt={`${d.name} composite door detail`} className="w-full h-72 object-cover rounded-lg" loading={i===0? 'eager':'lazy'} />
              ))}
            </div>
            <div>
              <h1 className="font-serif text-3xl text-slate-900">{d.name}</h1>
              <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700">
                {d.specs.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
              <Link to={`/quote?style=${id}`} className="mt-6 inline-flex items-center rounded-md bg-emerald-700 text-white px-6 py-3 hover:bg-emerald-800 transition-colors shadow">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
