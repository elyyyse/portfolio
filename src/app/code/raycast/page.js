'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { ChevronRight } from 'react-feather';

import useRandomProjectPath from '@/hooks/use-random-project-path';

import List from '@/components/List';
import Footnote from '@/components/Footnote';

import styles from './raycast.module.css';

// export const metadata = {
//   title: 'Raycast Ext • Elyse Kanagaratnam',
// };

export default function RaycastExt() {
  const slug = useRandomProjectPath();
  return (
    <div className={styles.gridWrapper}>
      <h1 className={styles.h1}>Raycast Extensions</h1>
      <p className={styles.p}>
        <Link href='https://www.raycast.com/' target='_blank'>
          Raycast
        </Link>{' '}
        is a launcher app for macOS—similar to Spotlight or Alfred, but with a
        much richer feature set. The platform allows developers to contribute
        open-source extensions to interact with other apps and improve daily
        workflows. So far, I have one approved extension available in the
        Raycast Store and a couple more in the works.
      </p>
      <div className={styles.listsContainer}>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Stack</h2>
          <List>
            <li>TypeScript</li>
            <li>Raycast API</li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Published Extensions</h2>
          <List>
            <li>Tomito Controls</li>
          </List>
        </div>
        <div className={styles.listWrapper}>
          <h2 className={styles.listHeaders}>Links</h2>
          <List>
            <li>
              <Link href='https://www.raycast.com/elyse' target='_blank'>
                Extensions store
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/raycast/extensions/tree/16c7171d0e71665944b0e7ff0f3a733ea598cf0b/extensions/tomito-controls'
                target='_blank'
              >
                Tomito Controls repo
              </Link>
            </li>
          </List>
        </div>
      </div>

      <h2 className={styles.h2}>Tomito Controls</h2>
      <p className={styles.p}>
        <Link href='https://www.tomito.app/' target='_blank'>
          Tomito
        </Link>{' '}
        is a Pomodoro
        <Footnote>
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. It uses a kitchen timer to break
          work into intervals, typically 25 minutes in length, separated by
          short breaks. - Wikipedia
        </Footnote>{' '}
        timer app. The Tomito Controls extension allows users to control Tomito
        from within Raycast, using only their keyboard.
      </p>
      <Image
        priority
        className={clsx(styles.heroImage, styles.breakGrid)}
        src='/project-page/raycast/tomito-hero.png'
        alt='Raycast app showing collection of Tomito commands'
        width={1440}
        height={810}
      />
      <h3 className={styles.h3}>Helpful resources</h3>
      <List as='ul' markers={true}>
        <li>
          <Link href='https://developers.raycast.com/' target='_blank'>
            Raycast API Docs
          </Link>
        </li>
        <li>
          <Link href='https://tomito.app/docs/' target='_blank'>
            Tomito AppleScript Docs
          </Link>
        </li>
      </List>
      <h3 className={styles.h3}>Challenges and lessons learned</h3>
      <p className={styles.p}>
        Before this project, most of the software development I had done was
        displayed in a web browser. This was a new, fun challenge using
        AppleScript to control a macOS app.
      </p>
      <p className={styles.pContinued}>
        Building on this platform has given me a solid opportunity to work on a
        small piece of a larger codebase. The Raycast team is incredibly helpful
        and offers comprehensive feedback on pull requests. I appreciate having
        my code reviewed and made better by a team with high standards for user
        experience.
      </p>

      <h3 className={styles.h3}>User feedback</h3>
      <div className={styles.userImages}>
        <Image
          priority
          className={styles.userImage}
          src='/project-page/raycast/tomito-user-1.png'
          alt='Slack message stating the Tomito Controls extension made them a Tomito user'
          width={882}
          height={136}
        />
        <Image
          priority
          className={styles.userImage}
          src='/project-page/raycast/tomito-user-2.png'
          alt='Slack message stating the Tomito app and extension work smoothly together'
          width={475}
          height={113}
        />
      </div>

      {/* <h2 className={styles.h2}>Stay tuned for the next extension...</h2> */}

      {/* <div className={clsx(styles.slideshow, styles.breakGrid)}>
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
      </div> */}
      <span className={styles.nextProject}>
        <Link href={slug}>Check out another project</Link>
        <ChevronRight size={14} style={{ display: 'inline' }} />
      </span>
    </div>
  );
}
