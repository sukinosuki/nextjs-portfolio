import { motion, MotionStyle, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { center, powerOut4 } from './utils'

type Position = {
  x: number
  y: number
  xOrigin: number
  yOrigin: number
  style?: MotionStyle
}

type TProps = {
  position: Position
  imageUrl: string
}
//
const ImagePlaceholder: React.FC<TProps> = ({ position, imageUrl }) => {
  const controls = useAnimation()

  useEffect(() => {
    if (!position) return

    const { xOrigin, x, yOrigin, y } = position

    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [0.8, 1, 0.2],
      rotate: [0, -(Math.random() * 40), 10],
      transition: {
        duration: 0.8,
        ease: ['easeOut', powerOut4, powerOut4],
        times: [0, 0.5, 1],
      },
    })
  }, [position])

  const style = position ? position?.style : {}

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={controls}
      transformTemplate={center}
      style={{
        ...style,
      }}
      className='absolute left-0 top-0 overflow-hidden'
    >
      <img src={imageUrl} className='h-full w-full object-contain' alt='' />
    </motion.div>
  )
}

export default ImagePlaceholder
