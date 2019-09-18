import { API_FILMS } from '../contants';

export const FETCH_FILMS = 'FETCH_FILMS';

export const fetchFilms = () => ({
  type: FETCH_FILMS,
  payload: fetch(API_FILMS).then(response => response.json())
});
  