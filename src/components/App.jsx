import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { AppBlock } from './App.styled';

class App extends React.Component {
  
  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }
  
  addFormContact = (data) => {
    const { contacts } = this.state;
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name,
      number
    }
    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
  }
   
  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
  return (
    <AppBlock>
      <h2>Phonebook</h2>
      <ContactForm 
        onSubmit={this.addFormContact} />
      
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={this.changeFilter} />
      
      <ContactList
        contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </AppBlock>
  )
}
};


export default App;