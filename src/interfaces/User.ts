interface IUser {
  userName: string;
  hashedPassword: string;
}

interface UserWithPlainPassword {
  userName: string;
  password: string;
}

export { IUser, UserWithPlainPassword };
