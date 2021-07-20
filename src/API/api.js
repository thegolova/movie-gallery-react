import * as axios from 'axios';

const API_KEY = '03d6a3c5b5364220d3c738ad49ca0f54';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export const movieAPI = {
  getFilms(currentPage = 1) {
    return instance.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`)
      .then(response => {
        /* console.log(response); */
        return response.data.results;
      });
  },
  getMovie(id) {
    return instance.get(`movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        return response.data;
      });
  }
};

/*
movie/508943?api_key=03d6a3c5b5364220d3c738ad49ca0f54&language=en-US
*/
