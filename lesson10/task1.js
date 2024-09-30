import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book('Pride and Prejudice', 'Jane Austen', 1813);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
book1.printInfo();
book2.printInfo();

const ebook1 = new EBook('The Great Gatsby', 'F. Scott Fitzgerald', 1922 , 'pdf');
ebook1.printInfo();

const ebook2 = EBook.createFromBook(book1, 'pdf');
ebook2.printInfo();

const booksArray = [book1, book2, ebook1, ebook2];
const oldestBook = Book.findOldestBook(booksArray);
console.log('\nThe oldest Book is:');
oldestBook.printInfo();

