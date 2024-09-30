export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value === 'string' && value.trim().length > 0) {
            this._title = value;
        } else {
            throw new Error('Invalid title');
        }
    }

    set author(value) {
        if (typeof value === 'string' && value.trim().length > 0) {
            this._author = value;
        } else {
            throw new Error('Invalid author');
        }
    }

    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            throw new Error('Invalid year');
        }
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('Array should contain at least one book');
        }

        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}