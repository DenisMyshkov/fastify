import { BooksRepository } from "../repositories/BooksRepository";
import { IBook } from "../interfaces/Book";
import { InsertResult } from "typeorm";

class BooksService {
  static async getBooks(): Promise<IBook[]> {
    return BooksRepository.getBooks();
  }

  static async addBook(book: IBook): Promise<InsertResult> {
    return BooksRepository.addBook(book);
  }
}

export { BooksService };
