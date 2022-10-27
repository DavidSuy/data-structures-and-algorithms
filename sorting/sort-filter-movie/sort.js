const Movies = require("./movies");

function sortYear(movies) {
  let sortedMovies = [...movies];
  sortedMovies.sort((a, b) => {
    return a.year - b.year;
  });
  return sortedMovies;
}

function sortTitle(movies) {
  let sortedMovies = [...movies];
  sortedMovies.sort((a, b) => {
    return a.title - b.title;
  });
  return sortedMovies;
}

function inGenre(movies, genre) {
  return [];
}

// console.log(sortYear(Movies));
console.log(sortTitle(Movies));

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};
