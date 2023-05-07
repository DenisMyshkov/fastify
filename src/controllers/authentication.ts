import { FastifyReply, FastifyRequest } from "fastify";

class AuthController {
  static async verifyTocken(req: FastifyRequest, reply: FastifyReply) {
    try {
      await req.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  }
}

export { AuthController };
