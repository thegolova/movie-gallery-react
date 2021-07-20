import React from 'react';
import styles from './Home.module.css';
import Movie from '../Movie/Movie';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

let Home = (props) => {

  let pages = [];
  for (let i = 1; i <= props.pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.container}>
        <div className={styles.row}> 
            <select 
              className={styles.select}
              onChange={props.onSortTypeChanged}>
              {
                props.sortingTypes.map(sort => (
                  <option
                    key={sort.id}
                    value={sort.type}> 
                    {sort.type} {/* sort.name */}
                  </option>
                ))
              }
            </select>

            { (props.permission === 0) && 
            <NavLink to='/add'><button className={styles.btnAdd} onClick={props.getProps}> ADD FILM </button></NavLink> }
          </div>

        {props.isFetching && <Preloader />}

        <div className={styles.list}>
            {
              props.movies.map(film => (
                <NavLink to={'/details/' + film.id} key={film.id}>
                  <Movie
                    permission={props.permission} 
                    key={film.id}
                    id={film.id}
                    title={film.title}
                    vote_count={film.vote_count}
                    release_date={film.release_date}
                    poster_path={film.poster_path}
                    deleteMovie={props.deleteMovie}
                  />
                </NavLink>
              ))
            }
          </div>

          <div className={styles.pagination}>
            {
              pages.map(pageNumber => (
                <span 
                  key={pageNumber}
                  className={props.currentPage === pageNumber ? styles.selectedPage : ""}
                  onClick={ () => {props.onPageChanged(pageNumber)} }> {pageNumber}
                </span>
              ))
            }
          </div>

    </div>
  )
}

export default Home;