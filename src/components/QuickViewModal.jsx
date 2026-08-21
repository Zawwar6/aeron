import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Minus, Plus } from 'lucide-react'
import ShoeArt from './ShoeArt'
import { useApp } from '../context/AppContext'

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useApp()
  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [error, setError] = useState(false)

  useEffect(() => {
    setSize(null)
    setQty(1)
    setError(false)
  }, [quickViewProduct])

  const close = () => setQuickViewProduct(null)

  const handleAdd = () => {
    if (!size) {
      setError(true)
      return
    }
    addToCart(quickViewProduct, size, qty)
    close()
  }

  return (
    <AnimatePresence>
      {quickViewProduct && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[70] bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper rounded-[1.75rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto grid md:grid-cols-2"
            >
              <div className="bg-mist p-10 md:p-14 flex items-center justify-center relative">
                <button
                  onClick={close}
                  aria-label="Close quick view"
                  className="absolute top-4 right-4 md:hidden w-9 h-9 rounded-full bg-paper border border-hairline flex items-center justify-center"
                >
                  <X size={16} />
                </button>
                <ShoeArt className="w-full h-auto" accent={quickViewProduct.accent} />
              </div>

              <div className="p-7 md:p-10 relative">
                <button
                  onClick={close}
                  aria-label="Close quick view"
                  className="hidden md:flex absolute top-6 right-6 w-9 h-9 rounded-full hover:bg-mist items-center justify-center"
                >
                  <X size={18} />
                </button>

                <p className="text-xs font-semibold tracking-widest uppercase text-slate mb-2">
                  {quickViewProduct.category}
                </p>
                <h2 className="font-display font-semibold text-2xl mb-2">{quickViewProduct.name}</h2>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-semibold text-lg">${quickViewProduct.price}</span>
                  <div className="flex items-center gap-1 text-sm text-slate">
                    <Star size={13} fill="currentColor" />
                    {quickViewProduct.rating} ({quickViewProduct.reviews})
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  {quickViewProduct.description}
                </p>

                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate mb-2.5">
                    Color
                  </p>
                  <div className="flex gap-2">
                    {quickViewProduct.colors.map((c) => (
                      <span
                        key={c}
                        className="w-7 h-7 rounded-full border border-hairline"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate mb-2.5">
                    Size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setSize(s)
                          setError(false)
                        }}
                        className={`w-10 h-10 rounded-full text-sm font-medium border transition-colors ${
                          size === s ? 'bg-ink text-paper border-ink' : 'border-hairline hover:border-ink'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {error && (
                    <p className="text-xs text-[#C1440E] mt-2">Please select a size.</p>
                  )}
                </div>

                <div className="mb-7">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate mb-2.5">
                    Quantity
                  </p>
                  <div className="inline-flex items-center gap-3 border border-hairline rounded-full px-3 py-1.5">
                    <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">{qty}</span>
                    <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className="w-full py-3.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-signal transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
