'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: []  ,
    privat: false,
    start: function() {
        do {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        }     while (personalMovieDB.count == '' || personalMovieDB.count == null ||  isNaN(personalMovieDB.count)); 
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {

            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?','');
        
            if (a != null && b != null && a !='' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;    
            }  else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count < 30) {
            console.log('Вы киноман');
        } else {
            console.log('Что-то пошло не так');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    writeYourGenres: function() {
        let genres;
        do {
          genres = prompt(`Введите Ваши любимые жанры через запятую`);
        } while (genres == '' || genres == null);
        personalMovieDB.genres = genres.split(', ').sort();
        //personalMovieDB.genres;

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });

    }
};

