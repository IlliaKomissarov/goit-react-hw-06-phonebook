
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { getContacts} from 'redux/contactsSlice';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);


  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({id: nanoid(), name, number }));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };


  const handleChangeName = e => {
    if (e.target.type === 'text') {
      setName(e.target.value);
    }
  };
  const handleChangeNumber = e => {
    if (e.target.type === 'tel') {
      setNumber(e.target.value);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
        />
      </label>
      <label className={css.label} style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          placeholder="000-00-00"
        />
      </label>
      <button className={css.btn} type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
