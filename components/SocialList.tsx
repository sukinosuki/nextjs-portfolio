import { SiBilibili, SiGithub, SiLeetcode, SiXiaohongshu } from 'react-icons/si'
import ContactIcon from './ContactIcon'
import Magnetic from './Magnetic'
import React from 'react'

type TProps = {} & React.HTMLAttributes<HTMLElement>
//
const SocialList: React.FC<TProps> = ({ className }) => {
  return (
    <div className={`flex gap-x-2 ${className}`}>
      <Magnetic>
        <ContactIcon
          className='bg-red'
          link='https://www.xiaohongshu.com/user/profile/6502ac75000000001603b403'
        >
          <SiXiaohongshu></SiXiaohongshu>
        </ContactIcon>
      </Magnetic>
      <Magnetic>
        <ContactIcon
          className='bg-sky'
          link='https://space.bilibili.com/672111'
        >
          <SiBilibili></SiBilibili>
        </ContactIcon>
      </Magnetic>
      <Magnetic>
        <ContactIcon
          className='bg-black/60'
          link='https://github.com/sukinosuki'
        >
          <SiGithub></SiGithub>
        </ContactIcon>
      </Magnetic>
      <Magnetic>
        <ContactIcon
          className='bg-orange/90'
          link='https://leetcode.cn/u/hanami/'
        >
          <SiLeetcode></SiLeetcode>
        </ContactIcon>
      </Magnetic>
    </div>
  )
}

export default SocialList
