import React, { useState } from 'react'
import HeroBanner from "../components/HeroBanner";
import { MapPin, Mail as MailIcon, Phone } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.message.trim()) e.message = 'Message cannot be empty.'
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const eObj = validate()
    if (Object.keys(eObj).length) { setErrors(eObj); return }

    setStatus('loading')
    try {
      // Posts to backend contact endpoint. Adjust URL if your API differs.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Network response was not ok')

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <HeroBanner title="Contact" />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white shadow rounded p-6">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Send us a message</h2>
            <p className="text-sm text-gray-400 mb-6">We typically reply within 24–48 hours.</p>

            {status === 'success' && (
              <div className="mb-4 p-3 rounded bg-green-50 text-green-800 border border-green-100">Thanks — your message was sent.</div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-3 rounded bg-red-50 text-red-800 border border-red-100">Something went wrong. Please try again later.</div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">Name</label>
                  <input name="name" value={form.name} onChange={handleChange}
                    className={`w-full border-b ${errors.name ? 'border-red-400' : 'border-gray-200'} py-2.5 text-gray-800 text-sm placeholder-gray-300 outline-none transition focus:border-indigo-400 bg-transparent`} />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email"
                    className={`w-full border-b ${errors.email ? 'border-red-400' : 'border-gray-200'} py-2.5 text-gray-800 text-sm placeholder-gray-300 outline-none transition focus:border-indigo-400 bg-transparent`} />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange}
                  className="w-full border-b border-gray-200 py-2.5 text-gray-800 text-sm placeholder-gray-300 outline-none transition focus:border-indigo-400 bg-transparent" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={6}
                  className={`w-full border-b ${errors.message ? 'border-red-400' : 'border-gray-200'} py-2.5 text-gray-800 text-sm placeholder-gray-300 outline-none transition focus:border-indigo-400 bg-transparent resize-none`} />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <div className="mt-2">
                <button type="submit" disabled={status === 'loading'}
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg text-sm transition disabled:opacity-60">
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info + Map */}
          <aside className="space-y-6">
            <div className="bg-[#141a57] text-white shadow rounded p-4">
              <h3 className="font-semibold text-white">Contact Info</h3>
              <ul className="mt-3 space-y-3 text-sm text-gray-200">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-300 mt-1" />
                  <div>
                    <div className="font-medium">Our Office</div>
                    <div className="text-indigo-200">123 TypeTheory Ave, City, Country</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MailIcon className="w-5 h-5 text-indigo-300 mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-indigo-200">hello@typetheory.app</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-indigo-300 mt-1" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-indigo-200">+1 (555) 123-4567</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow rounded overflow-hidden">
              <div className="w-full h-48 md:h-64">
                <iframe title="map" src="https://www.google.com/maps?q=New+York+City&output=embed" className="w-full h-full border-0"></iframe>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}

