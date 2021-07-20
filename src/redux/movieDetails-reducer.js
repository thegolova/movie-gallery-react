import { movieAPI } from "../API/api";

const SET_MOVIE = 'SET_MOVIE';

let initialState = {
	movie: {
		genres: [] 
	},
	profile: null
};

/* убрать genres */

const movieDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MOVIE: {
			console.log('SET FILM');
			return {
				...state,
				movie: {...action.movie}
			}
		}
    default: 
      return state;
  }
};

export const setMovie = (movie) => ({
	type: SET_MOVIE,
	movie
});

export const getMovie = (id) => {
	return (dispatch) => {
		movieAPI.getMovie(id)
		.then(response => {
			dispatch(setMovie(response));
		});
	};
};

export default movieDetailsReducer;