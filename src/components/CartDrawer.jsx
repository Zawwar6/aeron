import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import ShoeArt from './ShoeArt'
import { useApp } from '../context/AppContext'

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQty, cartSubtotal } = useApp()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-[70] bg-ink/30 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 z-[80] h-full w-full max-w-md bg-paper flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[76px] border-b border-hairline shrink-0">
              <h2 className="font-display font-semibold text-lg">
                Shopping Bag {cart.length > 0 && `(${cart.length})`}
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                className="p-2 hover:bg-mist rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                  <p className="text-slate">Your bag is empty.</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="text-sm font-semibold text-signal"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.map((item) => (
                    <li key={`${item.id}-${item.size}`} className="flex gap-4">
                      <div className="w-20 h-20 bg-mist rounded-xl p-3 shrink-0">
                        <ShoeArt className="w-full h-full" accent={item.accent} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between gap-2">
                          <div>
                            <p className="font-display font-semibold text-sm">{item.name}</p>
                            <p className="text-xs text-slate mt-0.5">Size {item.size}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            aria-label="Remove item"
                            className="text-slate hover:text-[#C1440E] transition-colors h-fit"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 border border-hairline rounded-full px-1">
                            <button
                              onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                              className="p-1.5"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-medium w-4 text-center">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                              className="p-1.5"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="font-semibold text-sm">${item.price * item.qty}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-hairline p-6 shrink-0">
                <div className="flex justify-between mb-4 text-sm">
                  <span className="text-slate">Subtotal</span>
                  <span className="font-semibold">${cartSubtotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-3.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-signal transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
