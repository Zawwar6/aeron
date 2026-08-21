import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const [variant, setVariant] = useState('default')

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }
    const over = (e) => {
      const target = e.target.closest('[data-cursor]')
      setVariant(target ? target.getAttribute('data-cursor') : 'default')
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.documentElement.classList.add('cursor-enabled')
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.classList.remove('cursor-enabled')
    }
  }, [])

  const size = variant === 'view' ? 64 : variant === 'button' ? 40 : 14

  return (
    <div
      ref={dotRef}
      className="cursor-dot hidden lg:flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {variant === 'view' && (
        <span className="text-[10px] tracking-widest text-paper font-medium">VIEW</span>
      )}
    </div>
  )
}
