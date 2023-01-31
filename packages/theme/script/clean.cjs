const fs = require("node:fs/promises");
const path = require("node:path");
const rimraf = require("rimraf");

function clearLib() {
    (async () => {
        try {
            await rimraf(path.resolve(__dirname, "../lib"));
        } catch (e) {
            console.error(e);
            console.log("--->8---");
            console.log("Error while cleaning lib...");
        }
    })();
}

function cleanDts(dir) {
    (async () => {
        try {
            for (const file of await fs.readdir(dir, {withFileTypes: true})) {
                const isFile = file.isFile();
                const currentPath = path.resolve(dir, file.name);

                if (isFile && (file.name.endsWith(".d.ts") || file.name === "output.css")) {
                    await rimraf(currentPath);
                } else if (!isFile) {
                    await cleanDts(currentPath);
                }
            }
        } catch (e) {
            console.error(e);
            console.log("--->8---");
            console.log("Error while cleaning d.ts files...");
        }
    })();
}

function clearOutputCss() {
    (async () => {
        try {
            await rimraf(path.resolve(__dirname, "../src/styles/output.css"));
        } catch (e) {
            console.error(e);
            console.log("--->8---");
            console.log("Error while cleaning output.css...");
        }
    })();
}

clearLib();
cleanDts(path.resolve(__dirname, "../src"));
clearOutputCss();
