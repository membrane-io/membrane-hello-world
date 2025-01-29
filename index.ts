/**
 * Welcome to Membrane!
 * 1. This `hello-world` example is your first Membrane program.
 * 2. You have a few other programs pre-installed: `http`, `email`, and `sms`.
 * 3. Follow the comments in this file to play with `hello-world`. Save to deploy your changes.
 * 4. Open docs for more guidance: https://docs.membrane.io
 * 5. Install our `getting-started` program for a thorough tutorial: https://membrane.io/share/membrane/getting-started
 */

import { state, nodes } from "membrane";

// `run` is an "Action" (https://docs.membrane.io/concepts/actions) defined by the "SCHEMA" on the right sidebar.
// Click `Invoke ►` above the `run` function signature, then see Logs (bottom) and check your email!
export async function run() {
  console.log("Hello World");

  // `nodes` is how you connect to your other Membrane programs.
  // `hello-world` includes `email` as a connection — take a look at "CONNECTIONS" on the right sidebar.
  await nodes.email.send({ subject: "Welcome to Membrane", body: "👋" });
}

// `endpoint` is a Membrane Action that every program has, with it's own instantly deployed URL.
// Click `Open Preview` (above fn signature), then check Logs (bottom) and "STATE" (right sidebar).
export async function endpoint({ method, path, body, headers, query }) {
  // `state` is like a little database for your program: https://docs.membrane.io/concepts/programs
  if (!state.hits) state.hits = 0;
  state.hits++;

  return `Visitors: ${state.hits}`;
}
