import Image from 'next/image';

import styles from './rainbow.module.css';

export default function Rainbow() {
  return (
    <div className={styles.gridWrapper}>
      <h1>This is a rainbow page</h1>
      <p>
        Reprehenderit enim labore commodo consectetur tempor id laboris pariatur
        labore dolore. Aliqua nostrud reprehenderit mollit consectetur nisi
        aliqua. Consequat ipsum fugiat nostrud dolor consectetur nulla amet sit
        ipsum enim. Aute sunt proident consectetur veniam adipisicing do minim
        elit non excepteur amet. Dolore aute fugiat excepteur magna nulla veniam
        reprehenderit occaecat et elit cupidatat ipsum qui. Qui adipisicing
        cillum reprehenderit veniam consectetur occaecat aute officia.
      </p>
      <Image
        className={styles.img}
        src='/project-page/rainbow/josh-metal-shavings.gif'
        alt=''
        width={706}
        height={450}
      ></Image>
      <p>
        Reprehenderit enim labore commodo consectetur tempor id laboris pariatur
        labore dolore. Aliqua nostrud reprehenderit mollit consectetur nisi
        aliqua. Consequat ipsum fugiat nostrud dolor consectetur nulla amet sit
        ipsum enim. Aute sunt proident consectetur veniam adipisicing do minim
        elit non excepteur amet. Dolore aute fugiat excepteur magna nulla veniam
        reprehenderit occaecat et elit cupidatat ipsum qui. Qui adipisicing
        cillum reprehenderit veniam consectetur occaecat aute officia.
      </p>
      <Image
        className={styles.img}
        src='/project-page/rainbow/rainbow-dot-radius.gif'
        alt=''
        width={1096}
        height={346}
      ></Image>
      <Image
        className={styles.img}
        src='/project-page/rainbow/rainbow-flag.gif'
        alt=''
        width={1096}
        height={346}
      ></Image>
      <Image
        className={styles.img}
        src='/project-page/rainbow/rainbow-flag-inverted.gif'
        alt=''
        width={1096}
        height={346}
      ></Image>
    </div>
  );
}
