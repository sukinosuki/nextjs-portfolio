import React from 'react'
import Squircle from './Squircle'

type TProps = {
  children: React.ReactNode
  link: string
} & React.HTMLAttributes<HTMLDivElement>

const ContactIcon: React.FC<TProps> = ({ children, className, link }) => {
  return (
    <Squircle>
      <a
        href={link}
        target='__blank'
        className={`${className} block shadow-2xl  shadow-black w-10 h-10 flex justify-center items-center 
          text-6 overflow-hidden text-white`}
      >
        {children}
      </a>
    </Squircle>
  )
}

export default ContactIcon
