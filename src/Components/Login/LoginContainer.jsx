import { Component } from "react";
import { connect } from "react-redux";
import Login from './Login';
import { setUserData } from '../../redux/auth-reducer';

class LoginContainer extends Component {

  render() {
    return <Login setUser={this.props.setUserData}/>
  }
} 

let mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuth,
    users: state.auth.users
  }
}

export default connect(mapStateToProps, 
  {
    setUserData
  }
)(LoginContainer);