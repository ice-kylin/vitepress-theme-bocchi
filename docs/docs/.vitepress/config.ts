import {defineConfigWithTheme} from "vitepress";
import {ThemeConfig} from "vitepress-theme-bocchi";

export default defineConfigWithTheme<ThemeConfig>({
    description: "Just playing around.",
    lang: "zh-CN",
    themeConfig: {
        nav: [
            {text: "指南", link: "/guide/"},
            {text: "配置", link: "/config/"},
        ],
    },
    title: "VitePress",
});
