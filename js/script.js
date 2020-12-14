"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: new Object(),
    actors: new Object(),
    genres: [],
    privat: false
}

const lastOfFilms = prompt('Один из последних фильмов?');
const rateOfFilms = prompt('На сколько оцените его?');