import { Component } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (data) => {
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  handleRemove = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      console.log('working');
    }
    // console.log(prevState.contacts);
  }
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className="App">
        <AddContact onSubmit={this.formSubmitHandler} />

        <ContactList
          contacts={contacts}
          contactsFiltered={filteredContacts}
          onRemove={this.handleRemove}
          filter={filter}
          onChange={this.changeFilter}
        />
      </div>
    );
  }
}

export default App;
