import { UsersController } from "../controllers/users";

const login = {
  schema: {
    body: {
      type: "object",
      required: ["userName", "password"],
      properties: {
        userName: { type: "string" },
        password: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
          token: { type: "string" },
        },
      },
      401: {
        type: "object",
        properties: { error: { type: "string" } },
      },
    },
  },
  handler: UsersController.login,
};

const postUserOpts = {
  schema: {
    body: {
      type: "object",
      required: ["userName", "password"],
      properties: {
        userName: { type: "string" },
        password: { type: "string" },
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          userName: { type: "string" },
          hashedPassword: { type: "string" },
        },
      },
      400: {
        properties: { error: { type: "string" } },
      },
    },
  },
  handler: UsersController.addUser,
};

async function userRoutes(fastify: any, options: any, done: any) {
  fastify.post("/login", login);

  fastify.post("/signin", postUserOpts);

  done();
}

export { userRoutes };
