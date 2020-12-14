"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count = numberOfFilms,
    movies = new Object(),
    actors = new Object(),
    genres = [],
    privat = false
}