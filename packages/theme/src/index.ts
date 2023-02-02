import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import { Theme } from "vitepress";
import { createPinia } from "pinia";
import applyColor from "./utils/applyColor";

import "normalize.css"; // normalize
import "./styles/font.css"; // font
import "./styles/markdown.scss"; // md
import "./styles/output.css"; // tailwind

const pinia = createPinia();

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.use(pinia);
    applyColor();
  },
  setup() {},
} as Theme;

export interface ThemeConfig {}
