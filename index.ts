import { state, nodes } from "membrane";

export async function welcome() {
  console.log("Sending email...");

  await nodes.email.send({ subject: "Welcome to Membrane", body: "👋" });
}

export async function endpoint({ method, path, body, headers, query }) {
  if (!state.hits) {
    state.hits = 0;
  }

  return `Page views: ${++state.hits}`;
}
