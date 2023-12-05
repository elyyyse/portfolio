import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ChevronRight } from 'lucide-react';

import styles from './ProjectGalleryTile.module.css';

function ProjectGalleryTile({
  title,
  children,
  cta,
  imageOptions,
  altText,
  slug = '/',
  featured = false,
  comingSoon = false,
  priority = false,
}) {
  const linkContainerClass = comingSoon
    ? `${styles.link} ${styles.comingSoon}`
    : `${styles.link}`;

  const thumbnailState = featured ? `${styles.featured}` : `${styles.standard}`;
  // || comingSoon

  return (
    <Link
      className={linkContainerClass}
      href={slug}
      style={comingSoon ? { pointerEvents: 'none' } : undefined}
    >
      <div className={thumbnailState}>
        {imageOptions.wide && (
          <div className={styles.wideThumbnail}>
            <Image
              src={imageOptions.wide}
              alt={altText}
              width={1440}
              height={480}
              priority={priority}
            />
          </div>
        )}
        {imageOptions.reg && (
          <div className={styles.regThumbnail}>
            <Image
              src={imageOptions.reg}
              alt={altText}
              width={1440}
              height={960}
              priority={priority}
            />
          </div>
        )}

        <div className={styles.textWrapper}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectBlurb}>{children}</p>
          {!comingSoon && (
            <p className={styles.cta}>
              {cta}{' '}
              <ChevronRight
                size={10}
                strokeWidth={1.5}
                style={{ display: 'inline' }}
              />
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProjectGalleryTile;
