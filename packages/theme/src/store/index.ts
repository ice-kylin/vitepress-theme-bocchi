import {defineStore} from "pinia";
import m3Scheme from "../utils/m3CssColor";

const [lightScheme, darkScheme] = m3Scheme("#6600ff");

export const themeStore = defineStore(
    "theme",
    {
        actions: {},
        getters: {},
        state() {
            return {
                lightScheme,
                darkScheme,
                darkMode: true,
            };
        },
    });
