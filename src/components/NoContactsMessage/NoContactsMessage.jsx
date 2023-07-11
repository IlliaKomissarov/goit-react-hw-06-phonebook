import React from 'react';
import styles from './NoContactsMessage.module.css';

const NoContactsMessage = () => {
  return (
    <div className={styles.sadMessage}>
      <p>
        It looks like you don't have any friends. Try to find some and add them
        to your phonebook
      </p>
    </div>
  );
}

export default NoContactsMessage;
