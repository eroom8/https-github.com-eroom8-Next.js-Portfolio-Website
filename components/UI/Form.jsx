import React from "react";
import classes from "../../styles/form.module.css";
import { useForm, ValidationError } from '@formspree/react';
function Form() {
  const [state, handleSubmit] = useForm (process.env.NEXT_PUBLIC_FORM);
  if (state.succeeded) {
      return <p>Thanks message sent successifly!</p>;
  }
  return (
    <form className={`${classes.form}`}  onSubmit={handleSubmit}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required 
         id="email"         
        name="email" />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}>
                  </ValidationError>
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required  id="message"
        name="message"/>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}></ValidationError>
      </div>

      <button className="primary__btn" type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
};

export default Form;
