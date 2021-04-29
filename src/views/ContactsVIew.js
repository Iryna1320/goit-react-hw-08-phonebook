import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import { contactsOperations, contactsSelectors } from '../redux/contacts';

const styles = {
  containerBox: {
    width: 500,
    margin: 'auto',
    textAlign: 'left',
    backgroundColor: 'inherit',
  },
  title: {
    marginTop: 15,
    marginBottom: 15,
    color: '#E84A5F',
  },
};

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div style={styles.containerBox}>
        <h1 style={styles.title}>Phonebook</h1>
        <ContactForm />

        <h2 style={styles.title}>Contacts</h2>
        {isLoadingContacts && <h1>Loading...</h1>}
        <Filter />

        <ContactList />
      </div>
    </Container>
  );
}
