import {
  getMoviesData,
  formatMoviesData,
  setCachedData,
  getCachedData,
} from './movie.data';
const mockCacheData = {
  name: 'Knights of the Old Republic',
  cwPrice: 21,
  fwPrice: 24,
};

const mockFetchDataFull = {
  cineWorld: [
    {
      ID: 'cw2488496',
      Title: 'Star Wars: Episode VII - The Force Awakens',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
      Actors: 'Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver',
      Price: 24.7,
    },
    {
      ID: 'cw2527336',
      Title: 'Star Wars: Episode VIII - The Last Jedi',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
      Actors: 'Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley',
      Price: 24,
    },
    {
      ID: 'cw2527338',
      Title: 'Star Wars: Episode IX - The Rise of Skywalker',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg',
      Actors: 'Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley',
      Price: 23,
    },
    {
      ID: 'cw3748528',
      Title: 'Rogue One: A Star Wars Story',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
      Actors: 'Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen',
      Price: 25,
    },
    {
      ID: 'cw3778644',
      Title: 'Solo: A Star Wars Story',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg',
      Actors:
        'Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke',
      Price: 24.5,
    },
    {
      ID: 'cw0076759',
      Title: 'Star Wars: Episode IV - A New Hope',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
      Price: 25.5,
    },
    {
      ID: 'cw0080684',
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
      Price: 23,
    },
    {
      ID: 'cw0086190',
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
      Price: 24.2,
    },
    {
      ID: 'cw0120915',
      Title: 'Star Wars: Episode I - The Phantom Menace',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      Actors: 'Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd',
      Price: 26.4,
    },
    {
      ID: 'cw0121765',
      Title: 'Star Wars: Episode II - Attack of the Clones',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
      Actors:
        'Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee',
      Price: 20.5,
    },
    {
      ID: 'cw0121766',
      Title: 'Star Wars: Episode III - Revenge of the Sith',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg',
      Actors:
        'Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid',
      Price: 23,
    },
  ],
  filmWorld: [
    {
      ID: 'fw2488496',
      Title: 'Star Wars: Episode VII - The Force Awakens',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
      Actors: 'Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver',
      Price: 25,
    },
    {
      ID: 'fw2527336',
      Title: 'Star Wars: Episode VIII - The Last Jedi',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
      Actors: 'Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley',
      Price: 24.5,
    },
    {
      ID: 'fw2527338',
      Title: 'Star Wars: Episode IX - The Rise of Skywalker',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg',
      Actors: 'Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley',
      Price: 23.5,
    },
    {
      ID: 'fw3748528',
      Title: 'Rogue One: A Star Wars Story',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
      Actors: 'Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen',
      Price: 28,
    },
    {
      ID: 'fw3778644',
      Title: 'Solo: A Star Wars Story',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg',
      Actors:
        'Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke',
      Price: 24,
    },
    {
      ID: 'fw0076759',
      Title: 'Star Wars: Episode IV - A New Hope',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
      Price: 22.9,
    },
    {
      ID: 'fw0080684',
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
      Price: 23.7,
    },
    {
      ID: 'fw0086190',
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
      Price: 22,
    },
    {
      ID: 'fw0120915',
      Title: 'Star Wars: Episode I - The Phantom Menace',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      Actors: 'Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd',
      Price: 27.2,
    },
    {
      ID: 'fw0121765',
      Title: 'Star Wars: Episode II - Attack of the Clones',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
      Actors:
        'Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee',
      Price: 19.9,
    },
    {
      ID: 'fw0121766',
      Title: 'Star Wars: Episode III - Revenge of the Sith',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg',
      Actors:
        'Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid',
      Price: 22.4,
    },
  ],
};

describe('Movies Data utils functions', () => {
  it('Calls the stream providers to get data', () => {
    expect.assertions(4);
    return getMoviesData().then((data) => {
      expect(data.cwData[0].ID).toBe('cw2488496');
      expect(data.cwData[0].Title).toBe(
        'Star Wars: Episode VII - The Force Awakens'
      );
      expect(data.fwData[2].ID).toBe('fw2527338');
      expect(data.fwData[2].Title).toBe(
        'Star Wars: Episode IX - The Rise of Skywalker'
      );
    });
  });

  it('Formats the movies objects to make a new movie data structure', () => {
    const combinedMoviesData = formatMoviesData(mockFetchDataFull);
    expect(combinedMoviesData[0].cwPrice).toEqual(24.7);
    expect(combinedMoviesData[0].fwPrice).toEqual(25);
  });

  it('Get new data from browser session-storage', () => {
    setCachedData('mockCacheData', mockCacheData);
    expect(getCachedData('mockCacheData').name).toBe(
      'Knights of the Old Republic'
    );
    sessionStorage.removeItem('mockCacheData');
  });
});
