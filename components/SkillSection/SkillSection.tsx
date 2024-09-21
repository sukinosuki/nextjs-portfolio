import { useRef } from 'react'
import ScopeItem from './ScopeItem'
import { useScroll } from 'framer-motion'
import SkillBox from './SkillBox'
import { SiKotlin, SiReact, SiFlutter } from 'react-icons/si'
//
const SkillSection: React.FC = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 300px', 'end end'],
  })

  return (
    <div className='h-300vh' id='skills' ref={targetRef}>
      <div className='sticky top-0 h-screen flex items-center justify-center overflow-hidden'>
        <div className='mx-auto w-full flex lg-w-1200px md-w-700px'>
          <div className='h-150 bg-white'>
            <ScopeItem
              scrollYProgress={scrollYProgress}
              base={0}
              index={0}
              background='#9dc4f5'
              desc='使用Vue、React开发web应用'
              name='Vue / React'
              icon={<SiReact></SiReact>}
            ></ScopeItem>
            <ScopeItem
              scrollYProgress={scrollYProgress}
              base={0.2}
              index={1}
              background='#fbe74e'
              desc='使用Golang、Kotlin/Java、Php开发后端服务'
              name='Server'
              icon={<SiKotlin></SiKotlin>}
            ></ScopeItem>
            <ScopeItem
              scrollYProgress={scrollYProgress}
              base={0.4}
              desc='使用Flutter开发App应用'
              name='Android / Flutter'
              index={2}
              icon={<SiFlutter></SiFlutter>}
              background='#ffcadc'
            ></ScopeItem>
          </div>

          <div className='aspect-2/1 flex flex-1 flex-col items-center justify-center'>
            <SkillBox scrollYProgress={scrollYProgress} index={0}>
              <p>Vue、Nuxt、</p>
              <p>React、Framer motion、</p>
              <p>Unocss、Tailwindcss</p>
            </SkillBox>

            <SkillBox
              className='!w-140'
              scrollYProgress={scrollYProgress}
              index={1}
            >
              <p>GET: /api/v1/user</p>
              <p>GET: /api/v1/user/:id</p>
              <p>DELETE: /api/v1/user/:id</p>
              <p>PUT: /api/v1/user/:id</p>
              <p>GET: /api/v1/user/:id/age</p>
              <p>POST: /api/v1/user/:id/forbidden</p>
            </SkillBox>

            <SkillBox scrollYProgress={scrollYProgress} index={2}>
              <p>Flutter、Dart</p>
              <p>Android</p>
            </SkillBox>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillSection
