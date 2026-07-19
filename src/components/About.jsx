const SERVED = ['Businesses', 'Schools', 'Organizations', 'Institutions']

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-copy">
          <span className="eyebrow">About SATSA</span>
          <h2 className="section-title">Committed to quality, reliability, and lasting partnerships</h2>
          <p>
            We are committed to providing reliable, affordable, and timely solutions
            that help businesses, schools, organizations, and institutions operate
            efficiently. Our focus is on quality products, excellent customer
            service, and building long-term relationships with our clients.
          </p>
        </div>

        <div className="about-side">
          <h3>Who We Serve</h3>
          <ul className="tag-list">
            {SERVED.map((item) => (
              <li key={item} className="tag">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
