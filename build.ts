import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { minify } from "terser";

const code = (
  await readFile(join(process.cwd(), "prod", "index.js"), "utf-8")
).replace("{{ version }}", process.env.npm_package_version ?? "0.0.0");
const result = await minify(code, {
  format: {
    comments: /@license|@preserve|@copyright/,
  },
});
if (!result.code) {
  throw new Error("Failed to minify code.");
}
await writeFile(join(process.cwd(), "prod", "index.js"), result.code);
