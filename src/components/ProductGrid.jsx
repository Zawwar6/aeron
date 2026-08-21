import { useState, useMemo } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Reveal from './Reveal'
import ProductCard from './ProductCard'
import { products } from '../data/products'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'running', label: 'Running' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'new', label: 'New' },
]

export default function ProductGrid() {
  const [active, setActive] = useState('all')

  const list = useMemo(() => {
    const bestSellers = products.filter((p) => p.isBestSeller || p.isNew)
    if (active === 'all') return bestSellers
    if (active === 'new') return bestSellers.filter((p) => p.isNew)
    return bestSellers.filter(
      (p) => p.tag === active || p.category.toLowerCase() === active
    )
  }, [active])

  return (
    <section id="best-sellers" className="py-24 md:py-32 max-w-[1440px] mx-auto px-5 md:px-10">
      <Reveal className="mb-4">
        <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl mb-3">
          Best Sellers
        </h2>
        <p className="text-slate max-w-md">Built for the people who refuse ordinary.</p>
      </Reveal>

      <Reveal delay={0.1} className="flex flex-wrap gap-2 my-8">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            data-cursor="button"
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === f.id
                ? 'bg-ink text-paper border-ink'
                : 'border-hairline text-slate hover:border-ink hover:text-ink'
            }`}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      <LayoutGroup>
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  )
}
