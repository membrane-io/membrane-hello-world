/**
 * Welcome to Membrane!
 * 1. This `hello-world` example is your first Membrane program.
 * 2. You have a few other programs pre-installed: `http`, `email`, and `sms`.
 * 3. Follow the comments in this file to play with `hello-world`. Save to deploy your changes.
 * 4. Read through docs to better understand how Membrane works: https://docs.membrane.io
 * 5. Install our `membrane/getting-started` program for a more in-depth tutorial 
 *    (click "PACKAGES" in the top left, search getting-started, and install).
 */

import { state, nodes } from "membrane";

// `run` is an "Action" (https://docs.membrane.io/concepts/actions) defined by the "SCHEMA" on the right sidebar.
// Click `Invoke ►` (below this comment) to send yourself a welcome email! (You'll also see it below in Logs).
export async function run() {
  console.log("Sending email...");

  // `nodes` holds connections to other programs (see `email` on the right sidebar under "CONNECTIONS").
  await nodes.email.send({ subject: "Welcome to Membrane", body: "👋" });
}

// `endpoint` is a Membrane Action that every program has, with it's own instantly deployed URL.
// Click `Open Preview` (below this comment), then check Logs (bottom) and "STATE" (right sidebar).
export async function endpoint({ method, path, body, headers, query }) {
  // This program is durable! `state` is like a little database for your program where you can store any JS object.
  if (!state.hits) {
    state.hits = 0;
  }

  return `Visitors: ${++state.hits}`;
}
