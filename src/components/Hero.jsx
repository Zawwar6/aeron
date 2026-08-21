import { motion } from 'framer-motion'
import ShoeArt from './ShoeArt'

const heading = ['MOVE', 'DIFFERENT.']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.55, delayChildren: 0.5 } },
}
const word = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-[76px] overflow-hidden bg-paper">
      <div className="absolute -top-24 -right-40 w-[520px] h-[520px] rounded-full bg-signal-dim -z-10" />
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-76px)] py-14 lg:py-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs md:text-sm font-semibold tracking-[0.25em] text-signal uppercase mb-5"
          >
            AERON &mdash; Fall Collection
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display font-semibold leading-[0.92] tracking-tight text-ink"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 8rem)' }}
          >
            {heading.map((line) => (
              <span key={line} className="block overflow-hidden">
                <motion.span variants={word} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-7 text-base md:text-lg text-slate max-w-md text-balance"
          >
            Engineered for movement. Designed for everywhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#best-sellers"
              data-cursor="button"
              className="px-7 py-3.5 rounded-full bg-ink text-paper text-sm font-semibold tracking-wide hover:bg-signal transition-colors"
            >
              Shop Collection
            </a>
            <a
              href="#new-arrivals"
              data-cursor="button"
              className="px-7 py-3.5 rounded-full border border-hairline text-sm font-semibold tracking-wide hover:border-ink transition-colors"
            >
              Explore New Arrivals
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="w-full max-w-[620px] animate-float drop-shadow-[0_40px_60px_rgba(17,17,17,0.12)]">
            <ShoeArt className="w-full h-auto" accent="var(--color-signal)" />
          </div>
          <div className="absolute bottom-4 right-4 md:right-10 bg-paper border border-hairline rounded-2xl px-4 py-3 shadow-sm">
            <p className="text-[10px] tracking-widest text-slate uppercase">Featured</p>
            <p className="font-display font-semibold text-sm">AERON X-01</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
