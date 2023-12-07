'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'react-feather';

import useRandomProjectPath from '@/hooks/use-random-project-path';

import List from '@/components/List';
import Footnote from '@/components/Footnote';
import PlayableGif from '@/components/PlayableGif';

import styles from './age-calc.module.css';

// export const metadata = {
//   title: 'Age Calculator • Elyse Kanagaratnam',
// };

export default function AgeCalc() {
  const slug = useRandomProjectPath();
  return (
    <div className={styles.gridWrapper}>
      <h1 className={styles.h1}>Age Calculator</h1>
      <p className={styles.p}>
        You give it a birthday, and it tells you how old the user is to the day.
        Made without a DateTime Library of any kind. I didn&apos;t use a
        date/time library because I like to understand the underlying difficulty
        before getting comfortable with a tool that papers over it. But
        honestly, a library would have just made the formatting easier to
        digest. Design by Frontend Mentor.
      </p>
      <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Stack</h2>
          <List>
            <li>Vanilla JavaScript</li>
            <li style={{ textDecoration: 'line-through' }}>
              DateTime Library
              <Footnote>
                Wish I had known about these at the time ;&#41;
              </Footnote>
            </li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Key features</h2>
          <List>
            <li>Animated number output</li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Links</h2>
          <List>
            <li>
              <Link
                href='https://elyyyse.github.io/Age-calculator-app/'
                target='_blank'
              >
                Live site
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/elyyyse/Age-calculator-app'
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
        className={`${styles.heroImage} ${styles.breakGrid}`}
        src='/project-page/age-calc/age-calc-hero.png'
        alt="Age calculator app showing the age of someone born April 7, 2015'"
        width={1440}
        height={810}
      />

      <h2 className={styles.h2}>Project overview</h2>
      <p className={styles.p}>
        This calculator is deceptive in its simplicity. Subtract birth year from
        this year. Subtract birth month from this month. Subtract birth date
        from today&apos;s date. And you&apos;re done, right? But that only works
        if the user has already celebrated a birthday this year AND that
        birthday happened before the current month started AND their date of
        birth is a smaller number than today&apos;s date. And don&apos;t even
        get me started on leap years.
      </p>
      <p className={styles.p}>
        Once the basic logic was up and running, there were several fiddly
        little details to work through. Like custom error states if any single
        input was invalid, but also if their combined value created an invalid
        date (like April 31st or a date in the future). And making sure the
        words ‘years, months, days’ update to the singular form if their
        respective output number is 1.
      </p>
      <h2 className={styles.h2}>Helpful resources</h2>
      <List className={styles.resources}>
        <li>
          <Link
            href='https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript'
            target='_blank'
          >
            Understanding Date and Time in JavaScript from Digital Ocean
          </Link>
        </li>
      </List>
      <h2 className={styles.h2}>Challenges and lessons learned</h2>
      <p className={styles.p}>
        This is one of the first projects I made, and at the time, I was a bit
        puzzled by the CSS position property&#8212;specifically absolute and
        relative. Building this helped me to grok the concept and also marked a
        pivotal confidence boost as I continued pursuing software development.💛
      </p>
      <div className={`${styles.slideshow}  ${styles.breakGrid}`}>
        {/* <PlayableGif
        className={`${styles.slideshowImage} ${styles.breakGrid}`}
        gifSrc='/project-page/age-calc/animated-numbers.gif'
        gifAltText=''
        thumbnailSrc='/project-page/age-calc/animated-numbers.png'
        thumbnailAltText=''
        width={1440}
        height={810}
      /> */}
        <Image
          // className={`${styles.slideshowImage} ${styles.breakGrid}`}
          className={styles.slideshowImage}
          src='/project-page/age-calc/age-calc-leap-error.png'
          alt=''
          width={1440}
          height={810}
        />
        <Image
          // className={`${styles.slideshowImage} ${styles.breakGrid}`}
          className={styles.slideshowImage}
          src='/project-page/age-calc/age-calc-mobile-leap.png'
          alt=''
          width={500}
          height={750}
        />
        <Image
          // className={`${styles.slideshowImage} ${styles.breakGrid}`}
          className={styles.slideshowImage}
          src='/project-page/age-calc/animated-numbers.gif'
          alt=''
          width={1440}
          height={810}
        />
        <Image
          // className={`${styles.slideshowImage} ${styles.breakGrid}`}
          className={styles.slideshowImage}
          src='/project-page/age-calc/age-calc-mobile-single.png'
          alt=''
          width={500}
          height={750}
        />

        {/* <Image
          // className={`${styles.slideshowImage} ${styles.breakGrid}`}
          className={styles.slideshowImage}
          src='/project-page/age-calc/age-calc-future-error.png'
          alt=''
          width={1440}
          height={810}
        /> */}
      </div>
      <span className={styles.nextProject}>
        <Link href={slug}>Check out another project</Link>
        <ChevronRight size={14} style={{ display: 'inline' }} />
      </span>
    </div>
  );
}
