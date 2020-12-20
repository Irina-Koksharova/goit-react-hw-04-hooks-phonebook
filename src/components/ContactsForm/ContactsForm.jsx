import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactsForm.module.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeForm = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '') {
      this.props.onSubmitError('Contact name is missing');
      return;
    }
    if (number.trim() === '') {
      this.props.onSubmitError('Contact number is missing');
      return;
    }
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmitForm}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="Enter the name"
          autoComplete="off"
          id="name"
          onChange={this.handleChangeForm}
        ></input>
        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          placeholder="111-11-11"
          autoComplete="off"
          id="number"
          onChange={this.handleChangeForm}
        ></input>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;
