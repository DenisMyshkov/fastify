import { BooksService } from "../services/BooksService";
import { FastifyReply, FastifyRequest } from "fastify";
import { IBook } from "../interfaces/Book";

const { v4: uuidv4 } = require("uuid");

class BooksController {
  static async getBooks(req: FastifyRequest, reply: FastifyReply) {
    try {
      const books = await BooksService.getBooks();
      reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(books);
    } catch (err) {
      reply.code(404).send({ error: "Not found" });
    }
  }

  static async addBook(req: FastifyRequest, reply: FastifyReply) {
    const bookData: IBook = req.body as IBook;
    const book = {
      id: uuidv4(),
      name: bookData.name,
      description: bookData.description,
      year: bookData.year,
      author: bookData.author,
    };

    try {
      const createdBook = await BooksService.addBook(book);
      reply.code(201).send(createdBook);
    } catch (err) {
      reply.code(400).send({ error: "Bad Request" });
    }
  }
}

export { BooksController };
