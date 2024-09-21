import {
  defineConfig,
  // presetAttributify,
  // presetIcons,
  // presetWebFonts,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    // ...
  ],
  theme: {
    colors: {
      primary: '#FDC435',
    },
  },
})
