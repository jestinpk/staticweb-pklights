import { access } from "node:fs/promises";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
await access(join(clientDir, "index.html"));
await access(join(clientDir, "_next"));

console.log("GitHub Pages assets prepared for https://pklights.in/.");
