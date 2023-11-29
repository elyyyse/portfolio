import Link from 'next/link';

import Hero from '@/components/Hero';
import SocialIconLink from '@/components/SocialIconLink';
import ProjectGalleryTile from '@/components/ProjectGalleryTile';
import List from '@/components/List';
import Footnote from '@/components/Footnote';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.gridWrapper}>
      <Hero className={styles.fullBleed}></Hero>
      <h1 className={styles.introHeading}>
        Hello there, I&apos;m <span className={styles.emphasize}>Elyse</span>
        —a frontend developer who made a mid-career transition from filmmaking
        and creative brand design. But more than that, I am a{' '}
        <span className={styles.emphasize}>lifelong learner</span>.
      </h1>
      <div className={styles.introBody}>
        <p className={styles.introParagraph}>
          While I&apos;m a classically trained filmmaker, I am a wild-built
          <Footnote>
            This is a reference to an excellent sci-fi novella called{' '}
            <Link
              href='https://www.goodreads.com/book/show/40864002-a-psalm-for-the-wild-built'
              target='_blank'
            >
              &lsquo;A Psalm for the Wild-Built&rsquo; by Becky Chambers
            </Link>
            .
          </Footnote>{' '}
          developer. I&apos;ve learned from previous career experience, online
          education resources, and a lot of trial and error. I have also been
          lucky enough to tap into my vast network of incredibly talented and
          generous colleagues.
        </p>

        <p className={styles.introParagraph}>
          In the world of film, representation is everything. Sharing stories is
          a fundamental part of what makes us human, and it&apos;s imperative
          that we hear perspectives from as many people as possible. The best
          parallel I&apos;ve found in software is accessibility. It&apos;s a
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
        <ProjectGalleryTile
          title='Frontend Todo App'
          cta='Learn more'
          imageSrc='/todo-app.jpg'
          altText='Todo app thumbnail showing a list of todos in night and day modes'
          slug='/code/todo-app'
        >
          A todo web application that uses local browser storage. Features
          include drag-and-drop task reordering and day/night modes.
        </ProjectGalleryTile>
        <ProjectGalleryTile
          title='Age Calculator'
          cta='Learn more'
          imageSrc='/age-calc-app.jpg'
          altText='Age calculator thumbnail showing the empty load state'
          slug='/code/age-calc'
        >
          An app that calculates the user&apos;s age in years, months, and days.
        </ProjectGalleryTile>
        <ProjectGalleryTile
          featured
          title='Really Cool Project'
          cta='Check it out'
          imageSrc='/coming-soon.png'
          altText=''
          slug='/code/dope-project'
        >
          A project I am really proud of
        </ProjectGalleryTile>
        <ProjectGalleryTile
          title='Random Advice Generator'
          cta='Get some advice'
          imageSrc='/advice-app.jpg'
          altText="Advice app thumbnail that says 'If you don't want something to be public, don't post it on the internet.'"
          slug='/code/age-calc'
        >
          A silly app that generates a random piece of advice from an API called
          &lsquo;Advice Slip&rsquo;.
        </ProjectGalleryTile>
        <ProjectGalleryTile
          title='Rainbow Canvas'
          cta='Read about...'
          imageSrc='/rainbow-canvas.png'
          altText='A rectangular grid of dots in the colors of the rainbow'
          slug='rainbow'
        ></ProjectGalleryTile>
        <ProjectGalleryTile
          comingSoon
          title='Tell Me More'
          imageSrc='/coming-soon.png'
          altText=''
        >
          A thing I&apos;m working on, but it isn&apos;t ready yet
        </ProjectGalleryTile>
      </div>
      <h2 className={styles.h2}>
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
            <li>Framer Motion</li>
            <li>CSS Modules</li>
            <li>HTML Canvas, CSS Grid and Flexbox ??</li>
            <li>Material UI — for accessible extras like tooltips</li>
            {/* <li>react-feather and lucide-react</li> */}
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
