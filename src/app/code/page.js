import { PROJECT_DETAILS } from '@/constants';

import ProjectGalleryTile from '@/components/ProjectGalleryTile';

import styles from './code.module.css';

// export const metadata = {
//   title: 'Code • Elyse Kanagaratnam',
// };

export default function Code() {
  const { abstracts } = PROJECT_DETAILS;
  return (
    <div className={styles.gridWrapper}>
      <h1 className={styles.h1}>Frontend Projects</h1>
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
    </div>
  );
}
