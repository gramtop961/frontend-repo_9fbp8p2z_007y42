import { Link } from 'react-router-dom'
import { Shield, Leaf, Wrench, Thermometer } from 'lucide-react'
import Seo from './Seo'

const doors = [
  {
    id: 'georgian',
    name: 'Classic Georgian',
    img: 'https://images.unsplash.com/photo-1526055577108-8b14f95c1c60?q=80&w=1600&auto=format&fit=crop',
    alt: 'georgian style composite door',
    blurb: 'Traditional elegance with modern security and insulation.'
  },
  {
    id: 'modern',
    name: 'Modern Linear',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    alt: 'modern composite door in a contemporary home',
    blurb: 'Sleek lines, premium hardware, and outstanding thermal performance.'
  },
  {
    id: 'cottage',
    name: 'Cottage Charm',
    img: 'https://images.unsplash.com/photo-1505692794403-34f0b2eb680d?q=80&w=1600&auto=format&fit=crop',
    alt: 'cottage style composite door',
    blurb: 'Rural character crafted with durable composite technology.'
  },
  {
    id: 'victorian',
    name: 'Victorian Grace',
    img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop',
    alt: 'victorian style composite door',
    blurb: 'Decorative details with industry-leading security as standard.'
  },
]

export default function Home() {
  return (
    <div>
      <Seo title="The Doorway Co – Composite Doors, Secure & Stylish" description="Premium composite doors built to last. Energy-efficient, secure, and beautifully designed. Explore The Doorway Company collection and request a quote." />

      {/* Hero */}
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1711462579055-f3bee720801f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjb21wb3NpdGUlMjBkb29yJTIwaW5zdGFsbGF0aW9uJTIwaW58ZW58MHwwfHx8MTc2MzUxMDExMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="composite door installation in a modern home" className="h-[70vh] w-full object-cover" loading="eager"/>
        <div className="absolute inset-0 bg-slate-900/40"/>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow">Premium Composite Doors Built to Last</h1>
              <p className="mt-4 text-slate-200 text-lg">Elegant styles, exceptional security, and outstanding energy efficiency — crafted for modern living.</p>
              <Link to="#collection" className="mt-8 inline-flex items-center rounded-md bg-emerald-700 text-white px-6 py-3 hover:bg-emerald-800 transition-colors shadow">
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-slate-900 mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[{Icon: Shield, title: 'Security', text: 'Multi-point locking systems and robust GRP skins deliver peace of mind for your home.'},
              {Icon: Thermometer, title: 'Energy Efficient', text: 'High-density foam cores and sealed frames help reduce heat loss and energy bills.'},
              {Icon: Wrench, title: 'Low Maintenance', text: 'Weather-resistant finishes that wipe clean and keep their look for years.'},
              {Icon: Leaf, title: 'Durability', text: 'Engineered to withstand the elements with fade-resistant, warp-resistant materials.'}
            ].map(({Icon, title, text}) => (
              <div key={title} className="group p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-0.5">
                <Icon className="h-8 w-8 text-emerald-700 mb-4 group-hover:scale-105 transition-transform"/>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="collection" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-slate-900 mb-8">Featured Styles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doors.map(d => (
              <div key={d.id} className="bg-white rounded-xl overflow-hidden border border-slate-200">
                <img src={d.img} alt={d.alt} className="h-48 w-full object-cover" loading="lazy"/>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{d.name}</h3>
                  <p className="text-slate-600 text-sm mt-1">{d.blurb}</p>
                  <Link to={`/doors/${d.id}`} className="inline-flex mt-4 text-emerald-700 hover:text-emerald-800">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-slate-900 mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {q: 'The quality is superb and the house feels warmer already.', n: 'Amelia R.'},
              {q: 'Felt in safe hands from start to finish. Looks stunning!', n: 'Jaspreet K.'},
              {q: 'The installer was brilliant and the door is rock solid.', n: 'Martin S.'},
            ].map((t, i) => (
              <blockquote key={i} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-slate-800">“{t.q}”</p>
                <footer className="mt-4 text-sm text-slate-600">— {t.n}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-3xl">Ready to transform your entrance?</h3>
            <p className="text-emerald-100 mt-2">Request a quote and we’ll respond within 24 hours.</p>
          </div>
          <Link to="/quote" className="inline-flex items-center rounded-md bg-white text-emerald-800 px-6 py-3 hover:bg-emerald-50 transition-colors shadow">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

function Gallery(){
  const imgs = [
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d35?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-slate-900 mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((src, i) => (
            <a key={i} href={src} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-lg">
              <img src={src} alt="composite door installation in a modern home" loading="lazy" className="h-48 w-full object-cover group-hover:scale-105 transition-transform"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
