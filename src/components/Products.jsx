const PRODUCTS = [
  {
    icon: '🗂️',
    title: 'Office Essentials',
    description: 'Everyday items that keep your office fully stocked and running without interruption.',
  },
  {
    icon: '✏️',
    title: 'Stationery',
    description: 'Pens, paper, notebooks, and writing supplies for staff, students, and teams.',
  },
  {
    icon: '🪑',
    title: 'Furniture',
    description: 'Durable desks, chairs, and storage solutions for offices, schools, and institutions.',
  },
  {
    icon: '🖨️',
    title: 'Printing Materials',
    description: 'Toners, inks, and printing consumables for reliable, high-quality output.',
  },
  {
    icon: '🧴',
    title: 'Cleaning Products',
    description: 'Quality cleaning and hygiene supplies to keep your premises spotless.',
  },
  {
    icon: '🏠',
    title: 'Household Products',
    description: 'Everyday essentials and home care supplies for families and households.',
  },
  {
    icon: '📦',
    title: 'General Business Supplies',
    description: 'A broad range of supplies tailored to keep any organization operating efficiently.',
  },
]

function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title">Products &amp; Supplies</h2>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product) => (
            <div className="product-card" key={product.title}>
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
