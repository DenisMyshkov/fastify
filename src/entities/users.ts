import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ObjectIdColumn,
} from "typeorm";
import "reflect-metadata";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  hashedPassword: string;
}
