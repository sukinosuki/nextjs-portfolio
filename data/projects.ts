import { Project } from '@/types/Project'

export const projects: Project[] = [
  {
    name: 'Miiro Blog',
    repository: 'https://github.com/sukinosuki/blog-nuxt3',
    preview: 'https://miiro-blog2.pages.dev/',
    description: '一个Nuxt3编写的博客',
    skill_stack: ['nuxt3', 'vue3', 'vueuse motion', 'drizzle'],
  },
  {
    name: 'Duel Links Meta App',
    repository: 'https://github.com/sukinosuki/duel-links-meta-flutter-app',
    preview: null,
    description: 'Duel Links Meta的非官方个人向app',
    skill_stack: ['flutter', 'dart'],
  },
  {
    name: '',
    repository: '',
    preview: '',
    description: '',
    skill_stack: [],
  },
  {
    name: '',
    repository: '',
    preview: '',
    description: '',
    skill_stack: [],
  },
]
