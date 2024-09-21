import { motion, useMotionValue } from 'framer-motion'
import React from 'react'

type TProps = {
  children: React.ReactNode
}
//
const Magnetic: React.FC<TProps> = ({ children }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower
    const OUTPUT_RANGE = outputUpper - outputLower

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }

  const hover = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const bounds = target.getBoundingClientRect()
    const relativeX = e.clientX - bounds.left
    const relativeY = e.clientY - bounds.top

    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX)
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY)

    x.set(xRange * 3)
    y.set(yRange * 3)
  }

  return (
    <motion.div
      onPointerMove={hover}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{
        x,
        y,
      }}
      whileHover='hovered'
      initial='initial'
      className='duration-700 ease-out'
      //   className='group relative h-55 w-55 overflow-hidden border-2 border-black rounded-full duration-700 ease-out'
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
