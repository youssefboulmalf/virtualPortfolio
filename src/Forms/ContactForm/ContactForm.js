import React, { useRef, Component } from 'react';
import css from './ContactForm.module.css';
import TextInput from './TextInput';
import TextArea from './TextArea';
import { sendMail } from '../../util/apiRouter';
import IconSpinner from './IconSpinner/IconSpinner';

export class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        name: "name",
        value: "",
        label: "Name",
        focus: false,
        errorMessage: ""
      },
      email: {
        name: "email",
        value: "",
        label: "Email",
        focus: false,
        errorMessage: false
      },
      message: {
        name: "message",
        value: "",
        label: "Message",
        focus: false,
        errorMessage: ""
      },
      inProgress: false,
      hasSubmitted: false,
      submitError: null
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateNameMessage(res) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    if (res.value.length === 0) {
      errors.push(res.name + " can't be empty");
    }

    if (res.value.length < 3) {
      console.log(res.name);
      if (res.name == "message") {
        errors.push("Please enter a valid " + res.name + " at lease 20 characters");
      }

      if (res.name == "name") {
        errors.push("Please enter a valid " + res.name + " between 3 to 32 characters.");
      }
    }

    return errors;
  }
  validateEmail(res) {
    const email = res.value
    const errors = [];

    if (email.length < 5 || email.split("").filter(x => x === "@").length !== 1 || email.indexOf(".") === -1) {
      errors.push("Please enter a valide email");
    }

    return errors;
  }

  handleFocus(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = true;
    this.setState({ [name]: state });
  }

  handleBlur(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = false;
    this.setState({ [name]: state });
  }

  handleChange(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    let errorMessage = "";
    state.value = e.target.value;

    if (name == "email") {
      errorMessage = this.validateEmail(this.state[name]);
    } else {
      errorMessage = this.validateNameMessage(this.state[name]);
    }

    if (errorMessage) {
      state.errorMessage = errorMessage;
    }

    this.setState({ [name]: state });
  }

  handleSubmit(e) {
    console.log(process.env.ENV_LOCAL_VARIABLE_EMAIL_JS_USER_ID)
    e.preventDefault();
      const name = this.state.name.value;
      const email = this.state.email.value;
      const message = this.state.message.value;
      const payload = {name: name, email: email, message:message}
      this.setState({inProgress: true})
      sendMail({payload:payload})
      .then(r=>{
        this.setState({hasSubmitted: true, inProgress: false})
      })
      .catch(e=>{
        this.setState({submitError: e, hasSubmitted: true, inProgress: false})
      })
  };

  render() {
    const { name, email, message } = this.state;

    const disabled = name.errorMessage.length>0 || email.errorMessage.length>0 || message.errorMessage.length>0? true : false;
    const buttonStyle = disabled? css.submitButtonDisabled : css.submitButton

    return (
      <>
      {!this.state.hasSubmitted?
      <form className={css.form} onSubmit={this.handleSubmit}>
        <TextInput
          {...name}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <TextInput
          {...email}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <TextArea
          {...message}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <button className={buttonStyle} disabled={disabled} type="submit">{this.state.inProgress? <IconSpinner/> :"Send" }</button>
      </form>:<div className={css.finalForm}>
      {this.state.submitError?(<div className={css.bigErrorMessage}>{this.state.submitError}</div>):(<div className={css.succesMessage}>Thanks you, I will get back you as soon as I can</div>)}
        </div>}
      </>
    );
  }
}

export default ContactForm