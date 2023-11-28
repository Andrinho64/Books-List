const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => {
  const formattedAuthors = books.map((book) => {
    const { author } = book;
    return `${author.name} - ${author.birthYear}`;
  });

  return formattedAuthors;
};

module.exports = { formatedAuthorNamesBirth };
