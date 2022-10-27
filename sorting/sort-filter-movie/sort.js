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
    let aTitle = a.title;
    let bTitle = b.title;
    if (aTitle.includes("The")) {
      aTitle = aTitle.split(" ")[1];
    }
    if (bTitle.includes("The")) {
      bTitle = bTitle.split(" ")[1];
    }

    // console.log(aTitle, bTitle);

    if (aTitle < bTitle) {
      return -1;
    }
    if (aTitle > bTitle) {
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

  return filteredMovies;
  // return filteredMovies.map((m) => m.title);
}

// console.log(sortYear(Movies));
console.log(sortTitle(Movies));
// console.log(inGenre(Movies, "Adventure"));

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};
