import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import process from "process";

const server = fastify({
  disableRequestLogging: true,
  logger: {
    level: "debug",
    base: {
      pid: process.pid,
      hostname: "SERVER",
    },
  },
});

server.register(fastifyStatic, {
  root: path.resolve("./app"),
});

server.listen({ port: 1990, host: "0.0.0.0" }, (err) => {
  if (err) {
    server.log.error(err.message);
    process.exit(1);
  }
});
