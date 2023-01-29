import path from "node:path";
import {defineConfig} from "vite";
import {buildPlugin} from "vite-plugin-build";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        buildPlugin({
            fileBuild: {emitDeclaration: true},
            libBuild: {
                buildOptions: {
                    rollupOptions: {
                        external: ["vue"],
                        output: {globals: {vue: "Vue"}},
                    },
                    lib: {
                        entry: path.resolve(__dirname, "./src/index.ts"),
                        formats: ["es", "cjs"],
                    },
                },
            },
        }),
    ],

    css: {
        modules: {
            localsConvention: "camelCaseOnly",
            generateScopedName: (name: string) => `rbac-${name}`,
        },
    },
});
