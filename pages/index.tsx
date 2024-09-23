import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from 'framer-motion'
import SocialList from '@/components/SocialList'
import { ReactLenis } from 'lenis/react'
import SectionTitle from '@/components/SectionTitle'
import MouseTrailImages from '@/components/MouseTrailImages'
import ProjectSection from '@/components/ProjectSection'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef } from 'react'
import SkillSection from '@/components/SkillSection/SkillSection'

export default function Home() {
  const nameClipPathControl = useAnimationControls()
  const nameDotControl = useAnimationControls()
  const nameFlowerControl = useAnimationControls()
  const nameRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const intro =
    '你好，这里是桜花秋水，一名前端兼后端开发。我正在考虑新的工作机会。你可以在下面的联系方式找到我。'
  //
  const initAnimation = async () => {
    const bounds = nameRef.current?.getBoundingClientRect()

    await nameDotControl.start({
      x: -20,
      transition: {
        delay: 1,
        duration: 0.3,
      },
    })

    nameDotControl.start({
      x: bounds?.width,
      transition: {
        duration: 1,
        ease: 'backInOut',
        damping: 30,
        stiffness: 300,
      },
    })

    await nameClipPathControl.start({
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        delay: 0.05,
        duration: 1,
        ease: 'backInOut',
      },
    })

    nameFlowerControl.start({
      width: 80,
      scale: 1,
      opacity: 1,
    })

    nameDotControl.start({
      x: (bounds?.width || 0) + 80,
      transition: {
        ease: 'backInOut',
        damping: 10,
        stiffness: 300,
      },
    })
  }
  useEffect(() => {
    initAnimation()
  }, [])

  return (
    <motion.div>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <svg height='0' width='0'>
          <defs>
            <clipPath id='svgPath'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z'
                fill='#FDC435'
              />
            </clipPath>
          </defs>
        </svg>

        <div className='relative' id='home'>
          <div className='absolute right-0 top-0 h-full w-full overflow-hidden'>
            <div
              className='absolute top-0 h-200 w-200 origin-top-right overflow-hidden bg-sky -right-30 max-md-hidden max-lg-scale-70'
              style={{
                clipPath: 'url(#svgPath)',
                backgroundImage:
                  'url(https://pcsdata.baidu.com/thumbnail/b1852a4d0n850ed9d5e182ee073ea0f1?fid=4231269538-16051585-906965282003349&rt=pr&sign=FDTAER-yUdy3dSFZ0SVxtzShv1zcMqd-2TD3dfL4J%2BKGIH1sdXusydlULT8%3D&expires=2h&chkv=0&chkbd=0&chkpc=&dp-logid=414059372612633310&dp-callid=0&time=1727053200&bus_no=26&size=c1600_u1600&quality=100&vuk=-&ft=video)',
                backgroundPositionX: 0,
                backgroundPositionY: -200,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></div>
          </div>

          <div className='mx-auto h-screen flex items-center md-w-700px xl:w-1200px max-md-justify-center max-md-px-4'>
            <motion.div
              className='w-120'
              style={{
                opacity,
                scale,
              }}
            >
              <motion.h3
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1.2,
                }}
                className='mt-4 flex flex-col text-13 text-#25282B font-bold max-md-text-8'
              >
                <span>Hello, my name is</span>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 1.2,
                  }}
                  className='relative text-16 max-md-text-12'
                >
                  <motion.span
                    className='inline-block overflow-hidden'
                    initial={{
                      clipPath: 'inset(0% 100% 0% 0%)',
                    }}
                    animate={nameClipPathControl}
                    ref={nameRef}
                  >
                    桜
                    <motion.span
                      initial={{
                        width: 0,
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={nameFlowerControl}
                      className='inline-block h-20 w-20 origin-center'
                    >
                      <img
                        src='/images/flower.svg'
                        className='h-full w-full'
                        alt=''
                      />
                    </motion.span>
                    花秋水
                  </motion.span>

                  <motion.span
                    initial={{
                      x: 0,
                    }}
                    animate={nameDotControl}
                    className='absolute bottom-10 left-0 inline-block h-4 w-4 rounded-full bg-black'
                  ></motion.span>
                </motion.div>
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  delay: 1.2,
                  duration: 1.2,
                }}
                className='text-5 text-primary font-bold'
              >
                <TypeAnimation
                  sequence={[
                    2000,
                    'A FULL-STACK <DEVELOPER />。',
                    2000,
                    'A ACG 爱好者。',
                    // 1000,
                  ]}
                  repeat={Infinity}
                ></TypeAnimation>
              </motion.h4>

              <motion.p
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  delay: 1.6,
                  duration: 1.2,
                }}
                className='mt-8 text-5 text-#828282'
              >
                {intro}
              </motion.p>

              <SocialList delayAnimate={2} className='mt-10' />
            </motion.div>
          </div>
        </div>

        <SkillSection></SkillSection>

        <ProjectSection />

        <MouseTrailImages>
          <div className='relative z-10 py-10' id='contacts'>
            <SectionTitle title='Contacts/联系我' />

            <SocialList className='mt-10 justify-center !gap-x-6' />
          </div>
        </MouseTrailImages>
      </ReactLenis>
    </motion.div>
  )
}
