import { state, nodes } from "membrane";

// Click `Invoke ►` (below this comment) to send yourself a welcome email!
export async function run() {
  console.log("Sending email...");

  // `nodes` holds connections to other programs (see `email` on the right sidebar)
  await nodes.email.send({ subject: "Hello World", body: "👋 Welcome to Membrane!" });
}

// Click `Open Preview` (below this comment), then check Logs and state (right sidebar)
export async function endpoint({ method, path, body, headers, query }) {
  // This program is durable! `state` is like a little database for your program
  // but you can store any JavaScript object.
  if (!state.hits) {
    state.hits = 0;
  }
  
  return `Visits: <p>${state.hits}`;
}

// What's next?
// 
// Now that you've tried the basics. Try installing the 'membrane/getting-started' program for
// a more in-depth tour of the features!
//
// Also, don't forget to check out https://docs.membrane.io
