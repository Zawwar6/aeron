import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import ProductCard from './ProductCard'
import { products } from '../data/products'

const arrivals = products.filter((p) => p.isNew)

export default function NewArrivals() {
  const scrollerRef = useRef(null)

  const scroll = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="new-arrivals" className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex items-end justify-between mb-10">
        <Reveal>
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">
            New Arrivals
          </h2>
        </Reveal>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            data-cursor="button"
            className="w-11 h-11 rounded-full border border-hairline flex items-center justify-center hover:border-ink transition-colors"
          >
            <ArrowLeft size={17} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            data-cursor="button"
            className="w-11 h-11 rounded-full border border-hairline flex items-center justify-center hover:border-ink transition-colors"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto no-scrollbar px-5 md:px-10 pb-4 snap-x snap-mandatory"
      >
        {arrivals.map((p) => (
          <div key={p.id} className="min-w-[260px] w-[260px] md:min-w-[300px] md:w-[300px] snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
