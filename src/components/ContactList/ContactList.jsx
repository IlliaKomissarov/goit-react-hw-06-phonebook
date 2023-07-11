import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { getContacts, deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(state => state.filter.filter).toLowerCase();

  const onFilterChange = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {onFilterChange().map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.info}>
            <span>{name} : </span> 
            {number}
          </p>
          <button
            className={css.btn}
            type="button"
            id={id}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList