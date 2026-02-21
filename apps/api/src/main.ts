import Fastify from "fastify";
import { ServerState } from "@topntch/contracts";

const app = Fastify({ logger: true });

app.get("/health", async () => {
  return { ok: true, exampleState: ServerState.CREATED };
});

async function start() {
  try {
    await app.listen({ port: 3001, host: "0.0.0.0" });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();