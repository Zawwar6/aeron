import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="py-24 md:py-32 bg-signal-dim">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 text-center">
        <Reveal>
          <h2 className="font-display font-semibold tracking-tight text-4xl md:text-5xl mb-4">
            Stay In Motion.
          </h2>
          <p className="text-slate max-w-md mx-auto mb-8">
            Get first access to new drops, exclusive releases and AERON updates.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-semibold text-signal"
              >
                You&rsquo;re on the list. Welcome to AERON.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col xs:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="flex-1 px-5 py-3.5 rounded-full border border-hairline bg-paper text-sm focus:outline-none focus:border-ink transition-colors"
                />
                <button
                  type="submit"
                  data-cursor="button"
                  className="px-7 py-3.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-signal transition-colors shrink-0"
                >
                  Join AERON
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
