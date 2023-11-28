'use client';
import React from 'react';
import { Tooltip } from '@mui/material';

import styles from './Footnote.module.css';

function Footnote({ children }) {
  return (
    <Tooltip title={children} arrow>
      <button className={styles.button}>
        <span className={styles.asterisk}>*</span>
      </button>
    </Tooltip>
  );
}

export default Footnote;
