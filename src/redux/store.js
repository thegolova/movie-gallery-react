import { createStore, combineReducers, applyMiddleware } from "redux";
import homeReducer from './home-reducer';
import movieDetailsReducer from './movieDetails-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  homePage: homeReducer,
  movieDetailsPage: movieDetailsReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;