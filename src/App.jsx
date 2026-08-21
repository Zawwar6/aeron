import { useEffect, useState } from 'react'
import { AppProvider } from './context/AppContext'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProduct from './components/FeaturedProduct'
import CategorySection from './components/CategorySection'
import ProductGrid from './components/ProductGrid'
import ProductShowcase from './components/ProductShowcase'
import NewArrivals from './components/NewArrivals'
import CollectionBanner from './components/CollectionBanner'
import BrandStory from './components/BrandStory'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import QuickViewModal from './components/QuickViewModal'
import SearchOverlay from './components/SearchOverlay'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <AppProvider>
      <Loader show={loading} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <FeaturedProduct />
        <CategorySection />
        <ProductGrid />
        <ProductShowcase />
        <NewArrivals />
        <CollectionBanner />
        <BrandStory />
        <Benefits />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <QuickViewModal />
      <SearchOverlay />
    </AppProvider>
  )
}
