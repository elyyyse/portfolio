import React from 'react';
import clsx from 'clsx';

import styles from './List.module.css';

function List({
  as: Tag = 'ul',
  markers = false,
  className,
  children,
  ...delegated
}) {
  return (
    <Tag
      className={clsx(styles.list, markers && styles.markers, className)}
      {...delegated}
    >
      {children}
    </Tag>
  );
}

export default List;
