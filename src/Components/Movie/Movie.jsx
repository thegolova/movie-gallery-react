import React from 'react';
import styles from './Movie.module.css';
import deleteIcon from '../../assets/images/delete_icon.png';

function Movie(props) {
  const handleDelete = (id) => {
    props.deleteMovie(id);
  }


  let poster = `https://image.tmdb.org/t/p/w500/${props.poster_path}`;

  return (
      <div className={styles.movie}>
        <img className={styles.poster} src={poster} alt={props.title}/>
        <div className={styles.title}> {props.title} </div>
        
        {(props.permission === 0) && <div className={styles.delete} onClick={(e) => { 
          e.preventDefault();
          handleDelete(props.id);
          }}>
        <img src={deleteIcon}/>

      </div> }
      </div>
  )
}

export default Movie;