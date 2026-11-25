import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const imageName = "entry.png"; // the one file the judge reads

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, imageName), join(outDir, imageName));
console.log("Wrote entry.png to " + outDir);
