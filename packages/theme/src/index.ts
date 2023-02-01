import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import { Theme } from "vitepress";
import { createPinia } from "pinia";

// font
import "./styles/font.css";
// md
import "./styles/markdown.scss";
// tailwind
import "./styles/output.css";

import applyColor from "./utils/applyColor";

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
