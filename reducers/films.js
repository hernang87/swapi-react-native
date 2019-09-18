import { FETCH_FILMS } from '../actions/films';

const initialState = {
  isFetching: false,
  results: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_FILMS}_LOADING`:
      return {
        ...state,
        isFetching: true
      }
    case `${FETCH_FILMS}_SUCCESS`:
      return {
        ...state,
        isFetching: false,
        results: action.payload.results.sort((a, b) => a.episode_id - b.episode_id),
        error: null
      }
    default:
      return {
        ...state
      }
  }
}