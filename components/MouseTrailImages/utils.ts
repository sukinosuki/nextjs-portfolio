import sync, { cancelSync } from 'framesync'
import { useEffect } from 'react'
import { createExpoIn, reversed } from '@popmotion/easing'

// Version of Greensock's Quad ease out
export const powerOut4 = reversed(createExpoIn(4))

// Hook to use an animation loop
export const useAnimationLoop = callback => {
  useEffect(() => {
    sync.update(callback, true)
    return () => cancelSync.update(callback)
  }, [callback])
}

// Center images using transforms
export const center = (_, generated: string) =>
  `translate(-50%, -50%) ${generated}`

// Emulate slightly different image ratios by randomly generating size
const generateNumber = (base: number, range: number) => {
  return base - range / 2 + Math.round(Math.random() * range)
}
export const generateSize = () => ({
  height: generateNumber(140, 110),
  width: generateNumber(120, 100),
})

// Instead of using images just use color placeholders.
// const placeholderColors: Set<string> = new Set()

// for (let i = 0; i < 30; i++) {
//   placeholderColors.add(`hsla(${Math.round(Math.random() * 360)},100%,70%,1)`)
// }

// export const colors = Array.from(placeholderColors);
// export const imageUrls = [
//   'https://gd-hbimg.huaban.com/849959cde271ee6344ceb311560ae7a92a5366a018442-H3gTJ6_fw658webp',
//   'https://gd-hbimg.huaban.com/be246449cf8675ec7e7ccdadc4ec1be4a18676f598349-Twn34q_fw658webp',
//   'https://gd-hbimg.huaban.com/5346efeaba2aeb4e65592850ba6e3240b7b63c5a121923-eyp1Ks_fw658webp',
//   'https://gd-hbimg.huaban.com/459c44788b3199116074ab19a82c6d4d6e5d27eabc41e-lk7J4p_fw658webp',
//   'https://gd-hbimg.huaban.com/be3a60e43c2cab573021754ba59e7eb7e6e22b2018a26b-D7esdP_fw658webp',
//   'https://gd-hbimg.huaban.com/5f8a660bc905a4efa837c90bb4311ea79c78f68d1718c4-mfw8Fh_fw658webp',
//   'https://gd-hbimg.huaban.com/d16c56efaba7d4528d94cb619d147c0a183537b417213b-T6b9Hj_fw658webp',
//   'https://gd-hbimg.huaban.com/183960afbdf776c4e09a21680e4d67bed349e6f789b97-oYiv6c_fw658webp',
//   'https://gd-hbimg.huaban.com/9cd77bff9a16dd0d44196db18272734a365749d28aac9-4Scx9X_fw658webp',
//   'https://gd-hbimg.huaban.com/a82fb4dede18978d85cb7cda2f3125189fbd2e5422242-M4z9jw_fw658webp',
//   'https://gd-hbimg.huaban.com/27a91b8c468a1957968436ce07f514ba0f9877602ac50a-YAGolN_fw658webp',
// ]
