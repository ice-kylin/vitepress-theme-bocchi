import { defineStore } from "pinia";
import m3Scheme from "../utils/m3CssColor";
import applyColor from "../utils/applyColor";

export const themeStore = defineStore("theme", {
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;

      applyColor(this.darkMode ? this.darkScheme : this.lightScheme);
    },
  },
  getters: {},
  state() {
    const [lightScheme, darkScheme] = m3Scheme("#b2c9fb");
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    if (media.matches) {
      applyColor(darkScheme);
    } else {
      applyColor(lightScheme);
    }

    return {
      lightScheme,
      darkScheme,
      darkMode: media.matches,
    };
  },
});
