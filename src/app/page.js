import Image from 'next/image';
import clsx from 'clsx';
import {
  SquareDashedBottomCode,
  FileJson2,
  Framer,
  Braces,
  Paintbrush2,
  PocketKnife,
} from 'lucide-react';

import { PROJECT_DETAILS } from '@/constants';

import Hero from '@/components/Hero/';
import SocialIconLink from '@/components/SocialIconLink';
import ProjectGalleryTile from '@/components/ProjectGalleryTile';
import List from '@/components/List';
import Footnote from '@/components/Footnote';

import styles from './page.module.css';

export default function Home() {
  const { abstracts } = PROJECT_DETAILS;

  return (
    <main className={styles.gridWrapper}>
      <Hero className={styles.canvas}></Hero>
      <div className={styles.introWrapper}>
        <h1 className={styles.introHeading}>
          Hello there, I&apos;m <span className={styles.emphasize}>Elyse</span>.
          I help brands tell their story.{' '}
        </h1>
        {/* <p className={styles.elyseIllo}> */}{' '}
        <Image
          src='/elyse-illo.png'
          alt='A Notion Faces illustration of Elyse'
          width={100}
          height={100}
        />
        {/* </p> */}
      </div>

      <div className={styles.introBody}>
        <p className={styles.introParagraph}>
          Movies were my first love, and video continues to be the storytelling
          medium that comes most naturally to me. But I&apos;m also addicted to
          learning, and throughout my career, I&apos;ve had the opportunity to
          expand my competency to things like print media, OOH campaigns, and
          live events. I&apos;ve been lucky enough to travel for my work, and
          have even won some awards.
        </p>
        <p className={styles.introParagraph}>
          On this site, you&apos;ll find a curated collection of videos that
          I&apos;ve worked on—either behind or in front of the camera (sometimes
          both). You&apos;ll also find my dabblings in frontend software
          development (see earlier learning addiction). I used these frontend
          skills to build the very site you&apos;re browsing right now.
        </p>
      </div>
      <div className={styles.socialIconLinks}>
        <SocialIconLink platform='Linkedin' />
        {/* <SocialIconLink platform='GitHub' /> */}
      </div>
      {/* <h2 className={styles.h2}>
        Here are some of my most meaningful projects
      </h2> */}
      {/* <div className={styles.projectsWrapper}>
        {abstracts.map(
          ({
            title,
            blurb,
            cta,
            images,
            alt,
            slug,
            featured,
            comingSoon,
            priority,
          }) => (
            <ProjectGalleryTile
              key={slug}
              title={title}
              cta={cta}
              imageOptions={images}
              altText={alt}
              slug={slug}
              featured={featured}
              comingSoon={comingSoon}
              priority={priority}
            >
              {blurb}
            </ProjectGalleryTile>
          )
        )}
      </div> */}
      <h2 className={clsx(styles.h2, styles.listHeader)}>
        This site is built with:
      </h2>
      <List className={styles.listWrapper}>
        <li className={styles.listItem}>
          <SquareDashedBottomCode
            className={styles.listIcon}
            size={16}
            strokeWidth={1.5}
            // style={{ display: 'inline' }}
          />
          <span>React</span>
        </li>
        <li className={styles.listItem}>
          <FileJson2
            className={styles.listIcon}
            size={16}
            strokeWidth={1.5}
            // style={{ display: 'inline' }}
          />
          <span>Next.js</span>
        </li>
        <li className={styles.listItem}>
          <Braces
            className={styles.listIcon}
            size={16}
            strokeWidth={1.5}
            // style={{ display: 'inline' }}
          />
          CSS Modules
        </li>
        <li className={styles.listItem}>
          <Framer
            className={styles.listIcon}
            size={16}
            strokeWidth={1.5}
            // style={{ display: 'inline' }}
          />
          <span>
            Framer Motion
            <Footnote>
              For the logo animation. Otherwise, I used basic CSS transforms,
              transitions, and keyframes.
            </Footnote>
          </span>
        </li>

        <li className={styles.listItem}>
          <Paintbrush2
            className={styles.listIcon}
            size={16}
            strokeWidth={1.5}
            // style={{ display: 'inline' }}
          />
          <span>HTML Canvas</span>
        </li>
        <li className={styles.listItem}>
          <PocketKnife
            className={styles.listIcon}
            size={16}
            strokeWidth={1.5}
            // style={{ display: 'inline' }}
          />
          <span>
            Radix UI
            <Footnote class={styles.footnote}>
              For accessible extras like this popover
            </Footnote>
          </span>
        </li>
      </List>
    </main>
  );
}
