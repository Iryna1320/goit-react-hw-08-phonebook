import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <lable className={styles.filter}>
      <p className={styles.filterTitle}>Find contacts by name</p>
      <input
        className={styles.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </lable>
  );
}
