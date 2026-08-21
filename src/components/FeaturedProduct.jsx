import { useState } from 'react'
import { Star } from 'lucide-react'
import ShoeArt from './ShoeArt'
import Reveal from './Reveal'
import { products } from '../data/products'
import { useApp } from '../context/AppContext'

const featured = products[0]

export default function FeaturedProduct() {
  const [size, setSize] = useState(null)
  const [error, setError] = useState(false)
  const { addToCart, setQuickViewProduct } = useApp()

  const handleAdd = () => {
    if (!size) {
      setError(true)
      return
    }
    setError(false)
    addToCart(featured, size)
  }

  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal type="left" className="relative order-2 lg:order-1">
          <div className="bg-paper rounded-[2rem] p-10 md:p-16 border border-hairline">
            <ShoeArt className="w-full h-auto" accent={featured.accent} />
          </div>
        </Reveal>

        <Reveal type="right" className="order-1 lg:order-2">
          <p className="text-xs font-semibold tracking-[0.25em] text-signal uppercase mb-4">
            Featured Product
          </p>
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-6xl mb-6 text-balance">
            Built For Every Move.
          </h2>

          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display text-xl font-semibold">{featured.name}</h3>
            <div className="flex items-center gap-1 text-slate text-sm">
              <Star size={14} fill="currentColor" />
              {featured.rating} ({featured.reviews})
            </div>
          </div>
          <p className="text-2xl font-semibold mb-5">${featured.price}</p>
          <p className="text-slate max-w-md mb-8 leading-relaxed">{featured.description}</p>

          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate mb-3">
              Select Size
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSize(s)
                    setError(false)
                  }}
                  data-cursor="button"
                  className={`w-11 h-11 rounded-full text-sm font-medium border transition-colors ${
                    size === s
                      ? 'bg-ink text-paper border-ink'
                      : 'border-hairline hover:border-ink'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && (
              <p className="text-xs text-[#C1440E] mt-2">Please select a size to continue.</p>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleAdd}
              data-cursor="button"
              className="px-8 py-3.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-signal transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={() => setQuickViewProduct(featured)}
              data-cursor="button"
              className="px-8 py-3.5 rounded-full border border-hairline text-sm font-semibold hover:border-ink transition-colors"
            >
              View Details
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
