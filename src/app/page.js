import Link from 'next/link';

import Hero from '@/components/Hero';
import SocialIconLink from '@/components/SocialIconLink';
import ProjectGalleryTile from '@/components/ProjectGalleryTile';
import FeaturedProject from '@/components/FeaturedProject';
import List from '@/components/List';
import Footnote from '@/components/Footnote';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.gridWrapper}>
      <Hero className={styles.fullBleed}></Hero>
      <h1 className={styles.intro}>
        Hello there, I&apos;m <span className={styles.firstName}>Elyse</span>
        —a frontend developer who made a mid-career transition from filmmaking
        and creative brand design. But more than that, I am a{' '}
        <span className={styles.firstName}>lifelong learner</span>.
      </h1>

      <p>
        While I&apos;m a classically trained filmmaker, I am a wild-built
        <Footnote>
          This is a reference to an excellent sci-fi novella called{' '}
          <Link
            href='https://www.goodreads.com/book/show/40864002-a-psalm-for-the-wild-built'
            target='_blank'
          >
            &quot;A Psalm for the Wild-Built&quot; by Becky Chambers
          </Link>
          .
        </Footnote>{' '}
        developer. I&apos;ve learned from previous career experience, online
        education resources, and a lot of trial and error. I have also been
        lucky enough to tap into my vast network of incredibly talented and
        generous colleagues. Quo cu ponderum intellegebat, ut amet purto pro,
        his at viderer detraxit. Cu postea eleifend sed. Modo atqui comprehensam
        sed no, nec diceret consequuntur no. Scriptorem eloquentiam no quo.
        Nobis partem singulis mea cu. Eum at sonet libris constituam, ex nec
        assum molestie, qui et sumo consulatu disputationi. If this sentence was
        longer, what would happen?
      </p>

      <div className={styles.socialIconLinks}>
        <SocialIconLink platform='Linkedin' />
        <SocialIconLink platform='GitHub' />
      </div>
      <h2>Here are some things I&apos;ve been working on</h2>
      <div className={styles.projectsWrapper}>
        <ProjectGalleryTile />
        <ProjectGalleryTile />
        <ProjectGalleryTile />
        <FeaturedProject />
      </div>
      <h2>
        A list of lists<Footnote>I like lists</Footnote>
      </h2>
      <div className={styles.listsWrapper}>
        <div className={styles.listContainer}>
          <h3 className={styles.listHeader}>
            This portfolio site is built with:
          </h3>
          <List>
            <li>React</li>
            <li>Next</li>
            <li>CSS Modules</li>
            <li>CSS Grid and Flexbox</li>
            <li>Material UI — for accessible extras like tooltips</li>
            <li>react-feather and lucide-react</li>
          </List>
        </div>
        <div className={styles.listContainer}>
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
    </main>
  );
}
