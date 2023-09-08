import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/images/desktop/image-header.jpg')"
      },
      fontFamily: {
        "barlow": ["Barlow", "sans-serif"],
        "fraunces": ["Fraunces", "sans-serif"]
      },
      textColor: {
        "body": "#818498"
      }
    }
  },
  plugins: [],
}
export default config
