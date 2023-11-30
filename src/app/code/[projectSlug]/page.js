import Image from 'next/image';

import List from '@/components/List';

import { PROJECT_DETAILS } from '@/constants';
import styles from './projectSlug.module.css';

export function generateMetadata({ params }) {
  const { projectSlug } = params;
  return {
    title: `${PROJECT_DETAILS[projectSlug].title} • Elyse Kanagaratnam`,
  };
}

export default function Code({ params }) {
  const { projectSlug } = params;
  const { title, summary, stack, keyFeatures, image } =
    PROJECT_DETAILS[projectSlug];
  return (
    <div className={styles.gridWrapper}>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
          <h2 className={`${styles.h2} ${styles.listHeaders}`}>Stack</h2>
          <List>
            {stack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={`${styles.h2} ${styles.listHeaders}`}>Key features</h2>
          <List>
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </List>
        </div>
      </div>
      <Image
        className={`${styles.heroImage} ${styles.breakGrid}`}
        src={image}
        alt=''
        width={1000}
        height={668}
      ></Image>
      <p>
        Labore consequat adipisicing proident veniam ea irure consectetur anim
        commodo cupidatat velit Lorem ex. Ex ad veniam labore cupidatat non
        adipisicing proident Lorem esse sit occaecat ad sint. Cupidatat irure
        elit eu ipsum est veniam quis pariatur. Ut eiusmod veniam voluptate
        laboris qui dolore fugiat magna culpa qui culpa aute ipsum. Dolor sunt
        tempor eu incididunt duis. Cupidatat ullamco velit ipsum commodo ut sint
        veniam sunt sit labore aliqua officia enim incididunt mollit. Eu do
        nostrud irure labore do incididunt excepteur aute dolore.
      </p>
    </div>
  );
}
