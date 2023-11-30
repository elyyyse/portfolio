import Image from 'next/image';
import Link from 'next/link';

import List from '@/components/List';

export default function About() {
  return (
    <>
      <h1>
        Hi, I&apos;m Elyse - a creative director and filmmaker based in the San
        Francisco Bay Area.
      </h1>
      <p>
        But regardless of medium, I&apos;m a storyteller first. Sharing stories
        is a fundamental part of what makes us human. The stories we choose to
        tell and listen to shape the world around us. My work has been
        recognized by the Shorty Awards, the Webby Awards, and the Brand Film
        Awards, and has been featured in festivals worldwide. I currently work
        full-time at Zendesk where I lead a team of designers, writers,
        animators, video editors, sound designers, photographers, CGI artists,
        and producers.
      </p>
      <p>
        I am a theatre enthusiast. A rochambeau champion (now retired). A
        reader, a walker, and a climber. I&apos;d love to hear from you.
      </p>
      <Image
        src='/_G4A0892.jpg'
        width={500}
        height={334}
        alt='Painting of the portfolio author'
      />
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
    </>
  );
}
