import React from 'react';
import Button from '../Button/Button';
import Card from '../Card';
import styles from './ErrorModal.module.css'; // styles라는 이름으로 임포트

const ErrorModal = ({ title, message }) => {
  return (
    <>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
