import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChangeName = e => {
this.setState({name: e.currentTarget.value})
  }

  handleChangeNumber = e => {
    this.setState({number: e.currentTarget.value})
      }

  handleSubmit = e => {
    e.preventDefault()
    // console.log(this.state)
    this.props.onSubmit(this.state.name, this.state.number)
    this.setState({name: '', number: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
