import React from 'react';
import { Dot } from 'lucide-react';

import styles from './List.module.css';

function List({ bullets = false, children, ...delegated }) {
  // const listItems = [...children];
  // {listItems.map((item, index) => ())}

  return (
    <ul className={styles.list} {...delegated}>
      {children}
      {/* <React.Fragment key={index}>
          <Dot className={styles.listItem} />
          <li className={bullets ? `${styles.bullets}` : `${styles.none}`}>
            {item.props.children}
          </li>
        </React.Fragment> */}
    </ul>
  );
}

export default List;
