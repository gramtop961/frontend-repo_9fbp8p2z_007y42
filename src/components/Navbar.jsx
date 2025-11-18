import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/specifications', label: 'Technical Specs' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
    { to: '/quote', label: 'Get a Quote' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-600 to-slate-800 text-white flex items-center justify-center font-semibold shadow-sm">TD</div>
            <span className="font-serif text-xl tracking-tight text-slate-900">The Doorway Company</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link key={item.to} to={item.to} className="text-slate-700 hover:text-emerald-700 transition-colors">
                {item.label}
              </Link>
            ))}
            <Link to="/quote" className="inline-flex items-center rounded-md bg-emerald-700 text-white px-4 py-2 hover:bg-emerald-800 transition-colors shadow-sm">
              Get a Quote
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex p-2 rounded-md border border-slate-300 text-slate-700">
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block text-slate-700">
                {item.label}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setOpen(false)} className="inline-flex items-center rounded-md bg-emerald-700 text-white px-4 py-2">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
