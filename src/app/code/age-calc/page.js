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
        An app that calculates how old you are to the day. Built using native
        JavaScript dates objects. I did this in part because I didn&apos;t know
        what my options were, but I do think there is value in understanding the
        underlying pain points of a technology before getting comfortable with a
        tool that papers over it. This app was designed by Frontend Mentor.
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
        alt='Age calculator app showing the age of someone born April 7, 2015'
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
      <p className={styles.pContinued}>
        Once the basic logic was up and running, there were several fiddly
        little details to work through. Like custom error states
        <Footnote>
          I used aria-errormessage and aria-invalid to keep these custom
          messages accessible.
        </Footnote>{' '}
        if any single input was invalid, but also if their combined value
        created an invalid date (like April 31st or a date in the future). Or
        making sure the words &lsquo;years, months, days&rsquo; update to the
        singular form if their respective output number is 1.
      </p>
      <h2 className={styles.h2}>Helpful resources</h2>
      <List className={styles.bodyList}>
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
        I&apos;m someone who values organization and legibility, and that
        absolutely extends to my code. This project was a bit of a trial in that
        regard and gave me a real appreciation for refactoring. I found myself
        going back over my code again and again to name or rename variables, to
        collect repetitive logic into reusable functions, and to leave clear
        comments when I felt my naming wasn&apos;t quite enough info.
      </p>
      <p className={styles.pContinued}>
        When I built this app, I was flummoxed by the concept of epoch time and
        UTC and just kind of ignored it in favor of date formats that made more
        sense to me. In hindsight, I think I could have simplified things had a
        taken advantage of UTC. It&apos;s something I might attempt in the
        future.
      </p>
      <p className={styles.pContinued}>
        My biggest challenge by far was figuring out the leap year math. The
        issues kept popping up like a game of whack-a-mole. It wasn&apos;t too
        difficult to get things working for 2023, but it was obvious that come
        March 2024, my calculations were going to be off by a day. When I
        finally took to pen and paper to sketch out the problem, I was able to
        find solutions that, as of this writing, I haven&apos;t been able break.
        🤞🏽
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
          className={styles.slideshowImage}
          src='/project-page/age-calc/age-calc-leap-error.png'
          alt="Age calculator app showing an error for a date that doesn't exist"
          width={1440}
          height={810}
        />
        <Image
          className={styles.slideshowImage}
          src='/project-page/age-calc/age-calc-mobile-leap.png'
          alt='Age calculator mobile view showing the age of someone born February 29, 1996'
          width={500}
          height={750}
        />
        <Image
          className={styles.slideshowImage}
          src='/project-page/age-calc/animated-numbers.gif'
          alt='Animated age calculator showing the age of someone born December 25, 1982'
          width={1440}
          height={810}
        />
        <Image
          className={styles.slideshowImage}
          src='/project-page/age-calc/age-calc-mobile-single.png'
          alt='Age calculator showing an age including single digits'
          width={500}
          height={750}
        />
        {/* <Image
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
