import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-600 to-slate-800 text-white flex items-center justify-center font-semibold">TD</div>
            <span className="font-serif text-xl tracking-tight">The Doorway Company</span>
          </div>
          <p className="text-slate-400 text-sm">Premium composite doors crafted for security, efficiency and enduring style.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="p-2 bg-slate-800/60 rounded-md hover:bg-slate-800"><Facebook className="h-5 w-5"/></a>
            <a href="#" aria-label="Instagram" className="p-2 bg-slate-800/60 rounded-md hover:bg-slate-800"><Instagram className="h-5 w-5"/></a>
          </div>
        </div>
        <div>
          <h4 className="text-slate-100 font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-slate-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/specifications" className="hover:text-white">Technical Specifications</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-100 font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> 01234 567 890</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@doorwayco.com</li>
            <li>123 Oak Lane, Birmingham, UK</li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-100 font-semibold mb-3">Accreditations</h4>
          <div className="flex gap-3">
            <div className="px-3 py-2 rounded-md bg-slate-800/60 text-xs">Secured by Design</div>
            <div className="px-3 py-2 rounded-md bg-slate-800/60 text-xs">PAS 24</div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} The Doorway Company. All rights reserved.
      </div>
    </footer>
  )
}
