import { Project } from '@/types/Project'

export const projects: Project[] = [
  {
    name: 'Miiro Blog',
    repository: 'https://github.com/sukinosuki/blog-nuxt3',
    preview: 'https://miiro-blog2.pages.dev/',
    description: '一个Nuxt3编写的博客',
    skill_stack: ['nuxt3', 'vue3', 'vueuse motion', 'drizzle'],
    cover: '/images/project/miiro_blog.jpg',
  },
  {
    name: 'Duel Links Meta App',
    repository: 'https://github.com/sukinosuki/duel-links-meta-flutter-app',
    preview: null,
    description: 'Duel Links Meta的非官方个人向app',
    skill_stack: ['flutter', 'dart'],
    cover: '/images/project/duel_links_meta_app.jpg',
  },
  {
    name: 'Nextjs Portfolio',
    repository: 'https://github.com/sukinosuki/nextjs-portfolio',
    preview: '',
    description: '使用Nextjs + Framer motion编写的个人信息页面',
    skill_stack: ['react', 'nextjs', 'framer motion'],
    cover: '/images/project/next_profile.jpg',
  },
  {
    name: 'Momo Chat',
    repository: 'https://github.com/sukinosuki/momo-chat-web',
    preview: '',
    description: 'spring boot编写的聊天室',
    skill_stack: ['react', 'framer motion', 'spring boot'],
    cover: '/images/project/momo_chat.png',
  },
]
