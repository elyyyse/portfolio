'use client';
import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Popover from '@radix-ui/react-popover';

import styles from './Footnote.module.css';

function Footnote({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover.Root open={isOpen}>
      <Popover.Trigger
        asChild
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

{
  /* <Tooltip.Root>
  <Tooltip.Trigger asChild></Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Content className={styles.tooltip}>
      {children}
      <Tooltip.Arrow className={styles.tooltipArrow} width={20} height={6} />
    </Tooltip.Content>
  </Tooltip.Portal>
</Tooltip.Root>; */
}

export default Footnote;
