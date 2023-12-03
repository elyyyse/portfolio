import Image from 'next/image';
import Link from 'next/link';

import List from '@/components/List';

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
            Hi, I&apos;m Elyse - a creative director and filmmaker based in the
            San Francisco Bay Area.
          </h1>
          <p>
            But regardless of medium, I&apos;m a storyteller first. Sharing
            stories is a fundamental part of what makes us human. The stories we
            choose to tell and listen to shape the world around us. My work has
            been recognized by the Shorty Awards, the Webby Awards, and the
            Brand Film Awards, and has been featured in festivals worldwide. I
            currently work full-time at Zendesk where I lead a team of
            designers, writers, animators, video editors, sound designers,
            photographers, CGI artists, and producers.
          </p>
          <p>
            I am a theatre enthusiast. A rochambeau champion (now retired). A
            reader, a walker, and a climber. I&apos;d love to hear from you.
          </p>
          {/* <p>
            Heres one more paragraph with Irure deserunt voluptate duis sint in
            et pariatur amet ea aliqua incididunt. Dolor adipisicing enim ipsum
            esse deserunt aute quis aliquip esse sit occaecat laboris aliquip
            id. Esse minim laborum est ad nisi aute ut consequat ipsum sint
            cillum ut proident ea quis.
          </p> */}
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
      {/* <h2>Get to know me in list form</h2> */}
      <h2 className={styles.h2}>
        Come in, — come in! and know me better, man!
      </h2>
      <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>
            Resources that have been invaluable to me
          </h3>
          <List>
            <li>
              {/* <Link href='https://www.coltsteele.com/' target='_blank'> */}
              Frontend Mentor
              {/* </Link> */}
            </li>
            <li>
              {/* <Link href='https://www.joshwcomeau.com/' target='_blank'> */}
              MDN
              {/* </Link> */}
            </li>
            <li>W3 Authoring Practices Guide</li>
            <li>CSS Tricks</li>
          </List>
        </div>

        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>Things I learned filmmaking</h3>
          <List>
            <li>Creative problem solving and how to learn quickly</li>
            <li>Incredible attention to detail</li>
            <li>The importance of whimsy</li>
          </List>
        </div>

        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>Some of my favorite books</h3>
          <List>
            <li>Ego Is the Enemy - Ryan Holiday</li>
            <li>Do the Work - Steven Pressfield</li>
            <li>A Field Guide to Getting Lost - Rebecca Solnit</li>
            <li>A Secret History - Donna Tartt</li>
          </List>
        </div>

        <div className={styles.listWrapper}>
          <h3 className={styles.listHeader}>
            Online educators I have a parasocial relationship with
          </h3>
          <List>
            <li>
              <Link href='https://www.coltsteele.com/' target='_blank'>
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
      </div>
    </div>
  );
}
