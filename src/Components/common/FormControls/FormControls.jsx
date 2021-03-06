import React from 'react';
import styles from './FormControls.module.css';

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={ styles.formControl + " " + (hasError && styles.error) }>
      <div>
        <input {...input} {...props} />
      </div>
      { 
        hasError && <span className={styles.errorText}> {meta.error} </span>
      }
    </div>
  )
};

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={ styles.formControl + " " + (hasError && styles.error) }>
      <div>
        <textarea {...input} {...props} />
      </div>
      { 
        hasError && <span className={styles.errorText}> {meta.error} </span>
      }
    </div>
  )
};