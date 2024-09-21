'use client'

import { motion, Variants } from 'framer-motion'

const Transition: React.FC = () => {
  const variants: Variants = {
    // 刚开始占满屏幕
    initial: {
      x: '100%',
      width: '100%',
    },
    // 页面向左过渡
    animate: {
      x: '0%',
      width: '0%',
    },
    // 退出时，页面从左铺满屏幕
    exit: {
      x: ['0%', '100%'],
      width: ['0%', '100%'],
    },
  }

  return (
    <>
      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: 'easeInOut',
        }}
        className='fixed bottom-0 right-full top-0 z-300 h-screen w-screen bg-white'
      ></motion.div>

      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: 'easeInOut',
        }}
        className='fixed bottom-0 right-full top-0 z-299 h-screen w-screen bg-black'
      ></motion.div>

      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: 'easeInOut',
        }}
        className='fixed bottom-0 right-full top-0 z-298 h-screen w-screen bg-orange-300'
      ></motion.div>
    </>
  )
}

export default Transition
