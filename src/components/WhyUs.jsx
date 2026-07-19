const REASONS = [
  {
    icon: '✅',
    title: 'Quality Products',
    description: 'We source high-quality supplies our clients can depend on every day.',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Competitive rates that help businesses and institutions manage costs.',
  },
  {
    icon: '⏱️',
    title: 'Timely Delivery',
    description: 'Reliable, on-schedule delivery so operations are never delayed.',
  },
  {
    icon: '🤝',
    title: 'Excellent Service',
    description: 'A customer-first approach focused on long-term relationships.',
  },
]

function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">Built on trust and consistency</h2>
        </div>

        <div className="why-grid">
          {REASONS.map((reason) => (
            <div className="why-card" key={reason.title}>
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
