import { state, nodes } from "membrane";

/**
 * Click `Invoke ►` above the fn signature,
 * then peep Logs (bottom) and check your email.
 */
export async function run() {
  console.log("Hello World");

  // `nodes` is how you connect to your other programs
  await nodes.email.send({ subject: "Welcome to Membrane", body: "👋" });
}

/**
 * Click `Open Endpoint URL ↗` above the fn signature,
 * then come back here to see Logs and state (bottom left).
 */
export async function endpoint({ method, path, body, headers, query }) {
  // `state` is like a little db for your program
  if (!state.hits) state.hits = 0;
  state.hits++;

  return `Visitors: ${state.hits}`;
}

/**
 * Congrats on your first Membrane program! 🎉
 *
 * Explore docs: https://docs.membrane.io
 * Join our discord: https://discord.gg/4RHyJDV8kj
 */
