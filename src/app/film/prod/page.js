import Link from 'next/link';
import clsx from 'clsx';

import Video from '@/components/Video';
import Footnote from '@/components/Footnote';

import styles from './prod.module.css';

export const metadata = {
  title: 'Film • Elyse Kanagaratnam',
};

export default function FilmProduction() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.h1}>Stories about helpful people</h1>
      <h2 className={styles.h2}>
        A documentary brand storytelling series.{' '}
        <span className={styles.seriesTitle}>Stories about helpful people</span>{' '}
        won a Shorty Award for Best Branded Series and was awarded Best in
        Episodic at TribecaX
        <Footnote>
          The series was also nominated for 2 Webbys for Best Branded Editorial
          Experience and Corporate Social Responsibility.
        </Footnote>
        . This work has been featured at festivals, including AFI Docs,
        UnLonely, Mountainfilm, Calgary Intl and has screened as part of Meet
        the Press Film Festival on MSNBC.
      </h2>
      <div className={`${styles.videoWrapper} ${styles.helpfulPeeps}`}>
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/714807345?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='Eric and the Bees'
        />
        <div className={styles.textWrapper}>
          <h2>Eric and the Bees</h2>
          <p>Winner Shorty Award 2021 | Best use of Long Form Video</p>{' '}
          <p>Nominee Brand Film Award 2021 | Best in direction</p>
          <p>Vimeo Staff Pick</p>
          <p className={clsx(styles.credits, styles.creditsStart)}>
            Directed by Erin Brethauer and Tim Hussin
          </p>
          <p className={styles.credits}>
            A co-production of Zendesk and Even/Odd
          </p>
          <p className={styles.credits}>
            My role: Creative direction and story development
          </p>
        </div>
      </div>

      <div className={clsx(styles.videoWrapper, styles.helpfulPeeps)}>
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/714809176?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='Golden Age Karate'
        />
        <div className={styles.textWrapper}>
          <h2>Golden Age Karate</h2>
          <p>Winner Brand Film Award 2021 | Best in animation</p>
          <p>Nominee Brand Film Award 2021 | Best in purpose</p>
          <p>
            Awarded Vimeo{' '}
            <Link
              href='https://vimeo.com/blog/post/golden-age-karate-by-sindha-agha-zendesk/'
              target='_blank'
            >
              Staff Picks Premiere
            </Link>{' '}
            and Best of the Year
          </p>
          <p>Honoree at Webby Awards 2021</p>
          <p className={clsx(styles.credits, styles.creditsStart)}>
            Directed by Sinha Agha
          </p>
          <p className={styles.credits}>
            A co-production of Zendesk and Even/Odd
          </p>
          <p className={styles.credits}>
            My role: Creative direction and story development
          </p>
        </div>
      </div>

      <h2 className={styles.sectionHeader}>Product videos</h2>
      <h3 className={styles.sectionBlurb}>
        Commercials and explainers about software products. These were designed
        to live on company websites, to screen at product launch events, and for
        YouTube pre-roll.
      </h3>

      <div className={clsx(styles.videoWrapper, styles.productVids)}>
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/714793396?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='Zendesk Sales'
        />
        <div className={styles.textWrapper}>
          <h2>Zendesk Sales</h2>
          <h3 className={styles.h3}>
            A commercial for a new product offering by Zendesk
          </h3>
          <div className={styles.credits}>
            <p>Written, directed, and edited by Elyse Kanagaratnam</p>
            <p>Co-directed and co-edited by Victor Duran</p>
            <p>Co-written by Raven Wadley-Wright</p>
            <p>Cinematography by Kevin Cline</p>
            <p>Art direction and design by Claire Moore</p>
            <p>Motion graphics by Tori Cincotta</p>
            <p>Sound by Daniel Petersen</p>
            <p>Produced by Celeste Olds</p>
            <p>
              Additional credits: Mary Elizabeth Cobb, Harvey Gold, Monica Yap,
              MacKenzie Covington, Paulie Anne Duke, Brenda Moreno, Kalyn
              Slaughter
            </p>
          </div>
        </div>
      </div>

      <div className={clsx(styles.videoWrapper, styles.productVids)}>
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/715447089?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='Zendesk Gather'
        />
        <div className={styles.textWrapper}>
          <h2>Zendesk Gather</h2>
          <h3 className={styles.h3}>
            A product explainer video showcasing the business value of Zendesk
            Gather.
          </h3>
          <div className={styles.credits}>
            <p>
              Written and directed by Elyse Kanagaratnam
              <Footnote>
                Psst—I&apos;m the one in the denim button down and khakis
              </Footnote>{' '}
              and Kevin Cline
            </p>
            <p>Edited by Elyse Kanagaratnam and Victor Duran</p>
            <p>Art direction and design by Eve Spears</p>
            <p>Motion graphics by Tori Cincotta and Zach Youse</p>
            <p>Sound by Daniel Petersen</p>
            <p>Produced by Vanessa Avery and Monica Yap</p>
            <p>
              Additional credits: Danger Charles, Matthew Stouppe, Clayton
              Smith, Brenda Moreno, Matt Wauhkonen, Fred Bové, Finley-Ray Cline,
              Dave Dyson, Colin Thomas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
