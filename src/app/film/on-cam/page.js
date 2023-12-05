import Video from '@/components/Video';

import styles from './on-cam.module.css';

export const metadata = {
  title: 'Film • Elyse Kanagaratnam',
};

export default function OnCamera() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.h1}>On camera work</h1>
      <h2 className={styles.h2}>
        I wouldn&apos;t exactly call myself an actor, but I have had a few
        opportunities in my career to play on camera, on stage, and in sound
        booths.
      </h2>

      <div className={styles.onScreen}>
        <h2 className={styles.sectionHeader}>
          Featured actor in a series of digital ads for a global campaign
        </h2>
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/773101276?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='CXA - Robot'
        />
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/890724503?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='CXA - Stagnant'
        />
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/890725377?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='CXA - Data'
        />
      </div>

      <div className={styles.voiceovers}>
        <h2 className={styles.sectionHeader}>
          Voiceover work—one feature and one ensemble
        </h2>
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/890729847?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='Service Solution'
        />
        <Video
          className={styles.video}
          videoSrc='https://player.vimeo.com/video/890730175?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          title='Zendesk for Work'
        />
      </div>
    </div>
  );
}
