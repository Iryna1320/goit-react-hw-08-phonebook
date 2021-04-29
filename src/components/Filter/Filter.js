import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
// import PropTypes from 'prop-types';
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

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   value: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// const Filter = ({ value, onChange }) => {
//   return (
//     <lable className={styles.filter}>
//       <p className={styles.filterTitle}>Find contacts by name</p>
//       <input
//         className={styles.filterInput}
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </lable>
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   value: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
