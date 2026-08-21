import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ShoeArt from './ShoeArt'
import Reveal from './Reveal'
import { categories } from '../data/products'

export default function CategorySection() {
  return (
    <section id="categories" className="py-24 md:py-32 max-w-[1440px] mx-auto px-5 md:px-10">
      <Reveal className="mb-12">
        <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">
          Shop By Category
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 0.1} type="scale">
            <motion.a
              href="#best-sellers"
              data-cursor="view"
              whileHover="hover"
              className="group block relative rounded-[1.75rem] bg-mist border border-hairline overflow-hidden aspect-[4/5]"
            >
              <motion.div
                variants={{ hover: { scale: 1.08, y: -6 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center p-10"
              >
                <ShoeArt className="w-full h-auto opacity-90" accent={cat.accent} />
              </motion.div>
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 bg-ink/[0.04]"
              />
              <div className="absolute bottom-0 inset-x-0 p-7 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-1">{cat.title}</h3>
                  <p className="text-sm text-slate max-w-[200px]">{cat.description}</p>
                </div>
                <motion.span
                  variants={{ hover: { x: 6, y: -6 } }}
                  className="shrink-0 w-11 h-11 rounded-full bg-paper border border-hairline flex items-center justify-center"
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
