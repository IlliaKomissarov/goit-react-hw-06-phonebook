import { useSelector } from 'react-redux';
import { Container } from './Container/Container';
import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import  Filter  from './Filter/Filter';
import { getContacts } from 'redux/contactsSlice';
import  NoContactsMessage  from './NoContactsMessage/NoContactsMessage';


export function App() {
  const contacts = useSelector(getContacts);
    return (
      <Container>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>PhoneBook</h1>
        <ContactForm />
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter />
        )}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <NoContactsMessage />
        )}
      </Container>
    );
}