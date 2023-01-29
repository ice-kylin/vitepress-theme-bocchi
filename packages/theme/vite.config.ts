import {defineConfig} from "vite";
import {buildPlugin} from "vite-plugin-build";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        buildPlugin({
            fileBuild: {
                emitDeclaration: true,
                esOutputDir: "lib",
                commonJsOutputDir: false,
            },
        }),
    ],
});
