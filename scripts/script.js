let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: '',
    actors: '',
    genres: [],
    privat: false,
}

let nameOfFilm = prompt('Один из последних просмотренных фильмов?');
let ratingOfFilm = prompt('На сколько оцените его?');

const movies = new Object();
movies[`'${nameOfFilm}'`] = ratingOfFilm;