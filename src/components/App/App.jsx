import { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import Container from '../../components/Container';
import Section from '../Section/Section';
import ContactsForm from '../ContactsForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleSubmitForm = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    const includesContact = this.state.contacts.some(
      contact => contact.name === newContact.name,
    );
    !includesContact
      ? this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }))
      : this.notify(`${newContact.name} is already in your contacts`);
  };

  notify = message => {
    toast.dark(message, {
      className: `${s.toast}`,
      progressClassName: `${s.progress}`,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleDeleteButton = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
      filter: '',
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactsForm
            onSubmit={this.handleSubmitForm}
            onSubmitError={this.notify}
          />
          <ToastContainer
            autoClose={3000}
            limit={1}
            style={{ width: '352px' }}
          />
        </Section>

        {contacts.length > 0 && (
          <Section>
            <h2>Contacts</h2>
            <Filter value={filter} onFilter={this.handleChangeFilter} />
            <ContactsList
              contacts={visibleContacts}
              onDelete={this.handleDeleteButton}
            ></ContactsList>
          </Section>
        )}
      </Container>
    );
  }
}

export default App;
