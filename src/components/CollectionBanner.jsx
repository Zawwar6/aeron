import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ShoeArt from './ShoeArt'
import Reveal from './Reveal'

export default function CollectionBanner() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section id="collection" ref={ref} className="relative py-28 md:py-40 bg-ink text-paper overflow-hidden">
      <motion.div style={{ y }} className="absolute -right-24 -bottom-24 w-[520px] opacity-[0.08]">
        <ShoeArt className="w-full h-auto" color="#FFFFFF" accent="#FFFFFF" />
      </motion.div>

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 text-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-paper/60 mb-5">
            Fall / Winter
          </p>
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-7xl text-balance max-w-4xl mx-auto">
            The Next Generation Of Movement
          </h2>
          <p className="text-paper/70 mt-6 max-w-lg mx-auto">
            Performance technology meets everyday design.
          </p>
          <a
            href="#best-sellers"
            data-cursor="button"
            className="inline-flex items-center gap-2 mt-9 px-7 py-3.5 rounded-full bg-paper text-ink text-sm font-semibold hover:bg-signal hover:text-paper transition-colors"
          >
            Explore Collection <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
