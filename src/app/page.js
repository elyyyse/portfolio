import Link from 'next/link';
import {
  SquareDashedBottomCode,
  FileJson2,
  Framer,
  Braces,
  Paintbrush2,
  PocketKnife,
  Feather,
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
      <h1 className={styles.introHeading}>
        Hello there, I&apos;m <span className={styles.emphasize}>Elyse</span>
        —a frontend developer who made a mid-career transition from filmmaking
        and creative brand design. But more than that, I am a{' '}
        <span className={styles.emphasize}>lifelong learner</span>.
      </h1>
      <div className={styles.introBody}>
        <p className={styles.introParagraph}>
          While I&apos;m a formally trained filmmaker, I am a wild-built
          <Footnote>
            This is a reference to an excellent sci-fi novella called{' '}
            <Link
              href='https://www.goodreads.com/book/show/40864002-a-psalm-for-the-wild-built'
              target='_blank'
            >
              &lsquo;A Psalm for the Wild-Built&rsquo; by Becky Chambers
            </Link>
            . I could also say I&apos;m &lsquo;self-taught&rsquo;, but that
            feels insufficient when I consider the countless documentation
            writers, tutorial makers, bloggers, and forum contributors I&apos;ve
            learned from.
          </Footnote>{' '}
          developer. I&apos;ve learned from previous career experience, online
          education resources, and a lot of trial and error. I am also lucky
          enough to have a vast network of incredibly talented and generous
          colleagues to tap into.
        </p>

        <p className={styles.introParagraph}>
          In the world of media,{' '}
          <span className={styles.emphasize}>representation</span> is
          everything. Sharing stories is a fundamental part of what makes us
          human, and it&apos;s imperative that we hear perspectives from as many
          people as possible. The best parallel I&apos;ve found in software is{' '}
          <span className={styles.emphasize}>accessibility</span>. It&apos;s a
          difficult subject to nail down, but I aim to learn as much I can, so I
          can make products for as many people as possible.
        </p>
      </div>
      <div className={styles.socialIconLinks}>
        <SocialIconLink platform='Linkedin' />
        <SocialIconLink platform='GitHub' />
      </div>
      <h2 className={styles.h2}>
        Here are some things I&apos;ve been working on
      </h2>
      <div className={styles.projectsWrapper}>
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
      </div>
      <h2 className={`${styles.h2} ${styles.listHeader}`}>
        This portfolio site is built with:
      </h2>
      <List role='list'>
        <div className={styles.listWrapper}>
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
            <span>Framer Motion</span>
            <Footnote>
              For the logo animation. Otherwise, I used basic CSS transforms,
              transitions, and keyframes.
            </Footnote>
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
            <span>Radix UI</span>
            <Footnote class={styles.footnote}>
              For accessible extras like this popover
            </Footnote>
          </li>
        </div>
      </List>
    </main>
  );
}