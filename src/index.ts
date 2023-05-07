import { fastify } from "fastify";
import { bookRoutes } from "./routes/books";
import { userRoutes } from "./routes/users";
import { fastifyJwt } from "@fastify/jwt";

export const server = fastify({ logger: true });
server.register(fastifyJwt, {
  secret: "supersecret",
});
server.register(bookRoutes);
server.register(userRoutes);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Started server at ${address}`);
});
