'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { ChevronRight } from 'react-feather';

import useRandomProjectPath from '@/hooks/use-random-project-path';

import List from '@/components/List';
import Footnote from '@/components/Footnote';

import styles from './advice.module.css';

// export const metadata = {
//   title: 'Advice App • Elyse Kanagaratnam',
// };

export default function AdviceApp() {
  const slug = useRandomProjectPath();
  return (
    <div className={styles.gridWrapper}>
      <h1 className={styles.h1}>Advice Generator</h1>
      <p className={styles.p}>
        A silly app that generates a random piece of advice from an API called
        &lsquo;Advice Slip&rsquo;. Design by Frontend Mentor.
      </p>
      <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Stack</h2>
          <List>
            <li>Vanilla JavaScript</li>
            <li>Axios</li>
            <li>Advice Slip API</li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Key features</h2>
          <List>
            <li>Unsolicited advice</li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Links</h2>
          <List>
            <li>
              <Link
                href='https://elyyyse.github.io/Random-advice-generator/'
                target='_blank'
              >
                Live site
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/elyyyse/Random-advice-generator/tree/main'
                target='_blank'
              >
                GitHub repo
              </Link>
            </li>
          </List>
        </div>
      </div>
      <Image
        priority
        className={clsx(styles.heroImage, styles.breakGrid)}
        src='/project-page/advice/advice-hero.png'
        alt="Advice app that says 'Try buying a coffee for the creator of a free public API, now and then.'"
        width={1440}
        height={810}
      ></Image>
      <h2 className={styles.h2}>Project overview</h2>
      <p className={styles.p}>
        This app is simple, yet fun. You &lsquo;roll the die&rsquo;, the button
        glows green, and voila, you are given invaluable advice that is sure to
        improve your life. On initial page load, it takes second
        <Footnote>
          Not a literal second. I haven&apos;t timed it, but it takes long
          enough to notice.
        </Footnote>{' '}
        for the first piece of advice to populate. The design didn&apos;t
        specify how to handle this load state, so I chose to leave a little
        easter egg for anyone who cares to find it.
      </p>
      <h2 className={styles.h2}>Challenges and lessons learned</h2>
      <p className={styles.p}>
        This is one of the first projects I made, and at the time, I was a bit
        puzzled by the CSS position property&#8212;specifically absolute and
        relative. Building this helped me to grok the concept. This is also the
        first responsive layout I built, and it marked a pivotal confidence
        boost as I continued pursuing software development.💛
      </p>
      {/* <div className={`${styles.slideshow}  ${styles.breakGrid}`}> */}
      <Image
        className={clsx(styles.slideshowImage, styles.breakGrid)}
        src='/project-page/advice/advice-mobile-active.png'
        alt="Mobile advice app that says 'If you get stuck, trying doing the opposite of what the solution requires.'"
        width={500}
        height={750}
      />
      {/* </div> */}
      <span className={styles.nextProject}>
        <Link href={slug}>Check out another project</Link>
        <ChevronRight size={14} style={{ display: 'inline' }} />
      </span>
    </div>
  );
}
