import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const validFormats = ['pdf', 'epub', 'mobi'];
        if (!validFormats.includes(value)) {
            throw new Error(`File format should be one of the: ${validFormats.join(', ')}`);
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}, File format: ${this._fileFormat}`);
    }

    static createFromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error('The argument must be an instance of the Book class');
        }
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

