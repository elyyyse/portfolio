import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

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
            Hi, I&apos;m Elyse - a brand strategist and filmmaker based in the
            San Francisco Bay Area
          </h1>
          <p>
            I&apos;ve worked in the tech industry for over a decade. Starting my
            career in project management, I grew to build and direct
            multidisciplinary creative teams. My process with any work challenge
            is to start from a place of curiosty and seek to develop deep
            understanding.
          </p>
          {/* <p>I am a regular attendee at Alameda Library Board meetings.</p> */}
          {/* As a lifelong learner, I have collected an eclectic array of skills
            that serve me in unexpected ways. */}
          <p>
            I&apos;m an avid reader, a slightly better than mediocre rock
            climber, and a big believer in the power of threes. If given half a
            chance, I will put my toes in most any body of water I come across.
          </p>
          <p>
            If you&apos;re interested in building something together,{' '}
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
            Things I&apos;ve learned in my creative career
          </h3>
          <List>
            <li>Relentless attention to detail</li>
            <li>How to receive and give effective feedback</li>
            <li>
              How to do things you are only marginally sure you know how to do
            </li>
            {/* <li>How to finish things that, at times, feel insurmountable</li> */}
            <li>The importance of whimsy and silliness</li>
            <li>To always ask why</li>
          </List>
        </div>

        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>Artists who inspire me</h3>
          <List>
            <li>
              <Link
                href='https://www.sindhaagha.com/'
                target='_blank'
                prefetch={false}
              >
                Sindha Agha
              </Link>
            </li>
            {/* <li>
              <Link
                href='https://www.imdb.com/name/nm4369688/'
                target='_blank'
                prefetch={false}
              >
                Raphael Bob-Waksberg
              </Link>
            </li> */}
            <li>
              <Link
                href='https://www.instagram.com/erikcavanaugh/'
                target='_blank'
                prefetch={false}
              >
                Erik Cavanaugh
              </Link>
            </li>
            <li>
              <Link
                href='https://www.imdb.com/name/nm3564817/'
                target='_blank'
                prefetch={false}
              >
                Phoebe Waller-Bridge
              </Link>
            </li>
          </List>
        </div>

        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>Some of my favorite books</h3>
          <List>
            <li>Ego Is the Enemy - Ryan Holiday</li>
            <li>A Field Guide to Getting Lost - Rebecca Solnit</li>
            <li>A Secret History - Donna Tartt</li>
            <li>
              Someone Who Will Love You in All Your Damaged Glory - Raphael
              Bob-Waksberg
            </li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>
            Some memorable moments from 2024
          </h3>
          <List>
            <li>Climbing at Smith Rock</li>
            <li>Making the best of a emergency trip to Sri Lanka</li>
            <li>
              Appearing as a guest on the{' '}
              <Link
                href='https://podcasts.apple.com/us/podcast/38-intermezzo/id1560981966?i=1000680417771'
                target='_blank'
                prefetch={false}
              >
                Literary Connections
              </Link>{' '}
              podcast
            </li>
            <li>Reading by the window</li>
            <li>Taking the helm of a sailboat with no idea what I was doing</li>
          </List>
        </div>
      </div>
    </div>
  );
}
