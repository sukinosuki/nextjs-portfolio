import { Project } from '@/types/Project'
import React from 'react'

type TProps = {
  project: Project
} & React.HTMLAttributes<HTMLElement>

const ProjectItem: React.FC<TProps> = ({ project, className }) => {
  return (
    <li
      className={`${className} flex overflow-hidden rounded-3xl bg-white h-100`}
    >
      <div className='h-full w-130 shrink-0 bg-amber'>
        <img
          src='https://gd-hbimg.huaban.com/55ccd6fe4c5c3768809b25725f4f5097ac7abc0b23f5e-ILHINX_fw658webp'
          alt=''
          className='h-full w-full object-cover'
        />
      </div>

      <div className='flex flex-col items-start items-start justify-center px-10'>
        <h4 className='text-12 text-#25282B'>{project.name}</h4>
        <p className='text-6 text-#828282'>{project.description}</p>
        <a
          className='mt-5 block flex items-center justify-center border-1 border-black rounded-full px-3 py-2 font-bold'
          href={project.repository}
        >
          View Project
        </a>
      </div>
    </li>
  )
}

export default ProjectItem
