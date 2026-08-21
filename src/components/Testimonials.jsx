import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import { testimonials } from '../data/products'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const go = (dir) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 max-w-[1440px] mx-auto px-5 md:px-10">
      <Reveal className="text-center mb-14">
        <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">
          What People Say
        </h2>
      </Reveal>

      <div className="max-w-xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-center gap-1 text-signal mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill={i < t.rating ? 'currentColor' : 'none'} />
              ))}
            </div>
            <p className="font-display text-xl md:text-2xl font-medium leading-snug mb-6 text-balance">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-signal-dim flex items-center justify-center font-display font-semibold text-signal text-sm">
                {t.name.charAt(0)}
              </div>
              <span className="text-sm font-semibold">{t.name}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            data-cursor="button"
            className="w-11 h-11 rounded-full border border-hairline flex items-center justify-center hover:border-ink transition-colors"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            data-cursor="button"
            className="w-11 h-11 rounded-full border border-hairline flex items-center justify-center hover:border-ink transition-colors"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}
