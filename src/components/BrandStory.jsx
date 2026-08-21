import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'
import ShoeArt from './ShoeArt'

const STATS = [
  { value: 10000, suffix: '+', label: 'Athletes' },
  { value: 25, suffix: '+', label: 'Countries' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const duration = 1400
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function BrandStory() {
  return (
    <section id="brand-story" className="py-24 md:py-32 max-w-[1440px] mx-auto px-5 md:px-10">
      <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
        <Reveal type="left" className="bg-mist rounded-[2rem] p-12 md:p-16">
          <ShoeArt className="w-full h-auto" accent="#C1440E" />
        </Reveal>
        <Reveal type="right">
          <p className="text-xs font-semibold tracking-[0.25em] text-signal uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-6xl mb-6 text-balance">
            Made To Move With You.
          </h2>
          <p className="text-slate leading-relaxed max-w-md">
            AERON exists at the intersection of performance, design and everyday movement. Every
            pair is built by people who run, train and walk in what they make &mdash; testing
            each detail until it disappears underfoot.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-10 border-t border-hairline pt-12">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} type="scale" className="text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="text-xs md:text-sm text-slate mt-2 tracking-wide">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
