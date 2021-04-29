import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContactName);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contactItem} key={id}>
          {name}: {number}
          <button
            className={styles.buttonDel}
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            Deleted
          </button>
        </li>
      ))}
    </ul>
  );
}
