// const Movies = require("./movies");

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
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return sortedMovies;
}

function inGenre(movies, genre) {
  let filteredMovies = movies.filter((m) => {
    return m.genres.includes(genre);
  });

  return filteredMovies.map((m) => m.title);
}

// console.log(sortYear(Movies));
// console.log(sortTitle(Movies));
// console.log(inGenre(Movies, "Adventure"));

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};
