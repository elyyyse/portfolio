import React from 'react';
import Link from 'next/link';

import SimpleNav from '@/components/SimpleNav';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.name}>Elyse Kanagaratnam</p>
        <p className={styles.email}>
          <Link href='mailto: elyse@hey.com'>elyse@hey.com</Link>
        </p>
      </div>
      <SimpleNav />
    </footer>
  );
}

export default Footer;
