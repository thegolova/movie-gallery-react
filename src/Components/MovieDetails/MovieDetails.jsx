import React from 'react';
import style from './MovieDetails.module.css';

function MovieDetails(props) {
  
  let info = props.moviePage.movie;

  let getProps = () => {
    console.log(props);
  }

  let poster = `https://image.tmdb.org/t/p/w500/${info.poster_path}`;

  let genres = info.genres
                    .map(item => item.name)
                    .join(", ");
  
  console.log("movie.length: " + props.moviePage.movie.length);
  
  return (
    <>
      <button onClick={getProps}> PROPS </button>
      <div className={style.content}>
        <div>
          <img src={poster} className={style.poster} alt={info.title}/>
        </div>
        <div>
          <p> {info.title} </p>
          <p> {genres} </p>
          <p> {info.overview} </p>
          <p> {info.popularity} </p>
          <p> {info.release_date} </p>
          <p> {info.vote_average} </p>
          <p> {info.vote_count} </p>
        </div>
      </div>
      
    </>
  )
}

export default MovieDetails;