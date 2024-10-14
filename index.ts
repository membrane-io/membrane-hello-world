import { state, nodes } from "membrane";

// Click `Invoke ►` above the fn signature, then see Logs (bottom) and check your email
export async function run() {
  console.log("Hello World");
  await nodes.email.send({ subject: "Welcome to Membrane", body: "👋" }); // `nodes` is how you connect to your other programs
}

// Click `Open Endpoint URL ↗`, then come back here to see Logs and state (bottom left)
export async function endpoint({ method, path, body, headers, query }) {
  if (!state.hits) state.hits = 0; // `state` is like a little db for your program
  state.hits++;
  return `Visitors: ${state.hits}`;
}
