import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import PropTypes from 'prop-types';
import s from './AddContacts.module.css';
// import FriendListItem from './../FriendListItem/FriendListItem';
class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name.trim().length <= 2 ||
      this.state.number.trim().length <= 6
    ) {
      alert('Введите коректное значение');
    } else {
      this.props.onSubmit({ id: uuidv4(), ...this.state });
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h1>Phonebook </h1>
        <form className={s.formAddContact} onSubmit={this.handleSubmit}>
          <label className={s.addLable}>
            Name
            <input
              className={s.inputFild}
              type="text"
              name="name"
              value={name}
              placeholder="Введите имя"
              onChange={this.handlerInputChange}
            ></input>
          </label>
          <label className={s.addLable}>
            Number
            <input
              className={s.inputFild}
              type="phone"
              name="number"
              placeholder="Введите номер"
              value={number}
              onChange={this.handlerInputChange}
            ></input>
          </label>
          <button className="add-contact-btn" type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
export default AddContact;

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
