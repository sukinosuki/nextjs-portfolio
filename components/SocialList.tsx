import { SiBilibili, SiGithub, SiLeetcode, SiXiaohongshu } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import ContactIcon from './ContactIcon'
import Magnetic from './Magnetic'
import React from 'react'
import { motion, Variants } from 'framer-motion'

type TProps = {
  delayAnimate?: number
  once?: boolean
} & React.HTMLAttributes<HTMLElement>
type Social = {
  link: string
  color: string
  icon: React.ReactNode
  name: string
}
//
const SocialList: React.FC<TProps> = ({
  className,
  delayAnimate = 0,
  once = true,
}) => {
  const socials: Social[] = [
    {
      link: 'https://www.xiaohongshu.com/',
      icon: <SiXiaohongshu></SiXiaohongshu>,
      color: 'bg-red',
      name: '小红书',
    },
    {
      link: 'https://space.bilibili.com/',
      icon: <SiBilibili></SiBilibili>,
      color: 'bg-sky',
      name: '哔哩哔哩',
    },
    {
      link: 'https://github.com/sukinosuki',
      icon: <SiGithub></SiGithub>,
      color: 'bg-black/60',
      name: 'Github',
    },
    {
      link: 'https://leetcode.cn/u/hanami/',
      icon: <SiLeetcode></SiLeetcode>,
      color: 'bg-orange/90',
      name: 'Leetcode',
    },
    {
      link: 'mailto:miiro444@outlook.com',
      icon: <MdEmail></MdEmail>,
      color: 'bg-neutral',
      name: 'Email',
    },
  ]
  const variants: Variants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      variants={variants}
      transition={{
        delayChildren: delayAnimate,
        staggerChildren: 0.1,
      }}
      whileInView='animate'
      viewport={{
        once: once,
      }}
      initial='initial'
      className={`flex gap-x-2 ${className}`}
    >
      {socials.map(social => (
        <motion.div variants={variants} key={social.name}>
          <Magnetic key={social.name}>
            <ContactIcon className={social.color} link={social.link}>
              {social.icon}
            </ContactIcon>
          </Magnetic>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SocialList
