import { motion, MotionValue, useTransform } from 'framer-motion'
import React from 'react'

type TProps = {
  scrollYProgress: MotionValue<number>
  children: React.ReactNode
  index: number
  //   skills: string[][]
} & React.HTMLAttributes<HTMLElement>

const SkillBox: React.FC<TProps> = ({
  children,
  index,
  scrollYProgress,
  className,
}) => {
  const base = index * 0.33
  const y = useTransform(
    scrollYProgress,
    [base, base + 0.2, base + 0.33, base + 0.4],
    [50 * index + 500, 0, 0, -(50 * index + 200)]
  )

  const opacity = useTransform(
    scrollYProgress,
    [base, base + 0.2, base + 0.33, base + 0.4 > 1 ? 1 : base + 0.4],
    [0, 1, 1, 0]
  )

  const bgY = useTransform(scrollYProgress, [base, base + 0.4], [0, 20])
  return (
    <motion.div
      style={{
        opacity,
        y,
        rotateY: 20,
        backgroundImage: 'url(/images/bg1.svg)',
        backgroundPositionY: bgY,
        backgroundPositionX: bgY,
      }}
      className={`${className} absolute left-1/2 right-1/2 w-90 translate-x-1/2 translate-y-1/2 rounded-2xl p-5 text-8 text-#25282B`}
    >
      {children}
    </motion.div>
  )
}

export default SkillBox
