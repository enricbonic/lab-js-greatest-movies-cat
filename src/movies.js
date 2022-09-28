// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((cartellera) => cartellera.director);

  const directorsUnCop = [];
  for (let i = 0; i < directors.length; i++)
    if (directorsUnCop.includes(directors[i]) === false) {
      directorsUnCop.push(directors[i]);
    }
  return directorsUnCop;
}
// Iteration 2: Steven Spielberg The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const directors = moviesArray.filter(cartellera => cartellera.director === "Steven Spielberg");
  const drama = directors.filter(cartellera => cartellera.genre.includes("Drama"));

  return drama.length 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
let allScores = 0
  const scores = moviesArray.map(cartellera => cartellera.score);
allScores += scores;
let averageScore = allScores / moviesArray.length;

return averageScore.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaScores = 0
  const drama = moviesArray.filter(cartellera => cartellera.genre.includes("Drama"));
  drama.map(cartellera => dramaScores += cartellera.score)

  return (dramaScores / drama.length).toFixed(2)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const byYear = moviesArray.map(cartellera => cartellera.year)
  return byYear.sort()
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movieTitle = moviesArray.map(cartellera => cartellera.title);
  let allTitles = movieTitle.sort((a, b) => {
    if (a < b){
    return -1;
    } else if (a > b){
    return 1;
  } else {
    return 0;
  }
  });
  return allTitles.slice(0, 19);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
