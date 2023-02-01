import { defineStore } from "pinia";
import m3Scheme from "../utils/m3CssColor";

const [lightScheme, darkScheme] = m3Scheme("#B2C9FB");

export const themeStore = defineStore("theme", {
  actions: {},
  getters: {},
  state() {
    return {
      lightScheme,
      darkScheme,
      darkMode: false,
    };
  },
});
