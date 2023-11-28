import React from 'react';
import { Dot } from 'lucide-react';

import styles from './List.module.css';

function List({ children, ...delegated }) {
  const listItems = [...children];

  return (
    <ul className={styles.list} {...delegated}>
      {listItems.map((item, index) => (
        <React.Fragment key={index}>
          {/* <Dot className={styles.listItem} /> */}
          <li className={styles.listItem}>{item.props.children}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default List;
