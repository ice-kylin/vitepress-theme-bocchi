import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import { Theme } from "vitepress";
import { createPinia } from "pinia";

import "normalize.css"; // normalize
import "./styles/font.css"; // font
import "./styles/markdown.scss"; // md
import "./styles/output.css"; // tailwind

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    const pinia = createPinia();
    app.use(pinia);
  },
  setup() {},
} as Theme;

export interface ThemeConfig {}
