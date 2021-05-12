import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置当前路径别名
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './', // 设置打包路径
  server: {
    // 设置服务器
    port: 4000,
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 设置代理
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: path => path.replace('/api/', '/')
    //   }
    // }
  }
})
