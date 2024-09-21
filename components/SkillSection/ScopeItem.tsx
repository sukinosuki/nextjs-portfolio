import { motion, MotionValue, useTransform } from 'framer-motion'
import React from 'react'

type TProps = {
  scrollYProgress: MotionValue<number>
  base: number
  index: number
  background?: string
  name: string
  desc: string
  icon: React.ReactNode
}

const ScopeItem: React.FC<TProps> = ({
  scrollYProgress,
  index,
  background,
  name,
  desc,
  icon,
}) => {
  const base = index * 0.33
  const y = useTransform(
    scrollYProgress,
    [base, base + 0.2],
    [20 * index + 400, 0]
  )

  const opacity = useTransform(scrollYProgress, [base, base + 0.1], [0, 1])

  const height = useTransform(
    scrollYProgress,
    [base + 0.2, base + 0.33],
    [260, 0]
  )

  const textContainerY = useTransform(
    scrollYProgress,
    [base + 0.2, base + 0.33],
    [0, -240]
  )
  const textContainerOpacity = useTransform(
    scrollYProgress,
    [base + 0.2, base + 0.33],
    [1, 0]
  )

  return (
    <div className='p-4'>
      <motion.div
        style={{
          y,
          opacity,
          backgroundColor: background,
        }}
        className='w-90 flex overflow-hidden rounded-2xl p-5 max-md-w-full max-md-w-full'
      >
        <div className='flex flex-1 flex-col items-start justify-start'>
          <motion.span
            className='h-60 text-10 text-#25282B/90 font-500 leading-[1.1] max-md-text-8'
            style={{
              height,
              y: textContainerY,
              opacity: textContainerOpacity,
            }}
          >
            {desc}
          </motion.span>

          <span className='mt-1 inline-block justify-self-center rounded-full bg-white/70 px-3 py-2 font-500 leading-none'>
            {name}
          </span>
        </div>

        <div className='h-10 w-10 flex shrink-0 items-center justify-center rounded-full bg-black/20 text-white'>
          {icon}
        </div>
      </motion.div>
    </div>
  )
}

export default ScopeItem
