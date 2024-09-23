// ref: https://codesandbox.io/p/sandbox/framer-motion-image-mouse-trail-kf3hy?file=%2Fsrc%2Fstyles.css%3A1%2C1-54%2C1
// https://tympanus.net/codrops/2019/08/07/image-trail-effects/
// https://github.com/codrops/ImageTrailEffects/

import React, { useState, useRef } from 'react'
import { mix, distance, wrap } from '@popmotion/popcorn'
import { useAnimationLoop } from './utils'

import ImagePlaceholder from './ImagePlaceholer'

const imageUrls = [
  'https://ctrl.xyz/images/stickers/sticker-5_clean.svg',
  'https://ctrl.xyz/images/stickers/sticker-4_clean.svg',
  'https://ctrl.xyz/images/stickers/sticker-3_clean.svg',
  'https://ctrl.xyz/images/stickers/sticker-2_clean.svg',
  'https://ctrl.xyz/images/stickers/sticker-1_clean.svg',
]

type TProps = {
  children?: React.ReactNode
  distanceThreshold?: number
}

type ImagePosition = {
  xOrigin: number
  yOrigin: number
  x: number
  y: number
  style: React.CSSProperties
}
const MouseTrailImages: React.FC<TProps> = ({
  distanceThreshold = 90,
  children,
}) => {
  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 },
  }).current

  const imagePositions = useRef<ImagePosition[]>([])

  const [index, setIndex] = useState(0)

  useAnimationLoop(() => {
    const mouseDistance = distance(mouseInfo.now, mouseInfo.prevImage)

    mouseInfo.prev = {
      x: mix(mouseInfo.prev.x || mouseInfo.now.x, mouseInfo.now.x, 0.1),
      y: mix(mouseInfo.prev.y || mouseInfo.now.y, mouseInfo.now.y, 0.1),
    }

    if (mouseDistance > distanceThreshold) {
      const newIndex = index + 1
      const imageIndex = wrap(0, imageUrls.length, newIndex)

      imagePositions.current[imageIndex] = {
        xOrigin: mouseInfo.prev.x,
        yOrigin: mouseInfo.prev.y,
        x: mouseInfo.now.x,
        y: mouseInfo.now.y,
        style: {
          width: 100,
          height: 100,
          zIndex: imageIndex + 1,
        },
      }

      mouseInfo.prevImage = mouseInfo.now

      setIndex(newIndex)
    }
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    mouseInfo.now = { x: e.pageX, y: e.pageY }
  }

  return (
    <div className='overflow-hidden bg-white' onMouseMove={handleMouseMove}>
      {imageUrls.map((url, i) => (
        <ImagePlaceholder
          position={imagePositions.current[i]}
          imageUrl={url}
          key={url}
        />
      ))}

      {children}
    </div>
  )
}

export default MouseTrailImages
