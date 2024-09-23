import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
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
type Tool = {
  name: string
  icon: string
  desc?: string
}

//
const Layout: React.FC<TProps> = ({ children }) => {
  const lenis = useLenis()

  const tools: Tool[] = [
    {
      name: 'Apifox',
      icon: '/images/tools/apifox.svg',
      desc: '正在使用Apifox测试接口',
    },
    {
      name: 'Notion',
      icon: '/images/tools/notion.svg',
      desc: '正在使用notion做笔记',
    },
    {
      name: 'Chrome',
      icon: '/images/tools/chrome.svg',
      desc: '正在使用chrome查阅资料',
    },
    {
      name: 'Idea',
      icon: '/images/tools/intellij-idea.svg',
      desc: '正在使用idea开发',
    },
    {
      name: 'Vscode',
      icon: '/images/tools/visual-studio-code.svg',
      desc: '正在使用vscode开发',
    },
    {
      name: 'Wechat',
      icon: '/images/tools/wechat-logo.svg',
      desc: '正在使用微信交流',
    },
    {
      name: 'Chatgpt',
      icon: '/images/tools/chatgpt.svg',
      desc: '正在使用chatgpt',
    },
  ]

  const getRandomToolIndex = (current?: number | null) => {
    const index = Math.floor(tools.length * Math.random())

    if (index === current) {
      return getRandomToolIndex(current)
    }

    return index
  }
  const [toolIndex, setToolIndex] = useState<number | null>(null)
  const TOGGLE_TOOL_DURATION = 20000

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

  const timer = useRef<NodeJS.Timeout | null>(null)

  const initLoopTool = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setInterval(() => {
      setToolIndex(pv => getRandomToolIndex(pv))
    }, TOGGLE_TOOL_DURATION)
  }
  useEffect(() => {
    initLoopTool()

    return () => {
      clearTimeout(timer.current!)
    }
  }, [])

  return (
    <div className={`${sora.className}`}>
      <header className='fixed top-0 z-100 w-full flex justify-center py-2'>
        <nav className='flex items-center max-md-hidden xl:w-1200px'>
          <div className='mr-auto flex items-center'>
            <Link
              href='#home'
              className='text-5 text-#25282B'
              onClick={() => {
                // e.preventDefault()
                lenis?.scrollTo('#home')
              }}
            >
              Hanami
            </Link>

            <div className='pl-3'>
              <AnimatePresence mode='wait'>
                {tools.map(
                  (tool, index) =>
                    index === toolIndex && (
                      <div key={tool.name} className='flex items-center'>
                        <motion.div
                          key={tool.name}
                          className='h-6'
                          title={tool.desc}
                          initial={{
                            opacity: 0,
                            scale: 0,
                            y: '100%',
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: '-20%',
                            scale: 0.8,
                          }}
                        >
                          <img
                            src={tool.icon}
                            alt={tool.name}
                            className='h-full w-full'
                          />
                        </motion.div>
                        <motion.span
                          initial={{
                            opacity: 0,
                            y: 5,
                          }}
                          animate={{
                            opacity: [0, 1, 1, 0],
                            y: [5, 0, 0, -5],
                          }}
                          transition={{
                            duration: 2,
                            times: [0, 0.1, 0.9, 1],
                          }}
                          className='ml-2 text-3'
                        >
                          {tool.desc}
                        </motion.span>
                      </div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>

          <ul className='flex'>
            {links.map(link => (
              <li key={link.name} className='relative'>
                <Link
                  href={link.href}
                  className='relative z-1 block px-2 py-3'
                  onClick={() => {
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
