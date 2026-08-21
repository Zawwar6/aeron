import { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search } from 'lucide-react'
import ShoeArt from './ShoeArt'
import { products } from '../data/products'
import { useApp } from '../context/AppContext'

export default function SearchOverlay() {
  const { isSearchOpen, setSearchOpen, setQuickViewProduct } = useApp()
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 350)
    } else {
      setQuery('')
    }
  }, [isSearchOpen])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tag.includes(q)
    )
  }, [query])

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-paper flex flex-col"
        >
          <div className="max-w-3xl w-full mx-auto px-5 pt-24 md:pt-32 flex-1 overflow-y-auto">
            <button
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="absolute top-6 right-6 w-10 h-10 rounded-full hover:bg-mist flex items-center justify-center"
            >
              <X size={22} />
            </button>

            <div className="flex items-center gap-4 border-b border-hairline pb-4">
              <Search size={22} className="text-slate shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="flex-1 font-display text-2xl md:text-4xl font-medium bg-transparent focus:outline-none placeholder:text-hairline"
              />
            </div>

            <div className="py-8">
              {query.trim() === '' && (
                <p className="text-slate text-sm">
                  Try &ldquo;runner&rdquo;, &ldquo;street&rdquo;, or &ldquo;new&rdquo;.
                </p>
              )}
              {query.trim() !== '' && results.length === 0 && (
                <p className="text-slate text-sm">No products matched &ldquo;{query}&rdquo;.</p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {results.map((p) => (
                  <motion.button
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => {
                      setQuickViewProduct(p)
                      setSearchOpen(false)
                    }}
                    className="text-left bg-mist rounded-2xl p-4 hover:bg-hairline/40 transition-colors"
                  >
                    <div className="aspect-square mb-2">
                      <ShoeArt className="w-full h-full" accent={p.accent} />
                    </div>
                    <p className="font-display font-semibold text-sm">{p.name}</p>
                    <p className="text-xs text-slate">${p.price}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
