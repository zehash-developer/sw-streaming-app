export const URLS = {
  cinemaWorld:
    'https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies',
  filmWorld: 'https://challenge.lexicondigital.com.au/api/v2/filmworld/movies',
  header: {
    'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',
  },
};

// Make API calls to get the moviesData from the server
export const getMoviesData = async () => {
  const getCinemaWorldRequest = await fetch(URLS.cinemaWorld, {
    method: 'GET',
    headers: URLS.header,
  });
  const getFilmWorldRequest = await fetch(URLS.filmWorld, {
    method: 'GET',
    headers: URLS.header,
  });

  const cwData = await getCinemaWorldRequest.json();
  const fwData = await getFilmWorldRequest.json();

  return {
    cwData: cwData.Movies,
    fwData: fwData.Movies,
  };
};

// Combine both Movies arrays into a new usable data structure.
// Return empty array if no data.
export const formatMoviesData = (data) => {
  let combinedMoviesData = [];

  data.cwData.forEach((cineWorldMovie) => {
    data.fwData.forEach((filmWorldMovie) => {
      if (cineWorldMovie.Title === filmWorldMovie.Title) {
        let isCheaper =
          cineWorldMovie.Price < filmWorldMovie.Price ? true : false;
        combinedMoviesData.push({
          id: cineWorldMovie.ID,
          title: cineWorldMovie.Title,
          type: cineWorldMovie.Type,
          imageUrl: cineWorldMovie.Poster,
          actors: cineWorldMovie.Actors,
          providers: [
            {
              name: 'CinemaWorld',
              price: cineWorldMovie.Price,
              isCheaper: isCheaper,
            },
            {
              name: 'FilmWorld',
              price: filmWorldMovie.Price,
              isCheaper: !isCheaper,
            },
          ],
        });
      }
    });
  });

  return combinedMoviesData;
};

// set new cache session object within browser storage
export const setCachedData = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

// Get Session storage data using data param.
export const getCachedData = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};
