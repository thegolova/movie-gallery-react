import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './AddMovie.module.css';
import {required, minLengthCreator, maxLengthCreator, isNum} from '../../Utils/Validators/Validator';
import {Input, Textarea} from '../../Components/common/FormControls/FormControls';

let minLength3 = minLengthCreator(3);
let minLength6 = minLengthCreator(6);
let maxLength150 = maxLengthCreator(150);

const AddMovie = (props) => {

  const onSubmit = (formData) => {
    props.addMovie(formData);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__content}> 
        <span className={styles.form__title}>Add Movie</span>
        <AddMovieReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

const AddMovieForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label> Title </label>
        <Field
          placeholder="title"
          component={Input}
          name="title"
          validate={[required, minLength3]}
        />
      </div>
      <div>
        <label> Overview </label>
        <Field
          placeholder="overview"
          component={Textarea}
          name="overview"
          validate={[required, minLength6, maxLength150]}
        />
      </div>
      <div>
        <label> Poster_path </label>
        <Field
          placeholder="poster_path"
          component={Input}
          name="poster_path"
          validate={[required]}
        />
      </div>
      <div>
        <label> Popularity </label>
        <Field
          placeholder="popularity"
          component={Input}
          name="popularity"
          validate={[required, isNum]}
        />
      </div>
      <div>
        <label> Release_data </label>
        <Field
          placeholder="release_data"
          component="input"
          type="date"
          name="release_data"
          validate={[required]}
        />
      </div>
      <div>
        <label> Genres </label>
        <Field
          placeholder="genres"
          component={Input}
          name="genres"
          validate={[required]}
        />
      </div>
      <div>
        <label> Vote_average </label>
        <Field
          placeholder="vote_average"
          component={Input}
          name="vote_average"
          validate={[required, isNum]}
        />
      </div>      <div>
        <label> Vote_count </label>
        <Field
          placeholder="vote_count"
          component={Input}
          name="vote_count"
          validate={[required, isNum]}
        />
      </div>
      <div>
        <Field
          component="input"
          type="checkbox"
          name="Adult"
          />
        <span> Adult </span>
      </div>
      <div className={styles.buttons}>
          <button className={styles.button} type="submit">Sign Up</button>
          <button className={styles.button} >Clear</button>
      </div>
    </form>
  )
}

const AddMovieReduxForm = reduxForm({
  form: 'registration'
})(AddMovieForm);

export default AddMovie;