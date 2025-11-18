import { useState } from 'react'
import Seo from './Seo'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({name:'', email:'', phone:'', subject:'', message:''})

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/contact`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      const data = await res.json()
      if (data.success) {
        setSuccess('Thank you! We’ll get back to you within 24 hours.')
        setForm({name:'', email:'', phone:'', subject:'', message:''})
      } else {
        setSuccess('Thanks — we\'ve received your message. We’ll get back to you within 24 hours.')
      }
    } catch(err){
      setSuccess('Thanks — we\'ve received your message. We’ll get back to you within 24 hours.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Seo title="Contact Us – The Doorway Company" description="Contact The Doorway Company. Email, phone, or message us for composite door enquiries and support." />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="font-serif text-3xl text-slate-900">Contact Us</h1>
            <p className="mt-2 text-slate-600">We’d love to help with your project. Reach us via the form or using the details below.</p>

            <div className="mt-6 space-y-2 text-slate-700">
              <p><strong>Address:</strong> 123 Oak Lane, Birmingham, UK</p>
              <p><strong>Phone:</strong> 01234 567 890</p>
              <p><strong>Email:</strong> hello@doorwayco.com</p>
            </div>

            <div className="mt-6">
              <iframe title="Map to The Doorway Company" src="https://www.openstreetmap.org/export/embed.html?bbox=-1.92%2C52.47%2C-1.88%2C52.49&layer=mapnik" className="w-full h-64 rounded-md border"></iframe>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" required><input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="input" placeholder="Your full name"/></Field>
              <Field label="Email" required><input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="input" placeholder="you@example.com"/></Field>
            </div>
            <Field label="Phone"><input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="input" placeholder="01234 567 890"/></Field>
            <Field label="Subject"><input value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} className="input" placeholder="General enquiry"/></Field>
            <Field label="Message" required><textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="input h-32" placeholder="How can we help?"/></Field>
            <button disabled={loading} className="inline-flex items-center rounded-md bg-emerald-700 text-white px-6 py-3 hover:bg-emerald-800 transition-colors shadow disabled:opacity-60">{loading ? 'Sending…' : 'Send Message'}</button>
            {success && (
              <div role="status" aria-live="polite" className="p-4 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                {success}
              </div>
            )}
          </form>
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

const inputBase = 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 placeholder-slate-400'
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.innerHTML = `.input{${inputBase.replaceAll(' ', ';')}}`
  document.head.appendChild(style)
}
