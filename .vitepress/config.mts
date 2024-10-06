import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KJ Network",
  description: "简单与愚蠢并存的工作室",
  themeConfig: {
    logo: '/assets/kn.DwbFt_Ck.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/start' },
      { text: '作品',
        items: 
          [ 
            { text: 'K-Nel', link: '/k-nel' } 
          ]
        },
      { text: '关于我们', link: '/about' }
    ],

    sidebar: [
        { text: '快速开始', link: '/start' },
        { text: '作品',
        items: 
          [ 
            { text: 'K-Nel', link: '/k-nel' } 
          ]
        },
        { text: '关于我们', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kj-network' }
    ]
  }
})
