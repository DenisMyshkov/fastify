import { Book } from "../entities/books";
import { IBook } from "../interfaces/Book";
import { AppDataSource } from "../connections/MongoConnection";

class BooksRepository {
  static async getBooks() {
    return AppDataSource.getRepository(Book).find();
  }

  static async addBook(book: IBook) {
    return AppDataSource.getRepository(Book).insert(book);
  }
}

export { BooksRepository };
