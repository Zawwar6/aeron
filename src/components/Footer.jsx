const COLUMNS = [
  { title: 'Shop', links: ['Men', 'Women', 'Running', 'New Arrivals'] },
  { title: 'Company', links: ['About', 'Our Story', 'Careers', 'Contact'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Size Guide', 'FAQ'] },
]

const SOCIALS = [
  {
    label: 'Instagram',
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'Facebook',
    path: (
      <path d="M14 9V6.5C14 5.67 14.67 5 15.5 5H17V2h-2.5A4.5 4.5 0 0010 6.5V9H7v3h3v10h4V12h2.6L17 9h-3z" />
    ),
  },
  {
    label: 'YouTube',
    path: (
      <>
        <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
        <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none" />
      </>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-hairline pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-10 pb-14">
          <div>
            <p className="font-display text-2xl font-bold mb-2">AERON</p>
            <p className="text-slate text-sm">Move Different.</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-slate mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-signal transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate mb-4">
              Follow
            </h4>
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center hover:border-ink transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    {s.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-hairline pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate">
          <p>&copy; 2026 AERON. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
