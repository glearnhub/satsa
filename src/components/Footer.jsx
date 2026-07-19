const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span className="brand-mark">SATSA</span>
          <p className="footer-tagline">General &amp; Office Supplies</p>
        </div>

        <nav className="footer-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} SATSA General &amp; Office Supplies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
