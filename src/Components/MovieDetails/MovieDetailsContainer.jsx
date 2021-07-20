import MovieDetails from './MovieDetails';
import { connect } from 'react-redux';
import { Component } from 'react';
import { setMovie, getMovie} from '../../redux/movieDetails-reducer';
import { withRouter } from 'react-router-dom';

class MovieDetailsContainer extends Component {
  
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getMovie(id);
  }

  render() {
    return <MovieDetails 
      moviePage={this.props.moviePage}    
    />
  }
}


let mapStateToProps = (state) => {
  return {
    moviePage: state.movieDetailsPage
  }
}

let MovieDetailsContainerWithUrl = withRouter(MovieDetailsContainer);

export default connect(mapStateToProps, 
  {
    setMovie,
    getMovie
  }
)(MovieDetailsContainerWithUrl);