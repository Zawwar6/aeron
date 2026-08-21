import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import ShoeArt from './ShoeArt'

const POINTS = [
  {
    id: 'upper',
    label: 'Lightweight Upper',
    style: { top: '18%', left: '30%' },
    detail: 'An engineered mesh upper shaves weight without sacrificing structure or support.',
  },
  {
    id: 'cushion',
    label: 'Responsive Cushioning',
    style: { bottom: '20%', left: '18%' },
    detail: 'A dual-density midsole returns energy with every stride, from warm-up to sprint.',
  },
  {
    id: 'mesh',
    label: 'Breathable Mesh',
    style: { top: '14%', right: '22%' },
    detail: 'Ventilated zones move heat and moisture away to keep feet cool for longer.',
  },
  {
    id: 'comfort',
    label: 'All-Day Comfort',
    style: { bottom: '16%', right: '16%' },
    detail: 'A padded collar and anatomical footbed are built for movement that never stops.',
  },
]

export default function ProductShowcase() {
  const [active, setActive] = useState(null)
  const point = POINTS.find((p) => p.id === active)

  return (
    <section className="py-24 md:py-32 bg-mist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <Reveal className="text-center mb-14">
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-6xl text-balance">
            One Shoe. Every Direction.
          </h2>
        </Reveal>

        <div className="relative max-w-3xl mx-auto aspect-[4/3]">
          <div className="absolute inset-[8%] flex items-center justify-center">
            <ShoeArt className="w-full h-auto" accent="var(--color-signal)" />
          </div>

          {POINTS.map((p) => (
            <button
              key={p.id}
              style={p.style}
              onClick={() => setActive(active === p.id ? null : p.id)}
              data-cursor="button"
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group"
            >
              <motion.span
                animate={{ scale: active === p.id ? 1.3 : [1, 1.15, 1] }}
                transition={{ duration: active === p.id ? 0.3 : 2, repeat: active === p.id ? 0 : Infinity }}
                className={`w-3.5 h-3.5 rounded-full border-2 ${
                  active === p.id ? 'bg-signal border-signal' : 'bg-paper border-ink'
                }`}
              />
              <span className="hidden md:inline text-xs font-semibold bg-paper/90 px-2.5 py-1 rounded-full border border-hairline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {p.label}
              </span>
            </button>
          ))}
        </div>

        <div className="min-h-[100px] flex justify-center mt-4">
          <AnimatePresence mode="wait">
            {point && (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="bg-paper border border-hairline rounded-2xl px-6 py-5 max-w-md text-center shadow-sm"
              >
                <h3 className="font-display font-semibold text-base mb-1.5">{point.label}</h3>
                <p className="text-sm text-slate leading-relaxed">{point.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {!point && (
          <p className="text-center text-sm text-slate mt-2">
            Tap a point on the shoe to explore its features.
          </p>
        )}
      </div>
    </section>
  )
}
