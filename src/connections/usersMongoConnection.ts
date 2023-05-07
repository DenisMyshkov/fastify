import { DataSource } from "typeorm";
import { User } from "../entities/users";

const UsersDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "Users",
  // username: "root",
  // password: "password",
  logging: true,
  synchronize: true,
  entities: [User],
  useUnifiedTopology: true,
});

UsersDataSource.initialize();

export { UsersDataSource };
