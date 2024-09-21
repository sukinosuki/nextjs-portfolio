import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type TProps = {
  title: string
}

const SectionTitle: React.FC<TProps> = ({ title }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const y = useTransform(scrollYProgress, [0, 1], [20, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1])

  return (
    <motion.h2
      className='py-20 text-center text-14 text-#25282B font-bold max-md-text-8'
      ref={targetRef}
      style={{
        scale,
        opacity,
        y,
      }}
    >
      {title}
    </motion.h2>
  )
}

export default SectionTitle
