"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: new Object(),
    actors: new Object(),
    genres: [],
    privat: false
}


for (let i = 0; i < 2; i++) {
    const lastOfFilms = prompt('Один из последних фильмов?');
    const rateOfFilms = prompt('На сколько оцените его?');
}

console.log(movies[lastOfFilms]);