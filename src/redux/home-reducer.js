import {movieAPI} from '../API/api';

/* ACTION */
const SET_MOVIES = "SET_MOVIES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SORT_MOVIES = "SORT_MOVIES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const DELETE_MOVIE = "DELETE_MOVIE";

let initialState = {
	movies: [],
	pageCount: 15,
	currentPage: 1,
	sortingTypes: [
		{ id: 0, type: "default"},
		{ id: 1, type: 'vote_count_asc'},
		{ id: 2, type: 'vote_count_desc'},
		{ id: 3, type: 'release_date_asc'},
		{ id: 4, type: 'release_date_desc'}
	],
	currentSort: "",
	isFetching: false
};

/* ADDITIONAL FUNCTIOS */

const movieSort = (array, type) => {
	switch (type) {
		case "vote_count_asc": {
			return array.sort((a, b) => a.vote_count < b.vote_count ? 1 : -1)
		}
		case "vote_count_desc":{
			return array.sort((a, b) => a.vote_count > b.vote_count ? 1 : -1)
		}
		case "release_date_asc":{
			return array.sort((a, b) => a.release_date < b.release_date ? 1 : -1)
		}
		case "release_date_desc":{
			return array.sort((a, b) => a.release_date > b.release_date ? 1 : -1)
		}
		case "default": {
			return array.sort((a, b) => a.popylarity < b.popylarity ? 1 : -1)
		}
		default: 
			return array
	}
}

/* REDUCER */
const homeReducer = (state = initialState, action) => {

	switch(action.type) {
		case SET_MOVIES: {
			return {
				...state,
				movies: [...action.movies]
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.pageNumber,
				currentSort: ""
			}
		}
		case SORT_MOVIES: {
			return {
				...state,
				currentSort: action.sort_type,
				movies: movieSort(state.movies, action.sort_type),
			};
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.status
			}
		}
		case DELETE_MOVIE: {
			return {
				...state,
				movies: state.movies.filter(film => film.id !== action.id)
			}
		}
		default: 
			return state;
	}
}

/* ACTION CREATOR */
export const setMovies = (movies) => ({
	type: SET_MOVIES,
	movies
});

export const setCurrentPage = (pageNumber) => ({
	type: SET_CURRENT_PAGE,
	pageNumber
});

export const setSortMovies = (sort_type) => ({
	type: SORT_MOVIES,
	sort_type
});

export const toggleIsFetching = (status) => ({
	type: TOGGLE_IS_FETCHING,
	status
});

export const deleteMovie = (id) => ({
	type: DELETE_MOVIE,
	id
})

/* thunk */
export const getMovies = (currentPage) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));

		movieAPI.getFilms(currentPage)
		.then(response => {
			dispatch(toggleIsFetching(false));
			dispatch(setMovies(response));
		});
	};
};

export default homeReducer;