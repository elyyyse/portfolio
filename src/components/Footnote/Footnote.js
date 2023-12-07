'use client';
import React from 'react';
import * as Popover from '@radix-ui/react-popover';

import styles from './Footnote.module.css';

function Footnote({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover.Root open={isOpen}>
      <Popover.Trigger
        asChild
        aria-describedby='popoverContent'
        onMouseOver={() => {
          setIsOpen(true);
        }}
        onMouseOut={() => {
          setIsOpen(false);
        }}
        onFocus={() => {
          setIsOpen(true);
        }}
        onBlur={() => {
          setIsOpen(false);
        }}
      >
        <button className={styles.button}>
          <span className={styles.asterisk}>*</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          id='popoverContent'
          className={styles.popover}
          onOpenAutoFocus={e => {
            e.preventDefault();
          }}
          onCloseAutoFocus={e => {
            e.preventDefault();
          }}
        >
          {children}
          {/* <Popover.Close /> */}
          <Popover.Arrow
            className={styles.popoverArrow}
            width={20}
            height={6}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Footnote;
