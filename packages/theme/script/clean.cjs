const fs = require("node:fs/promises");
const path = require("node:path");
const rimraf = require("rimraf");

function clean(dir) {
    (async () => {
        try {
            for (const file of await fs.readdir(dir, {withFileTypes: true})) {
                const isFile = file.isFile();
                const currentPath = path.resolve(dir, file.name);

                if (isFile && file.name.endsWith(".d.ts")) {
                    await rimraf(currentPath);
                } else if (!isFile) {
                    await clean(currentPath);
                }
            }
        } catch (e) {
            console.error(e);
            console.log("--->8---");
            console.log("Error while cleaning d.ts files...");
        }
    })();
}

clean(path.resolve(__dirname, "../src"));
