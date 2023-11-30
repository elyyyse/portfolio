import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <p className={styles.leftAlign}>elyse@hey.com</p>
      </div>
    </footer>
  );
}

export default Footer;
