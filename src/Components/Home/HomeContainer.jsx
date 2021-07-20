import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentPage, setSortMovies, getMovies, deleteMovie} from '../../redux/home-reducer';
import Home from './Home';


class HomeContainer extends Component {
  
  componentDidMount() {
    this.props.getMovies(this.props.currentPage);
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.getMovies(page);
  }

  onSortTypeChanged = (event) => {
    this.props.setSortMovies(event.target.value);
  }

  render() { 
    return<Home
        movies={this.props.movies}
        pageCount={this.props.pageCount}
        currentPage={this.props.currentPage}
        sortingTypes={this.props.sortingTypes}
        currentSort={this.props.currentSort}
        isFetching={this.props.isFetching}
        onPageChanged={this.onPageChanged}
        onSortTypeChanged={this.onSortTypeChanged}
        permission={this.props.permission}
        deleteMovie={this.props.deleteMovie}
      />
  }

}

//данные, которые берем из state
let mapStateToProps = (state) => {
  return {
    movies: state.homePage.movies,
    pageCount: state.homePage.pageCount,
    currentPage: state.homePage.currentPage,
    sortingTypes: state.homePage.sortingTypes,
    currentSort: state.homePage.currentSort,
    isFetching: state.homePage.isFetching,
    permission: state.auth.user.permission
  }
}

export default connect(mapStateToProps, 
  {
    setCurrentPage,
    setSortMovies,
    getMovies,
    deleteMovie
  }
)(HomeContainer);