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
      <h1 className={styles.introHeading}>
        Hello there, I&apos;m <span className={styles.emphasize}>Elyse</span>
        —a frontend developer who made a mid-career transition from film and
        creative brand design. But more than that, I am a{' '}
        <span className={styles.emphasize}>lifelong learner</span>.
      </h1>
      <div className={styles.introBody}>
        <p className={styles.introParagraph}>
          I have spent the past decade+ working across nearly every area of a
          fast-growing tech company. My roles included collaborative,
          cross-functional partnership and required me to deeply understand my
          colleagues&apos; goals and business needs. I look forward to bringing
          this experience and ethos of design thinking to the discipline of
          software development.
        </p>
        <p className={styles.introParagraph}>
          While I&apos;m a formally trained filmmaker, I am a wild-built
          <Footnote>
            This is a reference to an excellent sci-fi novella called &lsquo;A
            Psalm for the Wild-Built&rsquo; by Becky Chambers, in which she
            describes a &lsquo;wild-built&rsquo; robot who was put together from
            pieces of the robots who came before it.
          </Footnote>{' '}
          developer. I&apos;ve learned from previous career experience, online
          education resources, and a lot of trial and error. I&apos;m also lucky
          to have a network of incredibly talented and generous colleagues to
          tap into. I&apos;m proud of what I have accomplished so far, and I am
          ready to join a team that I can learn from and grow with.
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
