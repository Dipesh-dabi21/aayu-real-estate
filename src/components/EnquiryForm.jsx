import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { SITE } from '../data/site.js'

const INTERESTS = [
  'Residential plot',
  'Flat / apartment',
  'Row house',
  'Bungalow',
  'Commercial property',
  'Construction services',
  'Property guidance',
]

const empty = { name: '', phone: '', email: '', interest: '', budget: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  const digits = v.phone.replace(/\D/g, '')
  const local = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.'
  else if (!/^[6-9]\d{9}$/.test(local)) e.phone = 'Enter a valid 10-digit Indian mobile number.'
  if (v.email.trim() && !/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!v.interest) e.interest = 'Please choose what you are looking for.'
  return e
}

export default function EnquiryForm({ defaultInterest = '' }) {
  const [values, setValues] = useState({ ...empty, interest: defaultInterest })
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    const lines = [
      'Hello AAYU Realty & Construction, I would like to enquire.',
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email.trim() && `Email: ${values.email.trim()}`,
      `Looking for: ${values.interest}`,
      values.budget.trim() && `Budget: ${values.budget.trim()}`,
      values.message.trim() && `Message: ${values.message.trim()}`,
    ].filter(Boolean)
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpened(true)
  }

  const field = (id, label, props = {}, required = false) => (
    <div className={`field ${errors[id] ? 'has-error' : ''}`}>
      <label htmlFor={`f-${id}`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {props.as === 'select' ? (
        <select
          id={`f-${id}`}
          value={values[id]}
          onChange={set(id)}
          aria-invalid={!!errors[id]}
          aria-describedby={errors[id] ? `e-${id}` : undefined}
          required={required}
        >
          <option value="">Select…</option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      ) : props.as === 'textarea' ? (
        <textarea id={`f-${id}`} rows={4} value={values[id]} onChange={set(id)} placeholder={props.placeholder} />
      ) : (
        <input
          id={`f-${id}`}
          type={props.type || 'text'}
          value={values[id]}
          onChange={set(id)}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          inputMode={props.inputMode}
          aria-invalid={!!errors[id]}
          aria-describedby={errors[id] ? `e-${id}` : undefined}
          required={required}
        />
      )}
      {errors[id] && (
        <p className="field-error" id={`e-${id}`} role="alert">{errors[id]}</p>
      )}
    </div>
  )

  return (
    <form className="enquiry-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        {field('name', 'Full name', { autoComplete: 'name', placeholder: 'Your name' }, true)}
        {field('phone', 'Phone / WhatsApp', { type: 'tel', inputMode: 'tel', autoComplete: 'tel', placeholder: '98765 43210' }, true)}
        {field('email', 'Email (optional)', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
        {field('interest', 'I am looking for', { as: 'select' }, true)}
        {field('budget', 'Budget (optional)', { placeholder: 'e.g. your approximate range' })}
      </div>
      {field('message', 'Message (optional)', { as: 'textarea', placeholder: 'Preferred area, size, timeline…' })}

      <button type="submit" className="btn btn-dark btn-block">
        <MessageCircle size={18} aria-hidden="true" /> Send enquiry on WhatsApp
      </button>
      <p className="form-note" role="status" aria-live="polite">
        {opened
          ? 'WhatsApp should have opened with your message. If it did not, tap the button again or call us directly. Nothing is stored on this website.'
          : 'This opens WhatsApp with your details pre-filled. Nothing is stored on this website.'}
      </p>
    </form>
  )
}
