function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book = new Book("Notes of a Ukrainian Madman", "Lina Kostenko", 2010);

const { title, author } = book;
console.log(title, author);