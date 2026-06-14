import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BetterNemo Wiki",
  description: "更好的Nemo",
  base: "/wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: 'examples/markdown-examples' }
    ],

    sidebar: generateSidebar({
      // 扫描 'docs' 文件夹下的内容，生成侧边栏
      scanStartPath: 'docs',
      // 允许侧边栏分组折叠
      collapsed: true, 
      // 支持从文件的 h1 标题自动提取侧边栏文字
      useTitleFromFileHeading: true, 
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
