'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  sourcePage?: string
  practiceArea?: string
}

export default function ContactForm({ sourcePage = '/', practiceArea = 'General Inquiry' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          practiceArea,
          sourcePage,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been received. Warren will contact you within 24 hours.' })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error(data.error || 'Failed to submit form')
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'There was an error submitting your message. Please try calling us directly at (720) 495-7315.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-card bg-white border border-gray-200 shadow-lg p-6 md:p-8">
      <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
        Request a Free 10-Minute Consultation
      </h3>
      <p className="text-sm text-muted mb-6">
        Please share a few details and the best way to reach you. Do not include sensitive
        information; a more complete discussion can happen by phone.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Brief description of your legal matter"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-vertical"
            disabled={isSubmitting}
          />
        </div>

        {status && (
          <div className={`p-3 rounded-lg text-sm ${
            status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {status.message}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-accent text-white px-8 h-11 hover:bg-accent-hover transition-colors shadow-md disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}
