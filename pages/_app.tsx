import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '../components/Transition'
import { usePathname } from 'next/navigation'

// _app.tsx
import '@unocss/reset/tailwind.css'

import 'uno.css'
import '../styles/globals.css'

import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()

  console.log('pathname ', pathname)

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={pathname}>
          <Transition></Transition>
          <Component {...pageProps} />
        </motion.div>
        {/* <motion.div
          className='h-full'
          key={pathname}
          initial={{
            // opacity: 0,
            clipPath: 'polygon(50% 0, 50% 0,50% 100%,50% 100%)',
          }}
          animate={{
            // opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          }}
          exit={{
            // opacity: 0,
            clipPath: 'polygon(50% 0, 50% 0,50% 100%,50% 100%)',
          }}
        >
          <Transition></Transition>
          <Component {...pageProps} />
        </motion.div> */}
      </AnimatePresence>
    </Layout>
  )
}
