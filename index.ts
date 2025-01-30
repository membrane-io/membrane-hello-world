import { state, nodes } from "membrane";

// `run` is a Membrane action defined in this program's "SCHEMA" on the right sidebar.
// Click `Invoke ►` (below this comment) to send yourself a welcome email! (You'll also see it below in Logs).
export async function run() {
  console.log("Sending email...");

  // `nodes` holds connections to other programs (see `email` on the right sidebar under "CONNECTIONS").
  await nodes.email.send({ subject: "Welcome to Membrane", body: "👋" });
}

// `endpoint` is an action that every Membrane program has, with its own instantly deployed URL.
// Click `Open Preview` (below this comment), then check Logs (bottom) and "STATE" (right sidebar).
export async function endpoint({ method, path, body, headers, query }) {
  // This program is durable! `state` is like a little database for your program where you can store any JS object.
  if (!state.hits) {
    state.hits = 0;
  }

  return `Visitors: ${++state.hits}`;
}

// That's just scratching the surface!
//
// For a more in-depth tutorial, install our `membrane/getting-started` program.
//    |--> Click PACKAGES in the top left, search getting-started, then INSTALL.
//
// And check out docs to read more about how Membrane works: https://docs.membrane.io
