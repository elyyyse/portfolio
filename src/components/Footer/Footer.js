import React from 'react';

import Navigation from '../Navigation';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <p className={styles.name}>Elyse Kanagaratnam</p>
        <p>I would love to hear from you</p>
        <p className={styles.email}>elyse@hey.com</p>
      </div>
    </footer>
  );
}

export default Footer;
