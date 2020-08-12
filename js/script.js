'use strict';

let numberOfFilms;

function start() {
    
    do {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }     while (numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms)); 
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: []  ,
    privat: false
};


function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}


for (let i = 0; i < 2; i++) {

    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');

    if (a != null && b != null && a !='' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;    
    }  else {
        i--;
    }
}

function writeYourGenres(index) {
    personalMovieDB.genres[index] = prompt(`Ваш любимый жанр под номером ${index + 1}`);
}

for (let i = 0; i < 3; i++) {
    writeYourGenres(i);
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count < 30) {
    console.log('Вы киноман');
} else {
    console.log('Что-то пошло не так');
}

showMyDB();


//console.log(personalMovieDB);