import { useState } from 'react'
import ProductModal from './ProductModal'
import officeEssentials from '../assets/products/office-essentials.jpg'
import stationery from '../assets/products/stationery.jpg'
import furniture from '../assets/products/furniture.jpg'
import printing from '../assets/products/printing.jpg'
import cleaning from '../assets/products/cleaning.jpg'
import household from '../assets/products/household.jpg'
import generalSupplies from '../assets/products/general-supplies.jpg'

const PRODUCTS = [
  {
    image: officeEssentials,
    title: 'Office Essentials',
    description: 'Everyday items that keep your office fully stocked and running without interruption.',
    details: 'From filing and organization to desk accessories, we supply the everyday essentials that keep an office fully stocked and running without interruption. Ideal for businesses, schools, and institutions that need dependable, repeat supply.',
  },
  {
    image: stationery,
    title: 'Stationery',
    description: 'Pens, paper, notebooks, and writing supplies for staff, students, and teams.',
    details: 'Pens, pencils, paper, notebooks, and writing supplies for staff, students, and teams. We stock a wide variety of brands and grades so you can order exactly what your organization needs, in bulk or as needed.',
  },
  {
    image: furniture,
    title: 'Furniture',
    description: 'Durable desks, chairs, and storage solutions for offices, schools, and institutions.',
    details: 'Durable desks, chairs, shelving, and storage solutions built for daily use in offices, schools, and institutions. We help you furnish workspaces that are comfortable, practical, and built to last.',
  },
  {
    image: printing,
    title: 'Printing Materials',
    description: 'Toners, inks, and printing consumables for reliable, high-quality output.',
    details: 'Toners, inks, and printing consumables for reliable, high-quality output. We supply compatible and genuine cartridges for a wide range of printer brands and models.',
  },
  {
    image: cleaning,
    title: 'Cleaning Products',
    description: 'Quality cleaning and hygiene supplies to keep your premises spotless.',
    details: 'Quality cleaning and hygiene supplies to keep your premises spotless, from surface cleaners and detergents to mops, sponges, and sanitizing products for offices and institutions.',
  },
  {
    image: household,
    title: 'Household Products',
    description: 'Everyday essentials and home care supplies for families and households.',
    details: 'Everyday essentials and home care supplies for families and households, including kitchenware, laundry care, and general home products delivered reliably to your door.',
  },
  {
    image: generalSupplies,
    title: 'General Business Supplies',
    description: 'A broad range of supplies tailored to keep any organization operating efficiently.',
    details: 'A broad range of supplies tailored to keep any organization operating efficiently, including packaging, storage, and bulk-order items sourced to fit your specific needs.',
  },
]

function Products() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title">Products &amp; Supplies</h2>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product) => (
            <button
              type="button"
              className="product-card"
              key={product.title}
              onClick={() => setSelected(product)}
            >
              <div className="product-image-wrap">
                <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
              </div>
              <div className="product-card-body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

export default Products
