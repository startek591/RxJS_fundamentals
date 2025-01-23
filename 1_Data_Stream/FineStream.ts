// finite list of values

const allBooks = [
  { title: 'Goodnight Moon', author: 'Margaret Wise Brown' },
  { title: 'Winnie-the-Pooh', author: 'A. A. Milne' },
  { title: 'Where the Wild Things Are', author: 'Maurice Sendak' },
  { title: 'The Hobbit', author: 'J. R. R. Tolkien' },
  { title: 'Curious George', author: 'H. A. Rey' },
  {
    title: "Alice's Adventures in Wonderland",
    author: 'Lewis Carroll',
  },
];

for (let book of allBooks) {
  console.log(`Data: ${book.title}`);
}
