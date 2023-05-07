import { UsersRepository } from "../repositories/UserRepository";
import { IUser } from "../interfaces/User";
import { InsertResult } from "typeorm";

class UsersService {
  static async getUserByUserName(userName: any): Promise<IUser[]> {
    return UsersRepository.getUserByUserName(userName);
  }

  static async addUser(user: IUser): Promise<InsertResult> {
    return UsersRepository.addUser(user);
  }
}

export { UsersService };
