/*
 * @Date: 2023-09-19 23:15:08
 * @作者: 七星玉蘅
 * @邮箱: 1532250426@qq.com
 * @LastEditTime: 2023-09-20 20:40:33
 * @FilePath: \FrontEnd-docs\src\.vuepress\sidebar.ts
 */
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端",
      icon: "book",
      prefix: "Front-end/",
      link: "Front-end/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "file-word",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },

    // 幻灯片
    // "slides",
  ],
});
