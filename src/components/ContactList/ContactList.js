import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

// const mapStateToProps = state => ({
//   contacts: contactsSelectors.getVisibleContactName(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
// });

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

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
