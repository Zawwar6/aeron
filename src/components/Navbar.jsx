import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useApp } from '../context/AppContext'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Men', href: '#categories' },
  { label: 'Women', href: '#categories' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Collections', href: '#collection' },
  { label: 'About', href: '#brand-story' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount, wishlist, setCartOpen, setSearchOpen } = useApp()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-paper/80 backdrop-blur-md border-b border-hairline shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-5 md:px-10 h-[76px]">
          <button
            onClick={() => handleNav('#home')}
            className="font-display text-xl font-bold tracking-tight"
            data-cursor="button"
            aria-label="AERON home"
          >
            AERON
          </button>

          <ul className="hidden lg:flex items-center gap-9 text-sm font-medium text-ink/80">
            {LINKS.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="hover:text-ink transition-colors relative group"
                  data-cursor="button"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-mist rounded-full transition-colors"
              data-cursor="button"
            >
              <Search size={19} strokeWidth={1.75} />
            </button>
            <button
              aria-label="Wishlist"
              className="p-2 hover:bg-mist rounded-full transition-colors relative"
              data-cursor="button"
            >
              <Heart size={19} strokeWidth={1.75} />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-signal text-paper text-[9px] flex items-center justify-center font-semibold">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              aria-label="Shopping bag"
              onClick={() => setCartOpen(true)}
              className="p-2 hover:bg-mist rounded-full transition-colors relative"
              data-cursor="button"
            >
              <ShoppingBag size={19} strokeWidth={1.75} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-ink text-paper text-[9px] flex items-center justify-center font-semibold"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-mist rounded-full transition-colors"
            >
              <Menu size={20} strokeWidth={1.75} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-paper flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-[76px]">
              <span className="font-display text-xl font-bold">AERON</span>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-mist rounded-full"
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  onClick={() => handleNav(link.href)}
                  className="font-display text-left text-4xl xs:text-5xl font-semibold py-2.5 tracking-tight"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
