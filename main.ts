import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Museum of the Year 3000 — one line, at most 200 characters: the
// museum label a museum in the year 3000 puts beside an ordinary
// object from today. The label is straight-faced and confident, the
// object is fresh (a toothbrush, not the fork or the group chat), and
// the joke is the year-3000 misreading: the old brush, discarded
// every 3 months, is filed away as a defector to the enemy.
const ENTRY: string =
  "Toothbrush, c. 2024. Humans scrubbed their teeth with this stick twice a day, then threw it away every 3 months, convinced the old one had joined the enemy.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
