import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';
import {required, maxLengthCreator} from '../../Utils/Validators/Validator';
import {Input} from '../../Components/common/FormControls/FormControls';
import { NavLink } from 'react-router-dom';

const maxLength10 = maxLengthCreator(10);

const Login = (props) => {
  
  const onSubmit = (formData) => {
    props.setUser(formData);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__content}> 
        <span className={styles.form__title}>Sign In</span>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

const LoginForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <label>Login</label>
          <Field 
            placeholder="login"
            component={Input}
            name="login"
            validate={[required, maxLength10]}
          />
        </div>
        <div>
          <label>Password</label>
          <Field 
            placeholder="password"
            component={Input}
            type="password"
            name="password"
            validate={[required]}
          />
        </div>
        <div className={styles.buttons}>
          <button 
            className={styles.button} type="submit">Sign</button>
          <NavLink to='/registration'>
            <button className={styles.button} type="button">Registration</button>
          </NavLink>
        </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

export default Login;