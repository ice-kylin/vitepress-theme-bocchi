import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import {Theme} from "vitepress";
import {createPinia} from "pinia";
import "normalize.css";
import "./styles/index.css";

const pinia = createPinia();

export default {
    Layout,
    NotFound,
    enhanceApp({app}) {
        app.use(pinia);
    },
    setup() {
    },
} as Theme;

export interface ThemeConfig {
}
