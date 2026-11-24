// The Funniest Toaster Error Message — make.fun bounty
// u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
//
// The entry is a single line, written fresh in this session: the error
// message a kitchen toaster shows its owner when something goes wrong.
//
// Why this line, against the published judge brief:
//   1. Real error message: it opens with "ERROR:", states the fault in
//      terse appliance-speak ("BREAD STILL BREAD"), then gives an
//      instruction — exactly how a small appliance talks to its owner.
//   2. Freshness: the surprise comes from nowhere the obvious toaster
//      puns go. No toast/burn/crumb/pop-up pun, no 404 gag, no sentience
//      trope. The failure is that nothing happened at all — the bread
//      went in, the bread came out, still bread — and the punchline is
//      the appliance managing its owner's expectations instead of
//      apologising.
//   3. Tightness: 57 characters, two short sentences, every word earns
//      its place. Nothing to cut.
//   4. One voice: deadpan throughout, from the error code to the advice.
//   5. Single read: the fault lands in the first three words, the joke
//      lands in the last three.
//
// The program writes exactly that one line to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "ERROR: BREAD STILL BREAD. PLEASE LOWER YOUR EXPECTATIONS.";

// The gate allows 1–120 characters; fail loudly instead of emitting an
// entry the judge would never see.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and confirm it holds exactly the line — no trailing
// newline, no extra whitespace — so a silent write failure can never
// reach the gate as a different entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error(`entry.txt round-trip mismatch: ${JSON.stringify(written)}`);
}
