import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const items = useSelector(contactsSelectors.getAllContacts);

  const inputChange = useCallback(evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const onAddContact = useCallback(
    e => {
      e.preventDefault();

      if (items.find(item => item.name.toLowerCase() === name.toLowerCase())) {
        alert('Такой контакт существует!');
        return;
      }
      dispatch(contactsOperations.addContact(name, number));

      setName('');
      setNumber('');
    },
    [dispatch, items, name, number],
  );

  return (
    <form className={styles.formContact} onSubmit={onAddContact}>
      <label htmlFor={nameInputId} className={styles.formLabel}>
        Name
        <input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          type="text"
          placeholder="введите имя"
          name="name"
          value={name}
          className={styles.formInput}
          onChange={inputChange}
          id={nameInputId}
        />
      </label>

      <label htmlFor={numberInputId} className={styles.formLabel}>
        Number
        <input
          type="telephone"
          placeholder="введите номер"
          name="number"
          className={styles.formInput}
          required
          value={number}
          onChange={inputChange}
          id={numberInputId}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
