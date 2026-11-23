import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, written to /output/entry.txt. Fully deterministic: no clock,
// no randomness, no network, no file reads — the same bytes on every run,
// with no trailing newline.
const JOKE =
  "My wife asked me to stop impersonating a flamingo. I had to put my foot down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE);
