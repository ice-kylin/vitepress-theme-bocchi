const fs = require("node:fs/promises");
const path = require("node:path");
const rimraf = require("rimraf");

function clean(dir) {
    (async () => {
        try {
            for (const file of await fs.readdir(dir, {withFileTypes: true})) {
                if (file.isFile() && file.name.endsWith(".d.ts")) {
                    await rimraf(path.resolve(__dirname, dir, file.name));
                } else if (!file.isFile()) {
                    await clean(path.resolve(__dirname, dir, file.name));
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
