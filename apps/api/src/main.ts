import "dotenv/config";
import Fastify from "fastify";
import { ServerState } from "@topntch/contracts";

const app = Fastify({ logger: true });

app.get("/health", async () => {
  return { ok: true, exampleState: ServerState.CREATED };
});

async function start() {
  const port = Number(process.env.API_PORT ?? 3001);

  try {
    await app.listen({ port, host: "0.0.0.0" });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();