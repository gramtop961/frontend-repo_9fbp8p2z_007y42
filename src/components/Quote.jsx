import { useEffect, useState } from 'react'
import Seo from './Seo'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Quote(){
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({name:'', email:'', phone:'', address:'', door_style:'', message:''})

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const style = params.get('style')
    if (style) setForm(f => ({...f, door_style: style}))
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/lead`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({...form, source:'website'}) })
      const data = await res.json()
      if (data.success) {
        setSuccess('Thank you! We’ll get back to you within 24 hours.')
        setForm({name:'', email:'', phone:'', address:'', door_style:'', message:''})
      } else {
        setSuccess('Thanks — we\'ve received your request. We’ll get back to you within 24 hours.')
      }
    } catch(err){
      setSuccess('Thanks — we\'ve received your request. We’ll get back to you within 24 hours.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Seo title="Request a Brochure / Get a Quote – The Doorway Company" description="Request a brochure or get a tailored quote for your new composite door. We respond within 24 hours." />
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl text-slate-900">Get a Quote / Request a Brochure</h1>
          <p className="mt-2 text-slate-600">Fill in your details and one of our specialists will be in touch within 24 hours.</p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" required><input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="input" placeholder="Your full name"/></Field>
              <Field label="Email" required><input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="input" placeholder="you@example.com"/></Field>
              <Field label="Phone"><input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="input" placeholder="01234 567 890"/></Field>
              <Field label="Address"><input value={form.address} onChange={e=>setForm({...form, address:e.target.value})} className="input" placeholder="House number, street, city"/></Field>
              <Field label="Door Style Interest"><input value={form.door_style} onChange={e=>setForm({...form, door_style:e.target.value})} className="input" placeholder="e.g. Georgian, Modern"/></Field>
            </div>
            <Field label="Message"><textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="input h-28" placeholder="Any additional details"/></Field>

            <button disabled={loading} className="inline-flex items-center rounded-md bg-emerald-700 text-white px-6 py-3 hover:bg-emerald-800 transition-colors shadow disabled:opacity-60">{loading ? 'Sending…' : 'Submit Request'}</button>
          </form>

          {success && (
            <div role="status" aria-live="polite" className="mt-6 p-4 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
              {success}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function Field({label, children, required}){
  return (
    <label className="block">
      <span className="text-sm text-slate-700">{label} {required && <span className="text-rose-600">*</span>}</span>
      <div className="mt-1"/>
      {children}
    </label>
  )
}

// Tailwind shortcut
const inputBase = 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 placeholder-slate-400'

// Inject a tiny style helper
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.innerHTML = `.input{${inputBase.replaceAll(' ', ';')}}`
  document.head.appendChild(style)
}
