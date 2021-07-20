import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Registration.module.css';
import {required, maxLengthCreator, minLengthCreator, isEmail} from '../../Utils/Validators/Validator';
import {Input} from '../../Components/common/FormControls/FormControls';

const minLength6 = minLengthCreator(6);
const maxLength20 = maxLengthCreator(20);

const Registration = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__content}> 
        <span className={styles.form__title}>Sign In</span>
        <RegistrationReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

const RegistrationForm = (props) => {
  const resetFields = () => {
    props.reset();
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label> Name </label>
        <Field
          placeholder="name"
          component={Input}
          name="name"
          validate={[required, minLength6, maxLength20]}
        />
      </div>
      <div>
        <label> Surname </label>
        <Field
          placeholder="surname"
          component={Input}
          name="surname"
          validate={[required, minLength6, maxLength20]}
        />
      </div>
      <div>
        <label> Password </label>
        <Field
          placeholder="password"
          component={Input}
          name="password"
          type="password"
          validate={[required, minLength6]}
        />
      </div>
      <div>
        <label> Confirm Password </label>
        <Field
          placeholder="confirm password"
          component={Input}
          name="confirm_password"
          type="password"
          validate={[required, minLength6]}
        />
      </div>
      <div>
        <label> Email </label>
        <Field
          placeholder="email"
          component={Input}
          name="email"
          validate={[required, isEmail]}
        />
      </div>
      <div className={styles.buttons}>
          <button className={styles.button} type="submit">Sign Up</button>
          <button className={styles.button} onClick={resetFields} >Clear</button>
      </div>
    </form>
  )
}

const RegistrationReduxForm = reduxForm({
  form: 'registration'
})(RegistrationForm);

export default Registration;