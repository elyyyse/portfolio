import React from 'react';
import Link from 'next/link';

import styles from './ProjectGalleryTile.module.css';

function ProjectGalleryTile({ title, blurb, image }) {
  return (
    <div>
      <div className={styles.imageWrapper}>{image}IMAGE GOES HERE</div>
      <h3>{title}</h3>
      <p>{blurb}</p>
      {/* <Link>Learn more</Link> */}
    </div>
  );
}

export default ProjectGalleryTile;
