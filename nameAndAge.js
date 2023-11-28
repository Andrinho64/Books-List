const { books } = require('./data/library');

const nameAndAge = () => {
  const formattedData = books.map((book) => {
    const { author, releaseYear } = book;
    const ageAtRelease = releaseYear - author.birthYear;

    return { author: author.name, age: ageAtRelease };
  });

  formattedData.sort((a, b) => a.age - b.age);

  return formattedData;
};

module.exports = { nameAndAge };
