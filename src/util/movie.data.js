export const URLS = {
  cinemaWorld:
    'https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies',
  filmWorld: 'https://challenge.lexicondigital.com.au/api/v2/filmworld/movies',
};

// Make API calls to get the moviesData from the server
export const getMoviesData = async () => {
  try {
    const [cwPromise, fwPromise] = await Promise.all([
      fetch(URLS.cinemaWorld),
      fetch(URLS.filmWorld),
    ]);
    const cwData = await cwPromise.json();
    const fwData = await fwPromise.json();

    return {
      cineWorld: cwData,
      filmWorld: fwData,
    };
  } catch (err) {
    console.error('There was an error in trying to fetch the data.', err);
  }

  return {};
};

// Combine both Movies arrays into a new usable data structure.
export const formatMoviesData = async (data) => {};

// set new cache session object within browser storage
export const setCachedData = (data) => {
  sessionStorage.setItem(data);
};

// Get Session storage data using data param.
export const getCachedData = (data) => {
  return JSON.parse(sessionStorage.getItem(data));
};
