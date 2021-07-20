import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomeContainer from './Components/Home/HomeContainer';
import LoginContainer from './Components/Login/LoginContainer';
import Registration from './Components/Registration/Registration';
import AddMovie from './Components/AddMovie/AddMovie';
import MovieDetailsContainer from './Components/MovieDetails/MovieDetailsContainer';
import { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { setUsers, logout } from './redux/auth-reducer';
import userData from './dummy_data/users.json';

class App extends Component {

	componentDidMount() {
		this.props.setUsers(userData);
	}

	render() {
		return (
			<div className="App">
				<Header 
					login={this.props.login}
					isAuth={this.props.isAuth}
					logout={this.props.logout}
					permission={this.props.permission}
				/>
				<div>
					<Route  exact path='/'
									render={ () => <HomeContainer /> }/>
					<Route  path='/login'
									render={ () => <LoginContainer />} />
					<Route  path='/registration'
									render={ () => <Registration />} />
					<Route  path='/add'
									render={ () => <AddMovie />} />
					<Route  path='/details/:id?'
									render={ () => <MovieDetailsContainer />} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		login: state.auth.user.login,
		isAuth: state.auth.isAuth,
		permission: state.auth.user.permission
	}
};

export default compose (
	withRouter,
	connect(mapStateToProps, {
		setUsers,
		logout
	}))(App);