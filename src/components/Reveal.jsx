import { motion, useReducedMotion } from 'framer-motion'

/** Subtle fade/slide-in on scroll. Renders static content when the OS asks for reduced motion. */
export default function Reveal({ children, delay = 0, y = 24, as = 'div', className = '' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
