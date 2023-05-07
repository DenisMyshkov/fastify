import { UsersService } from "../services/UsersService";
import { FastifyReply, FastifyRequest } from "fastify";
import { IUser, UserWithPlainPassword } from "../interfaces/User";
import { hashPassword, matchPassword } from "../utils/password-manager";
import { User } from "../entities/users";
import { server } from "../index";

const { v4: uuidv4 } = require("uuid");

class UsersController {
  static async addUser(req: FastifyRequest, reply: FastifyReply) {
    const userData: UserWithPlainPassword = req.body as UserWithPlainPassword;
    const user = {
      id: uuidv4(),
      userName: userData.userName,
      hashedPassword: hashPassword(userData.password),
    };

    try {
      const createdUser = await UsersService.addUser(user);
      reply.code(201).send({ userName: createdUser.raw["ops"][0]["userName"] });
    } catch (err) {
      reply.code(400).send({ error: err });
    }
  }

  static async login(req: FastifyRequest, reply: FastifyReply) {
    const userData = req.body as UserWithPlainPassword;
    const userInfo = {
      userName: userData.userName,
      password: userData.password,
    };

    try {
      const user = await UsersService.getUserByUserName(userInfo.userName);
      const isPasswordCorrect = matchPassword(
        userInfo.password,
        user[0].hashedPassword
      );
      if (!isPasswordCorrect) {
        reply.code(401).send({ error: "Incorrect username or password" });
      }
      const token = server.jwt.sign({ userName: userInfo.userName });
      reply.code(200).send({ message: "User logged in", token });
    } catch (error) {
      reply.code(400).send({ error: "Bad Request" });
    }
  }
}

export { UsersController };
