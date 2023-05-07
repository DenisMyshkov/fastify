import { User } from "../entities/users";
import { IUser } from "../interfaces/User";
import { UsersDataSource } from "../connections/usersMongoConnection";

class UsersRepository {
  static async getUserByUserName(userName: any) {
    return UsersDataSource.getRepository(User).findBy(userName);
  }

  static async addUser(user: any) {
    let exist_user = await UsersDataSource.getRepository(User).findOneBy({
      userName: user.userName,
    });
    if (exist_user) {
      throw new Error("User with given user name already exist");
    }
    return UsersDataSource.getRepository(User).insert(user);
  }
}

export { UsersRepository };
