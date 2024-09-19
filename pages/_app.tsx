import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '../components/Transition'
import { usePathname } from 'next/navigation'
// _app.tsx
import '@unocss/reset/tailwind.css'

import 'uno.css'

export default function App({ Component, pageProps }: AppProps) {
  // required
  const pathname = usePathname()

  console.log('pathname ', pathname)

  return (
    <AnimatePresence mode='wait'>
      <motion.div className='h-full' key={pathname}>
        <Transition></Transition>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
