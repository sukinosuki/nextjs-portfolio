import sync, { cancelSync } from 'framesync'
import { useEffect } from 'react'
import { createExpoIn, reversed } from '@popmotion/easing'

// Version of Greensock's Quad ease out
export const powerOut4 = reversed(createExpoIn(4))

// Hook to use an animation loop
export const useAnimationLoop = (callback: () => void) => {
  useEffect(() => {
    sync.update(callback, true)
    return () => cancelSync.update(callback)
  }, [callback])
}

// Center images using transforms
export const center = (v: unknown, generated: string) =>
  `translate(-50%, -50%) ${generated}`
