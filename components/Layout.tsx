import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { useLenis } from 'lenis/react'
import { Sora } from 'next/font/google'
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})
type TProps = {
  children?: React.ReactNode
}
type NavLink = {
  href: string
  name: string
}
//
const Layout: React.FC<TProps> = ({ children }) => {
  const lenis = useLenis()
  const links: NavLink[] = [
    {
      href: '#skills',
      name: 'Skills',
    },
    {
      href: '#projects',
      name: 'Projects',
    },
    {
      href: '#contacts',
      name: 'Contacts',
    },
  ]

  return (
    <div className={`${sora.className}`}>
      <header className='fixed top-0 z-100 w-full flex justify-center py-2'>
        <nav className='flex items-center max-md-hidden xl:w-1200px'>
          <Link
            href='#home'
            className='mr-auto text-5 text-#25282B'
            onClick={e => {
              // e.preventDefault()
              lenis?.scrollTo('#home')
            }}
          >
            Hanami
          </Link>

          <ul className='flex'>
            {links.map(link => (
              <li key={link.name} className='relative'>
                <Link
                  href={link.href}
                  className='relative z-1 block px-2 py-3'
                  onClick={e => {
                    // e.preventDefault()
                    lenis?.scrollTo(link.href)
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className='mx-auto pb-40'>{children}</main>
    </div>
  )
}

export default Layout
