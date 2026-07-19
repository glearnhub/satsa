import { useState } from 'react'

const CONTACT_EMAIL = 'Sharonadagara@gmail.com'
const CONTACT_PHONE = '+254 745 267164'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Quote request from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title">Let's supply your business</h2>
          <p>
            Reach out for pricing, bulk orders, or to discuss an ongoing supply
            arrangement for your organization.
          </p>
          <ul className="contact-details">
            <li><strong>Email:</strong> {CONTACT_EMAIL}</li>
            <li><strong>Phone:</strong> {CONTACT_PHONE}</li>
            <li><strong>Location:</strong> Nairobi, Kenya</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" required value={form.email} onChange={handleChange} />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required value={form.message} onChange={handleChange} />
          </label>
          <button type="submit" className="btn btn-accent">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
