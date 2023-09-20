/*
 * @Date: 2023-09-19 23:15:08
 * @作者: 七星玉蘅
 * @邮箱: 1532250426@qq.com
 * @LastEditTime: 2023-09-20 22:03:54
 * @FilePath: \FrontEnd-docs\src\.vuepress\navbar.ts
 */
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端文档",
    icon: "lightbulb",
    prefix: "/Front-end/",
    children: [
      {
        text: "前端基础", // 下拉菜单分类名称
        icon: "lightbulb",
        prefix: "1-基础/", // 文件夹名称 ==> 导航栏路径
        children: [
          // 配置分类下面的子页面 ==> markdown文件
          "HTML5",
          "CSS3",
          "JavaScript",
          { text: "更多", icon: "memo-pad", link: "" },
        ],
      },
      {
        text: "进阶",
        icon: "lightbulb",
        prefix: "2-工程化/",
        children: [
          "Sass",
          { text: "...", icon: "memo-pad", link: "" },

        ],
      },
    ],
  },
  // "/docs/",
  // {
  //   text: "Halo 官方文档",
  //   icon: "book",
  //   link: "https://docs.halo.run/",
  // },
]);
