import { VitePluginFonts } from 'vite-plugin-fonts'

/** @type {import('vite').UserConfig} */
export default {
    plugins: [
        VitePluginFonts({
          google: {
            families: ['Montserrat', 'Fraunces'],
          },
        }),
      ],
  }