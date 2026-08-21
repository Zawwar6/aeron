import { Feather, Zap, Wind, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const BENEFITS = [
  { icon: Feather, title: 'Lightweight', text: 'Built with lightweight materials.' },
  { icon: Zap, title: 'Responsive', text: 'Engineered for natural movement.' },
  { icon: Wind, title: 'Breathable', text: 'Designed to keep your feet comfortable.' },
  { icon: ShieldCheck, title: 'Durable', text: 'Made for everyday performance.' },
]

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-mist">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl">
            Why AERON
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} type="up">
              <div className="bg-paper border border-hairline rounded-2xl p-6 md:p-8 h-full">
                <b.icon size={22} strokeWidth={1.5} className="mb-4 text-signal" />
                <h3 className="font-display font-semibold mb-1.5">{b.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
