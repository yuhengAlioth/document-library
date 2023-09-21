/*
 * @Date: 2023-09-19 23:15:08
 * @作者: 七星玉蘅
 * @邮箱: 1532250426@qq.com
 * @LastEditTime: 2023-09-20 20:27:16
 * @FilePath: \FrontEnd-docs\src\.vuepress\config.ts
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  // base: "/",
  base: "/document-library/",

  lang: "zh-CN",
  title: "七星玉蘅的知识文档库",
  description: "编程学习文档总结",

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
