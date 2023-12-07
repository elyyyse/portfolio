import Image from 'next/image';
import Link from 'next/link';

import List from '@/components/List';
import Footnote from '@/components/Footnote';

import styles from './about.module.css';

export const metadata = {
  title: 'About • Elyse Kanagaratnam',
};

export default function About() {
  return (
    <div className={styles.flexWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.textWrapper}>
          <h1 className={styles.h1}>
            Hi, I&apos;m Elyse - a frontend developer based in the San Francisco
            Bay Area.
          </h1>
          <p>
            I have spent the past decade+ working across nearly every area of a
            fast-growing tech company. My role included collaborative
            partnership and required me to really understand my colleagues&apos;
            goals and business needs. My move towards frontend development feels
            less like a transition, and more like a natural evolution as I build
            upon my experience. And while I&apos;m proud of how much I&apos;ve
            learned and accomplished on my own, I am ready to join a team that I
            can learn from and grow with.
          </p>
          <p>
            I am a theatre enthusiast. A rochambeau champion (now retired). A
            reader, a walker, and a climber.{' '}
            <Link href='mailto: elyse@hey.com'>
              I&apos;d love to hear from you.
            </Link>
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src='/_G4A0892.jpg'
            width={300}
            height={200}
            alt='Painting of the portfolio author'
          />
          <span className={styles.photoCred}>Photo by Marta Dymek</span>
        </div>
      </div>
      <h2 className={styles.h2}>Get to know me in list form</h2>
      <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>
            Resources that have been invaluable to me
          </h3>
          <List role='list'>
            <li>
              <Link href='https://www.frontendmentor.io/' target='_blank'>
                Frontend Mentor
                <Footnote>
                  A platform that provides professional designs, so you can
                  focus on improving your coding. Users can build their apps
                  using whichever technologies they choose.
                </Footnote>
              </Link>
            </li>
            <li>
              <Link href='https://developer.mozilla.org/en-US/' target='_blank'>
                MDN
              </Link>
            </li>
            <li>
              <Link
                href='https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/'
                target='_blank'
              >
                W3 Authoring Practices Guide
              </Link>
            </li>
            <li>
              <Link href='https://css-tricks.com/' target='_blank'>
                CSS Tricks
              </Link>
            </li>
          </List>
        </div>

        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>
            Online educators I have a parasocial relationship with
          </h3>
          <List role='list'>
            <li>
              <Link
                href='https://www.udemy.com/user/coltsteele/'
                target='_blank'
              >
                Colt Steele
              </Link>
            </li>
            <li>
              <Link href='https://www.joshwcomeau.com/' target='_blank'>
                Josh Comeau
              </Link>
            </li>
          </List>
        </div>

        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>
            Things I learned on a creative design team
          </h3>
          <List role='list'>
            <li>Incredible attention to detail</li>
            <li>How to receive and give effective feedback</li>
            <li>
              How to do things you are only marginally sure you know how to do
            </li>
            <li>How to finish things that, at times, feel insurmountable</li>
            <li>The importance of whimsy and silliness</li>
          </List>
        </div>

        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>Some of my favorite books</h3>
          <List role='list'>
            <li>Ego Is the Enemy - Ryan Holiday</li>
            <li>A Field Guide to Getting Lost - Rebecca Solnit</li>
            <li>A Secret History - Donna Tartt</li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>
            Some of my favorite memories from 2023
          </h3>
          <List role='list'>
            <li>Backpacking the Lost Coast</li>
            <li>Climbing at Smith Rock</li>
            <li>Spending a weekend in Edinburgh</li>
            <li>Reading by the window</li>
            <li>
              Seeing the very first run of{' '}
              <Link
                href='https://www.nytimes.com/2023/03/01/theater/the-lonely-few-lauren-patten.html'
                target='_blank'
              >
                The Lonely Few
              </Link>{' '}
              at Geffen Playhouse
            </li>
          </List>
        </div>
      </div>
    </div>
  );
}
