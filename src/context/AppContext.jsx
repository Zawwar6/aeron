import { createContext, useContext, useMemo, useState, useCallback } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setCartOpen] = useState(false)
  const [isSearchOpen, setSearchOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  const addToCart = useCallback((product, size, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.size === size)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.size === size ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { ...product, size, qty }]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((id, size) => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)))
  }, [])

  const updateQty = useCallback((id, size, qty) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id && i.size === size ? { ...i, qty: Math.max(1, qty) } : i))
    )
  }, [])

  const toggleWishlist = useCallback((productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )
  }, [])

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart])
  const cartSubtotal = useMemo(
    () => cart.reduce((sum, i) => sum + i.qty * i.price, 0),
    [cart]
  )

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    cartCount,
    cartSubtotal,
    isCartOpen,
    setCartOpen,
    wishlist,
    toggleWishlist,
    isSearchOpen,
    setSearchOpen,
    quickViewProduct,
    setQuickViewProduct,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
