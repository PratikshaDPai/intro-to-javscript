const books = [];
books.push("Black Beauty", "Little Women");
console.log(books[1]);
books[1] = "Dune";
for (let book of books) {
  console.log(book);
}
