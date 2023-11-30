import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ProjectGalleryTile.module.css';

function ProjectGalleryTile({
  title,
  children,
  cta,
  imageSrc,
  altText,
  slug = '/',
  featured = false,
  comingSoon = false,
}) {
  const linkContainerClass = comingSoon
    ? `${styles.link} ${styles.comingSoon}`
    : `${styles.link}`;

  const imageWidthClass =
    featured || comingSoon
      ? `${styles.wideThumbnail}`
      : `${styles.regThumbnail}`;

  return (
    <Link
      className={linkContainerClass}
      href={slug}
      style={comingSoon ? { pointerEvents: 'none' } : undefined}
    >
      <div className={imageWidthClass}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={altText}
            width={featured || comingSoon ? 650 : 300}
            height={216}
          />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectBlurb}>{children}</p>
          {!comingSoon && <p className={styles.cta}>{cta} &gt;</p>}
        </div>
      </div>
    </Link>
  );
}

export default ProjectGalleryTile;
