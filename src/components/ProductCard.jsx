import { motion } from 'framer-motion'
import { Heart, Star, Plus } from 'lucide-react'
import ShoeArt from './ShoeArt'
import { useApp } from '../context/AppContext'

export default function ProductCard({ product, className = '' }) {
  const { wishlist, toggleWishlist, setQuickViewProduct } = useApp()
  const isWished = wishlist.includes(product.id)

  return (
    <motion.div
      whileHover="hover"
      className={`group relative bg-paper border border-hairline rounded-[1.5rem] overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.08)] ${className}`}
    >
      <button
        onClick={() => toggleWishlist(product.id)}
        aria-label="Toggle wishlist"
        data-cursor="button"
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-paper/90 border border-hairline flex items-center justify-center"
      >
        <motion.span animate={{ scale: isWished ? [1, 1.4, 1] : 1 }} transition={{ duration: 0.35 }}>
          <Heart
            size={16}
            className={isWished ? 'text-[#C1440E]' : 'text-ink'}
            fill={isWished ? 'currentColor' : 'none'}
          />
        </motion.span>
      </button>

      {product.isNew && (
        <span className="absolute top-4 left-4 z-10 bg-ink text-paper text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full">
          New
        </span>
      )}

      <button
        onClick={() => setQuickViewProduct(product)}
        data-cursor="view"
        className="block w-full aspect-square bg-mist p-8 overflow-hidden"
      >
        <motion.div
          variants={{ hover: { scale: 1.08, y: -8 } }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <ShoeArt className="w-full h-full" accent={product.accent} />
        </motion.div>
      </button>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-display font-semibold text-sm">{product.name}</h3>
            <p className="text-xs text-slate">{product.category}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate shrink-0 pt-0.5">
            <Star size={11} fill="currentColor" />
            {product.rating}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-sm">${product.price}</span>
            {product.oldPrice && (
              <span className="text-xs text-slate line-through">${product.oldPrice}</span>
            )}
          </div>

          <motion.button
            onClick={() => setQuickViewProduct(product)}
            data-cursor="button"
            initial={{ opacity: 0, y: 8 }}
            variants={{ hover: { opacity: 1, y: 0 } }}
            className="hidden md:flex items-center gap-1 text-xs font-semibold bg-ink text-paper rounded-full px-3 py-2"
          >
            <Plus size={13} /> Add
          </motion.button>
          <button
            onClick={() => setQuickViewProduct(product)}
            data-cursor="button"
            className="md:hidden flex items-center gap-1 text-xs font-semibold bg-ink text-paper rounded-full px-3 py-2"
          >
            <Plus size={13} /> Add
          </button>
        </div>
      </div>
    </motion.div>
  )
}
