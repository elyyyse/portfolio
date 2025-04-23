import React from 'react';
import Link from 'next/link';

import List from '@/components/List';
import styles from './SimpleNav.module.css';

function SimpleNav() {
  return (
    <nav className={styles.simpleNav}>
      <List>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/film/prod'>Film</Link>
        </li>
        <li>
          <Link href='/code'>Code</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </List>
    </nav>
  );
}

export default SimpleNav;
