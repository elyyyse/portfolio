'use client';
import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import styles from './Footnote.module.css';

function Footnote({ children }) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className={styles.button}>
            <span className={styles.asterisk}>*</span>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.tooltip}>
            {children}
            <Tooltip.Arrow
              className={styles.tooltipArrow}
              width={20}
              height={6}
            />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default Footnote;
