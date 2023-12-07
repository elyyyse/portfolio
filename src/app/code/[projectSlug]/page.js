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
  const {
    title,
    logline,
    stack,
    keyFeatures,
    heroImage,
    overview,
    challenges,
    jsx,
  } = PROJECT_DETAILS[projectSlug];
  return (
    <div className={styles.gridWrapper}>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.p}>{logline}</p>
      <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Stack</h2>
          <List>
            {stack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Key features</h2>
          <List>
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </List>
        </div>
      </div>
      <Image
        className={`${styles.heroImage} ${styles.breakGrid}`}
        src={heroImage}
        alt=''
        width={1000}
        height={668}
      ></Image>
      <h2 className={styles.h2}>Project overview</h2>
      <p className={styles.p}>{overview}</p>
      <h2 className={styles.h2}>Challenges and lessons learned</h2>
      {challenges.map((challenge, index) => (
        <p key={index} className={styles.p}>
          {challenge}
        </p>
      ))}
    </div>
  );
}
